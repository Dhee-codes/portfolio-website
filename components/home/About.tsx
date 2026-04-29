"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { LinkBtn, DownloadBtn } from "../ui/Button";
import { fadeLeft, fadeRight } from "@/lib/motionVariants";

export const About = () => {
  const router = useRouter();
  const prefersReducedMotion = useReducedMotion();

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
      <motion.div
        className="flex flex-col justify-center py-12"
        variants={fadeLeft}
        initial={prefersReducedMotion ? "visible" : "hidden"}
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-sz-lg mb-2 leading-tight">
          Frontend <span className="gradient-highlight">Developer</span>
        </h2>
        <h3 className="text-primary-light text-sz-md font-medium mb-6">
          Every spec is a promise. I keep it.
        </h3>
        <div className="text-sz-md tracking-wide mb-16">
          <p className="mb-4">
            My work lives at the intersection of design fidelity and engineering
            judgment. I focus on bridging the gap between design specs and a
            functional user experience, especially when the design doesn&apos;t
            account for the messiness of the real world.
          </p>
          <p>
            I&apos;m in my fourth year of Computer Science at the University of
            Ibadan. I&apos;ve spent my internships shipping production code in
            Next.js and TypeScript. What those experiences taught me is that a
            design is a starting point. The engineering has to handle everything
            the design didn&apos;t anticipate, the missing screens, the edge
            cases, the states nobody drew.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row text-center gap-6">
          <LinkBtn
            href="#projects"
            onClick={handleExplore}
            label="View my projects"
            className="bg-primary"
          />
          <DownloadBtn
            href="/docs/Divine_E._Obiorah.pdf"
            label="Download Resume"
            className="bg-foreground"
          />
        </div>
      </motion.div>

      <motion.div
        className="flex justify-center items-center order-first md:order-0"
        variants={fadeRight}
        initial={prefersReducedMotion ? "visible" : "hidden"}
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src="/images/profile.png"
          alt="Divine Obiorah"
          width={300}
          height={300}
          className="md:w-4/5 rounded-full el-shadow"
        />
      </motion.div>
    </section>
  );
}
