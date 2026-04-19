export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  role: string;
  challenges: string;
  techStack: string[];
  liveUrl: string;
  githubUrl?: string;
  featured: boolean;
  coverImage: string;
  images: string[];
};

export const projects: Project[] = [
  {
    slug: "chuks-kitchen",
    title: "Chuks Kitchen",
    shortDescription:
      "A high-fidelity Nigerian food ordering platform frontend built from a complex Figma spec, featuring advanced filtering logic and a modular component library.",
    fullDescription:
      "Chuks Kitchen is a food ordering platform frontend I built during my internship at Trueminds Innovations Ltd. The project involved translating a detailed Figma spec into a fully responsive interface using Next.js App Router, TypeScript, Tailwind CSS, Shadcn UI, and Radix primitives. I implemented advanced client-side filtering logic including derived virtual categories like 'Popular Items' rendered via array reduction. The project is structured with route groups, shared utilities, and a modular component library built for long-term maintainability.",
    role: "Frontend developer, responsible for implementing the full UI from Figma designs including responsive layouts, accessible components, and client-side filtering logic.",
    challenges:
      "Implementing derived virtual menu categories that don't exist in the data but are computed dynamically from it, required thinking carefully about data transformation and rendering logic.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://chuks-kitchen-gamma.vercel.app/",
    githubUrl: "https://github.com/Dhee-codes/chuks-kitchen",
    featured: true,
    coverImage: "/images/projects/chuks-kitchen.png",
    images: [],
  },
  {
    slug: "nerstagric",
    title: "NerstAgric",
    shortDescription:
      "A full multi-page marketing website for a Nigerian agribusiness consulting firm, featuring a blog system designed for CMS integration.",
    fullDescription:
      "NerstAgric is a marketing and consulting website built for an agribusiness firm during my internship at Int+ Technology Limited. I built the full site from Figma designs, Landing, About, Services, Contact, Blog, and Blog Detail pages. The blog section was architected for Sanity.io CMS integration, with dynamic routing already in place for when the client's content pipeline was ready. The project involved working with real partner and client data, agricultural imagery, and a contact form with multiple input fields.",
    role: "Sole frontend developer, responsible for all pages from Figma to deployment.",
    challenges:
      "Setting up a blog routing system designed to connect to a CMS that was never provisioned during the internship, requiring me to structure the code in a way that would make future integration straightforward.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://nerstagric.vercel.app/",
    featured: true,
    coverImage: "/images/projects/nerstagric.png",
    images: [],
  },
  {
    slug: "spryone",
    title: "SpryOne",
    shortDescription:
      "A responsive marketing website for a Nigerian creative agency, built independently from Figma designs during my internship at Int+ Technology Limited.",
    fullDescription:
      "SpryOne is a creative agency website I built as the sole developer during my internship at Int+ Technology Limited. Working from Figma designs, I implemented a fully responsive multi-page site covering Home, Services, Projects, About, and Contact pages. The project involved translating complex multi-breakpoint layouts into production-ready code, implementing fluid typography, and following accessibility fundamentals including semantic HTML and proper spacing. It was my first experience independently owning an entire codebase from design to deployment.",
    role: "Sole frontend developer, responsible for the entire frontend implementation from Figma designs to deployment.",
    challenges:
      "Translating a design-heavy layout with multiple breakpoints into clean, maintainable code while maintaining pixel accuracy across screen sizes.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://spryone.vercel.app/",
    featured: true,
    coverImage: "/images/projects/spryone.png",
    images: [],
  },
];

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured).slice(0, 4);
}

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
