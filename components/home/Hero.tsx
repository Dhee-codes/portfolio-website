"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface TypewriterProps {
  text: string;
  className?: string;
}

export function Typewriter({ text, className }: TypewriterProps) {
  const words = text.split(" ");

  const hasVisited =
    typeof window !== "undefined" && sessionStorage.getItem("home-visited");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: hasVisited ? 1 : 1.3,
      },
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
      initial={hasVisited ? false : "hidden"}
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
  const router = useRouter();

  const hasVisited =
    typeof window !== "undefined" && sessionStorage.getItem("home-visited");

  const handleExplore = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push("/#projects");
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-2">
      <div className="md:w-[65%]">
        <motion.h1
          className="text-sz-xl mb-6 leading-tight"
          initial={hasVisited ? false : { opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: hasVisited ? 0 : 0.3 }}
        >
          Crafting seamless experiences for{" "}
          <span className="gradient-highlight">the digital world</span>
        </motion.h1>
        <Typewriter text="I'm Divine Obiorah, a Frontend Developer building clean, responsive and interactive web experiences." />

        <motion.div
          initial={hasVisited ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: hasVisited ? 0 : 4.5 }}
        >
          <Link
            href="/#projects"
            onClick={handleExplore}
            className="inline-block bg-foreground text-card text-base font-bold px-8 md:px-10 py-4 md:py-5 hover:scale-105 transition-transform duration-300"
          >
            Explore my work
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
