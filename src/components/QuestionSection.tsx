"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function QuestionSection() {
  return (
    <div className="questionSection ">
      <hr className="w-full border-t border-gray-300 mb-4" />
      <div className="flex justify-center">
        <div className="flex flex-row max-w-md rounded-lg md:max-w-[90em]">
          <div className="flex flex-col h-[40em] pr-[6em] py-12 items-center ">
            <h1 className="font-openSans text-4xl font-bold text-black mb-15 text-center">
              Por que haylen lens é pra você?
            </h1>
            <div className="font-roboto text-left w-full max-w-6xl pl-10 space-y-8 text-3xl text-[#555555dc] leading-relaxed">
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
                funcionais para clientes menores
              </p>
              <p>
                Trazemos o pensamento de que os estilistas devem conseguir
                transmitir suas essência e sua mensagens para seu público.
              </p>
              <p>
                A Halyn Lens se propõe a transmitir a identidade visual do
                cliente em todas as suas imagens.
              </p>
            </div>
          </div>

          <div className="flex h-full items-center justify-center pl-[3em] md:min-w-[40em]">
            <div className="flex flex-col h-[40em] w-[40em] px-6 py-12 items-center">
              <h1 className="font-openSans text-4xl font-bold text-black mb-15 text-center">
                Dúvidas comuns
              </h1>
              <Accordion
                type="single"
                collapsible
                className="w-full flex flex-col gap-4"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-4xl [&_svg]:w-6 [&_svg]:h-6">
                    Oque a Haylen Lens faz?
                  </AccordionTrigger>
                  <AccordionContent className="font-roboto text-left pl-10 text-3xl text-[#2b2a2adc] leading-relaxed">
                    Sessões de fotos voltadas para marcas de moda, estilistas e
                    outros projetos de moda que querem mostrar sua identidade
                    visual e seus modelos por meio de imagens.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-4xl [&_svg]:w-6 [&_svg]:h-6">
                    Como funciona?
                  </AccordionTrigger>
                  <AccordionContent className="font-roboto text-left pl-10 text-3xl text-[#2b2a2adc] leading-relaxed">
                    A Halyn Lens possui uma variedade de fotógrafos que refletem
                    estilos diferentes de identidade e visualidade, cada um com
                    um portfólio acessível ao cliente para que esse possa
                    escolher o estilo que melhor se enquadra com o seu ideal de
                    fotografia. A Halyn Lens se propõe a transmitir a identidade
                    visual do cliente em todas as suas imagens.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-4xl [&_svg]:w-6 [&_svg]:h-6">
                    Qual o valor de uma sessão?
                  </AccordionTrigger>
                  <AccordionContent className="font-roboto text-left pl-10 text-3xl text-[#2b2a2adc] leading-relaxed">
                    Os pacotes e preços são combinados previamente com o cliente
                    antes da sessão, a marca também possui pacotes prontos com
                    antecedência que são mais acessíveis e funcionais para
                    clientes menores.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-4xl [&_svg]:w-6 [&_svg]:h-6">
                    Onde ocorrem as sessões?
                  </AccordionTrigger>
                  <AccordionContent className="font-roboto text-left pl-10 text-3xl text-[#2b2a2adc] leading-relaxed">
                    Nossos fotógrafos atuam dentro ou fora dos nossos estúdios a
                    depender da escolha do cliente, que pode preferir um ensaio
                    à natureza ou em outro lugar específico. Atualmente temos
                    três estúdios nos seguintes endereços:
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-4xl [&_svg]:w-6 [&_svg]:h-6">
                    O que diferencia a Halyn Lens de outras marcas?
                  </AccordionTrigger>
                  <AccordionContent className="font-roboto text-left pl-10 text-3xl text-[#2b2a2adc] leading-relaxed">
                    Facilidade em encontrar um fotógrafo com o estilo do
                    cliente; a exibição de portifólios que refletem o trabalho e
                    a qualidade dos serviços; a comunicação clara sobre
                    expectativas e preços.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-4xl [&_svg]:w-6 [&_svg]:h-6">
                    Quanto tempo leva para receber as fotos?
                  </AccordionTrigger>
                  <AccordionContent className="font-roboto text-left pl-10 text-3xl text-[#2b2a2adc] leading-relaxed">
                    Um prazo estimado é fornecido por cada fotógrafo ao marcar a
                    sessão, os pacotes prontos já possuem prazos estimados na
                    descrição.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">
                  <AccordionTrigger className="text-4xl [&_svg]:w-6 [&_svg]:h-6">
                    Qual o processo desde o primeiro contato até a entrega
                    final?
                  </AccordionTrigger>
                  <AccordionContent className="font-roboto text-left pl-10 text-3xl text-[#2b2a2adc] leading-relaxed">
                    Nossa plataforma foi desenvolvida para que nela você pode
                    explorar os estilos e identidades visuais de cada fotógrafo,
                    se precisar de ajuda ou decidir marcar uma sessão com um de
                    nossos profissionais, todos os esclarecimentos e
                    agendamentos são feitos via WhatsApp em nosso número
                    oficial. Após todos os agendamentos serem concluídos com
                    nossa equipe técnica, será encaminhado a você o número
                    individual do profissional escolhido, para que o fotógrafo
                    entenda suas expectativas e exclusividades.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionSection;
