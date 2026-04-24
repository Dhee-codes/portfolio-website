import Image from "next/image";
import { BackLink } from "@/components/ui/BackLink";
import { getProjectBySlug, projects } from "@/lib/projects";
import { notFound } from "next/navigation";
import { StackList } from "@/components/ui/StackList";
import { ExternalLinkBtn } from "@/components/ui/Button";

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
      <BackLink href="/projects" label="Back to projects" />
      <div className="relative w-full h-48 md:h-84 lg:h-102 mb-12">
        {project.demoVideo ? (
          <video
            src={project.demoVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover"
          />
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16">
        <div className="md:col-span-2">
          <h1 className="text-sz-sect mb-6">{project.title}</h1>
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
            <ExternalLinkBtn
              href={project.myUrl}
              label="Live Priview"
              className="bg-primary/60"
            />
            {project.officialUrl && (
              <ExternalLinkBtn
                label="Client Site"
                href={project.officialUrl}
                className="el-shadow"
              />
            )}
            {project.githubUrl && (
              <ExternalLinkBtn
                href={project.githubUrl}
                label="GitHub"
                className="border"
              />
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
