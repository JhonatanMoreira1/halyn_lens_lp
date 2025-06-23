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
    image: "/photographsAuto/luiza3.webp",
    caption: "Vintage e Minimalismo",
    description:
      "Looks retrô com composições limpas, foco na estética elegante e simples.",
    photographer: {
      name: "Luiza Amaral",
      url: "https://unsplash.com/pt-br/@luizaamaral/cole%C3%A7%C3%B5es",
    },
  },
  {
    id: 2,
    image: "/photographsAuto/pedro3.webp",
    caption: "Soft Luxury",
    description:
      "Moda sofisticada com paletas neutras, tecidos finos e atmosfera refinada.",
    photographer: {
      name: "Pedro Nunes",
      url: "https://unsplash.com/pt-br/@pedronuness/cole%C3%A7%C3%B5es",
    },
  },
  {
    id: 3,
    image: "/photographsAuto/bruno3.webp",
    caption: "Natural e Urbano",
    description:
      "Retratos expressivos com luz natural, roupas casuais e cenário de cidade.",
    photographer: {
      name: "Bruno Neves",
      url: "https://unsplash.com/pt-br/@brunoneves/cole%C3%A7%C3%B5es",
    },
  },
  {
    id: 4,
    image: "/photographsAuto/mathias3.webp",
    caption: "Movimento e Performance",
    description: "Ensaios com dança, roupas fluidas e foco no corpo em ação.",
    photographer: {
      name: "Mathias Duarte",
      url: "https://unsplash.com/pt-br/@mathiasduarte/cole%C3%A7%C3%B5es",
    },
  },
  {
    id: 5,
    image: "/photographsAuto/yago3.webp",
    caption: "Street e Industrial",
    description:
      "Estética urbana crua com locações industriais, atitude e contraste visual.",
    photographer: {
      name: "Yago de Almeida",
      url: "https://unsplash.com/pt-br/@yagodealmeida/cole%C3%A7%C3%B5es",
    },
  },
  {
    id: 6,
    image: "/photographsAuto/luiza4.webp",
    caption: "Vintage e Minimalismo",
    description:
      "Looks retrô com composições limpas, foco na estética elegante e simples.",
    photographer: {
      name: "Luiza Amaral",
      url: "https://unsplash.com/pt-br/@luizaamaral/cole%C3%A7%C3%B5es",
    },
  },
  {
    id: 7,
    image: "/photographsAuto/pedro4.webp",
    caption: "Soft Luxury",
    description:
      "Moda sofisticada com paletas neutras, tecidos finos e atmosfera refinada.",
    photographer: {
      name: "Pedro Nunes",
      url: "https://unsplash.com/pt-br/@pedronuness/cole%C3%A7%C3%B5es",
    },
  },
  {
    id: 8,
    image: "/photographsAuto/bruno4.webp",
    caption: "Natural e Urbano",
    description:
      "Retratos expressivos com luz natural, roupas casuais e cenário de cidade.",
    photographer: {
      name: "Bruno Neves",
      url: "https://unsplash.com/pt-br/@brunoneves/cole%C3%A7%C3%B5es",
    },
  },
  {
    id: 9,
    image: "/photographsAuto/mathias4.webp",
    caption: "Movimento e Performance",
    description: "Ensaios com dança, roupas fluidas e foco no corpo em ação.",
    photographer: {
      name: "Mathias Duarte",
      url: "https://unsplash.com/pt-br/@mathiasduarte/cole%C3%A7%C3%B5es",
    },
  },
  {
    id: 10,
    image: "/photographsAuto/yago4.webp",
    caption: "Street e Industrial",
    description:
      "Estética urbana crua com locações industriais, atitude e contraste visual.",
    photographer: {
      name: "Yago de Almeida",
      url: "https://unsplash.com/pt-br/@yagodealmeida/cole%C3%A7%C3%B5es",
    },
  },
];
