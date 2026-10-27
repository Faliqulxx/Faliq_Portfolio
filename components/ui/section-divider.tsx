"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

export default function SectionDivider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 95%", "end 65%"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 0.9], [0.2, 1]);
  const dotOpacity = useTransform(scrollYProgress, [0.85, 1], [0, 1]);
  const dotScale = useTransform(scrollYProgress, [0.85, 1], [0, 1]);

  if (prefersReduced) {
    return (
      <div className="my-6 hidden sm:flex flex-col items-center">
        <div className="bg-gray-200 h-16 w-1 rounded-full dark:bg-neutral-800" />
        <div className="w-1.5 h-1.5 rounded-full bg-neutral-800 dark:bg-neutral-200 mt-1" />
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="my-6 hidden sm:flex flex-col items-center select-none"
    >
      <div className="h-16 w-1 bg-gray-200/50 dark:bg-neutral-800/50 rounded-full overflow-hidden relative">
        <motion.div
          style={{ scaleY, transformOrigin: "top" }}
          className="w-full h-full bg-neutral-900 dark:bg-neutral-100 rounded-full"
        />
      </div>

      <motion.div
        style={{ opacity: dotOpacity, scale: dotScale }}
        className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-neutral-100 mt-1.5"
      />
    </div>
  );
}
