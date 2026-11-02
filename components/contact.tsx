"use client";

import { motion } from "motion/react";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/ui/icons";
import { siteConfig, socialLinks } from "@/content/site";

const iconMap = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  mail: MailIcon,
};

// Static placeholder — update when you swap in real content.
const COPYRIGHT_YEAR = 2026;

export function Contact() {
  return (
    <section id="contact" className="border-t border-border py-24 sm:py-32">
      <Container>
        <Reveal className="flex flex-col items-start gap-6">
          <h2 className="text-sm font-medium text-muted-foreground">
            Contact
          </h2>
          <p className="max-w-xl text-2xl leading-9 tracking-tight sm:text-3xl">
            Have a project in mind, or just want to say hi? I&apos;d love to
            hear from you.
          </p>
          <Button href={`mailto:${siteConfig.name}@example.com`}>
            Get in touch
          </Button>
          <div className="mt-4 flex gap-4">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Icon />
                </motion.a>
              );
            })}
          </div>
        </Reveal>
      </Container>
      <Container className="mt-20 flex flex-col gap-2 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© {COPYRIGHT_YEAR} {siteConfig.name}. All rights reserved.</p>
        <p>Built with Next.js</p>
      </Container>
    </section>
  );
}
