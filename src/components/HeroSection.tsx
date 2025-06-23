"use client";

import React, { useEffect, useRef, useState } from "react";
import EmblaAutoScrollCarousel from "./AutoScrollEmblaCaurosel/js/EmblaCaurosel";
import { EmblaOptionsType } from "embla-carousel";
import Header from "./AutoScrollEmblaCaurosel/js/Header";
import { FaWhatsapp } from "react-icons/fa";

import { slides } from "./AutoScrollEmblaCaurosel/js/SlideData";
import "./AutoScrollEmblaCaurosel/css/base.css";
import "./AutoScrollEmblaCaurosel/css/sandbox.css";
import "./AutoScrollEmblaCaurosel/css/embla.css";
import { AnimatedTestimonials } from "./ui/animated-testimonials";

const testimonials = [
  {
    quote:
      "Cada sessão é um mergulho profundo na estética do cliente. Através da minha lente, quero que cada pessoa se veja como arte.",
    name: "Luiza Amaral",
    designation: "Fotógrafa de moda editorial e minimalismo contemporâneo",
    src: "/photographers/photographer2.webp",
  },
  {
    quote:
      "Busco capturar não só o estilo, mas a energia de quem está diante da câmera. A moda é o que veste, mas a alma é o que preenche.",
    name: "Bruno Neves",
    designation: "Fotógrafo de retratos expressivos e luz natural",
    src: "/photographers/photographer1.webp",
  },
  {
    quote:
      "Minha fotografia gira em torno do movimento e da fluidez. Trabalho com o corpo em ação, revelando histórias através do gesto.",
    name: "Mathias Duarte",
    designation: "Fotógrafo de moda performática e dança",
    src: "/photographers/photographer3.webp",
  },
  {
    quote:
      "Acredito no impacto do contraste. Meus ensaios exploram o urbano, o brilho do asfalto e a estética crua das ruas.",
    name: "Cael dos Santos",
    designation: "Fotógrafo de moda urbana e estética industrial",
    src: "/photographers/photographer4.webp",
  },
  {
    quote:
      "Meu foco é revelar o luxo do silêncio. Trabalho com paletas suaves e composições sutis, onde menos sempre diz mais.",
    name: "Pedro Nunes",
    designation: "Fotógrafo de alta moda e estética soft luxury",
    src: "/photographers/photographer5.webp",
  },
];

const OPTIONS: EmblaOptionsType = { loop: true };
// const SLIDE_COUNT = 8;
// const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

function HeroSection() {
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
    <div className="HeroSection">
      <div className="w-full sm:h-8 md:h-12 lg:h-18 xl:h-25">
        <svg
          className="block w-full"
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 43.9999C106.667 43.9999 213.333 7.99994 320 7.99994C426.667 7.99994 533.333 43.9999 640 43.9999C746.667 43.9999 853.333 7.99994 960 7.99994C1066.67 7.99994 1173.33 43.9999 1280 43.9999C1386.67 43.9999 1440 19.0266 1440 9.01329V100H0V43.9999Z"
            className="fill-current text-[#512e5c]"
          ></path>
        </svg>
      </div>

      <div
        className="relative min-h-screen w-full bg-cover bg-center z-0 "
        style={{
          backgroundImage: `url("/bgs/heroBG.webp")`,
        }}
      >
        {/* Overlay de cor */}

        <div className="absolute inset-0 bg-[#250E2D]/70" />

        {/* Gradiente no topo */}
        <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-[#512e5c] via-[#441a52]/60 to-[#250E2D]/0" />

        {/* Bloco animado visível ao rolar */}
        <div
          ref={sectionRef}
          className={`transitionBlock transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } z-20`}
        >
          {/* Conteúdo central */}
          <div className="relative lg:p-20 px-20 pt-15 text-white flex flex-col text-center space-y-5 z-30">
            <h1 className="text-7xl font-bold">Conheça a Halyn Lens</h1>
            <p className="text-3xl">A marca de fotografia perfeita para você</p>
          </div>

          {/* Bloco de informações e testimonials */}
          <div className="flex flex-col-reverse lg:flex-row min-h-[30em] w-full pt-10 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 justify-evenly gap-5 mb-20 z-30">
            <div className="text-white space-y-6 sm:space-y-14 text-center sm:text-left">
              <h1 className="text-5xl max-w-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Se expresse por meio da fotografia
              </h1>
              <p className="text-xl md:text-3xl text-white w-full max-w-5xl lg:max-w-4xl">
                Nossa missão é transmitir sentimentos através de cliques,
                entendendo seu estilo e gênero favorito. Os fotógrafos da Halyn
                Lens possuem gêneros de fotografia distintos, justamente para
                que qualquer cliente encontre sua lente ideal.
              </p>

              <a
                href="#"
                title=""
                className="inline-flex items-center px-7 py-3 text-2xl font-bold text-white transition-all duration-200 sm:mt-0 bg-[#b89554] hover:bg-[#f5ba43ca] border border-transparent rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 font-pj justif-center"
                role="button"
              >
                Faça seu orçamento online
                <FaWhatsapp className="text-gold w-13 h-13 ml-5" />
              </a>
            </div>

            {/* Testimonials animados */}
            <div className="h-full  z-40">
              <AnimatedTestimonials testimonials={testimonials} />
            </div>
          </div>

          {/* Bloco de ícones e carrossel */}
          <div className="flex justify-center items-center mb-0 z-20">
            <div className="w-screen sm:w-full max-w-[110rem] bg-white flex flex-col items-center justify-center rounded-t-2xl z-20">
              <div className="w-full flex flex-col items-start pt-0 rounded-t-2xl z-20 w-full">
                <div className="flex flex-col md:flex-row justify-between w-full gap-12 mb-15  p-15">
                  {/* Bloco 1 */}
                  <div className="flex-1 text-center pt-4">
                    <div className="text-4xl mb-4">🎯</div>
                    <h3 className="text-3xl font-semibold pb-10">
                      Fotografia com propósito
                    </h3>
                    <p className="text-gray-600 text-2xl">
                      Cada imagem é pensada para transmitir a essência de quem
                      você é. A Halyn Lens acredita que sua identidade visual é
                      seu maior ativo.
                    </p>
                  </div>

                  {/* Bloco 2 */}
                  <div className="flex-1 text-center pt-4">
                    <div className="text-4xl mb-4">🧠</div>
                    <h3 className="text-3xl font-semibold pb-10">
                      Diversidade de estilos criativos
                    </h3>
                    <p className="text-gray-600 text-2xl">
                      Encontre o fotógrafo ideal para o seu projeto. Temos
                      profissionais com linguagens únicas para diferentes
                      expressões visuais.
                    </p>
                  </div>

                  {/* Bloco 3 */}
                  <div className="flex-1 text-center pt-4">
                    <div className="text-4xl mb-4">🤝</div>
                    <h3 className="text-3xl font-semibold pb-10">
                      Processos claros e humanizados
                    </h3>
                    <p className="text-gray-600 text-2xl">
                      Do orçamento ao clique final, você participa ativamente.
                      Transparência, escuta e sensibilidade são partes do nosso
                      processo.
                    </p>
                  </div>
                </div>

                {/* Carrossel infinito */}
                <div className="infiniteCaurosel flex flex-col justify-center items-center w-full z-30 xl:mt-[-3rem] mt-[-7rem]">
                  <Header />
                  <div className="w-full">
                    <EmblaAutoScrollCarousel
                      slides={slides}
                      options={OPTIONS}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
