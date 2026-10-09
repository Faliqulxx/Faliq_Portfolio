"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useLanguage } from "@/context/language-context";
import { useTheme } from "@/context/theme-context";
import type { SectionName } from "@/lib/types";
import LogoIcon from "./LogoIcon";
import PillNav from "./PillNav";
import { BsSun, BsMoon } from "react-icons/bs";

const pathnameMapping: Record<string, SectionName> = {
  "/": "Home",
  "/about": "About",
  "/projects": "Projects",
  "/gallery": "Gallery",
  "/experience": "Experience",
  "/contact": "Contact",
  "/ai-assistant": "AI Assistant",
};

export default function Header() {
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "/about" },
    { label: "PROJECTS", href: "/projects" },
    { label: "GALLERY", href: "/gallery" },
    { label: "EXPERIENCE", href: "/experience" },
    { label: "CONTACT", href: "/contact" },
    { label: "AI ASSISTANT", href: "/ai-assistant" },
  ];

  return (
    <header className="fixed top-3 sm:top-5 left-1/2 -translate-x-1/2 z-[999] w-[94vw] max-w-5xl xl:max-w-6xl transition-all">
      <div className="w-full flex items-center justify-between bg-[#0a0a0e]/95 dark:bg-[#07070a]/95 backdrop-blur-xl border border-white/20 dark:border-white/15 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 shadow-[0_10px_35px_rgba(0,0,0,0.6)]">
        
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
