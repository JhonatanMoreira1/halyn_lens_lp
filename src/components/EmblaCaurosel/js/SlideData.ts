// components/EmblaCarousel/SlideData.ts

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

export const slides: Slide[] = [
  {
    id: 1,
    image: "/photographsAuto/vintage4.webp",
    caption: "Vintage",
    description: "O charme e a autenticidade do passado traduzidos em estilo.",
    photographer: {
      name: "Luiza Amaral",
      url: "/",
    },
  },
  {
    id: 2,
    image: "/photographs/preppy1.webp",
    caption: "Preppy",
    description: "Elegância acadêmica, cores suaves e toques de tradição.",
    photographer: {
      name: "Pedro Nunes",
      url: "/",
    },
  },
  {
    id: 3,
    image: "/photographs/punk1.webp",
    caption: "Punk",
    description: "Atitude rebelde, couro, spikes e autenticidade sem regras.",
    photographer: {
      name: "Bruno Neves",
      url: "/",
    },
  },
  {
    id: 4,
    image: "/photographsAuto/classic4.webp",
    caption: "Classic",
    description: "Simplicidade refinada, cortes limpos e elegância atemporal.",
    photographer: {
      name: "Mathias Duarte",
      url: "/",
    },
  },
  {
    id: 5,
    image: "/photographs/grunge1.webp",
    caption: "Grunge",
    description: "Camadas desleixadas, xadrez, e uma vibe crua e urbana.",
    photographer: {
      name: "Ana Verde",
      url: "/",
    },
  },
  {
    id: 6,
    image: "/photographs/classic1.webp",
    caption: "Vintage",
    description: "O charme e a autenticidade do passado traduzidos em estilo.",
    photographer: {
      name: "Luiza Amaral",
      url: "/",
    },
  },
  {
    id: 7,
    image: "/photographs/preppy2.webp",
    caption: "Preppy",
    description: "Elegância acadêmica, cores suaves e toques de tradição.",
    photographer: {
      name: "Pedro Nunes",
      url: "/",
    },
  },
  {
    id: 8,
    image: "/photographs/punk2.webp",
    caption: "Punk",
    description: "Atitude rebelde, couro, spikes e autenticidade sem regras.",
    photographer: {
      name: "Bruno Neves",
      url: "/",
    },
  },
  {
    id: 9,
    image: "/photographs/classic2.webp",
    caption: "Classic",
    description: "Simplicidade refinada, cortes limpos e elegância atemporal.",
    photographer: {
      name: "Mathias Duarte",
      url: "/",
    },
  },
  {
    id: 10,
    image: "/photographsAuto/grunge4.webp",
    caption: "Grunge",
    description: "Camadas desleixadas, xadrez, e uma vibe crua e urbana.",
    photographer: {
      name: "Ana Verde",
      url: "/",
    },
  },
];
