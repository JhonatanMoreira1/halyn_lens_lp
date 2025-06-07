import React, { useEffect } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import SlideCard from "./SlideCard"; // importar o novo componente

export type Slide = {
  id: number;
  image: string;
  alt?: string;
  caption: string;
  description: string;
  photographer: {
    name: string;
    url: string;
  };
};

type PropType = {
  slides: Slide[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({
      playOnInit: true,
      stopOnMouseEnter: false,
      stopOnInteraction: false,
    }),
  ]);

  useEffect(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (!autoScroll) return;

    const onMouseEnter = () => autoScroll.stop();
    const onMouseLeave = () => autoScroll.play();

    const container = emblaApi.containerNode();
    container.addEventListener("mouseenter", onMouseEnter);
    container.addEventListener("mouseleave", onMouseLeave);

    return () => {
      container.removeEventListener("mouseenter", onMouseEnter);
      container.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [emblaApi]);

  return (
    <div className="scroll_embla">
      <div className="scroll_embla__viewport" ref={emblaRef}>
        <div className="scroll_embla__container">
          {slides.map((slide) => (
            <div className="scroll_embla__slide" key={slide.id}>
              <SlideCard slide={slide} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
