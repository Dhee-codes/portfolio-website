"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-4 px-8 md:px-24 lg:px-32 py-16 mb-40"
    >
      <motion.div
        className="flex flex-col justify-center py-12"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-sz-lg font-normal mb-2 md:mb-4 leading-tight">
          Frontend <span className="gradient-highlight">Developer</span>
        </h2>
        <h3 className="text-primary-light text-sz-md font-medium mb-8 md:mb-12">
          Crafting with React, Next.js & TypeScript
        </h3>
        <p className="text-sz-md tracking-wide mb-16">
          I&apos;m a Computer Science student at the University of Ibadan with a
          passion for building clean, responsive and interactive web
          experiences. I recently completed an internship where I built and
          shipped real products using React, Next.js, TypeScript, and Tailwind
          CSS... and I&pos;m just getting started.
        </p>
        <div className="flex flex-col md:flex-row text-center gap-6">
          <Link
            href="#projects"
            className="text-white text-base px-8 py-4 bg-primary-light hover:scale-110 transition-transform duration-300"
          >
            View my projects
          </Link>
          <Link
            href="/docs/DheeCodes_Resume.pdf"
            download
            className="text-background bg-foreground text-base px-8 py-4 hover:scale-110 active:scale-95 transition-transform duration-300"
          >
            Download Resume
          </Link>
        </div>
      </motion.div>

      <motion.div
        className="flex justify-center items-center"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Image
          src="/images/profile.jpg"
          alt="Divine Obiorah"
          width={300}
          height={300}
          className="md:w-4/5 rounded-full el-shadow"
        />
      </motion.div>
    </section>
  );
}