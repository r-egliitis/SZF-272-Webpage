"use client";

import { motion } from "motion/react";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { skillCategories } from "@/content/site";

export function Skills() {
  return (
    <section id="skills" className="border-t border-border py-24 sm:py-32">
      <Container>
        <Reveal>
          <h2 className="text-sm font-medium text-muted-foreground">
            Skills
          </h2>
        </Reveal>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="mt-8 grid gap-10 sm:grid-cols-3"
        >
          {skillCategories.map((category) => (
            <motion.div key={category.label} variants={fadeInUp}>
              <h3 className="text-sm font-medium text-foreground">
                {category.label}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
