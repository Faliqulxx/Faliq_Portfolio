"use client";

import React, { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { useTheme } from "@/context/theme-context";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Mencegah hydration mismatch
  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className="
        fixed top-[0.85rem] left-4 sm:top-6 sm:left-auto sm:right-8 z-[999]
        p-3 sm:p-0 sm:w-[3rem] sm:h-[3rem]
        rounded-full
        bg-white/90 dark:bg-neutral-900/90
        border border-neutral-300 dark:border-neutral-700
        text-[1.35rem] sm:text-base text-neutral-900 dark:text-neutral-100
        backdrop-blur-md
        shadow-sm
        flex items-center justify-center
        transition-all
        hover:scale-105 sm:hover:scale-100 sm:hover:-translate-y-0.5 hover:border-neutral-500
        active:-translate-y-0
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2
      "
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}