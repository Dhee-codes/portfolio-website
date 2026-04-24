"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  const handleExplore = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push("/#projects");
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-2 pt-20 md:pt-22">
      <div className="md:w-[65%]">
        <h1 className="text-sz-xl mb-6 leading-tight">
          Crafting seamless experiences for{" "}
          <span className="gradient-highlight">the digital world</span>
        </h1>

        <p className="flex flex-wrap text-sz-md justify-center font-medium mb-12 md:mb-16 tracking-normal">
          I&apos;m Divine Obiorah, a Frontend Developer building clean,
          responsive and interactive web experiences.
        </p>

        <div>
          <Link
            href="/#projects"
            onClick={handleExplore}
            className="inline-block bg-foreground el-shadow text-card text-base font-bold rounded-xl px-8 py-4 focus:ring-accent hover:scale-105 transition-transform duration-300"
          >
            Explore my work
          </Link>
        </div>
      </div>
    </section>
  );
}
