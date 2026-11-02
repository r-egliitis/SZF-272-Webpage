"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { fadeInUp } from "@/lib/motion";

export function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeInUp}
      className={className}
    >
      {children}
    </motion.div>
  );
}
