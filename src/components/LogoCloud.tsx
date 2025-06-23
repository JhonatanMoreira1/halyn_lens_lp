"use client";

import React, { useEffect, useRef, useState } from "react";

import Image from "next/image";

// Definindo o tipo para cada logo
type ClientLogo = {
  logo: string;
  alt: string;
};

const clientLogos: ClientLogo[] = [
  {
    logo: "/companies/osklen.png",
    alt: "Osklen",
  },
  {
    logo: "/companies/farm-rio.png",
    alt: "Farm Rio",
  },
  {
    logo: "/companies/animale.png",
    alt: "Animale",
  },
  {
    logo: "/companies/reserva.png",
    alt: "Reserva",
  },
  {
    logo: "/companies/globo.png",
    alt: "Globo",
  },
  {
    logo: "/companies/cea.png",
    alt: "C&A",
  },
  {
    logo: "/companies/oboticario.png",
    alt: "Oboticário",
  },
  {
    logo: "/companies/melissa.png",
    alt: "Melissa",
  },
  {
    logo: "/companies/natura.png",
    alt: "Natura",
  },
  {
    logo: "/companies/sebrae.png",
    alt: "Sebrae",
  },
  {
    logo: "/companies/adidas.png",
    alt: "Adidas",
  },
  {
    logo: "/companies/mash.png",
    alt: "Mash",
  },
  {
    logo: "/companies/supreme.png",
    alt: "Supreme",
  },
];

const LogoCloud: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // só anima uma vez
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <div
      ref={sectionRef}
      className={`transitionBlock transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } z-20`}
    >
      <section className="ezy__clients9 light py-14 lg:py-32 xl:py-44 xl:pb-55 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
        <div className="max-w-[110rem] mx-auto px-4 lg:px-12">
          <div className="grid grid-cols-12 md:items-end text-center gap-6 lg:gap-12">
            <div className="col-span-12 md:col-span-9 xl:col-span-10 mb-6 sm:mb-0 text-start">
              <div className="grid grid-cols-12">
                <div className="col-span-12 xl:col-span-10 2xl:col-span-12">
                  <h2 className="font-bold text-center text-[30px] lg:text-[44px] xl:text-[50px] xl:text-left lg:text-left leading-none mb-6">
                    Empresas que aprovam Halyn Lens
                  </h2>
                  <p className="text-xl text-center lg:text-2xl xl:text-3xl xl:text-left lg:text-left leading-relaxed opacity-70">
                    Grandes marcas confiam na Halyn Lens para traduzir estilo,
                    personalidade e autenticidade em imagens marcantes. Unimos
                    direção criativa, estética refinada e identidade visual para
                    criar fotografias que vendem, conectam e contam histórias
                    com propósito.
                  </p>
                </div>
              </div>
            </div>

            {clientLogos.map((client, i) => (
              <div
                className="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-2"
                key={i}
              >
                <div className="bg-slate-100 dark:bg-[#1E2735] rounded-lg h-full flex items-center justify-center p-4 lg:p-6 xl:p-8">
                  <div className="relative w-full max-w-[220px] sm:aspect-[4/1] md:aspect-[5/1] xl:aspect-[7/3] aspect-[6/1]">
                    <Image
                      src={client.logo}
                      alt={client.alt || `Logo ${i + 1}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LogoCloud;
