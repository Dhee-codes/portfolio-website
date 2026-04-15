"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <div className="w-[65%]">
        <motion.h1
          className="text-6xl font-normal mb-12 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Crafting seamless experiences for{" "}
          <span className="bg-linear-to-r from-[#04afc2] to-[#82edf9] bg-clip-text text-transparent">
            the digital world
          </span>
        </motion.h1>
        <motion.p
          className="text-2xl font-normal mb-20 tracking-wide"
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 2, delay: 1.3, ease: "easeOut" }}
        >
          I&apos;m Divine Obiorah, a Frontend Developer building clean, responsive
          and interactive web experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 3.5 }}
        >
          <Link
            href="/#projects"
            className="text-white text-base px-10 py-5 shadow-[0_0_8px_#e889e5] hover:scale-110 transition-transform duration-300 bg-btn-primary"
          >
            Explore my work
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
