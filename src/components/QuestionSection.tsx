"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function QuestionSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // anima apenas uma vez
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
      className={`transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } z-20`}
    >
      <hr className="w-full border-t border-gray-300 mb-10" />
      <div className="flex justify-center px-4 lg:px-0">
        <div className="flex flex-col justify-center items-center py-20 pt-10 pb-10 sm:pt-20 sm:pb-30  lg:flex-row w-full h-full w-full gap-10 lg:gap-40">
          {/* Texto Informativo */}
          <div className="flex flex-col justify-center md:w-[40em] lg:w-[45em]">
            <h1 className="font-openSans text-3xl lg:text-4xl font-bold text-black mb-10 text-center lg:text-center">
              Por que Halyn Lens é pra você?
            </h1>
            <div className="font-roboto text-[#555555dc] leading-relaxed space-y-6 text-xl sm:text-xl lg:text-3xl px-2 lg:px-0">
              <p>
                Sessões fotográficas personalizadas para cada cliente com uma
                vasta seleção de fotógrafos.
              </p>
              <p>
                Promovemos a diversidade e autenticidade das diferentes
                vertentes da moda.
              </p>
              <p>
                Os pacotes e preços são combinados previamente com o cliente
                antes da sessão.
              </p>
              <p>
                Pacotes prontos com antecedência que são mais acessíveis e
                funcionais para clientes menores.
              </p>
              <p>
                Trazemos o pensamento de que os estilistas devem conseguir
                transmitir sua essência e mensagem para seu público.
              </p>
              <p>
                A Halyn Lens se propõe a transmitir a identidade visual do
                cliente em todas as suas imagens.
              </p>
            </div>
          </div>

          {/* Bloco de Dúvidas */}
          <div className="flex flex-col w-full h-full md:w-[40em] lg:w-[45em] mb-10">
            <h1 className="font-openSans text-3xl lg:text-4xl font-bold text-black mb-10 text-center">
              Dúvidas comuns
            </h1>
            <Accordion
              type="single"
              collapsible
              className="w-full flex flex-col gap-4"
            >
              {[
                {
                  title: "O que a Halyn Lens faz?",
                  content:
                    "Sessões de fotos voltadas para marcas de moda, estilistas e outros projetos que querem mostrar sua identidade visual e seus modelos por meio de imagens.",
                },
                {
                  title: "Como funciona?",
                  content:
                    "A Halyn Lens possui uma variedade de fotógrafos com estilos distintos. O cliente escolhe o que mais combina com sua identidade visual.",
                },
                {
                  title: "Qual o valor de uma sessão?",
                  content:
                    "Os pacotes e preços são combinados previamente com o cliente. Também há pacotes prontos mais acessíveis para pequenos clientes.",
                },
                {
                  title: "Onde ocorrem as sessões?",
                  content:
                    "Em nossos estúdios ou em locações externas conforme a escolha do cliente. Temos três estúdios ativos atualmente.",
                },
                {
                  title: "O que diferencia a Halyn Lens?",
                  content:
                    "Portfólios claros, comunicação objetiva, facilidade em encontrar um fotógrafo com o estilo do cliente.",
                },
                {
                  title: "Qual o processo do início à entrega?",
                  content:
                    "Atendimento via WhatsApp, agendamento com equipe técnica, e contato direto com o fotógrafo para alinhar expectativas.",
                },
                {
                  title: "Quanto tempo leva para receber as fotos?",
                  content:
                    "O prazo é combinado com o fotógrafo. Pacotes prontos já têm o prazo descrito.",
                },
              ].map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-xl lg:text-4xl [&_svg]:w-5 [&_svg]:h-5">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="font-roboto text-[#2b2a2adc] leading-relaxed pl-4 text-base lg:text-3xl">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionSection;
