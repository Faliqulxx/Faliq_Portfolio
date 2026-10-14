"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useLanguage } from "@/context/language-context";
import { useTheme } from "@/context/theme-context";
import type { SectionName } from "@/lib/types";
import LogoIcon from "@/components/ui/LogoIcon";
import PillNav from "./PillNav";
import { BsSun, BsMoon, BsChevronDown } from "react-icons/bs";
import {
  FiGlobe,
  FiHome,
  FiInfo,
  FiFolder,
  FiImage,
  FiBriefcase,
  FiMail,
} from "react-icons/fi";
import { IoSparkles } from "react-icons/io5";

const pathnameMapping: Record<string, SectionName> = {
  "/": "Home",
  "/about": "About",
  "/projects": "Projects",
  "/gallery": "Gallery",
  "/experience": "Experience",
  "/contact": "Contact",
  "/ai-assistant": "AI Assistant",
};

const pageMetaMap: Record<
  string,
  { title: { en: string; id: string }; subtitle: { en: string; id: string } }
> = {
  "/": {
    title: { en: "Faliqul Ishbah", id: "Faliqul Ishbah" },
    subtitle: { en: "Data Scientist & AI Automation", id: "Data Scientist & AI Automation" },
  },
  "/about": {
    title: { en: "About Faliqul", id: "Tentang Faliqul" },
    subtitle: { en: "Bio, Education & Story", id: "Biografi & Pendidikan" },
  },
  "/projects": {
    title: { en: "Featured Projects", id: "Koleksi Proyek" },
    subtitle: { en: "Works & Case Studies", id: "Portofolio & Karya" },
  },
  "/gallery": {
    title: { en: "Moments & Gallery", id: "Galeri Foto" },
    subtitle: { en: "Memories & Highlights", id: "Momen & Kenangan" },
  },
  "/experience": {
    title: { en: "Experience", id: "Pengalaman Kerja" },
    subtitle: { en: "Career & Leadership", id: "Karir & Organisasi" },
  },
  "/contact": {
    title: { en: "Get In Touch", id: "Hubungi Saya" },
    subtitle: { en: "Let's Collaborate", id: "Mari Berkolaborasi" },
  },
  "/ai-assistant": {
    title: { en: "Faliqul AI Assistant", id: "Faliqul AI Assistant" },
    subtitle: { en: "Instant & accurate response", id: "Respons instan & akurat" },
  },
};

const mobileMenuItems = [
  { name: "Home", label: { en: "Home", id: "Home" }, href: "/", icon: FiHome },
  { name: "About", label: { en: "About", id: "About" }, href: "/about", icon: FiInfo },
  { name: "Projects", label: { en: "Projects", id: "Projects" }, href: "/projects", icon: FiFolder },
  { name: "Gallery", label: { en: "Gallery", id: "Gallery" }, href: "/gallery", icon: FiImage },
  { name: "Experience", label: { en: "Experience", id: "Experience" }, href: "/experience", icon: FiBriefcase },
  { name: "Contact", label: { en: "Contact", id: "Contact" }, href: "/contact", icon: FiMail },
  {
    name: "AI Assistant",
    label: { en: "AI Assistant", id: "AI Assistant" },
    href: "/ai-assistant",
    icon: IoSparkles,
    isSpecial: true,
  },
];

