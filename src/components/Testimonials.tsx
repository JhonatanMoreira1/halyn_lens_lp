"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

import classNames from "classnames";
import Image from "next/image";

interface Author {
  fullName: string;
  picture: string;
  designation: string;
}

interface Testimonial {
  author: Author;
  rating: number;
  description: string;
}

interface RatingProps {
  rating: number;
  showLabel?: boolean;
  className?: string;
}

const testimonialList: Testimonial[] = [
  {
    author: {
      fullName: "Rafaela de Aquiles",
      picture: "https://cdn.easyfrontend.com/pictures/users/user4.jpg",
      designation: "Estilista e Diretora Criativa",
    },
    rating: 5.0,
    description:
      "A Halyn Lens foi a única que realmente entendeu o que minha marca representa. Me senti representada em cada clique. Mais do que fotografia, é identidade visual pura.",
  },
  {
    author: {
      fullName: "Caio Vidal",
      picture: "https://cdn.easyfrontend.com/pictures/users/user19.jpg",
      designation: "Empresário do setor criativo e Investidor",
    },
    rating: 4.8,
    description:
      "A atenção aos detalhes e o compromisso da Halyn Lens com a individualidade me impressionaram. É raro ver uma marca com esse nível de escuta e sofisticação.",
  },
  {
    author: {
      fullName: "Viviane Martins",
      picture: "https://cdn.easyfrontend.com/pictures/users/user8.jpg",
      designation: "Diretora de Arte | Produtora de Moda",
    },
    rating: 5.0,
    description:
      "Trabalhar com a Halyn Lens é como conversar com alguém que já entende a sua estética antes mesmo de você explicar. É leve, é profissional, é arte.",
  },
  {
    author: {
      fullName: "Eduardo Santana",
      picture: "https://cdn.easyfrontend.com/pictures/users/user17.jpg",
      designation: "Fotógrafo premiado | Curador de imagem",
    },
    rating: 4.7,
    description:
      "Como profissional da área, eu me surpreendi com o cuidado e a curadoria visual da Halyn Lens. É o tipo de empresa que eleva o mercado fotográfico nacional.",
  },
];

const Rating: React.FC<RatingProps> = ({
  rating,
  showLabel = false,
  className,
  ...rest
}) => (
  <p className={classNames("mb-6", className)} {...rest}>
    <span className="flex">
      {[...Array(5)].map((_, i) => {
        const index = i + 1;
        if (index <= Math.floor(rating)) {
          return <FaStar key={i} className="text-yellow-500" />;
        } else if (rating > i && rating < index + 1) {
          return <FaStarHalfAlt key={i} className="text-yellow-500" />;
        } else {
          return (
            <FaRegStar
              key={i}
              className="text-yellow-500  dark:text-opacity-20"
            />
          );
        }
      })}
    </span>
    {showLabel && <span>{rating.toFixed(1)}</span>}
  </p>
);

interface TestimonialItemProps {
  testimonial: Testimonial;
}

const TestimonialItem: React.FC<TestimonialItemProps> = ({ testimonial }) => (
  <div className="bg-white shadow-xl dark:bg-slate-800 rounded-2xl transition duration-300 h-full p-6">
    <div className="mt-4">
      <Rating rating={testimonial.rating} showLabel={false} />
      <p className="opacity-50 mb-6">{testimonial.description}</p>
      <div className="flex items-center">
        <div className="mr-2">
          <Image
            width={47}
            height={47}
            src={testimonial.author.picture}
            alt={testimonial.author.fullName}
            className="max-w-full h-auto rounded-full border"
          />
        </div>
        <div>
          <h4 className="text-2xl font-medium">
            {testimonial.author.fullName}
          </h4>
          <p className="text-xl">
            <i>{testimonial.author.designation}</i>
          </p>
        </div>
      </div>
    </div>
  </div>
);

const Testimonial1: React.FC = () => {
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
      <section className="ezy__testimonial1 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
        <div className="container px-4 mx-auto">
          <div className="flex justify-center md:mb-6">
            <div className="sm:max-w-7xl text-center items-center flex flex-col">
              <h2 className="text-3xl leading-none md:text-[45px] font-bold mb-5 sm:max-w-7xl">
                Como nossos clientes nos avaliam?
              </h2>
              <p className="sm:max-w-6xl text-center">
                Somos uma marca que se esforça para entender a mensagem que o
                cliente quer passar e a selecionar a melhor equipe para
                representar o cliente, se atentando a suas necessidades, uma
                empresa a qual é prazeroso trabalhar junto.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-6 gap-6 pt-5 items-center">
            {testimonialList.map((testimonial, i) => (
              <div className="col-span-7 md:col-span-3 lg:col-span-3" key={i}>
                <TestimonialItem testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial1;
