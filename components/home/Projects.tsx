"use client";

import { getFeaturedProjects } from "@/lib/projects";
import { SectionShell } from "./SectionShell";
import { ProjectCard } from "../ui/ProjectCard";
import { LinkBtn } from "../ui/Button";

const featured = getFeaturedProjects();

export const Projects = () => {
  return (
    <SectionShell id="projects" header="Projects">
      <div
        id="projects"
        className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-x-8 gap-y-16 mb-16"
      >
        {featured.map((project) => (
          <ProjectCard project={project} key={project.slug} />
        ))}
      </div>

      <div className="flex justify-center">
        <LinkBtn
          href="/projects"
          label="View all projects"
          className="max-sm:w-full bg-primary"
        />
      </div>
    </SectionShell>
  );
}
