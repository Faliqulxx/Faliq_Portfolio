"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { contactData, personalData } from "@/lib/data";
import { FiMail, FiGithub, FiLinkedin, FiInstagram, FiFileText, FiArrowUp } from "react-icons/fi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useCVPreview } from "@/context/cv-preview-context";
import { useLanguage } from "@/context/language-context";

const socialLinks = [
  { name: "Email", icon: <FiMail />, url: `mailto:${contactData.email}`, isResume: false },
  { name: "GitHub", icon: <FiGithub />, url: contactData.github, isResume: false },
  { name: "LinkedIn", icon: <FiLinkedin />, url: contactData.linkedin, isResume: false },
  { name: "Instagram", icon: <FiInstagram />, url: contactData.instagram, isResume: false },
  { name: "Resume", icon: <FiFileText />, url: "/cv/RESUME_FALIQUL ISHBAH.pdf", isResume: true },
];


const techStack = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Vercel",
];

export default function Footer() {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { openPreview } = useCVPreview();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (pathname === "/ai-assistant") {
    return null;
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveSection("Home");
    setTimeOfLastClick(Date.now());
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="w-full bg-neutral-50 dark:bg-[#0a0a0a] text-neutral-900 dark:text-white border-t border-neutral-200 dark:border-neutral-800 relative overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-[1600px] w-[92vw] mx-auto px-4 sm:px-8 lg:px-12 pt-16 pb-8"
      >
        {/* TOP SECTION: 2 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 mb-16">

          {/* Column 1: CTA */}
          <motion.div variants={itemVariants} className="flex flex-col gap-6 items-center md:items-start text-center md:text-left max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white">
              {t("contact.subtitle")}
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {t("about.bio").slice(0, 220)}...
            </p>
            <Link
              href="/contact"
              onClick={() => {
                setActiveSection("Contact");
                setTimeOfLastClick(Date.now());
              }}
              className="group relative inline-flex items-center justify-center px-8 py-3 font-semibold rounded-full overflow-hidden w-full md:w-fit bg-neutral-900 text-white dark:bg-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-400"
            >
              <span className="relative z-10">{t("intro.contactMe")}</span>
            </Link>
          </motion.div>

          {/* Column 2: Connect */}
          <motion.div variants={itemVariants} className="flex flex-col gap-6 items-center md:items-start text-center md:text-left">
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white">Connect</h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              {socialLinks.map((social) =>
                social.isResume ? (
                  <button
                    key={social.name}
                    onClick={() =>
                      openPreview(
                        "/cv/RESUME_FALIQUL ISHBAH.pdf",
                        "/cv/RESUME_FALIQUL ISHBAH.pdf",
                        "Faliqul Ishbah — Resume"
                      )
                    }
                    aria-label={social.name}
                    title={social.name}
                    className="group relative flex items-center justify-center w-12 h-12 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-black dark:hover:text-white hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-neutral-400"
                  >
                    <span className="text-xl">{social.icon}</span>
                    <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-transform duration-200 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-black text-xs py-1 px-2 rounded font-medium shadow-lg pointer-events-none origin-bottom whitespace-nowrap z-10">
                      {social.name}
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-[4px] border-transparent border-t-neutral-900 dark:border-t-neutral-100" />
                    </span>
                  </button>
                ) : (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    title={social.name}
                    className="group relative flex items-center justify-center w-12 h-12 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-black dark:hover:text-white hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-neutral-400"
                  >
                    <span className="text-xl">{social.icon}</span>
                    <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-transform duration-200 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-black text-xs py-1 px-2 rounded font-medium shadow-lg pointer-events-none origin-bottom whitespace-nowrap z-10">
                      {social.name}
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-[4px] border-transparent border-t-neutral-900 dark:border-t-neutral-100" />
                    </span>
                  </a>
                )
              )}
            </div>

            {/* MAP */}
            <div className="w-full mt-2">
              <p className="mb-2 text-sm font-medium text-neutral-600 dark:text-neutral-400">
                📍 Tegal sari, Pangkahkulon – Gresik, Jawa Timur
              </p>
              <div className="w-full h-[180px] rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800">
                <iframe
                  title="Google Maps Location"
                  src="https://www.google.com/maps?q=-6.913708,112.543351&z=16&output=embed"
                  className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </motion.div>

        </div>

        {/* TECH STACK BADGES */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-12">
          <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mr-2">{t("footer.builtWith")}</span>
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-full border border-neutral-200 dark:border-neutral-700"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* BOTTOM SECTION */}
        <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-4 pt-8 border-t border-neutral-200 dark:border-neutral-800 text-sm text-neutral-600 dark:text-neutral-400">
          <p>&copy; {currentYear} Faliqul Ishbah. {t("footer.rights")}.</p>
          <p>
            Designed with purpose. <span className="font-bold text-neutral-900 dark:text-white inline-block">and</span> Built with precision.
          </p>
        </motion.div>
      </motion.div>

      {/* BACK TO TOP BUTTON */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            aria-label="Back to top"
            className="fixed bottom-6 right-6 z-50 p-3 bg-neutral-900 dark:bg-white text-white dark:text-black border border-neutral-800 dark:border-neutral-200 rounded-full shadow-lg hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-neutral-400"
          >
            <FiArrowUp className="text-xl" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
