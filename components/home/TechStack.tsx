"use client";

import Image from "next/image";
// import { motion } from "framer-motion";

const techs = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="px-8 md:px-12 lg:px-32 py-16 mb-16">
      <h2 className="text-sz-sect text-center mb-20">
        Tech Stack
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 md:gap-8 place-items-center">
        {techs.map((tech) => (
          <div
            key={tech.name}
            className="flex flex-col items-center gap-3 p-6 w-full bg-card rounded-sm transition-all duration-300 hover:el-shadow"
          >
            <Image
              src={tech.icon}
              alt={`${tech.name} icon`}
              width={60}
              height={60}
            />
            <span className="text-sm text-text-muted">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
