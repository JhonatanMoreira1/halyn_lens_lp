// components/EmblaCarousel/SlideCard.tsx
"use client";
import React from "react";
import { Slide } from "./SlideData";
import Image from "next/image";

type SlideCardProps = {
  slide: Slide;
};

const SlideCard: React.FC<SlideCardProps> = ({ slide }) => {
  return (
    <div className="embla__parallax__layer group relative overflow-hidden rounded-none">
      <Image
        src={slide.image}
        alt={slide.alt || slide.caption}
        width={600} // proporcional à faixa desktop (~27vw)
        height={420} // 28rem = 448px → 420px para manter 3:2
        className="embla__slide__img embla__parallax__img object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = "/images/fallback.jpg"; // fallback
        }}
      />
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white no-select">
        <h3 className="text-5xl font-playfair tracking-wide mb-1">
          {slide.caption}
        </h3>
        <p className="text-2xl mt-1 font-comfortaa">{slide.description}</p>
        <a
          href={slide.photographer.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl text-[#b19fe2] underline underline-offset-2 mt-1 font-bold tracking-wider"
        >
          {slide.photographer.name}
        </a>
      </div>
    </div>
  );
};

export default SlideCard;
