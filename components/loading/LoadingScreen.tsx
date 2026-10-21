"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const INTRO_SESSION_KEY = "portfolio_intro_shown";

export type LoadingStage = "particles" | "connect" | "reveal" | "exit";

// Arah awal tiap huruf — deterministic (tidak pakai Math.random di render)
// supaya tidak ada hydration mismatch
// Format: { x: offset horizontal, y: offset vertikal }
// FALIQUL = 7 huruf, spasi, ISHBAH = 6 huruf → 14 karakter
const CHAR_ORIGINS: { x: number; y: number }[] = [
  { x: -120, y: 0 },    // F  — dari kiri
  { x: 0, y: -100 },    // A  — dari atas
  { x: 0, y: 100 },     // L  — dari bawah
  { x: 120, y: 0 },     // I  — dari kanan
  { x: -100, y: -80 },  // Q  — dari atas-kiri
  { x: 0, y: 120 },     // U  — dari bawah
  { x: 100, y: -80 },   // L  — dari atas-kanan
  { x: 0, y: 0 },       // (spasi) — diam di tempat
  { x: -120, y: 60 },   // I  — dari bawah-kiri
  { x: 0, y: -100 },    // S  — dari atas
  { x: 120, y: 80 },    // H  — dari bawah-kanan
  { x: -80, y: 100 },   // B  — dari bawah
  { x: 0, y: -100 },    // A  — dari atas
  { x: 120, y: 0 },     // H  — dari kanan
];

const NAME = "FALIQUL ISHBAH";
const CHARS = NAME.split("");
const STAGGER = 0.075; // Delay antar kemunculan huruf

function hasShownIntro(): boolean {
  if (process.env.NODE_ENV === "development") return false;
  if (typeof window === "undefined") return false;
  try {
    const navEntries = performance.getEntriesByType("navigation");
    if (navEntries.length > 0 && (navEntries[0] as PerformanceNavigationTiming).type === "reload") {
      return true;
    }
    if ((performance as any).navigation?.type === 1) {
      return true;
    }
    return sessionStorage.getItem(INTRO_SESSION_KEY) === "true";
  } catch {
    return false;
  }
}

function markIntroShown(): void {
  if (process.env.NODE_ENV === "development") return;
  if (typeof window === "undefined") return;
  try {
    sessionStorage.setItem(INTRO_SESSION_KEY, "true");
    document.documentElement.classList.add("intro-skipped");
  } catch {}
}

