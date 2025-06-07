"use client";

import React from "react";

const Footer: React.FC = () => (
  <div className="flex flex-col justify-center pt-3  z-50 w-full h-full items-center">
    <div className="text-left w-full max-w-4xl">
      <h1 className="font-caveat text-7xl font-bold text-black mb-6">
        Haylen Lens
      </h1>
      <p className="text-2xl text-gray-800 text-justify z-50 w-full font-comfortaa">
        Trazemos o pensamento de que os estilistas devem conseguir transmitir
        sua essência e suas mensagens para seu público, que eles consigam
        expressar quem são sem precisar dizer nada, e a Halyn Lens é a empresa
        que irá permitir que esse ideal se realize.
      </p>
    </div>
    <div className="w-full min-h-full pt-20 pb-20 bg-gradient-to-b from-white via-[#d3aee2] to-[#512e5c]" />
  </div>
);

export default Footer;
