export interface Project {
  slug: string;
  title: string;
  summary: string;
  description: string;
  approach?: string;
  challenges?: string[];
  techStack: string[];
  myUrl: string;
  officialUrl?: string;
  githubUrl?: string;
  demoVideo?: string;
  coverImage: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "nerstagric",
    title: "NerstAgric",
    summary:
      "A full multi-page marketing website for a Nigerian agribusiness consulting firm, built independently from Figma designs with self-directed responsive implementation.",
    description:
      "NerstAgric is a marketing and consulting website built during my internship at Int+ Technology Limited. The project covered six pages; Landing, About, Services, Contact, Blog, and Blog Detail, translated directly from Figma designs into a production-ready Next.js application.",
    approach:
      "The blog section was architected with dynamic routing and structured for future Sanity.io CMS integration, with the content pipeline to be connected after delivery. The site works with real client data, partner information, and agricultural imagery throughout.",
    challenges: [
      "No mobile designs were provided in the Figma, responsive layouts across all pages were designed and implemented independently.",
      "Several design instructions were incomplete or absent, requiring judgment calls on component behavior, spacing, and interactive states.",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    myUrl: "https://nerstagric.vercel.app/",
    officialUrl: "https://nerstagric.com/",
    coverImage: "/images/projects/nerstagric.png",
    featured: true,
  },
  {
    slug: "chuks-kitchen",
    title: "Chuks Kitchen",
    summary:
      "A high-fidelity food ordering platform frontend built from a complex Figma spec, featuring URL-driven filtering logic and a modular component architecture.",
    description:
      "Chuks Kitchen is a food ordering platform frontend built during my internship at Trueminds Innovations Ltd. The project focused on design-to-code translation across the core pages; Onboarding, Sign In, Sign Up, Home, and Menu, with full mobile responsiveness and type-safe implementation throughout.",
    approach:
      "Category filtering is driven by URL search params, allowing filtered views to be bookmarked and shared without a global state manager. The 'Popular' category is a virtual filter, not a real data category, implemented using an isPopular flag and array reduction to group items dynamically. Route groups keep auth and main app layouts cleanly separated.",
    challenges: [
      "The Figma presented 'Popular' as a sibling category to food types, which would have produced a flat, confusing list. I implemented a grouped view that maintains menu structure while surfacing popular items correctly.",
      "Synchronizing active category state with URL parameters required careful state initialization to avoid cascading renders during navigation.",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
    myUrl: "https://chuks-kitchen-gamma.vercel.app/",
    githubUrl: "https://github.com/Dhee-codes/chuks-kitchen",
    coverImage: "/images/projects/chuks-kitchen.png",
    featured: true,
  },
  {
    slug: "spryone",
    title: "SpryOne",
    summary:
      "A responsive multi-page marketing website for a creative agency, built independently as sole developer from Figma designs during my internship at Int+ Technology Limited.",
    description:
      "SpryOne is a creative agency website I built as the sole developer during my internship at Int+ Technology Limited. The project covered five pages; Home, Services, Projects, About, and Contact, implemented from Figma designs into a production-ready Next.js application.",
    approach:
      "The implementation prioritized multi-breakpoint layouts, fluid typography, and accessibility fundamentals including semantic HTML, proper heading hierarchy, and readable spacing. It was my first experience owning an entire codebase independently from design handoff to deployment.",
    challenges: [
      "No mobile designs were provided, all responsive layouts were designed and implemented independently across every page.",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    myUrl: "https://spryone.vercel.app/",
    coverImage: "/images/projects/spryone.png",
    featured: true,
  },
];

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured).slice(0, 6);
}

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
