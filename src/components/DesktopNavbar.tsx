"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

function DesktopNavbar() {
  const router = useRouter();
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
      className={`fixed md:min-w-screen top-0 w-full z-50 transition-all duration-300 ease-out${
        scrolled
          ? "py-0 mb-0 bg-[#9e87ddb2] backdrop-blur-sm shadow-md"
          : "py-0 mb-0 bg-white shadow-md"
      }`}
    >
      <div className="mx-auto flex w-full items-center justify-between transition-all duration-300 ease-out">
        {/* Logo */}
        <Image
          src="/haylen-logo.png"
          alt="Logo"
          width={scrolled ? 100 : 150}
          height={scrolled ? 33 : 50}
          className="transition-all duration-300 ease-out ml-[10em] py-5 my-0"
          priority
        />

        {/* Links */}
        <div className="flex items-center gap-6 text-sm md:text-base transition-all duration-100 ease-out mr-15">
          <Button variant="link" asChild>
            <Link href="/">
              <span className="hidden lg:inline">Sobre</span>
            </Link>
          </Button>
          <Button variant="link" asChild>
            <Link href="/">
              <span className="hidden lg:inline">Serviços</span>
            </Link>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="link">Categorias</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => router.push("/pagina1")}>
                Estilo 1
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push("/pagina2")}>
                Estilo 2
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push("/pagina3")}>
                Estilo 3
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="link" asChild>
            <Link href="/">
              <span className="hidden lg:inline">Contato</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default DesktopNavbar;
