"use client";

import { motion } from "motion/react";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { ProjectCard } from "@/components/project-card";
import { staggerContainer } from "@/lib/motion";
import { projects } from "@/content/site";

export function Projects() {
  return (
    <section id="projects" className="border-t border-border py-24 sm:py-32">
      <Container>
        <Reveal>
          <h2 className="text-sm font-medium text-muted-foreground">
            Projects
          </h2>
        </Reveal>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
