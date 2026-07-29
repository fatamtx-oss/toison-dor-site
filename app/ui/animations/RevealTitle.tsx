"use client";

import { motion, useReducedMotion } from "framer-motion";
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
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={
        shouldReduceMotion
          ? false
          : {
              opacity: 0,
              y: 24,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={
        shouldReduceMotion
          ? {
              duration: 0,
            }
          : {
              duration: 1.1,
              delay,
              ease: [0.22, 1, 0.36, 1] as const,
            }
      }
    >
      {children}
    </motion.div>
  );
}