"use client";

import { useEffect } from "react";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import TechStack from "@/components/home/TechStack";
import Projects from "@/components/home/Projects";
import Contact from "@/components/home/Contact";

export default function Home() {
  useEffect(() => {
    // runs once per visit (session)
    if (!sessionStorage.getItem("home-visited")) {
      sessionStorage.setItem("home-visited", "true");
    }
  }, []);

  return (
    <main>
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Contact />
    </main>
  );
}
