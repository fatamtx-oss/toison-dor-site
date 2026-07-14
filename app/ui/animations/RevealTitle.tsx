"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealTitleProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function RevealTitle({
  children,
  delay = 0,
  className = "",
}: RevealTitleProps) {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: 28,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.35,
      }}
      transition={{
        duration: 1.15,
        delay,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
    >
      {children}
    </motion.div>
  );
}