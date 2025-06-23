"use client";

import React, { useEffect, useRef, useState } from "react";

function AboutUs() {
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
      <section className="ezy__about14 light py-24 md:py-32 bg-[url('/storytelling/image1.jpg')] bg-cover bg-no-repeat bg-center text-white relative">
        {/* Overlay escuro - abaixo do conteúdo mas acima do background */}
        <div className="absolute inset-0 bg-black/75" />

        {/* Conteúdo principal - acima do overlay */}
        <div className="container px-4 mx-auto relative z-10">
          <div className="grid grid-cols-12 gap-8 lg:gap-12 justify-between items-center">
            <div className="col-span-12 lg:col-span-5">
              <div className="border-[10px] border-[#5E456F] p-8 lg:p-12 transform hover:scale-[1.01] transition-all duration-300">
                <h1 className="uppercase text-5xl md:text-7xl lg:text-7xl leading-tight font-bold mb-10">
                  SOBRE NÓS
                </h1>
                <p className="text-xl lg:text-2xl leading-relaxed opacity-90">
                  A Halyn Lens é um estúdio fotográfico autoral que transforma
                  imagens em narrativas visuais profundas e autênticas.
                  Especializada em retratar identidade, expressão e estética com
                  sensibilidade artística, a marca vai além da captura — ela
                  traduz emoções e histórias por meio da luz e da composição.
                  Cada clique carrega propósito, estilo e uma assinatura visual
                  distinta. Reunindo fotógrafos com visões únicas, a Halyn
                  celebra a diversidade de olhares e estilos dentro de um mesmo
                  universo criativo. Seja em projetos pessoais, editoriais ou
                  comerciais, a Halyn Lens entrega imagens que falam por si. É
                  fotografia com alma, intenção e identidade.
                </p>
                <div className="mt-10">
                  <button className="bg-[#5E456F] hover:bg-[#442A4B] text-white font-semibold text-2xl py-5 px-14 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    Fale conosco
                  </button>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-7 mt-14 lg:mt-0">
              <div className="lg:ml-12 bg-black/50 p-10 rounded-lg">
                <p className="text-xl lg:text-2xl leading-relaxed opacity-90 mb-8">
                  A prática da fotografia começou em 1826, sendo acessível para
                  pouquíssimas pessoas, o processo era caro, complexo e requiria
                  equipamentos além da imaginação de um cidadão comum. Hoje em
                  dia, a câmera está na palma das mãos de todos que possuem um
                  celular, fotografia se tornou algo banal, mas ter uma câmera
                  não torna alguém um bom fotógrafo.
                </p>
                <p className="text-xl lg:text-2xl leading-relaxed opacity-90 mb-8">
                  É comum entrarmos perfis do instagram repletos de fotografias
                  com a exata mesma pose, imagens que não dizem nada sobre quem
                  as tirou, e com a popularização das IA’s, a criatividade e
                  individualidade das fotos foi se perdendo. Está se tornando
                  cada vez mais difícil para os estilistas encontrarem
                  fotógrafos que se proponham a contar suas histórias através
                  desses retratos de momentos.
                </p>
                <p className="text-xl lg:text-2xl leading-relaxed opacity-90">
                  A Halyn Lens trás para esses estilistas a facilidade de
                  encontrar fotógrafos com os quais se identifiquem, que estejam
                  dispostos a capturar suas histórias e individualidade,
                  trazendo personalização e exclusividade para o atendimento de
                  cada cliente, conversando abertamente sobre o que eles tem em
                  mente e que mensagem querem transmitir para o seu público,
                  garantindo criatividade e paixão em cada foto tirada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
