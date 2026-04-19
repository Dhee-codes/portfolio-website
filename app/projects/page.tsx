import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";

export const metadata = {
  title: "Projects | DheeCodes",
  description: "All projects by Divine Obiorah.",
};

export default function ProjectsPage() {
  return (
    <main className="px-8 md:px-32 py-40">
      <h2 className="text-sz-sect text-center mb-20">All Projects</h2>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="bg-primary/10 overflow-hidden hover:el-shadow transition-all duration-300 hover:scale-105"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </main>
  );
}
