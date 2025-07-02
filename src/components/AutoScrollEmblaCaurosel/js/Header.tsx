import React from "react";
import { FaImages } from "react-icons/fa";

const Header: React.FC = () => (
  <header>
    <div className="text-5xl text-[#daa126] mx-auto w-fit p-0 pt-10">
      <FaImages />
    </div>
    <h1 className="header font-montserrat tracking-wider pt-0">
      Estilos fotográficos únicos
    </h1>
  </header>
);

export default Header;
