"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Caveat } from "next/font/google";
import {
  FiMapPin,
  FiChevronLeft,
  FiChevronRight,
  FiArrowUpRight,
} from "react-icons/fi";
import {
  BsArrowRight,
  BsRobot,
  BsBarChartLine,
  BsCodeSlash,
  BsCpu,
  BsGlobe,
  BsPuzzle,
} from "react-icons/bs";
import { SiPython } from "react-icons/si";
import { IoClose } from "react-icons/io5";
import { PiGraduationCapFill, PiBankLight } from "react-icons/pi";
import { useSectionInView } from "@/lib/hooks";
import BurstBload from "@/components/ui/burst-bload";
import PixelTransition from "@/components/ui/PixelTransition";
import {
  personalData,
  certificatesData,
  educationData,
} from "@/lib/data";
import { useLanguage } from "@/context/language-context";
import { useTheme } from "@/context/theme-context";
import { MOTION_EASINGS } from "@/lib/motion";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

// ─── HANDWRITTEN SCRIBBLE COMPONENT ──────────────────────────────────────────
function HandwrittenScribble({
  text,
  arrow = "down-left",
  className = "",
}: {
  text: string;
  arrow?: "down-left" | "down-right" | "up-left" | "up-right" | "down";
  className?: string;
}) {
  return (
    <div
      className={`inline-flex flex-col items-center select-none text-neutral-600 dark:text-neutral-400 ${caveat.className} ${className}`}
    >
      <span className="text-xl sm:text-2xl font-bold tracking-wide transform -rotate-2 whitespace-nowrap drop-shadow-sm">
        {text}
      </span>
      {arrow === "down-left" && (
        <svg
          className="w-10 h-10 -mt-1 text-neutral-500 dark:text-neutral-400 transform -rotate-12"
          viewBox="0 0 50 50"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M 35 8 Q 20 20 18 36" />
          <path d="M 12 28 Q 17 38 18 38 Q 28 35 32 30" />
        </svg>
      )}
      {arrow === "down-right" && (
        <svg
          className="w-10 h-10 -mt-1 text-neutral-500 dark:text-neutral-400 transform rotate-12"
          viewBox="0 0 50 50"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M 15 8 Q 30 20 32 36" />
          <path d="M 38 28 Q 33 38 32 38 Q 22 35 18 30" />
        </svg>
      )}
      {arrow === "down" && (
        <svg
          className="w-8 h-10 -mt-1 text-neutral-500 dark:text-neutral-400"
          viewBox="0 0 40 50"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M 20 6 Q 22 25 20 40" />
          <path d="M 12 32 Q 20 42 20 42 Q 28 32 30 30" />
        </svg>
      )}
    </div>
  );
}

