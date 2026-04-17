"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { getFeaturedProjects } from "@/lib/projects";

const featured = getFeaturedProjects();

export default function Projects() {
  return (
    <section id="projects" className="px-32 py-16 mb-40">
      <motion.h2
        className="text-4xl font-normal text-center mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-2 gap-8 mb-16">
        {featured.map((project, index) => (
          <motion.div
            key={project.slug}
            className="bg-[#010622] overflow-hidden shadow-[0_0_8px_#e889e5] hover:shadow-[0_0_18px_#e889e5] transition-all duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Link href={`/projects/${project.slug}`}>
              <div className="relative w-full h-52">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-3 text-[#9aa1c7]">
                  {project.title}
                </h3>
                <p className="text-sm text-[#c6c4cc] mb-4">
                  {project.shortDescription}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 bg-[#020a3a] text-[#82edf9]"
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
          className="text-white text-base px-10 py-5 bg-btn-bg shadow-[0_0_8px_#e889e5] hover:scale-110 transition-transform duration-300"
        >
          View all projects
        </Link>
      </div>
    </section>
  );
}
