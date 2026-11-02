"use client";

import { motion } from "motion/react";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@/components/ui/icons";
import { siteConfig } from "@/content/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center"
      >
        <motion.div
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="h-[480px] w-[480px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, var(--accent-glow), transparent 70%)",
          }}
        />
      </div>

      <Container className="flex flex-col items-start gap-6 py-28 sm:py-36">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-sm font-medium text-muted-foreground"
        >
          {siteConfig.role}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
          className="text-5xl font-semibold tracking-tight sm:text-7xl"
        >
          {siteConfig.name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="max-w-xl text-lg leading-8 text-muted-foreground"
        >
          {siteConfig.tagline}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          className="flex flex-wrap gap-4 pt-2"
        >
          <Button href="#projects">
            View work
            <ArrowRightIcon />
          </Button>
          <Button href="#contact" variant="secondary">
            Contact
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
