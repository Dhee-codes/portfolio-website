"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export const Hero = () => {
  const router = useRouter();

  const handleExplore = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push("/#projects");
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-5 pt-20 md:pt-22">
      <div className="md:max-w-[66%]">
        <h1 className="text-sz-xl mb-6 leading-tight max-w-[16ch]">
          Aligning design precision with{" "}
          <span className="gradient-highlight">engineering intuition</span>
        </h1>

        <p className="flex flex-wrap text-sz-md leading-[1.2] justify-center font-medium mb-12 md:mb-16">
          I&apos;m Divine Obiorah, a Frontend Developer, I build interfaces from
          design specs, pixel-accurate where possible, and better where it
          isn&apos;t.
        </p>

        <div>
          <Link
            href="/#projects"
            onClick={handleExplore}
            className="inline-block bg-foreground el-shadow text-card text-base font-bold rounded-xl px-8 py-4 focus:ring-accent hover:scale-105 transition-transform duration-300"
          >
            See my work
          </Link>
        </div>
      </div>
    </section>
  );
}
