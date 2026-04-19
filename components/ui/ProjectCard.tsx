import Image from "next/image";
import Link from "next/link";

interface Project {
  slug: string;
  coverImage: string;
  title: string;
  shortDescription: string;
  techStack: string[];
}

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="flex flex-col h-full bg-primary/10 overflow-hidden hover:el-shadow transition-all duration-300 group"
    >
      <div className="relative w-full aspect-video">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-all duration-500"
        />
      </div>
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-xl mb-3 text-text-muted">{project.title}</h3>
        <p className="text-sm text-text-muted mb-4">
          {project.shortDescription}
        </p>
        <div className="flex flex-wrap mt-auto gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-3 py-1 bg-primary-shade text-accent font-semibold"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};
