"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  distance?: number;
  duration?: number;
}

export default function Reveal({
  children,
  delay = 0,
  className = "",
  distance = 18,
  duration = 0.85,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={
        shouldReduceMotion
          ? false
          : {
              opacity: 0,
              y: distance,
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
              duration,
              delay,
              ease: [0.22, 1, 0.36, 1] as const,
            }
      }
    >
      {children}
    </motion.div>
  );
}