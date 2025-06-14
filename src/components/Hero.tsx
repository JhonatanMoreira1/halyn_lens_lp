"use client";

import React from "react";

import EmblaCarousel from "@/components/EmblaCaurosel/js/EmblaCarousel";
import { slides } from "@/components/EmblaCaurosel/js/SlideData";
import { EmblaOptionsType } from "embla-carousel";
import Image from "next/image";

const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };

function Hero() {
  return (
    <div className="relative bg-gray-50 min-h-[75vh]">
      <div className="absolute bottom-0 right-0 overflow-hidden lg:inset-y-0">
        <Image
          className="w-auto h-full"
          src="https://d33wubrfki0l68.cloudfront.net/1e0fc04f38f5896d10ff66824a62e466839567f8/699b5/images/hero/3/background-pattern.png"
          width={1400}
          height={1400}
          alt=""
        />
      </div>

      <section className="relative py-12 sm:py-16 lg:pt-20 lg:pb-36">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-[90em]">
          <div className="grid grid-cols-1 gap-y-8 lg:items-center lg:grid-cols-2 sm:gap-y-20 xl:grid-cols-5 gap-x-20">
            <div className="text-center xl:col-span-2 lg:text-left md:px-16 lg:px-0">
              <div className="max-w-sm mx-auto sm:max-w-md md:max-w-full">
                <h1 className="text-4xl  font-bold leading-tight text-gray-900 sm:text-6xl sm:leading-tight lg:text-8xl lg:leading-tight font-pj">
                  As lentes que refletem você
                </h1>

                <div className="mt-8 lg:mt-12 lg:flex lg:items-center">
                  <div className="flex justify-center flex-shrink-0 -space-x-4 overflow-hidden lg:justify-start">
                    <Image
                      width={56}
                      height={56}
                      className="inline-block rounded-full ring-2 ring-white"
                      src="https://d33wubrfki0l68.cloudfront.net/3bfa6da479d6b9188c58f2d9a8d33350290ee2ef/301f1/images/hero/3/avatar-male.png"
                      alt="Avatar de um desenvolvedor homem"
                    />
                    <Image
                      width={56}
                      height={56}
                      className="inline-block rounded-full ring-2 ring-white"
                      src="https://d33wubrfki0l68.cloudfront.net/b52fa09a115db3a80ceb2d52c275fadbf84cf8fc/7fd8a/images/hero/3/avatar-female-1.png"
                      alt="Avatar de uma desenvolvedora mulher"
                    />
                    <Image
                      width={56}
                      height={56}
                      className="inline-block rounded-full ring-2 ring-white"
                      src="https://d33wubrfki0l68.cloudfront.net/8a2efb13f103a5ae2909e244380d73087a9c2fc4/31ed6/images/hero/3/avatar-female-2.png"
                      alt="Avatar de outra desenvolvedora mulher"
                    />
                  </div>

                  <p className="mt-4 text-2xl text-gray-900 lg:mt-0 lg:ml-6 font-pj">
                    Faça como{" "}
                    <span className="font-bold">mais de 430 pessoas</span> e
                    tenha sua mensagem transmitida através de cliques
                  </p>
                </div>
              </div>

              <div className="mt-8 sm:flex sm:items-center sm:justify-center lg:justify-start sm:space-x-5 lg:mt-12">
                <a
                  href="#"
                  title=""
                  className="inline-flex items-center px-10 py-5 text-2xl font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 font-pj justif-center hover:bg-gray-600"
                  role="button"
                >
                  Galeria de imagens
                </a>

                <a
                  href="#"
                  title=""
                  className="inline-flex items-center px-8 py-5 mt-4 text-2xl font-bold transition-all duration-200 bg-transparent border border-transparent sm:mt-0 font-pj justify-center rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 hover:bg-gray-200 focus:bg-gray-200 shadow-md"
                  role="button"
                >
                  <svg
                    className="w-7 h-7 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.0"
                      d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"
                    ></path>
                  </svg>
                  Fale conosco
                </a>
              </div>
            </div>

            <div className="xl:col-span-3">
              <EmblaCarousel slides={slides} options={OPTIONS} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
