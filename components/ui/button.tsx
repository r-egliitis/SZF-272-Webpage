"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  target?: string;
  rel?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  target,
  rel,
}: ButtonProps) {
  const base =
    "inline-flex h-11 items-center justify-center gap-2 rounded-full px-6 text-sm font-medium transition-colors";
  const styles =
    variant === "primary"
      ? "bg-foreground text-background hover:opacity-90"
      : "border border-border text-foreground hover:bg-card";

  return (
    <motion.a
      href={href}
      target={target}
      rel={rel}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`${base} ${styles}`}
    >
      {children}
    </motion.a>
  );
}