export default function Header() {
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Close menu on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen]);

  const navItems = [
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "/about" },
    { label: "PROJECTS", href: "/projects" },
    { label: "GALLERY", href: "/gallery" },
    { label: "EXPERIENCE", href: "/experience" },
    { label: "CONTACT", href: "/contact" },
    { label: "AI ASSISTANT", href: "/ai-assistant" },
  ];

  const currentMeta =
    pageMetaMap[pathname] || {
      title: { en: "Faliqul Ishbah", id: "Faliqul Ishbah" },
      subtitle: { en: "Data Scientist & AI Automation", id: "Data Scientist & AI Automation" },
    };

  return (
    <header className="fixed top-2.5 sm:top-5 left-1/2 -translate-x-1/2 z-[999] w-[95vw] max-w-5xl xl:max-w-6xl transition-all">
      {/* ══════════════════════════════════════════════
          MOBILE NAVBAR (< md)
          ══════════════════════════════════════════════ */}
      <div className="relative md:hidden w-full" ref={mobileMenuRef}>
        <div className="w-full flex items-center justify-between bg-[#121216] dark:bg-[#0c0c10] border border-neutral-700/60 dark:border-white/15 rounded-full px-3 py-1.5 shadow-[0_10px_35px_rgba(0,0,0,0.6)]">
          {/* LEFT: Logo + Title + Subtitle */}
          <Link
            href="/"
            onClick={() => {
              setActiveSection("Home");
              setTimeOfLastClick(Date.now());
            }}
            className="flex items-center gap-2.5 min-w-0 pr-1 select-none cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 p-1 flex items-center justify-center flex-shrink-0 shadow-sm">
              <LogoIcon className="w-full h-full text-white" fillColor="currentColor" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-xs font-bold text-white leading-tight truncate">
                {currentMeta.title[language] || currentMeta.title.en}
              </span>
              <span className="text-[10px] text-neutral-400 leading-tight truncate mt-0.5">
                {currentMeta.subtitle[language] || currentMeta.subtitle.en}
              </span>
            </div>
          </Link>

          {/* RIGHT: Language Toggle + Divider + Theme Switcher + Hamburger */}
          <div className="flex items-center gap-1.5 flex-shrink-0">
            {mounted && (
              <>
                {/* Language Switcher: Globe + Code + Chevron */}
                <button
                  type="button"
                  onClick={() => setLanguage(language === "en" ? "id" : "en")}
                  aria-label="Switch Language"
                  className="flex items-center gap-1 text-xs font-semibold text-white/90 hover:text-white px-1.5 py-1 rounded-lg transition-colors cursor-pointer"
                >
                  <FiGlobe className="text-sm text-neutral-300" />
                  <span className="text-xs font-bold uppercase">{language}</span>
                  <BsChevronDown className="text-[9px] text-neutral-400" />
                </button>

                {/* Divider */}
                <div className="h-3.5 w-[1px] bg-white/20" />

                {/* Theme Switch Capsule */}
                <button
                  type="button"
                  onClick={toggleTheme}
                  aria-label="Toggle theme"
                  className="flex items-center gap-1 p-0.5 px-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white/90 transition-all cursor-pointer"
                >
                  <span
                    className={`flex items-center justify-center w-4 h-4 rounded-full text-[10px] transition-all ${
                      theme === "light"
                        ? "bg-white text-black font-bold shadow-sm"
                        : "text-white/40"
                    }`}
                  >
                    <BsSun />
                  </span>
                  <span
                    className={`flex items-center justify-center w-4 h-4 rounded-full text-[10px] transition-all ${
                      theme === "dark"
                        ? "bg-white text-black font-bold shadow-sm"
                        : "text-white/40"
                    }`}
                  >
                    <BsMoon />
                  </span>
                </button>
              </>
            )}

            {/* Hamburger Button with 3 lines */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle Navigation Menu"
              className={`w-8 h-8 rounded-full flex flex-col items-center justify-center gap-[3px] transition-all cursor-pointer ${
                mobileMenuOpen
                  ? "bg-white text-black"
                  : "bg-white/10 hover:bg-white/20 text-white"
              }`}
            >
              <span
                className={`w-3.5 h-[1.5px] rounded-full transition-all ${
                  mobileMenuOpen
                    ? "bg-black translate-y-[4.5px] rotate-45"
                    : "bg-white"
                }`}
              />
              <span
                className={`w-3.5 h-[1.5px] rounded-full transition-all ${
                  mobileMenuOpen ? "opacity-0" : "bg-white"
                }`}
              />
              <span
                className={`w-3.5 h-[1.5px] rounded-full transition-all ${
                  mobileMenuOpen
                    ? "bg-black -translate-y-[4.5px] -rotate-45"
                    : "bg-white"
                }`}
              />
            </button>
          </div>
        </div>

        {/* ── DROPDOWN POPOVER MENU ── */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -6, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-[calc(100%+8px)] right-0 z-[1000] w-52 origin-top-right"
            >
              {/* Caret arrow pointing up to hamburger button */}
              <div className="absolute -top-1.5 right-3.5 w-3 h-3 bg-[#18181c] dark:bg-[#121216] border-t border-l border-neutral-700/60 dark:border-white/20 rotate-45 transform z-10" />

              {/* Menu Container */}
              <div className="relative rounded-2xl bg-[#18181c] dark:bg-[#121216] border border-neutral-700/60 dark:border-white/20 p-2 shadow-[0_16px_40px_rgba(0,0,0,0.7)] flex flex-col gap-1">
                {mobileMenuItems.map((item) => {
                  const isActive = pathname === item.href;
                  const Icon = item.icon;
                  const isSpecial = item.isSpecial;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setActiveSection(item.name as SectionName);
                        setTimeOfLastClick(Date.now());
                      }}
                      className={`flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                        isSpecial
                          ? isActive
                            ? "bg-amber-500/25 text-amber-300 font-bold shadow-sm mt-1"
                            : "bg-white/5 text-amber-300 hover:bg-white/10 font-semibold mt-1"
                          : isActive
                          ? "bg-white/15 text-white font-semibold shadow-sm"
                          : "text-neutral-200 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      <Icon
                        className={`text-base shrink-0 ${
                          isSpecial ? "text-amber-400" : isActive ? "text-white" : "text-neutral-400"
                        }`}
                      />
                      <span className="tracking-wide">
                        {item.label[language] || item.label.en}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ══════════════════════════════════════════════
          DESKTOP NAVBAR (>= md)
          ══════════════════════════════════════════════ */}
      <div className="hidden md:flex w-full items-center justify-between bg-[#0a0a0e]/95 dark:bg-[#07070a]/95 backdrop-blur-xl border border-white/20 dark:border-white/15 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 shadow-[0_10px_35px_rgba(0,0,0,0.6)]">
        {/* LEFT: LOGO ICON */}
        <div className="flex items-center flex-1 justify-start">
          <Link
            href="/"
            aria-label="Home"
            onClick={() => {
              setActiveSection("Home");
              setTimeOfLastClick(Date.now());
            }}
            className="w-[36px] h-[36px] sm:w-[38px] sm:h-[38px] rounded-full flex items-center justify-center select-none shadow-sm hover:scale-105 active:scale-95 transition-transform flex-shrink-0"
          >
            <LogoIcon className="w-full h-full text-white" fillColor="currentColor" />
          </Link>
        </div>

        {/* CENTER: PILL NAV NAVIGATION */}
        <div className="flex items-center justify-center">
          <PillNav
            items={navItems}
            activeHref={pathname}
            baseColor="#ffffff"
            pillColor="#000000"
            hoveredPillTextColor="#000000"
            pillTextColor="#ffffff"
            ease="power3.easeOut"
            initialLoadAnimation={true}
            onItemClick={(item) => {
              const sectionName = pathnameMapping[item.href] || "Home";
              setActiveSection(sectionName);
              setTimeOfLastClick(Date.now());
            }}
          />
        </div>

        {/* RIGHT: LANGUAGE & THEME CONTROLS */}
        <div className="flex items-center flex-1 justify-end">
          {mounted && (
            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0 text-white select-none">
              {/* Language Switch */}
              <div className="flex items-center text-xs sm:text-[13px] font-semibold tracking-wide gap-1">
                <button
                  type="button"
                  onClick={() => setLanguage("id")}
                  aria-label="Bahasa Indonesia"
                  className={`transition-colors px-1 py-0.5 rounded cursor-pointer ${
                    language === "id"
                      ? "text-white font-bold"
                      : "text-white/40 hover:text-white/80"
                  }`}
                >
                  ID
                </button>
                <span className="text-white/30 text-xs">/</span>
                <button
                  type="button"
                  onClick={() => setLanguage("en")}
                  aria-label="English"
                  className={`transition-colors px-1 py-0.5 rounded cursor-pointer ${
                    language === "en"
                      ? "text-white font-bold"
                      : "text-white/40 hover:text-white/80"
                  }`}
                >
                  EN
                </button>
              </div>

              {/* Separator */}
              <div className="h-4 w-[1px] bg-white/20" />

              {/* Theme Toggle Capsule */}
              <button
                type="button"
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="flex items-center gap-1.5 p-1 px-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white/90 hover:text-white transition-all cursor-pointer"
              >
                <span
                  className={`flex items-center justify-center w-5 h-5 rounded-full text-xs transition-all ${
                    theme === "light"
                      ? "bg-white text-black font-bold shadow-sm"
                      : "text-white/40"
                  }`}
                >
                  <BsSun className="text-[11px]" />
                </span>
                <span
                  className={`flex items-center justify-center w-5 h-5 rounded-full text-xs transition-all ${
                    theme === "dark"
                      ? "bg-white text-black font-bold shadow-sm"
                      : "text-white/40"
                  }`}
                >
                  <BsMoon className="text-[10px]" />
                </span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
