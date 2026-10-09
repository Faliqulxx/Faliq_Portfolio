import React, { useState } from "react";
import { CgClose, CgMenuRightAlt } from "react-icons/cg";
import { links } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useLanguage } from "@/context/language-context";

const pathnameMapping: Record<string, string> = {
  "/": "Home",
  "/about": "About",
  "/projects": "Projects",
  "/gallery": "Gallery",
  "/experience": "Experience",
  "/contact": "Contact",
  "/ai-assistant": "AI Assistant",
};

export default function MobileHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const { t } = useLanguage();

  const currentActive = pathnameMapping[pathname] ?? activeSection;

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  return (
    <div className="md:hidden flex fixed top-[0.25rem] right-1 h-12 -translate-x-1/2 py-2 z-[999]">
      <button
        onClick={() => setOpen((prev) => !prev)}
        type="button"
        aria-label="Toggle Navigation Menu"
        className="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md border border-neutral-300 dark:border-neutral-700 p-3 text-neutral-900 dark:text-neutral-100 flex items-center gap-2 text-[1.35rem] rounded-full shadow-sm hover:scale-105 hover:border-neutral-500 transition-all cursor-pointer"
      >
        {open ? <CgClose /> : <CgMenuRightAlt />}
      </button>

      <motion.div
        className={`${open ? "block" : "hidden"
          } bg-white dark:bg-[#121212] border border-neutral-200 dark:border-neutral-800 overflow-hidden top-2 mr-5 ml-2 w-56 right-12 absolute rounded-xl z-[999] shadow-2xl backdrop-blur-lg`}
        animate={open ? "open" : "closed"}
        variants={variants}
      >
        <div className="py-1">
          {links.map((link) => {
            const href = link.hash;
            const isActive = currentActive === link.name;
            const label =
              link.name === "Home"
                ? t("nav.home")
                : link.name === "About"
                ? t("nav.about")
                : link.name === "Projects"
                ? t("nav.projects")
                : link.name === "Gallery"
                ? t("nav.gallery")
                : link.name === "Experience"
                ? t("nav.experience")
                : link.name === "Contact"
                ? t("nav.contact")
                : link.name === "AI Assistant"
                ? t("nav.aiAssistant")
                : (link as { name: string }).name;

            return (
              <Link
                key={link.name}
                href={href}
                onClick={() => {
                  setOpen(false);
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
                className={`px-4 py-2.5 text-base font-medium flex items-center justify-between transition-colors ${isActive
                    ? "bg-neutral-100 dark:bg-neutral-800 text-black dark:text-white font-bold border-l-2 border-neutral-900 dark:border-white"
                    : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800/60 hover:text-black dark:hover:text-white"
                  }`}
              >
                <span>{label}</span>
                {link.name === "AI Assistant" && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-neutral-200 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 font-bold uppercase tracking-wider">
                    AI
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}

