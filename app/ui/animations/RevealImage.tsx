"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealImageProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function RevealImage({
  children,
  delay = 0,
  className = "",
}: RevealImageProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={
        shouldReduceMotion
          ? false
          : {
              opacity: 0,
              y: 14,
              scale: 1.015,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
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
              duration: 1.35,
              delay,
              ease: [0.22, 1, 0.36, 1] as const,
            }
      }
      style={{
        transformOrigin: "center center",
      }}
    >
      {children}
    </motion.div>
  );
}