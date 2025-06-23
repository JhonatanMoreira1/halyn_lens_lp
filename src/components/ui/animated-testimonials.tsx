"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { FaFolderOpen } from "react-icons/fa";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
  link: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);
  const [rotations, setRotations] = useState<number[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => index === active;

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, handleNext]);

  useEffect(() => {
    const newRotations = testimonials.map(
      () => Math.floor(Math.random() * 21) - 10
    );
    setRotations(newRotations);
  }, [testimonials]);

  return (
    <div className="mx-auto w-full max-w-[85vw] px-4 py-10 font-sans antialiased md:max-w-5xl md:px-8 lg:px-12">
      <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
        <div>
          <div className="relative h-120 w-full">
            <AnimatePresence>
              {rotations.length > 0 &&
                testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.src}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                      z: -100,
                      rotate: rotations[index],
                    }}
                    animate={{
                      opacity: isActive(index) ? 1 : 0.7,
                      scale: isActive(index) ? 1 : 0.95,
                      z: isActive(index) ? 0 : -100,
                      rotate: isActive(index) ? 0 : rotations[index],
                      zIndex: isActive(index)
                        ? 40
                        : testimonials.length + 2 - index,
                      y: isActive(index) ? [0, -80, 0] : 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                      z: 100,
                      rotate: rotations[index],
                    }}
                    transition={{
                      duration: 0.4,
                      ease: [0.33, 1, 0.68, 1], // Curva super suave
                    }}
                    className="absolute inset-0 origin-center"
                  >
                    <div
                      className="relative h-full w-full overflow-hidden rounded-3xl"
                      onMouseEnter={() =>
                        isActive(index) && setHoveredIndex(index)
                      }
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      {/* Container para a imagem com transform fixo */}
                      <div className="absolute inset-0 h-full w-full">
                        <motion.div
                          className="h-full w-full"
                          animate={{
                            scale: hoveredIndex === index ? 1.2 : 1,
                          }}
                          transition={{
                            duration: 0.5,
                            ease: [0.33, 1, 0.68, 1],
                          }}
                          style={{
                            willChange: "transform", // Otimização
                            transformStyle: "preserve-3d",
                          }}
                        >
                          <Image
                            src={testimonial.src}
                            alt={testimonial.name}
                            width={800}
                            height={800}
                            draggable={false}
                            className="h-full w-full object-cover object-center"
                            style={{
                              transform: "translateZ(0)",
                              backfaceVisibility: "hidden", // Remove flickering
                            }}
                          />
                        </motion.div>
                      </div>

                      {/* Overlay escuro no hover */}
                      <motion.div
                        className="absolute inset-0 bg-black pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: hoveredIndex === index ? 0.5 : 0,
                        }}
                        transition={{
                          duration: 0.4,
                          ease: [0.33, 1, 0.68, 1],
                        }}
                      />

                      {/* Botão Portfólio */}
                      <motion.a
                        href={testimonial.link}
                        className="absolute bottom-0 left-2 right-2 flex items-center justify-center bg-[#bb964b] rounded-t-3xl bg-opacity-80 text-white text-3xl font-medium"
                        initial={{ y: "100%", opacity: 0 }}
                        animate={{
                          y: hoveredIndex === index ? "0%" : "100%",
                          opacity: hoveredIndex === index ? 1 : 0,
                        }}
                        transition={{
                          duration: 0.5,
                          ease: [0.33, 1, 0.68, 1],
                        }}
                        style={{ height: "15%" }}
                      >
                        <FaFolderOpen className="text-white mr-4" />
                        Portfólio
                      </motion.a>
                    </div>
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>
        </div>
        {/* this */}

        <div className="flex flex-col justify-between py-4">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <h3 className="text-4xl font-bold text-white dark:text-white">
              {testimonials[active].name}
            </h3>
            <p className="text-2xl text-gray-300 dark:text-neutral-500">
              {testimonials[active].designation}
            </p>
            <motion.p className="mt-8 text-2xl text-gray-200 dark:text-neutral-300">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                  animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>

          <div className="flex gap-4 pt-12 md:pt-0">
            <button
              onClick={handlePrev}
              className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
            >
              <IconArrowLeft className="h-8 w-8 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
            >
              <IconArrowRight className="h-8 w-8 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
