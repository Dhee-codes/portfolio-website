"use client";

import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { TechStack } from "@/components/home/TechStack";
import { Projects } from "@/components/home/Projects";
import { Contact } from "@/components/home/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <TechStack />
      <Contact />
    </main>
  );
}
