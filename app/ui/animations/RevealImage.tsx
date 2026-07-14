"use client";

import { motion } from "framer-motion";
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
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: 18,
        scale: 1.025,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.35,
      }}
      transition={{
        duration: 1.6,
        delay,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
      style={{
        transformOrigin: "center center",
      }}
    >
      {children}
    </motion.div>
  );
}