// ─── CERTIFICATES CAROUSEL SECTION ───────────────────────────────────────────
function CertificatesSection({
  onImageClick,
}: {
  onImageClick: (src: string) => void;
}) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { t } = useLanguage();

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll > 0) {
      setScrollProgress((scrollLeft / maxScroll) * 100);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 320;
    scrollContainerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/80 dark:bg-[#121212] p-6 sm:p-8 lg:p-10 shadow-xl backdrop-blur-md overflow-hidden">
      {/* Subtle monochrome ambient light */}
      <div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/[0.04] blur-3xl" />

      {/* Header row */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8">
        <div>
          <span className="inline-block text-xs font-black tracking-widest text-neutral-500 dark:text-neutral-400 uppercase mb-2">
            {t("about.full.certsTag")}
          </span>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-neutral-950 dark:text-white leading-tight">
            {t("about.full.certsTitle")}
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1 max-w-xl">
            {t("about.full.certsDesc1")} <span className="font-bold text-neutral-900 dark:text-white">{certificatesData.length} {t("about.full.totalCerts").toLowerCase()}</span> {t("about.full.certsDesc2")}
          </p>
        </div>

        {/* Count Badge on the right */}
        <div className="flex items-center self-start sm:self-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-neutral-200/70 dark:bg-neutral-800/80 border border-neutral-300 dark:border-neutral-700 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-neutral-500 dark:bg-neutral-400 animate-pulse" />
            <span className="text-xs sm:text-sm font-bold text-neutral-800 dark:text-neutral-200 font-mono">
              {certificatesData.length} {t("about.full.totalCerts")}
            </span>
          </div>
        </div>
      </div>

      {/* Carousel Wrapper */}
      <div className="relative group/carousel">
        {/* Navigation Arrows */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 sm:-translate-x-5 z-20 w-10 h-10 rounded-full bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 shadow-xl flex items-center justify-center text-neutral-900 dark:text-white hover:scale-110 active:scale-95 transition-all"
          aria-label="Scroll left"
        >
          <FiChevronLeft className="text-xl" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 sm:translate-x-5 z-20 w-10 h-10 rounded-full bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 shadow-xl flex items-center justify-center text-neutral-900 dark:text-white hover:scale-110 active:scale-95 transition-all"
          aria-label="Scroll right"
        >
          <FiChevronRight className="text-xl" />
        </button>

        {/* Horizontal scrollable track */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 pt-2 scrollbar-none scroll-smooth snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {certificatesData.map((cert, i) => {
            const issued = ("issued" in cert ? (cert as { issued?: string }).issued : "2024") || "2024";
            return (
              <motion.div
                key={cert.name + i}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                onClick={() => onImageClick(cert.image)}
                className="snap-start flex-shrink-0 w-[240px] sm:w-[270px] rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#181818] p-3.5 shadow-md hover:shadow-2xl hover:border-neutral-400 dark:hover:border-neutral-600 hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
              >
                {/* Certificate Preview Frame */}
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-neutral-100 dark:bg-black/40 border border-neutral-200 dark:border-neutral-800 mb-3 flex items-center justify-center">
                  <Image
                    src={cert.image}
                    alt={cert.name}
                    fill
                    sizes="270px"
                    className="object-contain p-1 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-[10px] font-bold px-3 py-1 rounded-full shadow">
                      {t("about.full.viewCert")}
                    </span>
                  </div>
                </div>

                {/* Certificate Info */}
                <h4 className="text-xs sm:text-sm font-bold text-neutral-900 dark:text-white leading-snug line-clamp-2 mb-1 group-hover:text-neutral-500 dark:group-hover:text-neutral-300 transition-colors">
                  {cert.name}
                </h4>
                <div className="flex items-center justify-between text-[11px] text-neutral-500 dark:text-neutral-400 mt-2 pt-2 border-t border-neutral-100 dark:border-neutral-800">
                  <span className="truncate max-w-[140px] font-medium">{cert.issuer}</span>
                  <span className="font-mono">{t("about.full.issued")} {issued}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Scroll progress line */}
        <div className="w-full h-1 bg-neutral-200 dark:bg-neutral-800 rounded-full mt-4 overflow-hidden">
          <div
            className="h-full bg-neutral-900 dark:bg-white rounded-full transition-all duration-150"
            style={{ width: `${Math.max(15, scrollProgress)}%` }}
          />
        </div>
      </div>
    </div>
  );
}

// ─── FULL VARIANT: STORY JOURNEY TIMELINE ─────────────────────────────────────
function AboutFullView({
  onImageClick,
}: {
  onImageClick: (src: string) => void;
}) {
  const { t } = useLanguage();

  return (
    <div className="w-full flex flex-col items-center">
      {/* =========================================================================
          1. HERO HEADER SECTION
          ========================================================================= */}
      <section className="relative w-full overflow-hidden pt-28 sm:pt-36 md:pt-44 lg:pt-48 pb-16 sm:pb-24 lg:pb-32 bg-white dark:bg-black">
        {/* Hero Background Mountain Asset */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <Image
            src="/images/about/footer-mountain.webp"
            alt="Mountain Journey"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center -scale-x-100 opacity-85 dark:opacity-65"
          />
          {/* Readability gradient for text on the left */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/20 dark:from-black/95 dark:via-black/80 dark:to-black/25" />
          {/* Top and bottom subtle blend */}
          <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-black via-transparent to-white/30 dark:to-black/30" />
        </div>

        <div className="relative z-10 w-[92vw] max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] items-center gap-12 lg:gap-16">
            {/* Left: Typography & Story Hook */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-start"
            >
              <span className="inline-block text-xs sm:text-sm font-black tracking-widest text-neutral-500 dark:text-neutral-400 uppercase mb-3">
                {t("about.full.heroTag")}
              </span>

              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black uppercase tracking-tight text-neutral-950 dark:text-white leading-[1.05] mb-6">
                {t("about.full.heroTitle1")}<br />
                {t("about.full.heroTitle2")} <span className="text-neutral-900 dark:text-neutral-300">{t("about.full.heroTitle3")}</span>
              </h1>

              <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-xl mb-8">
                {t("about.full.heroDesc")}
              </p>

              {/* Location path breadcrumb */}
              <div className="inline-flex items-center gap-3 sm:gap-4 px-5 py-2.5 rounded-full bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md border border-neutral-300 dark:border-neutral-800 shadow-sm text-xs sm:text-sm font-bold text-neutral-800 dark:text-neutral-200 mb-10">
                <span className="flex items-center gap-1.5 text-neutral-900 dark:text-white">
                  <FiMapPin className="text-base" /> Gresik
                </span>
                <span className="text-neutral-300 dark:text-neutral-700">→</span>
                <span>Ponorogo</span>
                <span className="text-neutral-300 dark:text-neutral-700">→</span>
                <span className="text-neutral-900 dark:text-white">Malang</span>
              </div>

              {/* Scroll anchor */}
              <a
                href="#journey"
                className="group inline-flex items-center gap-3 text-xs sm:text-sm font-bold text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
              >
                <span className="w-5 h-8 rounded-full border-2 border-current flex items-start justify-center p-1">
                  <span className="w-1 h-2 bg-current rounded-full animate-bounce" />
                </span>
                {t("about.full.scrollJourney")}
              </a>
            </motion.div>

            {/* Right: Mountain Visual with Handwritten note */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-lg aspect-[16/11] rounded-3xl overflow-hidden shadow-2xl border border-white/60 dark:border-neutral-800 group">
                <Image
                  src="/images/about/hero-mountain.webp"
                  alt="Every journey starts somewhere"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <p className="text-xs font-mono uppercase tracking-widest text-neutral-300">{t("about.full.originStory")}</p>
                  <p className="text-sm font-bold">{t("about.full.originLocation")}</p>
                </div>
              </div>

              {/* Handwritten scribble annotation */}
              <div className="absolute -top-10 right-4 sm:-top-8 sm:right-2 z-10">
                <HandwrittenScribble text={t("about.full.scribble1")} arrow="down-left" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. THE JOURNEY TIMELINE
          ========================================================================= */}
      <section id="journey" className="relative w-full py-16 sm:py-24">
        <div className="w-[92vw] max-w-[1400px] mx-auto px-4 sm:px-8">

          {/* Timeline Wrapper with Vertical Line */}
          <div className="relative flex flex-col gap-20 sm:gap-28">

            {/* Continuous Vertical Connecting Line */}
            <div className="pointer-events-none absolute left-3 sm:left-4 md:left-6 top-8 bottom-8 w-1 bg-gradient-to-b from-neutral-400 via-neutral-300 to-neutral-200 dark:from-neutral-700 dark:via-neutral-800 dark:to-neutral-900 rounded-full" />

            {/* ─── NODE 01: UNIVERSITY ─── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="relative pl-10 sm:pl-14 md:pl-16"
            >
              <div className="absolute left-[-21px] sm:left-[-17px] md:left-[-9px] top-2 w-7 h-7 rounded-full bg-neutral-900 dark:bg-white border-4 border-white dark:border-black shadow-md flex items-center justify-center" />

              <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.3fr_1.2fr] gap-8 items-start">
                <div>
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-4xl sm:text-5xl font-black text-neutral-300 dark:text-neutral-700 leading-none">
                      01
                    </span>
                    <span className="text-xs font-black uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
                      2022 — 2026
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-neutral-950 dark:text-white leading-tight mb-1">
                    {t("about.full.node1Title")}
                  </h3>
                  <p className="text-base font-bold text-neutral-800 dark:text-neutral-200 mb-0.5">
                    {t("about.full.node1Inst")}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                    {t("about.full.node1Major")}
                  </p>

                  <div className="mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-xs font-bold text-neutral-900 dark:text-neutral-100">
                      <PiGraduationCapFill className="text-base" /> {t("about.full.node1Gpa")}
                    </span>
                  </div>

                  <p className="text-sm italic text-neutral-700 dark:text-neutral-300 leading-relaxed bg-neutral-50 dark:bg-white/[0.02] p-4 rounded-2xl border border-neutral-200 dark:border-neutral-800">
                    {t("about.full.node1Quote")}
                  </p>
                </div>

                {/* Center: Campus Photo */}
                <div className="relative rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-xl group">
                  <div className="relative aspect-[16/11] w-full">
                    <Image
                      src="/images/about/umm.webp"
                      alt="Universitas Muhammadiyah Malang"
                      fill
                      sizes="(max-width: 1024px) 100vw, 400px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow">
                    <FiMapPin className="text-neutral-400" /> UMM Campus, Malang
                  </div>
                </div>

                {/* Right: Learnings & Thesis Cards */}
                <div className="flex flex-col gap-4">
                  <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/80 p-5 shadow-md">
                    <div className="flex items-center justify-between mb-3.5">
                      <h4 className="text-xs font-black uppercase tracking-wider text-neutral-950 dark:text-white">
                        {t("about.full.whatILearned")}
                      </h4>
                      <FiArrowUpRight className="text-neutral-500 dark:text-neutral-400" />
                    </div>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                      <li className="flex items-center gap-2.5">
                        <span className="w-5 h-5 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 flex items-center justify-center shrink-0 text-xs">
                          <BsBarChartLine />
                        </span>
                        <span>{t("about.full.cardData")}</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <span className="w-5 h-5 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 flex items-center justify-center shrink-0 text-xs">
                          <BsCodeSlash />
                        </span>
                        <span>{t("about.full.cardWeb")}</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <span className="w-5 h-5 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 flex items-center justify-center shrink-0 text-xs">
                          <SiPython />
                        </span>
                        <span>Python &amp; SQL</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <span className="w-5 h-5 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 flex items-center justify-center shrink-0 text-xs">
                          <BsRobot />
                        </span>
                        <span>{t("about.full.cardAi")}</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <span className="w-5 h-5 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 flex items-center justify-center shrink-0 text-xs">
                          <BsPuzzle />
                        </span>
                        <span>Problem Solving</span>
                      </li>
                    </ul>
                  </div>

                  {/* Thesis Card */}
                  <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/60 p-5 shadow-md">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 flex items-center justify-center flex-shrink-0">
                        <BsRobot className="text-lg" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-1">
                          {t("about.full.thesisTitle")}
                        </p>
                        <p className="text-xs font-bold text-neutral-950 dark:text-white leading-snug">
                          {t("about.full.thesisDesc")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ─── CERTIFICATES ─── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="relative pl-10 sm:pl-14 md:pl-16"
            >
              <CertificatesSection onImageClick={onImageClick} />
            </motion.div>

            {/* ─── NODE 02: HIGH SCHOOL ─── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="relative pl-10 sm:pl-14 md:pl-16"
            >
              <div className="absolute left-[-21px] sm:left-[-17px] md:left-[-9px] top-2 w-7 h-7 rounded-full bg-neutral-900 dark:bg-white border-4 border-white dark:border-black shadow-md flex items-center justify-center" />

              <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1.2fr_0.8fr] gap-8 items-center">
                <div className="relative rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-xl group">
                  <div className="relative aspect-[16/10] w-full">
                    <Image
                      src="/images/about/gontor.webp?v=2"
                      alt="Pondok Modern Darussalam Gontor"
                      fill
                      sizes="(max-width: 1024px) 100vw, 500px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow">
                    <FiMapPin className="text-neutral-400" /> Gontor, Ponorogo
                  </div>
                </div>

                <div>
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-4xl sm:text-5xl font-black text-neutral-300 dark:text-neutral-700 leading-none">
                      02
                    </span>
                    <span className="text-xs font-black uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
                      2017 — 2021
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-neutral-950 dark:text-white leading-tight mb-1">
                    {t("about.full.node2Title")}
                  </h3>
                  <p className="text-base font-bold text-neutral-800 dark:text-neutral-200 mb-0.5">
                    {t("about.full.node2Inst")}
                  </p>
                  {t("about.full.node2Major") && (
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                      {t("about.full.node2Major")}
                    </p>
                  )}

                  <div className="mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-xs font-bold text-neutral-900 dark:text-neutral-100">
                      <PiGraduationCapFill className="text-base" /> {t("about.full.node2Gpa")}
                    </span>
                  </div>

                  <p className="text-sm italic text-neutral-700 dark:text-neutral-300 leading-relaxed bg-neutral-50 dark:bg-white/[0.02] p-4 rounded-2xl border border-neutral-200 dark:border-neutral-800">
                    {t("about.full.node2Quote")}
                  </p>
                </div>

                <div className="flex flex-col items-center justify-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-white dark:bg-neutral-900 p-2 border border-neutral-200 dark:border-neutral-800 shadow-md flex items-center justify-center">
                    <Image
                      src="/images/education/virtuous.webp"
                      alt="Modern Islamic Boarding School Darussalam Gontor"
                      width={52}
                      height={52}
                      className="object-contain"
                    />
                  </div>
                  <HandwrittenScribble text={t("about.full.scribble2")} arrow="down-left" />
                </div>
              </div>
            </motion.div>

            {/* ─── NODE 03: JUNIOR HIGH SCHOOL ─── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="relative pl-10 sm:pl-14 md:pl-16"
            >
              <div className="absolute left-[-21px] sm:left-[-17px] md:left-[-9px] top-2 w-7 h-7 rounded-full bg-neutral-900 dark:bg-white border-4 border-white dark:border-black shadow-md flex items-center justify-center" />

              <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.3fr_0.8fr] gap-8 items-center">
                <div>
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-4xl sm:text-5xl font-black text-neutral-300 dark:text-neutral-700 leading-none">
                      03
                    </span>
                    <span className="text-xs font-black uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
                      2014 — 2017
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-neutral-950 dark:text-white leading-tight mb-1">
                    {t("about.full.node3Title")}
                  </h3>
                  <p className="text-base font-bold text-neutral-800 dark:text-neutral-200 mb-0.5">
                    {t("about.full.node3Inst")}
                  </p>
                  {t("about.full.node3Major") && (
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                      {t("about.full.node3Major")}
                    </p>
                  )}

                  <div className="mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-xs font-bold text-neutral-900 dark:text-neutral-100">
                      <PiGraduationCapFill className="text-base" /> {t("about.full.node3Gpa")}
                    </span>
                  </div>

                  <p className="text-sm italic text-neutral-700 dark:text-neutral-300 leading-relaxed bg-neutral-50 dark:bg-white/[0.02] p-4 rounded-2xl border border-neutral-200 dark:border-neutral-800">
                    {t("about.full.node3Quote")}
                  </p>
                </div>

                <div className="relative rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-xl group">
                  <div className="relative aspect-[16/10] w-full">
                    <Image
                      src="/images/about/mts.webp"
                      alt="MTs Islamiyah"
                      fill
                      sizes="(max-width: 1024px) 100vw, 500px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow">
                    <FiMapPin className="text-neutral-400" /> Gresik
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-white dark:bg-neutral-900 p-2 border border-neutral-200 dark:border-neutral-800 shadow-md flex items-center justify-center">
                    <Image
                      src="/images/education/islamiyah.webp"
                      alt="MTs Islamiyah"
                      width={52}
                      height={52}
                      className="object-contain"
                    />
                  </div>
                  <HandwrittenScribble text={t("about.full.scribble3")} arrow="down-left" />
                </div>
              </div>
            </motion.div>

            {/* ─── NODE 04: PRIMARY SCHOOL ─── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="relative pl-10 sm:pl-14 md:pl-16"
            >
              <div className="absolute left-[-21px] sm:left-[-17px] md:left-[-9px] top-2 w-7 h-7 rounded-full bg-neutral-900 dark:bg-white border-4 border-white dark:border-black shadow-md flex items-center justify-center" />

              <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1.1fr_0.8fr] gap-8 items-center">
                <div className="relative rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-xl group">
                  <div className="relative aspect-[16/10] w-full">
                    <Image
                      src="/images/about/mi.webp"
                      alt="MI Islamiyah"
                      fill
                      sizes="(max-width: 1024px) 100vw, 500px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow">
                    <FiMapPin className="text-neutral-400" /> Gresik
                  </div>
                </div>

                <div>
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-4xl sm:text-5xl font-black text-neutral-300 dark:text-neutral-700 leading-none">
                      04
                    </span>
                    <span className="text-xs font-black uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
                      2009 — 2014
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-neutral-950 dark:text-white leading-tight mb-1">
                    {t("about.full.node4Title")}
                  </h3>
                  <p className="text-base font-bold text-neutral-800 dark:text-neutral-200 mb-0.5">
                    {t("about.full.node4Inst")}
                  </p>
                  {t("about.full.node4Major") && (
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                      {t("about.full.node4Major")}
                    </p>
                  )}

                  <div className="mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-xs font-bold text-neutral-900 dark:text-neutral-100">
                      <PiGraduationCapFill className="text-base" /> {t("about.full.node4Gpa")}
                    </span>
                  </div>

                  <p className="text-sm italic text-neutral-700 dark:text-neutral-300 leading-relaxed bg-neutral-50 dark:bg-white/[0.02] p-4 rounded-2xl border border-neutral-200 dark:border-neutral-800">
                    {t("about.full.node4Quote")}
                  </p>
                </div>

                <div className="flex flex-col items-center justify-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-white dark:bg-neutral-900 p-2 border border-neutral-200 dark:border-neutral-800 shadow-md flex items-center justify-center">
                    <Image
                      src="/images/education/islamiyah.webp"
                      alt="MI Islamiyah"
                      width={52}
                      height={52}
                      className="object-contain"
                    />
                  </div>
                  <HandwrittenScribble text={t("about.full.scribble4")} arrow="down-left" />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          3. FOOTER CTA SECTION
          ========================================================================= */}
      <section className="relative w-full overflow-hidden py-24 sm:py-32 bg-black text-white">
        <div className="w-[92vw] max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.3fr] gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-xs sm:text-sm font-black tracking-widest text-neutral-400 uppercase mb-3">
                {t("about.full.andNow")}
              </span>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight mb-5">
                {t("about.full.broughtMe")} <span className="text-neutral-300">{t("about.full.here")}</span>
              </h2>

              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed max-w-lg mb-8">
                {t("about.full.broughtMeDesc")}
              </p>

              <Link
                href="/projects"
                className="btn-brand group relative inline-flex items-center gap-2.5 px-8 py-3.5 text-sm sm:text-base font-bold rounded-full overflow-hidden w-fit shadow-xl hover:scale-105 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {t("about.full.exploreProjects")} <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 h-full w-full bg-neutral-200/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-neutral-800 bg-neutral-900/80 backdrop-blur-md p-5 shadow-xl hover:border-neutral-600 hover:bg-neutral-800/80 transition-all">
                  <BsBarChartLine className="text-2xl text-neutral-300 mb-3" />
                  <h4 className="text-xs sm:text-sm font-extrabold text-white leading-snug">
                    {t("about.full.cardData")}
                  </h4>
                </div>

                <div className="rounded-2xl border border-neutral-800 bg-neutral-900/80 backdrop-blur-md p-5 shadow-xl hover:border-neutral-600 hover:bg-neutral-800/80 transition-all">
                  <BsCodeSlash className="text-2xl text-neutral-300 mb-3" />
                  <h4 className="text-xs sm:text-sm font-extrabold text-white leading-snug">
                    {t("about.full.cardSoftware")}
                  </h4>
                </div>

                <div className="rounded-2xl border border-neutral-800 bg-neutral-900/80 backdrop-blur-md p-5 shadow-xl hover:border-neutral-600 hover:bg-neutral-800/80 transition-all">
                  <BsCpu className="text-2xl text-neutral-300 mb-3" />
                  <h4 className="text-xs sm:text-sm font-extrabold text-white leading-snug">
                    {t("about.full.cardAi")}
                  </h4>
                </div>

                <div className="rounded-2xl border border-neutral-800 bg-neutral-900/80 backdrop-blur-md p-5 shadow-xl hover:border-neutral-600 hover:bg-neutral-800/80 transition-all">
                  <BsGlobe className="text-2xl text-neutral-300 mb-3" />
                  <h4 className="text-xs sm:text-sm font-extrabold text-white leading-snug">
                    {t("about.full.cardWeb")}
                  </h4>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <HandwrittenScribble text={t("about.full.scribble5")} arrow="down" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────
interface AboutProps {
  variant?: "full" | "preview";
}

export default function About({ variant = "full" }: AboutProps = {}) {
  const { ref } = useSectionInView("About");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { t } = useLanguage();
  const { theme } = useTheme();

  if (variant === "preview") {
    const latestEdu = [...educationData].reverse()[0];
    const techCategories = [
      {
        label: "DATA & ANALYTICS",
        items: [
          "Python",
          "Pandas",
          "Scikit-learn",
          "TensorFlow",
          "SQL",
          "Numpy",
          "Power BI",
          "Excel",
          "Kaggle",
          "Streamlit",
          "NLP",
          "Computer Vision",
        ],
      },
      {
        label: "AI AUTOMATION",
        items: ["n8n", "REST APIs", "LangChain", "OpenAI"],
      },
      {
        label: "WEB DEVELOPMENT",
        items: ["React", "Next.js", "TypeScript", "Supabase", "Laravel", "Docker"],
      },
      {
        label: "TOOLS & WORKFLOWS",
        items: ["Vs code", "Git", "Canva", "Framer", "Notion", "Github", "Figma"],
      },
    ];

    return (
      <motion.section
        ref={ref}
        id="about"
        className="w-full mb-8 sm:mb-12 lg:mb-14 scroll-mt-28"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175, duration: 0.5 }}
      >
        <div className="w-full max-w-6xl mx-auto flex flex-col gap-4">
          {/* HEADING */}
          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: MOTION_EASINGS.entrance }}
            className="flex items-center gap-3 self-start mb-2"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-neutral-950 dark:text-white">
              {t("about.title")}
            </h2>
            <BurstBload />
          </motion.div>

          {/* ROW 1: Bio card + Photo card */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] xl:grid-cols-[1fr_320px] gap-4">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.4 }}
              className="relative overflow-hidden rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#141414] p-7 sm:p-9 flex flex-col justify-between gap-6 hover:border-neutral-400 dark:hover:border-neutral-700 hover:shadow-lg transition-all duration-300"
            >
              <div className="pointer-events-none absolute -top-16 -left-16 w-56 h-56 rounded-full bg-neutral-200/50 dark:bg-white/[0.03] blur-3xl" />
              <div className="relative">
                <h3 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-neutral-950 dark:text-white leading-tight mb-4">
                  {t("about.hi")}{" "}
                  <span className="text-neutral-900 dark:text-white underline decoration-neutral-400 dark:decoration-neutral-600 underline-offset-4">
                    {personalData.name}.
                  </span>
                </h3>
                <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed mb-3">
                  <span className="font-semibold text-neutral-900 dark:text-white">{t("about.roleTitle")}</span> {t("about.roleDesc")}
                </p>
                <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {t("about.bio")}
                </p>
              </div>

              <div className="relative flex flex-row items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
                <a
                  href={personalData.cvUrl}
                  download
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2.5 rounded-full bg-black dark:bg-white text-white dark:text-black text-xs sm:text-sm font-semibold hover:opacity-85 transition-all duration-200 hover:scale-105 shadow-md whitespace-nowrap"
                >
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
                  </svg>
                  <span>{t("intro.downloadCV")}</span>
                </a>
                <Link
                  href="/about"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2.5 rounded-full border border-neutral-300 dark:border-neutral-700 bg-transparent text-neutral-800 dark:text-neutral-200 text-xs sm:text-sm font-semibold hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-200 hover:scale-105 whitespace-nowrap"
                >
                  <span>{t("about.viewMore")}</span>
                  <BsArrowRight className="text-xs shrink-0" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: 0.15, ease: MOTION_EASINGS.entrance }}
              className="relative overflow-hidden rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-[#141414] min-h-[320px] sm:min-h-[380px] lg:min-h-0 hover:border-neutral-400 dark:hover:border-neutral-700 transition-all duration-300 shadow-sm hover:shadow-lg"
            >
              <PixelTransition
                firstContent={
                  <Image
                    src="/images/gallery/Profil1.webp"
                    alt={personalData.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 320px"
                    className="object-cover object-top"
                    priority
                  />
                }
                secondContent={
                  <Image
                    src="/images/about/profile-f1.jpg"
                    alt="Celebration"
                    fill
                    sizes="(max-width: 1024px) 100vw, 320px"
                    className="object-cover object-top"
                  />
                }
                gridSize={12}
                pixelColor={theme === "dark" ? "#ffffff" : "#000000"}
                mosaic={0.2}
                pixelShape="square"
                gap={0}
                pattern="random"
                pixelAnimation="pop"
                randomness={0.3}
                animationStepDuration={0.4}
                trigger="hover"
                aspectRatio=""
                className="w-full h-full !rounded-3xl"
                style={{ width: "100%", height: "100%" }}
              />
            </motion.div>
          </div>

          {/* ROW 2: Education card + Tech stack card */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.65fr] gap-5 items-stretch">
            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.38, duration: 0.4 }}
              className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.2rem] border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#141414] p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div>
                {/* Header: UMM Logo circular frame & Graduated badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white flex items-center justify-center p-1.5 overflow-hidden shadow-xs">
                    <Image
                      src={latestEdu.logo}
                      alt={latestEdu.institution}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <div className="px-4 py-1.5 rounded-full bg-black text-white dark:bg-white dark:text-black text-xs font-black uppercase tracking-wider shadow-sm">
                    {latestEdu.year.includes("2026") ? `${t("about.graduated")} 2026` : `${t("about.graduated")} ${latestEdu.year}`}
                  </div>
                </div>

                {/* Institution & Field */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                    <PiBankLight className="text-base flex-shrink-0" />
                    <span>{latestEdu.institution.toUpperCase()}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-950 dark:text-white leading-tight">
                    {t("about.full.node1Major").toUpperCase()}
                  </h3>

                  {/* Coursework */}
                  <div className="mt-3">
                    <p className="text-[11px] font-black uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-2">
                      {t("about.relevantCoursework")}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Business Intelligence",
                        "Data Science",
                        "Machine Learning",
                        "Software Engineering",
                        "AI Automation",
                      ].map((course) => (
                        <span
                          key={course}
                          className="px-3 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-xs font-semibold text-neutral-800 dark:text-neutral-200 shadow-xs hover:border-neutral-400 dark:hover:border-neutral-700 transition-colors"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Divider & GPA */}
              <div>
                <div className="w-full h-px bg-neutral-200 dark:bg-neutral-800 my-6" />
                <div className="flex items-center gap-3">
                  <span className="text-4xl sm:text-5xl font-black tracking-tight text-neutral-950 dark:text-white leading-none">
                    {latestEdu.gpa}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-xs font-black uppercase tracking-wider text-neutral-600 dark:text-neutral-300 leading-tight">
                      {t("about.highlySatisfactory")}
                    </span>
                    <span className="text-xs font-bold text-neutral-400 dark:text-neutral-500 leading-tight">
                      / {latestEdu.gpaMax} {t("about.gpa")}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Tech Stack Card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.44, duration: 0.4 }}
              className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.2rem] border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#141414] p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-black text-white dark:bg-white dark:text-black flex items-center justify-center font-mono font-black text-sm shadow-sm">
                    &gt;_
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-neutral-950 dark:text-white">
                    {t("about.techStack")}
                  </h3>
                </div>

                <div className="w-full h-px bg-neutral-200 dark:bg-neutral-800 my-4 mb-5" />

                {/* Tech Stack Categories */}
                <div className="space-y-5">
                  {techCategories.map((cat) => (
                    <div key={cat.label}>
                      <p className="text-[11px] font-extrabold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-2.5">
                        {cat.label}
                      </p>
                      <div className="flex flex-wrap gap-2 sm:gap-2.5">
                        {cat.items.map((item) => (
                          <span
                            key={item}
                            className="px-3.5 py-1.5 sm:py-2 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-xs sm:text-[13px] font-semibold text-neutral-800 dark:text-neutral-200 shadow-xs hover:border-neutral-400 dark:hover:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* ROW 3: My Focus */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="relative overflow-hidden rounded-3xl bg-neutral-100 dark:bg-[#121212] border border-neutral-200 dark:border-neutral-800 p-5 sm:p-9 shadow-sm"
          >
            <div className="pointer-events-none absolute -top-12 -right-12 w-80 h-80 bg-gradient-radial from-neutral-200/50 dark:from-white/[0.03] to-transparent blur-3xl" />

            <div className="relative flex flex-col xl:flex-row xl:items-center justify-between gap-8 lg:gap-10">
              {/* Left Column: Text & Description */}
              <div className="flex-1 max-w-lg">
                <p className="text-xs font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-neutral-600 dark:bg-neutral-400 animate-pulse" />
                  {t("about.myFocus")}
                </p>
                <h4 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-neutral-950 dark:text-white mb-2.5">
                  {t("about.whatIDoBest")}
                </h4>
                <p className="text-sm sm:text-[15px] text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {t("about.focusDesc")}
                </p>
              </div>

              {/* Right Column: Responsive Focus Pills */}
              <div className="w-full xl:w-auto">
                {/* ── MOBILE / TABLET (< xl): 1 baris ada 2 (kiri kanan), baris terakhir 1 (centered) ── */}
                <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5 w-full xl:hidden">
                  {/* 1. Data Science */}
                  <div className="group flex items-center gap-2 sm:gap-3 px-2.5 sm:px-4 py-2 sm:py-2.5 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#1a1a1a] shadow-sm hover:shadow-md hover:border-neutral-400 dark:hover:border-neutral-600 hover:bg-neutral-50 dark:hover:bg-[#222] transition-all duration-300 w-full">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-black border border-neutral-700 dark:border-neutral-300 flex items-center justify-center shadow-xs flex-shrink-0 group-hover:scale-105 transition-all duration-300">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 3v18h18" />
                        <path d="m19 9-5 5-4-4-3 3" />
                        <path d="M19 14v-5h-5" />
                        <path d="M7 16h2v2H7z" fill="currentColor" fillOpacity="0.3" />
                        <path d="M11 13h2v5h-2z" fill="currentColor" fillOpacity="0.3" />
                        <path d="M15 10h2v8h-2z" fill="currentColor" fillOpacity="0.3" />
                      </svg>
                    </div>
                    <div className="flex flex-col text-left min-w-0 pr-1">
                      <span className="text-[11px] sm:text-xs md:text-[13px] font-semibold text-neutral-900 dark:text-white leading-tight truncate">
                        Data
                      </span>
                      <span className="text-[11px] sm:text-xs md:text-[13px] font-semibold text-neutral-900 dark:text-white leading-tight truncate">
                        Science
                      </span>
                    </div>
                  </div>

                  {/* 2. Data Analysis */}
                  <div className="group flex items-center gap-2 sm:gap-3 px-2.5 sm:px-4 py-2 sm:py-2.5 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#1a1a1a] shadow-sm hover:shadow-md hover:border-neutral-400 dark:hover:border-neutral-600 hover:bg-neutral-50 dark:hover:bg-[#222] transition-all duration-300 w-full">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-black border border-neutral-700 dark:border-neutral-300 flex items-center justify-center shadow-xs flex-shrink-0 group-hover:scale-105 transition-all duration-300">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <ellipse cx="12" cy="5" rx="9" ry="3" />
                        <path d="M3 5V19A9 3 0 0 0 21 19V5" />
                        <path d="M3 12A9 3 0 0 0 21 12" />
                      </svg>
                    </div>
                    <div className="flex flex-col text-left min-w-0 pr-1">
                      <span className="text-[11px] sm:text-xs md:text-[13px] font-semibold text-neutral-900 dark:text-white leading-tight truncate">
                        Data
                      </span>
                      <span className="text-[11px] sm:text-xs md:text-[13px] font-semibold text-neutral-900 dark:text-white leading-tight truncate">
                        Analysis
                      </span>
                    </div>
                  </div>

                  {/* 3. AI Automation */}
                  <div className="group flex items-center gap-2 sm:gap-3 px-2.5 sm:px-4 py-2 sm:py-2.5 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#1a1a1a] shadow-sm hover:shadow-md hover:border-neutral-400 dark:hover:border-neutral-600 hover:bg-neutral-50 dark:hover:bg-[#222] transition-all duration-300 w-full">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-black border border-neutral-700 dark:border-neutral-300 flex items-center justify-center shadow-xs flex-shrink-0 group-hover:scale-105 transition-all duration-300">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 8V4H8" />
                        <rect width="16" height="12" x="4" y="8" rx="3" />
                        <path d="M2 14h2" />
                        <path d="M20 14h2" />
                        <circle cx="9" cy="13" r="1.2" fill="currentColor" />
                        <circle cx="15" cy="13" r="1.2" fill="currentColor" />
                        <path d="M9 16h6" strokeWidth="1.5" />
                      </svg>
                    </div>
                    <div className="flex flex-col text-left min-w-0 pr-1">
                      <span className="text-[11px] sm:text-xs md:text-[13px] font-semibold text-neutral-900 dark:text-white leading-tight truncate">
                        AI
                      </span>
                      <span className="text-[11px] sm:text-xs md:text-[13px] font-semibold text-neutral-900 dark:text-white leading-tight truncate">
                        Automation
                      </span>
                    </div>
                  </div>

                  {/* 4. Web Development */}
                  <div className="group flex items-center gap-2 sm:gap-3 px-2.5 sm:px-4 py-2 sm:py-2.5 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#1a1a1a] shadow-sm hover:shadow-md hover:border-neutral-400 dark:hover:border-neutral-600 hover:bg-neutral-50 dark:hover:bg-[#222] transition-all duration-300 w-full">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-black border border-neutral-700 dark:border-neutral-300 flex items-center justify-center shadow-xs flex-shrink-0 group-hover:scale-105 transition-all duration-300">
                      <BsGlobe className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="flex flex-col text-left min-w-0 pr-1">
                      <span className="text-[11px] sm:text-xs md:text-[13px] font-semibold text-neutral-900 dark:text-white leading-tight truncate">
                        Web
                      </span>
                      <span className="text-[11px] sm:text-xs md:text-[13px] font-semibold text-neutral-900 dark:text-white leading-tight truncate">
                        Development
                      </span>
                    </div>
                  </div>

                  {/* 5. Frontend Development (Terakhir 1, centered) */}
                  <div className="col-span-2 flex justify-center">
                    <div className="group flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#1a1a1a] shadow-sm hover:shadow-md hover:border-neutral-400 dark:hover:border-neutral-600 hover:bg-neutral-50 dark:hover:bg-[#222] transition-all duration-300 w-full max-w-[210px] sm:max-w-[240px]">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-black border border-neutral-700 dark:border-neutral-300 flex items-center justify-center shadow-xs flex-shrink-0 group-hover:scale-105 transition-all duration-300">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="16 18 22 12 16 6" />
                          <polyline points="8 6 2 12 8 18" />
                        </svg>
                      </div>
                      <div className="flex flex-col text-left min-w-0 pr-1">
                        <span className="text-[11px] sm:text-xs md:text-[13px] font-semibold text-neutral-900 dark:text-white leading-tight truncate">
                          Frontend
                        </span>
                        <span className="text-[11px] sm:text-xs md:text-[13px] font-semibold text-neutral-600 dark:text-neutral-400 leading-tight truncate">
                          Development
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── DESKTOP (xl): 2 Rows (3 on top, 2 on bottom) ── */}
                <div className="hidden xl:flex flex-col gap-3.5 sm:gap-4 items-end w-auto">
                  {/* Top Row: 3 items */}
                  <div className="flex items-center justify-end gap-3.5">
                    {/* 1. Data Science */}
                    <div className="group flex items-center gap-3 px-4 py-2.5 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#1a1a1a] shadow-sm hover:shadow-md hover:border-neutral-400 dark:hover:border-neutral-600 hover:bg-neutral-50 dark:hover:bg-[#222] transition-all duration-300">
                      <div className="w-10 h-10 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-black border border-neutral-700 dark:border-neutral-300 flex items-center justify-center shadow-xs flex-shrink-0 group-hover:scale-105 transition-all duration-300">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 3v18h18" />
                          <path d="m19 9-5 5-4-4-3 3" />
                          <path d="M19 14v-5h-5" />
                          <path d="M7 16h2v2H7z" fill="currentColor" fillOpacity="0.3" />
                          <path d="M11 13h2v5h-2z" fill="currentColor" fillOpacity="0.3" />
                          <path d="M15 10h2v8h-2z" fill="currentColor" fillOpacity="0.3" />
                        </svg>
                      </div>
                      <div className="flex flex-col text-left pr-2">
                        <span className="text-xs sm:text-[13px] font-semibold text-neutral-900 dark:text-white leading-tight tracking-tight">
                          Data
                        </span>
                        <span className="text-xs sm:text-[13px] font-semibold text-neutral-900 dark:text-white leading-tight tracking-tight">
                          Science
                        </span>
                      </div>
                    </div>

                    {/* 2. Data Analysis */}
                    <div className="group flex items-center gap-3 px-4 py-2.5 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#1a1a1a] shadow-sm hover:shadow-md hover:border-neutral-400 dark:hover:border-neutral-600 hover:bg-neutral-50 dark:hover:bg-[#222] transition-all duration-300">
                      <div className="w-10 h-10 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-black border border-neutral-700 dark:border-neutral-300 flex items-center justify-center shadow-xs flex-shrink-0 group-hover:scale-105 transition-all duration-300">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <ellipse cx="12" cy="5" rx="9" ry="3" />
                          <path d="M3 5V19A9 3 0 0 0 21 19V5" />
                          <path d="M3 12A9 3 0 0 0 21 12" />
                        </svg>
                      </div>
                      <div className="flex flex-col text-left pr-2">
                        <span className="text-xs sm:text-[13px] font-semibold text-neutral-900 dark:text-white leading-tight tracking-tight">
                          Data
                        </span>
                        <span className="text-xs sm:text-[13px] font-semibold text-neutral-900 dark:text-white leading-tight tracking-tight">
                          Analysis
                        </span>
                      </div>
                    </div>

                    {/* 3. AI Automation */}
                    <div className="group flex items-center gap-3 px-4 py-2.5 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#1a1a1a] shadow-sm hover:shadow-md hover:border-neutral-400 dark:hover:border-neutral-600 hover:bg-neutral-50 dark:hover:bg-[#222] transition-all duration-300">
                      <div className="w-10 h-10 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-black border border-neutral-700 dark:border-neutral-300 flex items-center justify-center shadow-xs flex-shrink-0 group-hover:scale-105 transition-all duration-300">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 8V4H8" />
                          <rect width="16" height="12" x="4" y="8" rx="3" />
                          <path d="M2 14h2" />
                          <path d="M20 14h2" />
                          <circle cx="9" cy="13" r="1.2" fill="currentColor" />
                          <circle cx="15" cy="13" r="1.2" fill="currentColor" />
                          <path d="M9 16h6" strokeWidth="1.5" />
                        </svg>
                      </div>
                      <div className="flex flex-col text-left pr-2">
                        <span className="text-xs sm:text-[13px] font-semibold text-neutral-900 dark:text-white leading-tight tracking-tight">
                          AI
                        </span>
                        <span className="text-xs sm:text-[13px] font-semibold text-neutral-900 dark:text-white leading-tight tracking-tight">
                          Automation
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Row: 2 items */}
                  <div className="flex items-center justify-end gap-3.5">
                    {/* 4. Web Development */}
                    <div className="group flex items-center gap-3 px-4 py-2.5 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#1a1a1a] shadow-sm hover:shadow-md hover:border-neutral-400 dark:hover:border-neutral-600 hover:bg-neutral-50 dark:hover:bg-[#222] transition-all duration-300">
                      <div className="w-10 h-10 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-black border border-neutral-700 dark:border-neutral-300 flex items-center justify-center shadow-xs flex-shrink-0 group-hover:scale-105 transition-all duration-300">
                        <BsGlobe className="w-5 h-5" />
                      </div>
                      <div className="flex flex-col text-left pr-2">
                        <span className="text-xs sm:text-[13px] font-semibold text-neutral-900 dark:text-white leading-tight tracking-tight">
                          Web
                        </span>
                        <span className="text-xs sm:text-[13px] font-semibold text-neutral-900 dark:text-white leading-tight tracking-tight">
                          Development
                        </span>
                      </div>
                    </div>

                    {/* 5. Frontend Development */}
                    <div className="group flex items-center gap-3 px-4 py-2.5 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#1a1a1a] shadow-sm hover:shadow-md hover:border-neutral-400 dark:hover:border-neutral-600 hover:bg-neutral-50 dark:hover:bg-[#222] transition-all duration-300">
                      <div className="w-10 h-10 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-black border border-neutral-700 dark:border-neutral-300 flex items-center justify-center shadow-xs flex-shrink-0 group-hover:scale-105 transition-all duration-300">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="16 18 22 12 16 6" />
                          <polyline points="8 6 2 12 8 18" />
                        </svg>
                      </div>
                      <div className="flex flex-col text-left pr-2">
                        <span className="text-xs sm:text-[13px] font-semibold text-neutral-900 dark:text-white leading-tight tracking-tight">
                          Frontend
                        </span>
                        <span className="text-xs sm:text-[13px] font-semibold text-neutral-600 dark:text-neutral-400 leading-tight tracking-tight">
                          Development
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    );
  }

  // ─── FULL VARIANT (/about page) ─────────────────────────────────────────────
  return (
    <>
      <div ref={ref} className="w-full">
        <AboutFullView onImageClick={setSelectedImage} />
      </div>

      {/* Image Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-5 right-5 text-white text-3xl p-2 hover:rotate-90 hover:text-neutral-400 transition"
              aria-label="Close"
            >
              <IoClose />
            </button>
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-4xl h-[75vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Certificate preview"
                fill
                sizes="100vw"
                className="object-contain rounded-2xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}