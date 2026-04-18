"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { getFeaturedProjects } from "@/lib/projects";

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
            className="bg-primary-grey overflow-hidden hover:el-shadow transition-all duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Link href={`/projects/${project.slug}`}>
              <div className="relative w-full aspect-video">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-3 text-text-muted">
                  {project.title}
                </h3>
                <p className="text-sm text-text-muted mb-4">
                  {project.shortDescription}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 bg-primary-shade text-accent font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center">
        <Link
          href="/projects"
          className="max-sm:w-full text-card text-base text-center px-8 py-4 bg-foreground hover:scale-105 transition-transform duration-300"
        >
          View all projects
        </Link>
      </div>
    </section>
  );
}
