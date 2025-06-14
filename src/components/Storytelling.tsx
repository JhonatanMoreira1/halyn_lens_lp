"use client";

import React, { useEffect, useRef, useState } from "react";

function Storytelling() {
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
      <div
        className="relative min-h-[75vh] w-full bg-cover bg-center"
        style={{
          backgroundImage: `url("/storytelling/image2.jpg")`,
        }}
      >
        <div className="absolute right-0 top-0 h-full w-[70em] flex items-center">
          <div className="bg-[#bea269]/90 w-full h-[23em] flex items-start text-white p-15 flex-col space-y-14">
            <div className="space-y-4">
              <h1 className="text-8xl font-playfair">
                Fotografia e identidade
              </h1>
              <h2 className="text-7xl font-medium">
                A lente como espelho da alma e da cultura
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-4xl font-comfortaa">
                • A fotografia não apenas captura rostos, mas revela histórias e
                contextos culturais.
              </p>
              <p className="text-4xl font-comfortaa">
                • Identidade visual vai além da estética — é uma afirmação de
                pertencimento e de voz.
              </p>
              <p className="text-4xl font-comfortaa">
                • Cada retrato é um diálogo entre quem fotografa e quem é
                fotografado.
              </p>
              <p className="text-4xl font-comfortaa">
                • A composição, a luz e o enquadramento são capazes de construir
                narrativas únicas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Storytelling;
