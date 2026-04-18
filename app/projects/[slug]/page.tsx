import Image from "next/image";
import Link from "next/link";
import { getProjectBySlug, projects } from "@/lib/projects";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title: `${project.title} | DheeLabs`,
    description: project.shortDescription,
  };
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <main className="px-32 py-40">
      <Link
        href="/projects"
        className="text-[#82edf9] text-sm mb-12 inline-block hover:underline"
      >
        ← Back to projects
      </Link>

      <div className="relative w-full h-96 mb-12">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="grid grid-cols-3 gap-16">
        <div className="col-span-2">
          <h1 className="text-5xl font-normal mb-6">{project.title}</h1>
          <p className="text-lg text-[#c6c4cc] mb-12">{project.fullDescription}</p>

          <h3 className="text-2xl text-[#9aa1c7] mb-4">My Role</h3>
          <p className="text-lg text-[#c6c4cc] mb-12">{project.role}</p>

          <h3 className="text-2xl text-[#9aa1c7] mb-4">Challenges</h3>
          <p className="text-lg text-[#c6c4cc] mb-12">{project.challenges}</p>
        </div>

        <div>
          <h3 className="text-2xl text-[#9aa1c7] mb-6">Tech Stack</h3>
          <div className="flex flex-wrap gap-2 mb-12">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs px-3 py-1 bg-[#020a3a] text-[#82edf9]"
              >
                {tech}
              </span>
            ))}
          </div>

          <h3 className="text-2xl text-[#9aa1c7] mb-6">Links</h3>
          <div className="flex flex-col gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-sm px-6 py-3 text-center bg-btn-bg shadow-[0_0_8px_#e889e5] hover:scale-105 transition-transform duration-300"
              >
                Live Site →
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-sm px-6 py-3 text-center bg-[#020a3a] hover:scale-105 transition-transform duration-300"
              >
                GitHub →
              </a>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}