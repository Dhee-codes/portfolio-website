import Image from "next/image";
import Link from "next/link";
import { StackList } from "./StackList";
interface Project {
  slug: string;
  coverImage: string;
  title: string;
  summary: string;
  techStack: string[];
}

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="flex flex-col h-full bg-primary/10 overflow-hidden rounded-xl shadow-lg hover:el-shadow transition-all duration-300 group"
    >
      <div className="relative w-full aspect-video">
        <Image
          src={project.coverImage}
          alt={project.title}
          loading="lazy"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-all duration-500"
        />
      </div>
      <div className="flex flex-col flex-1 p-3 pb-6">
        <h3 className="text-xl mb-3 text-text-muted">{project.title}</h3>
        <p className="text-sm text-text-muted mb-4">
          {project.summary}
        </p>
        <StackList stack={project.techStack} />
      </div>
    </Link>
  );
};
