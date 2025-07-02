import React from "react";
import { FaImages } from "react-icons/fa";

const Header: React.FC = () => (
  <header>
    <div className="text-5xl  text-[#daa126] mx-auto w-fit mb-4 pt-12">
      <FaImages />
    </div>
    <h1
      style={{ fontWeight: 500 }}
      className="text-4xl md:text-5xl font-montserrat tracking-wider pb-8 text-center"
    >
      Estilos fotográficos únicos
    </h1>
  </header>
);

export default Header;
