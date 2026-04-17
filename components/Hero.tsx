"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface TypewriterProps {
  text: string;
  className?: string;
}

export function Typewriter({ text, className }: TypewriterProps) {
  const words = text.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03 },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      className={`flex flex-wrap text-sz-md justify-center font-medium mb-18 tracking-normal ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {words.map((word, wordIndex) => (
        <p key={wordIndex} className="whitespace-nowrap flex">
          {Array.from(word).map((char, charIndex) => (
            <motion.span key={charIndex} variants={letterVariants}>
              {char}
            </motion.span>
          ))}
          <span className="inline-block">&nbsp;</span>
        </p>
      ))}
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-2 pt-25">
      <div className="md:w-[65%]">
        <motion.h1
          className="text-sz-xl mb-6 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Crafting seamless experiences for{" "}
          <span className="gradient-highlight">the digital world</span>
        </motion.h1>
        <Typewriter text="I'm Divine Obiorah, a Frontend Developer building clean, responsive and interactive web experiences." />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 3.5 }}
        >
          <Link
            href="/#projects"
            className="bg-foreground text-background text-base px-8 md:px-10 py-4 md:py-5 hover:scale-110 transition-transform duration-300"
          >
            Explore my work
          </Link>
        </motion.div>
      </div>
    </section>
  );
}