"use client";

import React, { useEffect, useRef, useState } from "react";
import EmblaAutoScrollCarousel from "./AutoScrollEmblaCaurosel/js/EmblaCaurosel";
import { EmblaOptionsType } from "embla-carousel";
import Header from "./AutoScrollEmblaCaurosel/js/Header";
import {
  FaBullseye,
  FaPalette,
  FaPeopleCarry,
  FaWhatsapp,
} from "react-icons/fa";

import { slides } from "./AutoScrollEmblaCaurosel/js/SlideData";
import "./AutoScrollEmblaCaurosel/css/base.css";
import "./AutoScrollEmblaCaurosel/css/sandbox.css";
import "./AutoScrollEmblaCaurosel/css/embla.css";
import { AnimatedTestimonials } from "./ui/animated-testimonials";

const testimonials = [
  {
    quote:
      "Busco revelar a sofisticação na simplicidade. Minha fotografia é um espaço onde a forma limpa e o olhar intenso convivem com elegância.",
    name: "Luiza Amaral",
    designation: "Moda editorial minimalista e retratos conceituais",
    src: "/photographers/photographer2.webp",
    link: "https://unsplash.com/pt-br/@luizaamaral/cole%C3%A7%C3%B5es",
  },
  {
    quote:
      "Cada rosto tem uma narrativa oculta. Meu trabalho é iluminar essa verdade através da espontaneidade e da luz natural.",
    name: "Bruno Neves",
    designation: "Retratos sensíveis em luz natural e storytelling visual",
    src: "/photographers/photographer1.webp",
    link: "https://unsplash.com/pt-br/@brunoneves/cole%C3%A7%C3%B5es",
  },
  {
    quote:
      "A beleza do movimento é a essência do meu olhar. Meu foco está em corpos em transição, moda que flui e gestos que dizem tudo.",
    name: "Mathias Duarte",
    designation: "Moda performática, movimento corporal e moda fluida",
    src: "/photographers/photographer3.webp",
    link: "https://unsplash.com/pt-br/@mathiasduarte/cole%C3%A7%C3%B5es",
  },
  {
    quote:
      "Exploro o encontro entre moda e concreto. Minhas fotos traduzem atitude, textura urbana e personalidade bruta.",
    name: "Yago de Almeida",
    designation: "Moda streetwear, cenário urbano e brutalismo estético",
    src: "/photographers/photographer4.webp",
    link: "https://unsplash.com/pt-br/@yagodealmeida/cole%C3%A7%C3%B5es",
  },
  {
    quote:
      "Trabalho com a delicadeza como linguagem visual. Luxo, para mim, vive nos detalhes suaves e nas atmosferas silenciosas.",
    name: "Pedro Nunes",
    designation: "Alta moda sensorial e estética soft luxury contemporânea",
    src: "/photographers/photographer5.webp",
    link: "https://unsplash.com/pt-br/@pedronuness/cole%C3%A7%C3%B5es",
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
                className="inline-flex items-center px-7 py-3 text-2xl font-bold text-white transition-all duration-200 sm:mt-0 bg-[#bb964b] hover:bg-[#9c7c3fef] border border-transparent rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 font-pj justif-center"
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
                <div className="flex flex-col md:flex-row justify-between w-full gap-12 mb-15 p-15">
                  {/* Bloco 1 */}
                  <div className="flex-1 text-center pt-4">
                    <div className="text-5xl mb-4 text-[#daa126] mx-auto w-fit">
                      <FaBullseye />
                    </div>
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
                    <div className="text-5xl mb-4 text-[#daa126] mx-auto w-fit">
                      <FaPalette />
                    </div>
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
                    <div className="text-5xl mb-4 text-[#daa126] mx-auto w-fit">
                      <FaPeopleCarry />
                    </div>
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
