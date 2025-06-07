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
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    name: "Michael Rodriguez",
    designation: "CTO at InnovateSphere",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    name: "Emily Watson",
    designation: "Operations Director at CloudScale",
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
    name: "James Kim",
    designation: "Engineering Lead at DataPro",
    src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    name: "Lisa Thompson",
    designation: "VP of Technology at FutureNet",
    src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const OPTIONS: EmblaOptionsType = { loop: true };
// const SLIDE_COUNT = 8;
// const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

function PromoSection() {
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
      className={`promoSection transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div
        className="relative min-h-screen w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://imagembcn.com/wp-content/uploads/2018/01/a.jpg')",
        }}
      >
        {/* Overlay de cor com transparência total */}
        <div className="absolute inset-0 bg-[#250E2D]/70 z-10" />

        {/* Gradiente no topo: sólido para transparente */}
        <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-[#512e5c] via-[#441a52]/60 to-[#250E2D]/0 z-20" />

        {/* Conteúdo */}
        <div className="relative z-30 p-20 text-white flex flex-col text-center space-y-5 z-30">
          <h1 className="text-7xl font-bold">Conheça a haylen lens</h1>
          <p className="text-3xl">A marca de fotografia perfeita para você</p>
        </div>
        <div className="flex min-h[-30em] p-25 z-30 justify-around mb-20">
          <div className="z-30 text-white space-y-14 h-full w-full max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Se expresse por meio da fotografia
            </h1>

            <p className="text-base md:text-3xl text-white w-full">
              Nossa missão é transmitir sentimentos através de cliques,
              entendendo seu estilo e gênero favorito. Os fotógrafos da Haylen
              Lens possuem gêneros de fotografia distintos, justamente para que
              qualquer cliente encontre sua lente ideal.
            </p>

            <Button className="bg-orange-500 hover:bg-[#D3B578] text-white font-semibold text-2xl px-12 py-9 rounded-full shadow-lg transition mt-10">
              Conheça nossos fotógrafos
            </Button>
          </div>

          <div className="z-30 h-full">
            <AnimatedTestimonials testimonials={testimonials} />
          </div>
        </div>
        <div className="z-30 flex justify-center items-center z-30 mb-30 mt-[-30]">
          <div className="w-[85%] max-w-[1300px] max-h-[40em] aspect-square bg-white flex flex-col items-center justify-center z-30 rounded-t-2xl">
            <div className="w-full max-w-[1300px] max-h-[40em] aspect-square bg-white flex flex-col items-start pt-20 rounded-t-2xl z-30">
              <div className="flex flex-row justify-between w-[85%] mx-auto gap-8">
                {/* Bloco 1 */}
                <div className="flex-1 text-center px-4">
                  <div className="text-4xl mb-4">🔊</div>
                  <h3 className="text-3xl font-semibold mb-2 pb-15">
                    Your music everywhere for one
                  </h3>
                  <p className="text-gray-600 text-2xl">
                    Relax. Unlike some services, we don’t charge you annually to
                    keep your music online...
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
              <div className="infiniteCaurosel flex flex-col justify-center items-center h-full w-full mb-0 pb-0">
                <Header />
                <div className="">
                  <EmblaAutoScrollCarousel slides={slides} options={OPTIONS} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PromoSection;

// adicionar o carrossel infinito de estilos, escolher a label de cima
// customizar os blocos
// adicionar effects
