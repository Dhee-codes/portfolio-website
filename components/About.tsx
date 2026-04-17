"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen grid grid-cols-2 gap-4 px-32 py-16 mb-40"
    >
      <motion.div
        className="flex flex-col justify-center py-12"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-normal mb-4 leading-tight">
          Frontend <span className="gradient-highlight">Developer</span>
        </h2>
        <h3 className="text-2xl font-medium mb-12" style={{ color: "#9aa1c7" }}>
          Crafting with React, Next.js & TypeScript
        </h3>
        <p className="text-lg tracking-wide mb-20">
          I&apos;m a Computer Science student at the University of Ibadan with a
          passion for building clean, responsive and interactive web
          experiences. I recently completed an internship where I built and
          shipped real products using React, Next.js, TypeScript, and Tailwind
          CSS — and I&pos;m just getting started.
        </p>
        <div className="flex gap-6">
          <Link
            href="#projects"
            className="text-white text-base px-8 py-4 bg-btn-bg shadow-[0_0_8px_#e889e5] hover:scale-110 transition-transform duration-300"
          >
            View my projects
          </Link>
          <Link
            href="/docs/DheeCodes_Resume.pdf"
            download
            className="text-white text-base px-8 py-4 hover:scale-95 active:scale-95 transition-transform duration-300"
            style={{ background: "var(--btn-primary)" }}
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
          className="rounded-full shadow-[0_0_18px_#e889e5]"
        />
      </motion.div>
    </section>
  );
}