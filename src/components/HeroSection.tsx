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
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: "Sarah Chen",
    designation: "Product Manager at TechFlow",
    src: "/photographers/photographer1.webp",
  },
  {
    quote:
      "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    name: "Michael Rodriguez",
    designation: "CTO at InnovateSphere",
    src: "/photographers/photographer2.webp",
  },
  {
    quote:
      "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    name: "Emily Watson",
    designation: "Operations Director at CloudScale",
    src: "/photographers/photographer3.webp",
  },
  {
    quote:
      "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
    name: "James Kim",
    designation: "Engineering Lead at DataPro",
    src: "/photographers/photographer4.webp",
  },
  {
    quote:
      "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    name: "Lisa Thompson",
    designation: "VP of Technology at FutureNet",
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
            <h1 className="text-7xl font-bold">Conheça a haylen lens</h1>
            <p className="text-3xl">A marca de fotografia perfeita para você</p>
          </div>

          {/* Bloco de informações e testimonials */}
          <div className="flex min-h-[30em] p-[1.5rem] justify-around mb-20 z-30">
            <div className="text-white space-y-14 h-full w-full max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Se expresse por meio da fotografia
              </h1>
              <p className="text-base md:text-3xl text-white w-full max-w-6xl">
                Nossa missão é transmitir sentimentos através de cliques,
                entendendo seu estilo e gênero favorito. Os fotógrafos da Haylen
                Lens possuem gêneros de fotografia distintos, justamente para
                que qualquer cliente encontre sua lente ideal.
              </p>
              <Button className="bg-orange-500 hover:bg-[#D3B578] text-white font-semibold text-2xl px-12 py-9 rounded-full shadow-lg transition mt-10">
                Conheça nossos fotógrafos
              </Button>
            </div>

            {/* Testimonials animados */}
            <div className="h-full z-40">
              <AnimatedTestimonials testimonials={testimonials} />
            </div>
          </div>

          {/* Bloco de ícones e carrossel */}
          <div className="flex justify-center items-center mb-30 mt-[-30] z-20">
            <div className="w-[85%] max-w-[1300px] max-h-[40em] aspect-square bg-white flex flex-col items-center justify-center rounded-t-2xl z-20">
              <div className="w-full max-w-[1300px] max-h-[40em] aspect-square bg-white flex flex-col items-start pt-20 rounded-t-2xl z-20">
                <div className="flex flex-row justify-between w-[85%] mx-auto gap-8">
                  {/* Bloco 1 */}
                  <div className="flex-1 text-center px-4">
                    <div className="text-4xl mb-4">🔊</div>
                    <h3 className="text-3xl font-semibold mb-2 pb-15">
                      Your music everywhere for one
                    </h3>
                    <p className="text-gray-600 text-2xl">
                      {" "}
                      Relax. Unlike some services, we don’t charge you annually
                      to keep your music online...
                    </p>
                  </div>

                  {/* Bloco 2 */}
                  <div className="flex-1 text-center px-4">
                    <div className="text-4xl mb-4">💰</div>
                    <h3 className="text-3xl font-semibold mb-2 pb-15">
                      Collect all your royalties
                    </h3>
                    <p className="text-gray-600 text-2xl">
                      Every stream generates money for you. We help you collect
                      your mechanical...
                    </p>
                  </div>

                  {/* Bloco 3 */}
                  <div className="flex-1 text-center px-4">
                    <div className="text-4xl mb-4">🌐</div>
                    <h3 className="text-3xl font-semibold mb-2 pb-15">
                      Monetize on social media
                    </h3>
                    <p className="text-gray-600 text-2xl">
                      Collect money every time a video streams with your music.
                      Global YouTube...
                    </p>
                  </div>
                </div>

                {/* Carrossel infinito */}
                <div className="infiniteCaurosel flex flex-col justify-center items-center h-full w-full mb-0 pb-0 z-30">
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
