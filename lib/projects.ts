export interface Project {
  slug: string;
  title: string;
  summary: string;
  description: string;
  techStack: string[];
  myUrl: string;
  officialUrl?: string;
  githubUrl?: string;
  demoVideo?: string;
  coverImage: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "nerstagric",
    title: "NerstAgric",
    summary:
      "A full multi-page marketing website for a Nigerian agribusiness consulting firm, featuring a blog system designed for CMS integration.",
    description:
      "NerstAgric is a marketing and consulting website built for an agribusiness firm during my internship at Int+ Technology Limited. I built the full site from Figma designs, Landing, About, Services, Contact, Blog, and Blog Detail pages. The blog section was architected for Sanity.io CMS integration, with dynamic routing already in place for when the client's content pipeline was ready. The project involved working with real partner and client data, agricultural imagery, and a contact form with multiple input fields.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    myUrl: "https://nerstagric.vercel.app/",
    officialUrl: "https://nerstagric.com/",
    featured: true,
    coverImage: "/images/projects/nerstagric.png",
  },
  {
    slug: "chuks-kitchen",
    title: "Chuks Kitchen",
    summary:
      "A high-fidelity Nigerian food ordering platform frontend built from a complex Figma spec, featuring advanced filtering logic and a modular component library.",
    description:
      "Chuks Kitchen is a food ordering platform frontend I built during my internship at Trueminds Innovations Ltd. The project involved translating a detailed Figma spec into a fully responsive interface. I used Next.js App Router, TypeScript, Tailwind CSS, Shadcn UI, and Radix primitives, implementing advanced client-side filtering logic including derived virtual categories like 'Popular Items' rendered via array reduction. The project is structured with route groups, shared utilities, and a modular component library built for long-term maintainability.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    myUrl: "https://chuks-kitchen-gamma.vercel.app/",
    githubUrl: "https://github.com/Dhee-codes/chuks-kitchen",
    featured: true,
    coverImage: "/images/projects/chuks-kitchen.png",
  },
  {
    slug: "spryone",
    title: "SpryOne",
    summary:
      "A responsive marketing website for a Nigerian creative agency, built independently from Figma designs during my internship at Int+ Technology Limited.",
    description:
      "SpryOne is a creative agency website I built as the sole developer during my internship at Int+ Technology Limited. Working from Figma designs, I implemented a fully responsive multi-page site covering Home, Services, Projects, About, and Contact pages. The project involved translating complex multi-breakpoint layouts into production-ready code, implementing fluid typography, and following accessibility fundamentals including semantic HTML and proper spacing. It was my first experience independently owning an entire codebase from design to deployment.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    myUrl: "https://spryone.vercel.app/",
    featured: true,
    coverImage: "/images/projects/spryone.png",
  },
];

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured).slice(0, 6);
}

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
