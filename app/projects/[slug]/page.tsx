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
    title: `${project.title} | Divine Obiorah`,
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

      <h1 className="text-sz-sect text-center mb-12 md:mb-20">
        {project.title}
      </h1>

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
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66.67vw, 33vw"
              className="object-cover"
            />
          )}
        </div>
        <div className="lg:col-span-3">
          <div className="text-sz-md">
            <h3 className="mb-4">Brief</h3>
            <p className="mb-12">{project.description}</p>
          </div>
          {project.approach && (
            <div className="text-sz-md">
              <h3 className="mb-4">Approach</h3>
              <p className="mb-12">{project.approach}</p>
            </div>
          )}
          {project.challenges && (
            <div className="text-sz-md">
              <h3 className="mb-4">Challenges</h3>
              <ul className="mb-12 list-disc list-outside pl-6">
                {project.challenges.map((challenge) => (
                  <li key={challenge} className="pl-2 md:pl-4 mb-2">
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="lg:row-start-1 lg:col-start-3">
          <h3 className="text-sz-md mb-4">Tech Stack</h3>
          <div className="mb-12">
            <StackList stack={project.techStack} />
          </div>
          <h3 className="text-sz-md mb-4">Links</h3>
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
