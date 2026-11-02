export type Project = {
  title: string;
  description: string;
  tags: string[];
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail";
};

export const siteConfig = {
  name: "Your Name",
  role: "Software Engineer",
  tagline: "I build clean, fast, thoughtful software.",
  bio: "Placeholder bio — a couple of sentences about who you are, what you work on, and what you care about. Swap this out with your own introduction whenever you're ready.",
};

export const projects: Project[] = [
  {
    title: "Project One",
    description: "A short, one-line placeholder description of what this project does and why it matters.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    href: "#",
  },
  {
    title: "Project Two",
    description: "A short, one-line placeholder description of what this project does and why it matters.",
    tags: ["React", "Node.js", "PostgreSQL"],
    href: "#",
  },
  {
    title: "Project Three",
    description: "A short, one-line placeholder description of what this project does and why it matters.",
    tags: ["Python", "API", "Docker"],
    href: "#",
  },
];

export const skillCategories: { label: string; items: string[] }[] = [
  { label: "Languages", items: ["TypeScript", "JavaScript", "Python", "SQL"] },
  { label: "Frameworks", items: ["Next.js", "React", "Node.js", "Tailwind CSS"] },
  { label: "Tools", items: ["Git", "Docker", "Vercel", "Figma"] },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com/", icon: "linkedin" },
  { label: "Email", href: "mailto:you@example.com", icon: "mail" },
];
