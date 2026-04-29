import { Icon } from "@iconify/react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionShell } from "./SectionShell";

const techGroups = [
  {
    group: "Languages",
    techs: [
      { name: "HTML5", icon: "devicon:html5" },
      { name: "CSS3", icon: "devicon:css3" },
      { name: "JavaScript", icon: "devicon:javascript" },
      { name: "TypeScript", icon: "devicon:typescript" },
    ],
  },
  {
    group: "Frameworks & Libraries",
    techs: [
      { name: "Next.js", icon: "devicon:nextjs", invert: true },
      { name: "React", icon: "devicon:react" },
      { name: "Framer Motion", icon: "devicon:framermotion", invert: true },
    ],
  },
  {
    group: "UI & Styling",
    techs: [
      { name: "Tailwind CSS", icon: "devicon:tailwindcss" },
      { name: "Shadcn UI", icon: "simple-icons:shadcnui" },
    ],
  },
  {
    group: "Tools & Workflow",
    techs: [
      { name: "Git", icon: "devicon:git" },
      { name: "GitHub", icon: "devicon:github", invert: true },
      { name: "Figma", icon: "devicon:figma" },
      { name: "VS Code", icon: "devicon:vscode" },
      { name: "Linux", icon: "devicon:linux" },
    ],
  },
];

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 16 },
  visible: { opacity: 1, x: 0 },
};

export const TechStack = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <SectionShell id="tech-stack" header="Technologies">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {techGroups.map((group) => (
          <div key={group.group} className="bg-card rounded-2xl p-6 shadow-lg">
            <h3 className="text-sz-md font-medium mb-4 text-primary">
              {group.group}
            </h3>
            <div className="w-full h-px bg-primary mb-6" />
            <motion.ul
              className="flex flex-col gap-4"
              variants={listVariants}
              initial={prefersReducedMotion ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true }}
            >
              {group.techs.map((tech) => (
                <motion.li
                  key={tech.name}
                  className="flex items-center gap-6"
                  variants={itemVariants}
                  transition={{ duration: 0.4 }}
                >
                  <Icon
                    icon={tech.icon}
                    className={`w-5 h-5 shrink-0 ${tech.invert ? "dark:invert" : ""}`}
                  />
                  <span className="text-sm text-text-muted">{tech.name}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        ))}
      </div>
    </SectionShell>
  );
};
