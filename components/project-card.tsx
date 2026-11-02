"use client";

import { motion } from "motion/react";
import { ArrowRightIcon } from "@/components/ui/icons";
import { fadeInUp } from "@/lib/motion";
import type { Project } from "@/content/site";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.a
      href={project.href}
      variants={fadeInUp}
      whileHover={{ y: -4, borderColor: "var(--card-hover-border)" }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="group flex flex-col justify-between gap-4 rounded-2xl border border-border bg-card p-6"
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold tracking-tight">
            {project.title}
          </h3>
          <ArrowRightIcon className="text-muted-foreground transition-transform group-hover:translate-x-1" />
        </div>
        <p className="text-sm leading-6 text-muted-foreground">
          {project.description}
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.a>
  );
}
