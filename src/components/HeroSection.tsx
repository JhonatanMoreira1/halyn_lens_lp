"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import EmblaAutoScrollCarousel from "./AutoScrollEmblaCaurosel/js/EmblaCaurosel";
import { EmblaOptionsType } from "embla-carousel";
import Header from "./AutoScrollEmblaCaurosel/js/Header";

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
      <div
        className="relative min-h-screen w-full bg-cover bg-center z-0"
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
          <div className="relative p-20 text-white flex flex-col text-center space-y-5 z-30">
            <h1 className="text-7xl font-bold">Conheça a Halyn Lens</h1>
            <p className="text-3xl">A marca de fotografia perfeita para você</p>
          </div>

          {/* Bloco de informações e testimonials */}
          <div className="flex flex-col-reverse lg:flex-row min-h-[30em] w-full pt-[2em] px-[8em] justify-between mb-20 z-30">
            <div className="text-white space-y-14">
              <h1 className="text-4xl max-w-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Se expresse por meio da fotografia
              </h1>
              <p className="text-base md:text-3xl text-white w-full max-w-5xl lg:max-w-4xl">
                Nossa missão é transmitir sentimentos através de cliques,
                entendendo seu estilo e gênero favorito. Os fotógrafos da Halyn
                Lens possuem gêneros de fotografia distintos, justamente para
                que qualquer cliente encontre sua lente ideal.
              </p>
              <Button className="bg-orange-500 hover:bg-[#D3B578] text-white font-semibold text-2xl px-12 py-9 rounded-full shadow-lg transition mt-10">
                Faça seu orçamento online
              </Button>
            </div>

            {/* Testimonials animados */}
            <div className="h-full  z-40">
              <AnimatedTestimonials testimonials={testimonials} />
            </div>
          </div>

          {/* Bloco de ícones e carrossel */}
          <div className="flex justify-center items-center mb-0 z-20">
            <div className="w-[85%] max-w-[1200px] max-h-[40em] aspect-square bg-white flex flex-col items-center justify-center rounded-t-2xl z-20">
              <div className="w-full max-w-[1200px] max-h-[45em] h-[85%] aspect-square bg-white flex flex-col items-start pt-0 rounded-t-2xl z-20">
                <div className="flex flex-row justify-between w-[85%] mx-auto gap-8 pb-[3.9rem]">
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
                <div className="infiniteCaurosel flex flex-col justify-center items-center h-full w-full z-30">
                  <Header />
                  <div>
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

// adicionar o carrossel infinito de estilos, escolher a label de cima
// customizar os blocos
// adicionar effects
