// components/EmblaCarousel/SlideCard.tsx
import React from "react";
import { Slide } from "./SlideData";

type SlideCardProps = {
  slide: Slide;
};

const SlideCard: React.FC<SlideCardProps> = ({ slide }) => {
  return (
    <div className="embla__parallax__layer group relative overflow-hidden rounded-none">
      <img
        src={slide.image}
        alt={slide.alt || slide.caption}
        className="embla__slide__img embla__parallax__img object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = "/images/fallback.jpg"; // fallback
        }}
      />
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white no-select">
        <h3 className="text-5xl font-semibold">{slide.caption}</h3>
        <p className="text-2xl mt-1 font-mono">{slide.description}</p>
        <a
          href={slide.photographer.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-[#b19fe2] underline underline-offset-2 mt-1 font-serif tracking-wider"
        >
          {slide.photographer.name}
        </a>
      </div>
    </div>
  );
};

export default SlideCard;
