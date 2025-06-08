import "./globals.css";
import EmblaCarousel from "@/components/EmblaCaurosel/js/EmblaCarousel";
import { slides } from "@/components/EmblaCaurosel/js/SlideData";
import { EmblaOptionsType } from "embla-carousel";
import Header from "@/components/EmblaCaurosel/js/Header";
// import Footer from "@/components/EmblaCaurosel/js/Footer";
import "@/components/EmblaCaurosel/css/base.css";
import "@/components/EmblaCaurosel/css/sandbox.css";
import "@/components/EmblaCaurosel/css/embla.css";
import QuestionSection from "@/components/QuestionSection";
import Storytelling from "@/components/Storytelling";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/EmblaCaurosel/js/Footer";

const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };
// const SLIDE_COUNT = 5;
// const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Home() {
  return (
    <>
      <Header />
      <EmblaCarousel slides={slides} options={OPTIONS} />
      <Footer />
      <div className="bg-[#250E2D]">
        <HeroSection />
      </div>

      <Storytelling />

      <QuestionSection />
    </>
  );
}
