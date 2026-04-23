import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ArrowUpRight } from "lucide-react";
import { getProjectBySlug, projects } from "@/lib/projects";
import { notFound } from "next/navigation";
import { StackList } from "@/components/ui/StackList";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} | DheeCodes`,
    description: project.shortDescription,
  };
}

interface LinkBtnProps {
  label: string;
  href: string;
  className?: string;
}

const LinkBtn = ({ label, href, className = "" }: LinkBtnProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex justify-between items-center text-card text-sm font-semibold px-6 py-3 text-center hover:scale-105 transition-transform duration-300 ${className}`}
    >
      {label} <ArrowUpRight className="size-4" />
    </a>
  );
};

export default async function ProjectDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <main className="px-8 md:px-12 lg:px-32 py-30 md:py-40">
      <Link
        href="/projects"
        className="text-lg mb-10 inline-block hover:underline"
      >
        <span className="flex justify-center items-center gap-4">
          <ChevronLeft /> Back to projects
        </span>
      </Link>
      <div className="relative w-full aspect-video mb-12">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16">
        <div className="md:col-span-2">
          <h1 className="text-sz-lg mb-6">{project.title}</h1>
          <p className="text-sz-md mb-12">{project.fullDescription}</p>
          <h3 className="text-sz-subsect mb-4">My Role</h3>
          <p className="text-sz-md mb-12">{project.role}</p>
          <h3 className="text-sz-subsect mb-4">Challenges</h3>
          <p className="text-sz-md mb-12">{project.challenges}</p>
        </div>
        <div>
          <h3 className="text-sz-subsect mb-6">Tech Stack</h3>
          <div className="mb-12">
            <StackList stack={project.techStack} />
          </div>
          <h3 className="text-sz-subsect mb-6">Links</h3>
          <div className="flex flex-col gap-4">
            {project.liveUrl && (
              <LinkBtn
                href={project.liveUrl}
                label="Live Site"
                className="bg-primary"
              />
            )}
            {project.githubUrl && (
              <LinkBtn
                href={project.githubUrl}
                label="GitHub"
                className="bg-foreground"
              />
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
