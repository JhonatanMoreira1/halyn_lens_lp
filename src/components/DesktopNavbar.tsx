"use client";

import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
import Image from "next/image";
// import { useRouter } from "next/navigation";
// import {
//   DropdownMenu,
//   DropdownMenuTrigger,
//   DropdownMenuContent,
//   DropdownMenuItem,
// } from "@/components/ui/dropdown-menu";

function DesktopNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed md:min-w-screen top-0 w-full z-50 transition-all duration-300 ease-out ${
        scrolled
          ? "bg-[#9e87ddb2] backdrop-blur-sm shadow-md h-20 md:h-20 lg:h-22"
          : "bg-white shadow-md sm:h-40 md:h-35 lg:h-35"
      }`}
      style={{ transformOrigin: "top center" }}
    >
      <header className="py-3 sm:py-4 md:py-6 w-full h-full overflow-hidden">
        <div className="px-4 sm:px-6 lg:px-8 mx-auto max-w-[80em] w-full h-full">
          <div className="flex items-center justify-between w-full h-full">
            <div className="flex flex-shrink-0 flex-row items-center space-x-3 flex-wrap">
              <Image
                width={scrolled ? 60 : 90}
                height={scrolled ? 20 : 30}
                className="transition-all duration-300 ease-out max-w-full h-auto"
                src={"/logos/halyn-logo.png"}
                alt=""
              />
              <h1 className="font-cormorant italic text-4xl sm:text-6xl font-bold text-black">
                Halyn Lens
              </h1>
            </div>

            <div className="flex lg:hidden">
              <button type="button" className="text-gray-900">
                <svg
                  className="w-9 h-9 mr-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>

            <div className="hidden lg:flex lg:ml-16 lg:items-center lg:justify-center lg:space-x-10">
              <div className="flex items-center space-x-12">
                <a
                  href="#"
                  title=""
                  className="text-2xl font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                >
                  {" "}
                  Sobre{" "}
                </a>

                <a
                  href="#"
                  title=""
                  className="text-2xl font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                >
                  {" "}
                  Unidades{" "}
                </a>

                <a
                  href="#"
                  title=""
                  className="text-2xl font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                >
                  {" "}
                  Ajuda{" "}
                </a>
              </div>

              <div className="w-px h-5 bg-gray-300"></div>

              <a
                href="#"
                title=""
                className="text-2xl font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                {" "}
                Serviços{" "}
              </a>

              <a
                href="#"
                title=""
                className="px-5 py-2 text-2xl font-semibold leading-7 text-gray-900 transition-all duration-200 bg-transparent border border-gray-900 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white"
                role="button"
              >
                Entre em contato
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default DesktopNavbar;
