"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import LoadingBackground from "./LoadingBackground";
import LoadingText from "./LoadingText";

export type LoadingStage = "particles" | "connect" | "reveal" | "exit";

// Timeline offsets from mount
const STAGE_TIMELINE: { stage: LoadingStage; at: number }[] = [
  { stage: "particles", at: 0 },
  { stage: "connect", at: 400 },
  { stage: "reveal", at: 800 },
];

// 14 huruf × 80ms stagger = 1120ms + 550ms durasi huruf terakhir + 100ms subtitle delay + 500ms subtitle
// = ~2270ms semua sudah selesai. Tambah jeda 800ms sebelum fade.
const FADEOUT_AT = 3100;    // mulai fade out keseluruhan loading screen
const UNMOUNT_AFTER = 3800; // unmount setelah fade selesai

const INTRO_SESSION_KEY = "portfolio_intro_shown";

function hasShownIntro(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return sessionStorage.getItem(INTRO_SESSION_KEY) === "true";
  } catch {
    return false;
  }
}

function markIntroShown(): void {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.setItem(INTRO_SESSION_KEY, "true");
    document.documentElement.classList.add("intro-skipped");
  } catch {}
}

export default function LoadingScreen() {
  const prefersReducedMotion = !!useReducedMotion();
  const [stage, setStage] = useState<LoadingStage>("particles");
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Jika user sudah pernah melihat intro di browser session ini, langsung skip
    if (hasShownIntro()) {
      setVisible(false);
      return;
    }

    if (prefersReducedMotion) {
      const unmount = setTimeout(() => {
        markIntroShown();
        setVisible(false);
      }, 600);
      return () => clearTimeout(unmount);
    }

    const timers = STAGE_TIMELINE.map(({ stage: s, at }) =>
      setTimeout(() => setStage(s), at)
    );

    // Loading screen fade out secara keseluruhan — teks tetap terisi penuh
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
      markIntroShown();
    }, FADEOUT_AT);

    const unmount = setTimeout(() => {
      markIntroShown();
      setVisible(false);
    }, UNMOUNT_AFTER);

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(fadeTimer);
      clearTimeout(unmount);
    };
  }, [prefersReducedMotion]);

  useEffect(() => {
    // Hanya kunci scroll jika loading screen benar-benar aktif & belum pernah ditampilkan
    if (visible && !hasShownIntro()) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <motion.div
      id="portfolio-loading-screen"
      key="loading-screen"
      className="fixed inset-0 z-[9999] overflow-hidden pointer-events-auto"
      style={{
        background: "radial-gradient(ellipse at center, #f5f5f5 0%, #e8e8e8 50%, #d9d9d9 100%)",
      }}
      animate={{
        opacity: isFadingOut ? 0 : 1,
      }}
      transition={{
        duration: prefersReducedMotion ? 0.3 : 0.65,
        ease: "easeInOut",
      }}
      onAnimationComplete={() => {
        if (isFadingOut) {
          markIntroShown();
          setVisible(false);
        }
      }}
    >
      {/* ── CENTER CONTENT (Text liquid wave effect + subtitle) ── */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
        <LoadingBackground stage={stage} reducedMotion={prefersReducedMotion} />

        <div className="relative flex flex-col items-center px-6 text-center">
          <LoadingText stage={stage} reducedMotion={prefersReducedMotion} />
        </div>
      </div>
    </motion.div>
  );
}
