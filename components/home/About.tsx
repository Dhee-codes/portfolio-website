"use client";

import Image from "next/image";
import Link from "next/link";
// import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();

  const handleExplore = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push("/#projects");
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };
  
  return (
    <section
      id="about"
      className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-4 px-8 md:px-12 lg:px-32 py-16 mb-16"
    >
      <div className="flex flex-col justify-center py-12">
        <h2 className="text-sz-lg mb-2 md:mb-4 leading-tight">
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
        <div className="flex flex-col lg:flex-row text-center gap-6">
          <Link
            href="#projects"
            onClick={handleExplore}
            className="text-card text-base font-semibold px-12 py-4 bg-primary hover:scale-105 transition-transform duration-300"
          >
            View my projects
          </Link>
          <Link
            href="/docs/Divine_E._Obiorah.pdf"
            download
            className="text-card bg-foreground text-base font-semibold px-12 py-4 hover:scale-105 active:scale-98 transition-transform duration-300"
          >
            Download Resume
          </Link>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <Image
          src="/images/profile.png"
          alt="Divine Obiorah"
          width={300}
          height={300}
          className="md:w-4/5 rounded-full el-shadow"
        />
      </div>
    </section>
  );
}