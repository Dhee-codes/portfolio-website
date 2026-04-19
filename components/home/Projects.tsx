"use client";

import Link from "next/link";
// import { motion } from "framer-motion";
import { getFeaturedProjects } from "@/lib/projects";
import { ProjectCard } from "../ui/ProjectCard";

const featured = getFeaturedProjects();

export default function Projects() {
  return (
    <section id="projects" className="px-8 md:px-32 py-16 mb-16">
      <h2 className="text-sz-sect text-center mb-20">
        Projects
      </h2>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 mb-16">
        {featured.map((project) => (
          <div
            key={project.slug}
            className="bg-primary/10 overflow-hidden hover:el-shadow transition-all duration-300 hover:scale-105"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <Link
          href="/projects"
          className="max-sm:w-full text-card text-base font-semibold text-center px-8 py-4 bg-foreground hover:scale-105 transition-transform duration-300"
        >
          View all projects
        </Link>
      </div>
    </section>
  );
}
