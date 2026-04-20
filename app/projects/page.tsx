import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";

export const metadata = {
  title: "Projects | DheeCodes",
  description: "All projects by Divine Obiorah.",
};

export default function Projects() {
  return (
    <main className="px-8 md:px-12 lg:px-32 py-30 md:py-40">
      <Link href="/" className="text-lg mb-10 inline-block hover:underline">
        <span className="flex justify-center items-center gap-4">
          <ChevronLeft /> Back to home
        </span>
      </Link>

      <h2 className="text-sz-sect text-center mb-12 md:mb-20">All Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-x-8 gap-y-16">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.slug} />
        ))}
      </div>
    </main>
  );
}
