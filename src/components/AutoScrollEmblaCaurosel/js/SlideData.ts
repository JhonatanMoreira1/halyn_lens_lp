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
    image: "/photographs/foto1.webp",
    caption: "Fashion",
    description: "Estilo, elegância e identidade em um único clique.",
    photographer: {
      name: "Carlos Luz",
      url: "/fotografos/carlos-luz",
    },
  },
  {
    id: 2,
    image: "/photographs/foto2.webp",
    caption: "Floresta Encantada",
    description: "Trilha em meio à mata densa e úmida.",
    photographer: {
      name: "Ana Verde",
      url: "/fotografos/ana-verde",
    },
  },
  {
    id: 3,
    image: "/photographs/foto3.jpg",
    caption: "Goticismo",
    description:
      "Sombras, emoções intensas e estética sombria definem o goticismo.",
    photographer: {
      name: "Ana Verde",
      url: "/fotografos/ana-verde",
    },
  },
  {
    id: 4,
    image: "/photographs/foto4.jpg",
    caption: "Floresta Encantada",
    description: "Trilha em meio à mata densa e úmida.",
    photographer: {
      name: "Ana Verde",
      url: "/fotografos/ana-verde",
    },
  },
  {
    id: 5,
    image: "/photographs/foto5.jpg",
    caption: "Vintage",
    description: "O charme e a autenticidade do passado traduzidos em estilo.",
    photographer: {
      name: "Matheus Prudente",
      url: "/fotografos/matheus-prudente",
    },
  },
  {
    id: 6,
    image: "/photographs/foto6.jpg",
    caption: "Floresta Encantada",
    description: "Trilha em meio à mata densa e úmida.",
    photographer: {
      name: "Ana Verde",
      url: "/fotografos/ana-verde",
    },
  },
  {
    id: 7,
    image: "/photographs/foto7.jpg",
    caption: "Floresta Encantada",
    description: "Trilha em meio à mata densa e úmida.",
    photographer: {
      name: "Ana Verde",
      url: "/fotografos/ana-verde",
    },
  },
];
