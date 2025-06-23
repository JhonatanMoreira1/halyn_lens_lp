"use client";

import "./globals.css";
// import Footer from "@/components/EmblaCaurosel/js/Footer";
import "@/components/EmblaCaurosel/css/base.css";
import "@/components/EmblaCaurosel/css/sandbox.css";
import "@/components/EmblaCaurosel/css/embla.css";
import QuestionSection from "@/components/QuestionSection";
import Storytelling from "@/components/Storytelling";
import HeroSection from "@/components/HeroSection";
import Hero from "@/components/Hero";
import { useEffect, useState } from "react";
import Testimonials from "@/components/Testimonials";
import AboutUs from "@/components/About";
import Footer from "@/components/Footer";
import LogoCloud from "@/components/LogoCloud";

// const SLIDE_COUNT = 5;
// const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`bg-gray-50 transition-scale duration-300 ease-out ${
        scrolled ? "pt-[1em]" : "pt-[6em]"
      }`}
    >
      <Hero />

      <HeroSection />

      <Testimonials />

      <Storytelling />
      <LogoCloud />
      <AboutUs />
      <QuestionSection />

      <Footer />
    </div>
  );
}
