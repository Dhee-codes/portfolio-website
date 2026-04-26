import Image from "next/image";
import Breadcrumb from "@/components/ui/Breadcrumb";
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
    description: project.summary,
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
    <main className="min-h-screen px-8 md:px-12 lg:px-32 py-24 md:py-30">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: project.title },
        ]}
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-18">
        <div className="relative lg:col-span-2 w-full aspect-video mb-12">
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
        <div className="lg:col-span-3">
          <h1 className="text-sz-subsect mb-6">{project.title}</h1>
          <p className="text-sz-md mb-12">{project.description}</p>
        </div>
        <div className="lg:row-start-1 lg:col-start-3">
          <h3 className="text-sz-md mb-6">Tech Stack</h3>
          <div className="mb-12">
            <StackList stack={project.techStack} />
          </div>
          <h3 className="text-sz-md mb-6">Links</h3>
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
