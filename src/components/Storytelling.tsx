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
      className={`transitionBlock transition-all duration-1000 ease-out hidden sm:block ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } z-20`}
    >
      <div
        className="h-[23em] xl:min-h-[75vh] md:h-[30em] w-full bg-center bg-cover relative"
        style={{
          backgroundImage: `url("/storytelling/image2.jpg")`,
        }}
      >
        <div
          className="
        absolute 
        top-0 
        left-0 
        w-full 
        h-full 
        flex 
        items-center 
        justify-center 
        md:justify-end 
        lg:justify-end
        p-4 
        sm:p-6 
        md:pr-0 
        xl:pr-0
      "
        >
          <div
            className="
          bg-[#bea269]/90 
          w-[95%] 
          md:w-[70em] 
          h-[20em] 
          md:h-[27em] 
          md:pr-0
          flex 
          flex-col 
          justify-center 
          text-white 
          px-6 
          py-10 
          md:p-15 
          space-y-10 
          rounded-lg
        "
          >
            <div className="space-y-4 text-center md:text-left">
              <h1 className="text-5xl sm:text-7xl md:text-7xl lg:text-8xl font-playfair">
                Fotografia e identidade
              </h1>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-medium">
                A lente como espelho da alma e da cultura
              </h2>
            </div>
            <div className="space-y-4 text-center md:text-left sm:text-left">
              {[
                "A fotografia não apenas captura rostos, mas revela histórias e contextos culturais.",
                "Identidade visual vai além da estética — é uma afirmação de pertencimento e de voz.",
                "Cada retrato é um diálogo entre quem fotografa e quem é fotografado.",
                "A composição, a luz e o enquadramento são capazes de construir narrativas únicas.",
              ].map((item, i) => (
                <p
                  key={i}
                  className="text-xl sm:text-2xl md:text-4xl lg:text-4xl font-comfortaa leading-snug"
                >
                  • {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Storytelling;
