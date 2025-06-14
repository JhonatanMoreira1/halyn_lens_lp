/* Passo a passo importar novas fontes
    1- importar e configurar em fonts.ts
    2- importar em layout.tsx e adicionar no className do html
    3- adicionar em globals.css
    4- usar
*/

import { Roboto } from "next/font/google";

export const robotoFont = Roboto({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  variable: "--font-roboto",
});

import { Montserrat } from "next/font/google";

export const montserratFont = Montserrat({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  variable: "--font-montserrat",
});

import { Montserrat_Alternates } from "next/font/google";

export const montserratAlternatesFont = Montserrat_Alternates({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  variable: "--font-montserratAlternates",
});

import { Open_Sans } from "next/font/google";

export const openSansFont = Open_Sans({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  variable: "--font-openSans",
});

import { Shantell_Sans } from "next/font/google";

export const shantellSansFont = Shantell_Sans({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  variable: "--font-shantellSans",
});

import { Paytone_One } from "next/font/google";

export const paytoneOneFont = Paytone_One({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  variable: "--font-paytoneOne",
});

import { Comfortaa } from "next/font/google";

export const comfortaaFont = Comfortaa({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  variable: "--font-comfortaa",
});

import { Caveat } from "next/font/google";

export const caveatFont = Caveat({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  variable: "--font-caveat",
});

import { Playfair_Display } from "next/font/google";

export const playfairFont = Playfair_Display({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  variable: "--font-playfair",
});
