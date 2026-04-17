import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/projects";

export const metadata = {
  title: "Projects | DheeCodes",
  description: "All projects by Divine Obiorah.",
};

export default function ProjectsPage() {
  return (
    <main className="px-32 py-40">
      <h2 className="text-4xl font-normal text-center mb-20">All Projects</h2>

      <div className="grid grid-cols-2 gap-8">
        {projects.map((project) => (
          <Link key={project.slug} href={`/projects/${project.slug}`}>
            <div className="bg-[#010622] overflow-hidden shadow-[0_0_8px_#e889e5] hover:shadow-[0_0_18px_#e889e5] hover:scale-105 transition-all duration-300">
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
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
