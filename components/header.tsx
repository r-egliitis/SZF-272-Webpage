"use client";

import { motion } from "motion/react";
import { Container } from "@/components/container";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteConfig } from "@/content/site";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md"
    >
      <Container className="flex h-16 items-center justify-between">
        <a href="#" className="text-sm font-semibold tracking-tight">
          {siteConfig.name}
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground sm:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <ThemeToggle />
      </Container>
    </motion.header>
  );
}
