"use client";

import { getFeaturedProjects } from "@/lib/projects";
import { SectionShell } from "./SectionShell";
import { ProjectCard } from "../ui/ProjectCard";
import { LinkBtn } from "../ui/Button";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp } from "@/lib/motionVariants";

const featured = getFeaturedProjects();

export const Projects = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <SectionShell id="projects" header="Selected Works">
      <div
        id="projects"
        className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-x-8 gap-y-16 mb-16"
      >
        {featured.map((project, index) => (
          <motion.div
            key={project.slug}
            variants={fadeUp}
            initial={prefersReducedMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center">
        <LinkBtn
          href="/projects"
          label="View more projects"
          className="max-sm:w-full bg-primary"
        />
      </div>
    </SectionShell>
  );
}
