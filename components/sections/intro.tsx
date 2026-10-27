"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { useSectionInView } from "@/lib/hooks";
import ScrollVelocity from "@/components/ui/ScrollVelocity";
import { useLanguage } from "@/context/language-context";
import { useTheme } from "@/context/theme-context";
import WebThreads from "@/components/ui/WebThreads";

// Urutan animasi (detik)
const T = {
  photo: 0,
  name1: 1.1,        // Faliqul (setelah tirai foto hampir terbuka)
  name2: 1.8,        // Ishbah.
  iconsLeft: 2.2,
  iconsRight: 2.9,
  curved: 3.1,
};

// Teks meluncur dari luar layar, mulai buram lalu menajam saat berhenti
function slideIn(side: "left" | "right", delay: number, reduce: boolean | null) {
  if (reduce) {
    return {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.3 },
    };
  }
  return {
    initial: { x: side === "left" ? "-75vw" : "75vw", opacity: 0, filter: "blur(14px)" },
    animate: { x: 0, opacity: 1, filter: "blur(0px)" },
    transition: {
      x: { duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] as const },
      opacity: { duration: 0.4, delay },
      filter: { duration: 1.3, delay: delay + 0.1, ease: "easeOut" as const },
    },
  };
}

type Social = { name: string; href: string; icon: React.ReactNode };