export default function LoadingScreen() {
  const prefersReducedMotion = !!useReducedMotion();
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [visible, setVisible] = useState(true);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      try {
        sessionStorage.removeItem(INTRO_SESSION_KEY);
        document.documentElement.classList.remove("intro-skipped");
      } catch {}
    }

    // Check if user already saw the intro this session or if it's a page refresh
    if (hasShownIntro()) {
      markIntroShown();
      setVisible(false);
      return;
    }

    // Immediately mark intro as shown for this session so refresh never triggers it
    markIntroShown();

    if (prefersReducedMotion) {
      const quickTimer = setTimeout(() => {
        markIntroShown();
        setVisible(false);
      }, 500);
      return () => clearTimeout(quickTimer);
    }

    // Lock body scroll while loading
    document.body.style.overflow = "hidden";

    // Smooth organic progress counter from 0 to 100
    const startTime = performance.now();
    const duration = 2300; // 2.3 detik durasi total loading

    const updateProgress = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const rawRatio = Math.min(elapsed / duration, 1);

      // Custom easing curve: quick start, steady middle, slight ease near 100%
      const easedRatio =
        rawRatio < 0.5
          ? 2 * rawRatio * rawRatio
          : 1 - Math.pow(-2 * rawRatio + 2, 2) / 2;

      const currentProgress = Math.min(Math.round(easedRatio * 100), 100);
      setProgress(currentProgress);

      if (rawRatio < 1) {
        animationFrameRef.current = requestAnimationFrame(updateProgress);
      } else {
        // Reached 100% -> jeda sejenak lalu fade out
        setTimeout(() => {
          setIsFadingOut(true);
        }, 250);
      }
    };

    animationFrameRef.current = requestAnimationFrame(updateProgress);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      document.body.style.overflow = "";
    };
  }, [prefersReducedMotion]);

  // Clean up body overflow when fading out finishes
  useEffect(() => {
    if (!visible) {
      document.body.style.overflow = "";
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <AnimatePresence onExitComplete={() => setVisible(false)}>
      {!isFadingOut ? (
        <motion.div
          id="portfolio-loading-screen"
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[99999] flex flex-col justify-between overflow-hidden select-none bg-[#f3f3f3] dark:bg-[#0c0c0c] text-neutral-900 dark:text-neutral-100"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at center, rgba(255,255,255,0.92) 0%, rgba(242,242,242,0.95) 55%, rgba(226,226,226,1) 100%)",
          }}
          onAnimationComplete={() => {
            if (isFadingOut) {
              markIntroShown();
              setVisible(false);
            }
          }}
        >
          {/* Subtle noise/texture overlay for tactile luxury paper feel */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.035] dark:opacity-[0.05]"
            style={{
              backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
              backgroundSize: "16px 16px",
            }}
          />

          {/* ── TOP SECTION (Corner tags) ── */}
          <div className="relative z-20 flex items-start justify-between w-full p-6 sm:p-10 md:p-14">
            {/* Top Left: Subtitle / Roles with dash prefix */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-2"
            >
              <span className="w-3.5 h-[1.5px] bg-neutral-700 dark:bg-neutral-300 inline-block" />
              <p className="text-[9px] sm:text-[11px] font-mono tracking-[0.25em] text-neutral-600 dark:text-neutral-400 uppercase font-medium">
                WEB DEVELOPER &nbsp;/&nbsp; DATA SCIENTIST &nbsp;/&nbsp; ANALYST
              </p>
            </motion.div>

            {/* Top Right: Minimalist Indicator (Dark Dash + Light Dash) */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex items-center gap-1.5"
            >
              <span className="w-4 sm:w-5 h-[2px] bg-neutral-900 dark:bg-neutral-100 rounded-full" />
              <span className="w-4 sm:w-5 h-[2px] bg-neutral-300 dark:bg-neutral-700 rounded-full" />
            </motion.div>
          </div>

          {/* ── CENTER SECTION (Abstract Geometric Artwork + Typography) ── */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 -mt-4">
            {/* ── Background Geometric Artwork Behind the Text ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none select-none -z-10 overflow-visible"
            >
              <svg
                viewBox="0 0 640 400"
                className="w-[380px] sm:w-[560px] md:w-[680px] lg:w-[760px] h-auto max-w-[96vw] overflow-visible"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Upper-left slab gradient */}
                  <linearGradient id="slab1-grad" x1="0%" y1="0%" x2="20%" y2="100%">
                    <stop offset="0%" stopColor="#cfd2d6" stopOpacity="0.9" />
                    <stop offset="45%" stopColor="#e2e5e9" stopOpacity="0.55" />
                    <stop offset="80%" stopColor="#f3f4f6" stopOpacity="0.12" />
                    <stop offset="100%" stopColor="#f3f4f6" stopOpacity="0" />
                  </linearGradient>

                  {/* Lower-right slab gradient */}
                  <linearGradient id="slab2-grad" x1="0%" y1="0%" x2="20%" y2="100%">
                    <stop offset="0%" stopColor="#cfd2d6" stopOpacity="0.92" />
                    <stop offset="40%" stopColor="#e2e5e9" stopOpacity="0.55" />
                    <stop offset="78%" stopColor="#f3f4f6" stopOpacity="0.12" />
                    <stop offset="100%" stopColor="#f3f4f6" stopOpacity="0" />
                  </linearGradient>

                  {/* Dark mode variants */}
                  <linearGradient id="slab1-grad-dark" x1="0%" y1="0%" x2="20%" y2="100%">
                    <stop offset="0%" stopColor="#303030" stopOpacity="0.85" />
                    <stop offset="45%" stopColor="#222222" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#141414" stopOpacity="0" />
                  </linearGradient>

                  <linearGradient id="slab2-grad-dark" x1="0%" y1="0%" x2="20%" y2="100%">
                    <stop offset="0%" stopColor="#303030" stopOpacity="0.85" />
                    <stop offset="45%" stopColor="#222222" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#141414" stopOpacity="0" />
                  </linearGradient>

                  {/* Ambient soft shadow */}
                  <filter id="artwork-shadow" x="-30%" y="-30%" width="160%" height="160%">
                    <feDropShadow dx="-4" dy="18" stdDeviation="22" floodColor="#000000" floodOpacity="0.08" />
                  </filter>
                </defs>

                <g filter="url(#artwork-shadow)">
                  {/* 1. Upper Left Parallelogram Slab */}
                  <polygon
                    points="248,96 342,96 244,300 178,300"
                    className="fill-[url(#slab1-grad)] dark:fill-[url(#slab1-grad-dark)]"
                  />

                  {/* 2. Lower Right Parallelogram Slab */}
                  <polygon
                    points="356,122 422,122 338,306 272,306"
                    className="fill-[url(#slab2-grad)] dark:fill-[url(#slab2-grad-dark)]"
                  />
                </g>
              </svg>
            </motion.div>

            {/* ── Main Name: Animasi huruf muncul satu per satu dari berbagai arah ── */}
            <h1
              className="flex items-baseline justify-center flex-wrap text-3xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-black tracking-tight text-neutral-950 dark:text-white uppercase leading-none drop-shadow-xs"
              aria-label="FALIQUL ISHBAH"
            >
              {CHARS.map((char, i) => {
                const origin = CHAR_ORIGINS[i] ?? { x: 0, y: -60 };

                if (char === " ") {
                  return (
                    <span key={i} className="inline-block w-[0.3em] sm:w-[0.35em]" aria-hidden="true" />
                  );
                }

                return (
                  <motion.span
                    key={i}
                    className="inline-block"
                    initial={{
                      opacity: 0,
                      x: origin.x,
                      y: origin.y,
                      scale: 0.6,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      y: 0,
                      scale: 1,
                    }}
                    transition={{
                      delay: i * STAGGER,
                      duration: 0.55,
                      ease: [0.22, 1, 0.36, 1], // spring-like smooth landing
                    }}
                  >
                    {char}
                  </motion.span>
                );
              })}
            </h1>

            {/* Subtitle: PORTFOLIO (muncul setelah seluruh huruf FALIQUL ISHBAH mendarat) */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: CHARS.length * STAGGER + 0.08,
                duration: 0.5,
                ease: "easeOut",
              }}
              className="text-[11px] sm:text-xs md:text-sm font-semibold tracking-[0.45em] sm:tracking-[0.55em] text-neutral-600 dark:text-neutral-400 uppercase mt-3 sm:mt-4 mb-7 sm:mb-8 pl-[0.45em] sm:pl-[0.55em]"
            >
              PORTFOLIO
            </motion.p>

            {/* Progress Bar Container */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0.8 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative w-44 sm:w-60 md:w-68 max-w-[70vw] h-[2px] sm:h-[2.5px] bg-neutral-300/80 dark:bg-neutral-800 rounded-full overflow-hidden"
            >
              {/* Active Progress Fill */}
              <div
                className="h-full bg-neutral-950 dark:bg-white rounded-full transition-[width] duration-75 ease-out"
                style={{ width: `${progress}%` }}
              />
            </motion.div>

            {/* Loading Percentage Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="text-[10px] sm:text-[11px] font-mono tracking-[0.3em] text-neutral-500 dark:text-neutral-400 uppercase mt-3 sm:mt-3.5 pl-[0.3em]"
            >
              LOADING &nbsp;{progress}%
            </motion.p>
          </div>

          {/* ── BOTTOM SECTION (Corner tags) ── */}
          <div className="relative z-20 flex items-end justify-between w-full p-6 sm:p-10 md:p-14">
            {/* Bottom Left: Tagline followed by thin horizontal rule */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3"
            >
              <p className="text-[9px] sm:text-[11px] font-mono tracking-[0.25em] text-neutral-600 dark:text-neutral-400 uppercase font-medium">
                BUILD &nbsp;/&nbsp; ANALYZE &nbsp;/&nbsp; VISUALIZE
              </p>
              <span className="w-10 sm:w-16 h-[1px] bg-neutral-300 dark:bg-neutral-700 hidden xs:inline-block" />
            </motion.div>

            {/* Bottom Right: Year with dash prefix */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex items-center gap-2"
            >
              <span className="w-3.5 h-[1.5px] bg-neutral-700 dark:bg-neutral-300 inline-block" />
              <p className="text-[9px] sm:text-[11px] font-mono tracking-[0.25em] text-neutral-600 dark:text-neutral-400 uppercase font-medium">
                EST. 2022
              </p>
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
