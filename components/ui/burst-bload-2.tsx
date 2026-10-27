"use client";

import React from "react";
import { motion } from "framer-motion";
import { MOTION_EASINGS } from "@/lib/motion";

export default function BurstBload2() {
  return (
    <div className="top-10 select-none">
      <svg
        width="48"
        height="50"
        viewBox="0 0 50 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="-z-10 top-0 -right-1 md:w-12 w-6 h-auto"
      >
        <motion.path
          d="M13.7851 50.2813C25.543 44.4236 38.5573 38.8147 48 29.3722"
          stroke="#25C5F2"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: MOTION_EASINGS.entrance }}
        />
        <motion.path
          d="M13.405 38.4961L19.8678 28.6118"
          stroke="#25C5F2"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.35, ease: MOTION_EASINGS.entrance }}
        />
        <motion.path
          d="M1.99995 36.2151C4.27407 30.9192 6.42076 26.2836 6.66756 20.4593C6.93219 14.2143 5.60673 8.06083 4.28094 2.00022"
          stroke="#25C5F2"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: MOTION_EASINGS.entrance }}
        />
      </svg>
    </div>
  );
}