function SocialGroup({
  items,
  className = "",
  size = "w-12 h-12",
}: {
  items: Social[];
  className?: string;
  size?: string;
}) {
  return (
    <div className={`flex items-center gap-4 relative z-40 pointer-events-auto ${className}`}>
      {items.map((item) => (
        <a
          key={item.name}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          aria-label={item.name}
          className={`${size} rounded-full bg-neutral-100 dark:bg-[#1a1a1e] border border-neutral-300 dark:border-neutral-700/80 flex items-center justify-center text-neutral-800 dark:text-neutral-200 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-200 hover:-translate-y-[3px] shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400`}
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { language, t } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const reduce = useReducedMotion();

  const leftSocials: Social[] = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/faliqulishbah/",
      icon: <BsLinkedin className="text-base" />,
    },
    {
      name: "Email",
      href: "mailto:faliqul.isback@gmail.com",
      icon: <FiMail className="text-lg" />,
    },
  ];

  const rightSocials: Social[] = [
    {
      name: "GitHub",
      href: "https://github.com/Faliqulxx",
      icon: <FaGithub className="text-lg" />,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/Faliqulx/",
      icon: <BsInstagram className="text-base" />,
    },
  ];

  const nameClass =
    "whitespace-nowrap font-black tracking-[-0.05em] leading-[0.85] text-neutral-950 dark:text-white select-none";

  return (
    <section
      id="home"
      ref={ref}
      className="hero-root relative w-full min-h-[var(--hero-min-h)] overflow-hidden flex flex-col select-none scroll-mt-[28rem]"
      style={{ backgroundColor: "var(--hero-bg, transparent)" }}
    >
      <div id="hero" className="absolute top-0 pointer-events-none" />

      {/* LAYER 0: BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none w-full h-full opacity-75 dark:opacity-60">
        <WebThreads
          color1={isDark ? "#94a3b8" : "#64748b"}
          color2={isDark ? "#64748b" : "#94a3b8"}
          color3={isDark ? "#cbd5e1" : "#1e293b"}
          speed={reduce ? 0 : 0.22}
          threadCount={8}
          frequency={3.6}
          spread={0.65}
          taper={1.8}
          position={0.5}
          fanMode="center"
          glow={0.016}
          falloff={0.6}
          thickness={1.1}
          brightness={isDark ? 0.4 : 0.45}
          opacity={0.85}
          mirror={true}
          shimmer={!reduce}
          grain={true}
          grainIntensity={0.05}
          mouseInteraction={!reduce}
          mouseStrength={0.35}
          lightMode={!isDark}
          backgroundColor={isDark ? "#09090b" : "#ffffff"}
        />
      </div>

      <h1 className="sr-only">Faliqul Ishbah.</h1>

      {/* ══════════════════════════════════════════════
          DESKTOP (>= 1024px): nama di kiri & kanan foto,
          tidak ada huruf yang masuk ke belakang badan.
          ══════════════════════════════════════════════ */}
      <div
        className="relative z-10 hidden lg:flex flex-1 w-full justify-center pb-24 px-8 max-w-[1800px] mx-auto"
        style={{ paddingTop: "calc(92px + var(--photo-h) * 0.24)" }}
      >
        {/* Satu baris sejajar di bahu: Faliqul | ruang foto | Ishbah. */}
        <div
          className="grid w-full items-start"
          style={{ gridTemplateColumns: "1fr calc(var(--photo-h) * 0.48) 1fr" }}
        >
          {/* Kiri: Faliqul, ikon di TENGAH nama */}
          <div className="col-start-1 justify-self-end flex flex-col items-center">
            <motion.div
              {...slideIn("left", T.name1, reduce)}
              className={nameClass}
              style={{ fontSize: "var(--name-font)" }}
              aria-hidden="true"
            >
              Faliqul
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: reduce ? 0 : 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: reduce ? 0 : T.iconsLeft }}
            >
              <SocialGroup items={leftSocials} className="mt-6 justify-center" />
            </motion.div>
          </div>

          {/* Kanan: Ishbah., ikon di TENGAH nama */}
          <div className="col-start-3 justify-self-start flex flex-col items-center">
            <motion.div
              {...slideIn("right", T.name2, reduce)}
              className={nameClass}
              style={{ fontSize: "var(--name-font)" }}
              aria-hidden="true"
            >
              Ishbah<span className="inline-block ml-[0.02em]">.</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: reduce ? 0 : 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: reduce ? 0 : T.iconsRight }}
            >
              <SocialGroup items={rightSocials} className="mt-6 justify-center" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          MOBILE & TABLET (< 1024px): nama ditumpuk di atas foto
          ══════════════════════════════════════════════ */}
      <div className="relative z-10 flex lg:hidden flex-col items-center pt-24 px-4 text-center">
        <div
          className="font-black tracking-[-0.05em] leading-[0.88] text-neutral-950 dark:text-white"
          style={{ fontSize: "var(--stack-font)" }}
          aria-hidden="true"
        >
          <motion.div {...slideIn("left", T.name1, reduce)} className="block">
            Faliqul
          </motion.div>
          <motion.div {...slideIn("right", T.name2, reduce)} className="block">
            Ishbah<span className="inline-block ml-[0.02em]">.</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: reduce ? 0 : T.iconsLeft }}
        >
          <SocialGroup
            items={[...leftSocials, ...rightSocials]}
            className="mt-4 justify-center gap-3.5"
            size="w-11 h-11"
          />
        </motion.div>
      </div>

      {/* LAYER 3: FOTO (z-30), dasar menempel ke bawah section */}
      <div className="hero-photo-frame absolute bottom-0 left-1/2 -translate-x-1/2 z-30 pointer-events-none select-none flex items-end justify-center w-auto">
        <motion.div
          initial={
            reduce
              ? { opacity: 0 }
              : { clipPath: "inset(100% -20% 0% -20%)", y: 30, scale: 1.04 }
          }
          animate={
            reduce
              ? { opacity: 1 }
              : { clipPath: "inset(-5% -20% 0% -20%)", y: 0, scale: 1 }
          }
          transition={{
            duration: reduce ? 0.2 : 1.4,
            delay: T.photo,
            ease: [0.76, 0, 0.24, 1],
          }}
          style={{ transformOrigin: "50% 100%" }}
          className="hero-photo-fade h-full w-auto flex items-end justify-center"
        >
          <Image
            src="/images/new_profile.webp"
            alt="Faliqul Ishbah"
            width={1792}
            height={2400}
            priority
            className="h-full w-auto max-w-none object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.16)] dark:drop-shadow-[0_25px_45px_rgba(0,0,0,0.55)]"
          />
        </motion.div>
      </div>

      {/* MARQUEE (z-40) di atas kaki foto */}
      <div className="absolute bottom-0 inset-x-0 z-40 w-full overflow-hidden pb-2 sm:pb-3 select-none pointer-events-auto">
        <ScrollVelocity
          texts={[
            "| Frontend Developer | Data Scientist | Data Analyst | AI Automation | IoT Developer | ",
            t("intro.availableForWork"),
          ]}
          velocity={70}
          className="font-black text-[#0b132a] dark:text-neutral-100 text-3xl sm:text-5xl md:text-6xl lg:text-[4.2rem] tracking-tight leading-none px-4 [text-shadow:0_0_18px_var(--hero-bg),0_0_6px_var(--hero-bg)]"
        />
      </div>
    </section>
  );
}
