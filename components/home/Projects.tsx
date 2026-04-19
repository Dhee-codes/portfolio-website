"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { getFeaturedProjects } from "@/lib/projects";
import { ProjectCard } from "../ui/ProjectCard";

const featured = getFeaturedProjects();

export default function Projects() {
  return (
    <section id="projects" className="px-8 md:px-32 py-16 mb-20 md:mb-32">
      <motion.h2
        className="text-sz-sect text-center mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 mb-16">
        {featured.map((project, index) => (
          <motion.div
            key={project.slug}
            className="bg-primary/10 overflow-hidden hover:el-shadow transition-all duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <ProjectCard project={project} />
          </motion.div>
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
