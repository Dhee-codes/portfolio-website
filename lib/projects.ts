export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  role: string;
  challenges: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  coverImage: string;
  images: string[];
};

export const projects: Project[] = [
  {
    slug: "spryone",
    title: "SpryOne",
    shortDescription:
      "A creative agency website built independently as sole developer during my internship.",
    fullDescription: "",
    role: "",
    challenges: "",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "",
    githubUrl: "",
    featured: true,
    coverImage: "/images/projects/spryone.png",
    images: [],
  },
  {
    slug: "chuks-kitchen",
    title: "Chuks Kitchen",
    shortDescription: "",
    fullDescription: "",
    role: "",
    challenges: "",
    techStack: [],
    liveUrl: "",
    githubUrl: "",
    featured: true,
    coverImage: "/images/projects/chuks-kitchen.png",
    images: [],
  },
  {
    slug: "nerstagric",
    title: "NerstAgric",
    shortDescription: "",
    fullDescription: "",
    role: "",
    challenges: "",
    techStack: [],
    liveUrl: "",
    githubUrl: "",
    featured: true,
    coverImage: "/images/projects/nerstagric.png",
    images: [],
  },
];

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured).slice(0, 4);
}

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
