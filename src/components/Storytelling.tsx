"use client";

import React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "./ui/card";

const imagens = [
  "/carrossel/img1.webp",
  "/carrossel/img2.webp",
  "/carrossel/img3.webp",
  "/carrossel/img4.webp",
  "/carrossel/img5.webp",
];

function Storytelling() {
  return (
    <div>
      {/* Introdução */}

      {/* Seção principal */}
      <div className="w-full min-h-screen bg-gradient-to-b from-white to-[#A18BB7] flex flex-col items-center justify-center px-6 md:px-[5em] space-y-20">
        {/* Primeira linha: Texto + Imagem */}
        <div className="flex flex-col md:flex-row w-full h-full mb-0">
          {/* Texto */}
          <div className="w-full md:w-1/2 flex flex-col justify-start space-y-8 pt-[4em] md:pl-[2em] mb-0">
            <h1 className="font-shantellSans text-5xl md:text-7xl">
              Fotografia e identidade
            </h1>

            {/* Parágrafos */}
            <div className="bg-white-to-b from-transparent to-white p-6 rounded-xl shadow-xl">
              <p className="font-comfortaa text-3xl max-w-6xl text-[#333333dc] leading-relaxed text-justify">
                A prática da fotografia começou em 1826, sendo acessível para
                pouquíssimas pessoas. O processo era caro, complexo e requeria
                equipamentos além da imaginação de um cidadão comum. Hoje em
                dia, a câmera está na palma das mãos de todos que possuem um
                celular. Fotografia se tornou algo banal, mas ter uma câmera não
                torna alguém um bom fotógrafo.
              </p>
            </div>
            <Carousel
              opts={{ align: "start", loop: true }}
              plugins={[Autoplay({ delay: 2000 })]}
              orientation="vertical"
              className="w-full max-w-[900px]"
            >
              <CarouselContent className="h-[500px]">
                {imagens.map((src, index) => (
                  <CarouselItem
                    key={index}
                    className="h-[500px] basis-full p-0"
                  >
                    <Card className="h-full w-full bg-transparent shadow-none border-none rounded-xl overflow-hidden">
                      <CardContent className="p-0 h-full w-full">
                        <div className="relative w-full h-full">
                          <Image
                            src={src}
                            alt={`Imagem ${index + 1}`}
                            fill
                            className="object-cover rounded-xl"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          {/* Imagem */}
          <div className="w-full h-[40em] md:w-1/2 flex items-start justify-center ml-[4em] md:px-0">
            <Image
              src="/logos/logoNova.png"
              alt="Modelo vertical"
              width={850}
              height={400}
              className="object-cover"
              priority
            />
          </div>

          {/*  */}
        </div>

        {/* Segunda linha: Carrossel + Texto adicional */}
        <div className="flex flex-col md:flex-row w-full h-full ml-0 m-10 mt-0">
          {/* Carrossel */}
          <div className="w-[60em] h-full p-8 ml-0 rounded-xl shadow-lg flex flex-col items-center">
            <h1 className="text-5xl font-montserrat mb-8 text-center">
              O que a Haylen Lens oferece?
            </h1>

            <div className="flex flex-col gap-10 pt-[2em] items-left ml-[2em]">
              {[
                { title: "Identidade Visual", icon: "/icons/icon1.svg" },
                { title: "Fotografia Profissional", icon: "/icons/icon2.svg" },
                { title: "Direção de Arte", icon: "/icons/icon3.svg" },
                { title: "Personalização", icon: "/icons/icon4.svg" },
                { title: "Conexão Criativa", icon: "/icons/icon5.svg" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={20}
                    height={20}
                    className="w-20 h-20 invert"
                  />
                  <span className="text-4xl font-openSans text-gray-800">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
            <hr className=" w-[50em] mt-[3em] border-[2px] rounded-xl border-black " />
          </div>

          {/* Texto adicional (placeholder) */}
          <div className="w-full md:w-1/2 flex flex-col justify-start space-y-8  mt-[-13em]">
            <div className="w-full flex flex-col items-center space-y-8 ">
              <div className="bg-white-to-b from-transparent to-white p-6 rounded-xl shadow-xl max-w-5xl">
                <p className="font-comfortaa font-medium text-3xl text-[#333333f8] leading-relaxed text-justify">
                  É comum entrarmos em perfis do Instagram repletos de
                  fotografias com a exata mesma pose — imagens que não dizem
                  nada sobre quem as tirou. Com a popularização das IA’s, a
                  criatividade e individualidade das fotos foi se perdendo. Está
                  se tornando cada vez mais difícil para os estilistas
                  encontrarem fotógrafos que se proponham a contar suas
                  histórias através desses retratos.
                </p>
              </div>
              <div className="w-px h-95 bg-black mx-6 mb-4"></div>
              <div className="bg-white-to-b from-transparent to-white p-6 rounded-xl shadow-xl max-w-5xl">
                <p className="font-comfortaa font-medium text-3xl text-[#202020f8] leading-relaxed text-justify">
                  A Halyn Lens traz para esses estilistas a facilidade de
                  encontrar fotógrafos com os quais se identifiquem — que
                  estejam dispostos a capturar suas histórias e individualidade.
                  Oferecendo personalização e exclusividade no atendimento,
                  conversam abertamente sobre o que seus clientes têm em mente e
                  que mensagem querem transmitir, garantindo criatividade e
                  paixão em cada foto tirada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Storytelling;

// colocar uma foto melhor no lugar da camera
// dois ultimos textos, fonte diferente e legível, que chame atenção
// próximo componente: bg roxo-(outra cor).
// promocional e fotógrafos
