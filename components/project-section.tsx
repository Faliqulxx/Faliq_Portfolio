"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { projectsData } from "@/lib/data";
import BurstBload2 from "./burst-bload-2";
import { useSectionInView } from "@/lib/hooks";
import { useInView } from "react-intersection-observer";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import SectionHeading from "./section-heading";
import { useLanguage } from "@/context/language-context";
import {
  getTranslatedProject,
  SUBCATEGORY_TRANSLATIONS,
  BADGE_TRANSLATIONS,
} from "@/lib/project-translations";

interface Project {
  title: string;
  category: string[];
  description: string;
  tech: string[];
  image: string;
  screenshots: string[];
  features: string[];
  languages: string[];
  demoUrl?: string;
  githubUrl?: string;
}

type CategoryFilter = "data" | "web" | "all";

const SUBCATEGORIES_MAP: Record<string, string[]> = {
  data: [
    "Data Visualization",
    "Data Analytics",
    "Artificial Intelligence",
    "Automation",
    "Data Modeling",
    "Computer Vision",
    "Natural Language Processing",
  ],
  web: [
    "Web Development",
    "Full Stack",
    "AI Web Apps",
    "IoT & Embedded",
    "Frontend",
    "Backend & API",
  ],
  all: [
    "Data Visualization",
    "Data Analytics",
    "Artificial Intelligence",
    "Automation",
    "Data Modeling",
    "Web Development",
    "Full Stack",
    "IoT & Embedded",
  ],
};

const checkProjectHasSubcategory = (project: any, subCat: string): boolean => {
  const text = (
    project.title +
    " " +
    project.description +
    " " +
    (project.languages || []).join(" ") +
    " " +
    (project.features || []).join(" ")
  ).toLowerCase();

  switch (subCat) {
    case "Data Visualization":
      return text.includes("dashboard") || text.includes("visualization") || text.includes("streamlit") || text.includes("analytics") || text.includes("review");
    case "Data Analytics":
      return text.includes("analytics") || text.includes("analysis") || text.includes("sentiment") || text.includes("pandas") || text.includes("numpy") || text.includes("shopee");
    case "Artificial Intelligence":
      return text.includes("ai") || text.includes("machine learning") || text.includes("deep learning") || text.includes("llm") || text.includes("rag") || text.includes("model");
    case "Automation":
      return text.includes("automation") || text.includes("n8n") || text.includes("bot") || text.includes("assistant") || text.includes("workflow");
    case "Data Modeling":
      return text.includes("model") || text.includes("scikit-learn") || text.includes("tensorflow") || text.includes("classification") || text.includes("predictive") || text.includes("keras");
    case "Computer Vision":
      return text.includes("vision") || text.includes("opencv") || text.includes("classification") || text.includes("image") || text.includes("cat breed");
    case "Natural Language Processing":
      return text.includes("nlp") || text.includes("sentiment") || text.includes("rag") || text.includes("chatbot") || text.includes("language");
    case "Web Development":
      return text.includes("next.js") || text.includes("react") || text.includes("laravel") || text.includes("tailwind") || text.includes("web") || text.includes("html");
    case "Full Stack":
      return text.includes("next.js") || text.includes("laravel") || text.includes("postgresql") || text.includes("mysql") || text.includes("supabase") || text.includes("prisma");
    case "AI Web Apps":
      return text.includes("ai") || text.includes("chat") || text.includes("signalhr") || text.includes("fastapi");
    case "IoT & Embedded":
      return text.includes("iot") || text.includes("esp32") || text.includes("arduino") || text.includes("rfid") || text.includes("sensor");
    case "Frontend":
      return text.includes("react") || text.includes("next.js") || text.includes("bootstrap") || text.includes("tailwind") || text.includes("css");
    case "Backend & API":
      return text.includes("api") || text.includes("fastapi") || text.includes("laravel") || text.includes("postgresql") || text.includes("mysql") || text.includes("supabase");
    default:
      return text.includes(subCat.toLowerCase());
  }
};

const BADGE_COLOR_MAP: Record<string, string> = {
  blue: "bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-700",
  green: "bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-700",
  amber: "bg-neutral-200 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 border border-neutral-400 dark:border-neutral-600",
  purple: "bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-700",
  teal: "bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-700",
};

const getProjectBadges = (project: any, lang: "en" | "id" = "en") => {
  const badges: { text: string; color: "blue" | "green" | "amber" | "purple" | "teal" }[] = [];
  const title = (project.title || "").toLowerCase();
  const desc = (project.description || "").toLowerCase();
  const langs = (project.languages || []).map((l: string) => l.toLowerCase());

  let rawBadge = "WEB DEV";
  let color: "blue" | "green" | "amber" | "purple" | "teal" = "teal";
  let extraBadge: { text: string; color: "blue" | "green" | "amber" | "purple" | "teal" } | null = null;

  if (title.includes("cat breed") || desc.includes("computer vision") || langs.includes("opencv")) {
    rawBadge = "COMPUTER VISION";
    color = "purple";
  } else if (title.includes("shopee") || desc.includes("sentiment") || desc.includes("nlp") || title.includes("sentiment")) {
    rawBadge = "DATA ANALYTICS";
    color = "blue";
  } else if (title.includes("bot") || title.includes("assistant") || langs.includes("n8n") || desc.includes("automation")) {
    rawBadge = "AUTOMATION";
    color = "green";
    extraBadge = {
      text: BADGE_TRANSLATIONS["ON PROGRESS"]?.[lang] || "ON PROGRESS",
      color: "amber",
    };
  } else if (title.includes("cgn") || desc.includes("supply") || desc.includes("logistics")) {
    rawBadge = "DATA ENGINEERING";
    color = "purple";
  } else if (title.includes("hr-tools") || title.includes("attrition") || desc.includes("analytics")) {
    rawBadge = "DATA SCIENCE";
    color = "blue";
  } else if (title.includes("signalhr")) {
    rawBadge = "AI PLATFORM";
    color = "blue";
  } else if (title.includes("stickman") || title.includes("troll") || desc.includes("troll platformer")) {
    rawBadge = "GAME DEV";
    color = "purple";
  } else if (project.category?.includes("data")) {
    rawBadge = "DATA SCIENCE";
    color = "blue";
  } else {
    rawBadge = "WEB DEV";
    color = "teal";
  }

  badges.push({
    text: BADGE_TRANSLATIONS[rawBadge]?.[lang] || rawBadge,
    color,
  });
  if (extraBadge) {
    badges.push(extraBadge);
  }
  return badges;
};

type MarqueeRowProps = {
  projects: any[];
  keyPrefix: string;
  direction: 1 | -1;
  speed?: number;
  inView: boolean;
  onProjectClick: (project: any) => void;
};

function MarqueeRow({
  projects,
  keyPrefix,
  direction,
  speed = 0.6,
  inView,
  onProjectClick,
}: MarqueeRowProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isPointerDownRef = useRef(false);
  const hasMovedRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const pausedRef = useRef(false);
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const rafRef = useRef<number>();
  const [isDragging, setIsDragging] = useState(false);

  const items = [...projects, ...projects];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (direction === -1 && container.scrollLeft === 0) {
      container.scrollLeft = container.scrollWidth / 2;
    }

    const step = () => {
      if (!pausedRef.current && container) {
        const halfWidth = container.scrollWidth / 2;
        container.scrollLeft += direction * speed;

        if (direction === 1 && container.scrollLeft >= halfWidth) {
          container.scrollLeft -= halfWidth;
        } else if (direction === -1 && container.scrollLeft <= 0) {
          container.scrollLeft += halfWidth;
        }
      }
      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [direction, speed]);

  const getPageX = (e: React.MouseEvent | React.TouchEvent) =>
    "touches" in e ? e.touches[0].pageX : (e as React.MouseEvent).pageX;

  const handlePointerDown = (e: React.MouseEvent | React.TouchEvent) => {
    const container = containerRef.current;
    if (!container) return;
    isPointerDownRef.current = true;
    hasMovedRef.current = false;
    pausedRef.current = true;
    setIsDragging(true);
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    startXRef.current = getPageX(e) - container.offsetLeft;
    scrollLeftRef.current = container.scrollLeft;
  };

  const handlePointerMove = (e: React.MouseEvent | React.TouchEvent) => {
    const container = containerRef.current;
    if (!isPointerDownRef.current || !container) return;
    const x = getPageX(e) - container.offsetLeft;
    const walk = x - startXRef.current;
    if (Math.abs(walk) > 5) hasMovedRef.current = true;
    container.scrollLeft = scrollLeftRef.current - walk;
  };

  const endDrag = () => {
    isPointerDownRef.current = false;
    setIsDragging(false);
    resumeTimeoutRef.current = setTimeout(() => {
      pausedRef.current = false;
    }, 700);
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (!container) return;
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.preventDefault();
      pausedRef.current = true;
      container.scrollLeft += e.deltaY;
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
      resumeTimeoutRef.current = setTimeout(() => {
        pausedRef.current = false;
      }, 800);
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => {
        pausedRef.current = true;
        if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
      }}
      onMouseLeave={endDrag}
      onMouseDown={handlePointerDown}
      onMouseMove={handlePointerMove}
      onMouseUp={endDrag}
      onTouchStart={handlePointerDown}
      onTouchMove={handlePointerMove}
      onTouchEnd={endDrag}
      onWheel={handleWheel}
      className={`flex gap-6 overflow-x-auto scrollbar-hide select-none -mx-4 px-4 sm:mx-0 sm:px-0 ${
        isDragging ? "cursor-grabbing" : "cursor-grab"
      }`}
    >
      {items.map((project, index) => (
        <motion.div
          key={`${keyPrefix}-${index}`}
          onClick={() => {
            if (!hasMovedRef.current) onProjectClick(project);
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.9 }}
          transition={{ duration: 0.6, delay: 0.03 * (index % 10) }}
          whileHover={{ scale: isDragging ? 1 : 1.03 }}
          style={{ cursor: isDragging ? "grabbing" : "pointer" }}
          className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] xl:w-[480px] 2xl:w-[560px] relative overflow-hidden rounded-2xl bg-white dark:bg-[#141414] backdrop-blur-md border border-neutral-200 dark:border-neutral-800 shadow-sm hover:border-neutral-400 dark:hover:border-neutral-600 hover:shadow-xl transition-all"
        >
          <div className="relative w-full aspect-video overflow-hidden">
            <Image
              src={project.image.startsWith("/") ? project.image : `/${project.image}`}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 320px, 480px"
              loading="lazy"
              className="object-cover"
              draggable={false}
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-4 text-neutral-900 dark:text-white">
              {project.title}
            </h3>
            <div className="flex justify-between items-end">
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech: string, techIndex: number) => (
                  <Image
                    key={techIndex}
                    src={tech.startsWith("/") || tech.startsWith("http") ? tech : `/${tech}`}
                    alt={`Tech ${techIndex}`}
                    width={24}
                    height={24}
                    loading="lazy"
                    className="h-6 w-auto object-contain"
                    draggable={false}
                  />
                ))}
              </div>
              <div className="flex space-x-2">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors text-xl"
                  >
                    <BiLinkExternal />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors text-xl"
                  >
                    <FaGithub />
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

interface ProjectSectionProps {
  variant?: "full" | "preview";
  previewLimit?: number;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({
  variant = "full",
  previewLimit = 4,
}) => {
  const { ref } = useSectionInView("Projects", 0.5);
  const [sectionRef, inView] = useInView({
    triggerOnce: true,
  });
  const { t, language } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("data");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortKey, setSortKey] = useState("pinned");
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [showFilters, setShowFilters] = useState(true);
  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>([]);

  const categoryOptions: { key: CategoryFilter; label: string; icon: string }[] = [
    { key: "data", label: t("projects.cat.data"), icon: "📊" },
    { key: "web", label: t("projects.cat.web"), icon: "💻" },
  ];

  const sortOptions = [
    { key: "pinned", label: t("projects.sort.pinned") },
    { key: "featured", label: t("projects.sort.featured") },
    { key: "newest", label: t("projects.sort.newest") },
    { key: "oldest", label: t("projects.sort.oldest") },
    { key: "title", label: t("projects.sort.title") },
  ];

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
    setActiveSlide(0);
  };

  const previewProjects = projectsData.slice(0, previewLimit);

  const baseFiltered =
    activeCategory === "all"
      ? projectsData
      : projectsData.filter((p) => (p.category as readonly string[]).includes(activeCategory as string));

  const subCatFiltered = selectedSubcategories.length > 0
    ? baseFiltered.filter((p) =>
        selectedSubcategories.some((subCat) => checkProjectHasSubcategory(p, subCat))
      )
    : baseFiltered;

  const searchFiltered = searchQuery.trim()
    ? subCatFiltered.filter(
        (p) =>
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.languages.some((l: string) => l.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : subCatFiltered;

  const filteredProjects = [...searchFiltered].sort((a, b) => {
    if (sortKey === "title") return a.title.localeCompare(b.title);
    if (sortKey === "newest") return projectsData.indexOf(b) - projectsData.indexOf(a);
    if (sortKey === "oldest") return projectsData.indexOf(a) - projectsData.indexOf(b);
    return 0;
  });

  return (
    <motion.section
      ref={ref}
      id="projects"
      className={
        variant === "preview"
          ? "w-full bg-neutral-100 dark:bg-[#121212] border-y border-neutral-200 dark:border-neutral-800 py-16 sm:py-24 my-12 sm:my-16 relative overflow-hidden scroll-mt-28"
          : "scroll-mt-28 mb-28"
      }
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      {variant === "preview" && (
        <>
          <div className="pointer-events-none absolute -top-24 -right-24 w-[500px] h-[500px] bg-gradient-radial from-neutral-200/60 dark:from-white/[0.03] to-transparent blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-gradient-radial from-neutral-200/50 dark:from-white/[0.02] to-transparent blur-3xl" />
        </>
      )}
      <div ref={sectionRef} className="w-[92vw] max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 relative">
        {variant === "full" ? (
          <div className="w-full">
            <SectionHeading>{t("projects.title")}</SectionHeading>

            {/* ── Segmented Switcher Tabs ── */}
            <div className="flex justify-center mb-6 sm:mb-7">
              <div className="inline-flex items-center p-1 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 shadow-sm">
                {categoryOptions.map((option) => {
                  const isActive = activeCategory === option.key;
                  return (
                    <button
                      key={option.key}
                      type="button"
                      onClick={() => {
                        setActiveCategory(option.key);
                        setSelectedSubcategories([]);
                      }}
                      className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                        isActive
                          ? "bg-black text-white dark:bg-white dark:text-black shadow-md scale-[1.02]"
                          : "text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-neutral-200/60 dark:hover:bg-neutral-800/60"
                      }`}
                    >
                      <span className="text-sm">{option.icon}</span>
                      {option.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ── Toolbar: Search + Filters + Sort + Showing Count ── */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-2.5 flex-1 max-w-lg">
                {/* Search */}
                <div className="relative flex-1">
                  <svg
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 dark:text-neutral-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35" />
                  </svg>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={t("projects.searchPlaceholder")}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900/80 backdrop-blur-md text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:border-neutral-500 dark:focus:border-neutral-600 focus:ring-1 focus:ring-neutral-400 dark:focus:ring-neutral-600 transition"
                  />
                </div>

                {/* Filters Toggle Button */}
                <button
                  onClick={() => setShowFilters((prev) => !prev)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-semibold transition ${
                    showFilters || selectedSubcategories.length > 0
                      ? "bg-black text-white dark:bg-white dark:text-black border-transparent shadow-md"
                      : "bg-white dark:bg-neutral-900/80 border-neutral-300 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:border-neutral-400 dark:hover:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M7 12h10M11 18h2" />
                  </svg>
                  <span>{t("projects.filters")}</span>
                  {selectedSubcategories.length > 0 && (
                    <span className="w-5 h-5 rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 text-[11px] font-bold flex items-center justify-center">
                      {selectedSubcategories.length}
                    </span>
                  )}
                </button>
              </div>

              {/* Right: Sort dropdown & Entry count */}
              <div className="flex items-center gap-4 justify-between sm:justify-end">
                <div className="relative">
                  <button
                    onClick={() => setShowSortMenu((v) => !v)}
                    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium transition ${
                      showSortMenu
                        ? "border-neutral-400 dark:border-neutral-600 bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white"
                        : "border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900/80 text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:border-neutral-400 dark:hover:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                    }`}
                  >
                    <span>
                      {t("projects.sort")} <span className="font-bold text-neutral-900 dark:text-white">{sortOptions.find((s) => s.key === sortKey)?.label}</span>
                    </span>
                    {showSortMenu ? (
                      <svg className="w-3.5 h-3.5 text-neutral-900 dark:text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                      </svg>
                    ) : (
                      <svg className="w-3.5 h-3.5 text-neutral-400 dark:text-neutral-500" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </button>

                  {showSortMenu && (
                    <div className="absolute right-0 top-full mt-2 z-30 bg-white dark:bg-[#161616] border border-neutral-300 dark:border-neutral-700 rounded-2xl shadow-2xl min-w-[200px] py-1.5 overflow-hidden backdrop-blur-md">
                      {sortOptions.map((opt) => {
                        const isSelected = sortKey === opt.key;
                        return (
                          <button
                            key={opt.key}
                            onClick={() => {
                              setSortKey(opt.key);
                              setShowSortMenu(false);
                            }}
                            className={`w-full flex items-center justify-between px-4 py-2.5 text-sm transition-colors ${
                              isSelected
                                ? "text-neutral-950 dark:text-white font-bold bg-neutral-100 dark:bg-neutral-800"
                                : "text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800/60"
                            }`}
                          >
                            <span>{opt.label}</span>
                            {isSelected && (
                              <svg className="w-4 h-4 text-neutral-900 dark:text-white font-bold" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>

                <p className="text-sm text-neutral-500 dark:text-neutral-400 whitespace-nowrap">
                  {t("projects.showing")} <span className="font-bold text-neutral-900 dark:text-white">{filteredProjects.length}</span> {t("projects.entries")}
                </p>
              </div>
            </div>

            {/* ── Sub-Category Filter Drawer (Multiple Select) ── */}
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/80 dark:bg-neutral-900/40 backdrop-blur-md p-4 sm:p-5 mb-8 shadow-sm"
              >
                <div className="flex items-center justify-between mb-3">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                    {t("projects.filterBySub")}
                  </p>
                  {selectedSubcategories.length > 0 && (
                    <button
                      onClick={() => setSelectedSubcategories([])}
                      className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 hover:underline"
                    >
                      {t("projects.clearFilters")} ({selectedSubcategories.length})
                    </button>
                  )}
                </div>

                <div className="flex flex-wrap gap-2">
                  {(SUBCATEGORIES_MAP[activeCategory] || SUBCATEGORIES_MAP.data).map((subCat) => {
                    const isSelected = selectedSubcategories.includes(subCat);
                    const label =
                      (SUBCATEGORY_TRANSLATIONS[subCat] as { en: string; id: string } | undefined)?.[language] || subCat;
                    return (
                      <button
                        key={subCat}
                        onClick={() => {
                          setSelectedSubcategories((prev) =>
                            prev.includes(subCat)
                              ? prev.filter((c) => c !== subCat)
                              : [...prev, subCat]
                          );
                        }}
                        className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                          isSelected
                            ? "bg-black text-white dark:bg-white dark:text-black shadow-sm scale-[1.02]"
                            : "bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:border-neutral-400 dark:hover:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-700"
                        }`}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* ── Project Grid (3 Columns) ── */}
            {filteredProjects.length === 0 ? (
              <div className="text-center py-24 text-neutral-400 dark:text-neutral-500 text-sm">
                {t("projects.noMatch")}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((rawProject, index) => {
                  const project = getTranslatedProject(rawProject, language);
                  const badges = getProjectBadges(rawProject, language);
                  return (
                    <motion.div
                      key={project.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.04 * (index % 12), duration: 0.4 }}
                      onClick={() => handleProjectClick(rawProject)}
                      className="group flex flex-col justify-between rounded-2xl bg-white dark:bg-[#141414] backdrop-blur-md border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 hover:shadow-xl transition-all duration-300 p-4 sm:p-5 cursor-pointer"
                    >
                      {/* Top Preview Image */}
                      <div className="relative overflow-hidden rounded-xl aspect-[16/10] bg-neutral-100 dark:bg-black/40 border border-neutral-200 dark:border-neutral-800 mb-4">
                        <Image
                          src={project.image.startsWith("/") ? project.image : `/${project.image}`}
                          alt={project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          loading="lazy"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      {/* Card Info */}
                      <div className="flex flex-col flex-1">
                        {/* Badges row */}
                        <div className="flex flex-wrap items-center gap-1.5 mb-2.5">
                          {badges.map((b, i) => (
                            <span
                              key={i}
                              className={`text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full ${BADGE_COLOR_MAP[b.color]}`}
                            >
                              {b.text}
                            </span>
                          ))}
                        </div>

                        {/* Title */}
                        <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white leading-snug line-clamp-1 group-hover:text-neutral-500 dark:group-hover:text-neutral-300 transition-colors mb-2">
                          {project.title}
                        </h3>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed line-clamp-2 mb-4 flex-1">
                          {project.description}
                        </p>

                        {/* Bottom Explore Link */}
                        <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
                          <span className="text-xs sm:text-sm font-semibold text-neutral-800 dark:text-neutral-200 group-hover:text-black dark:group-hover:text-white flex items-center gap-1.5 transition-colors">
                            {t("projects.exploreWriteup")} <span className="text-xs">↗</span>
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}

          </div>
        ) : (
          /* ──────── PREVIEW: SELECTED WORKS (FULL BLEED SECTION) ──────── */
          <div className="relative w-full">
            {/* Header row */}
            <div className="relative flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-8">
              <div className="flex items-center gap-3">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-neutral-950 dark:text-white leading-none">
                  {t("projects.selectedWorks").split(" ")[0]}<br />{t("projects.selectedWorks").split(" ").slice(1).join(" ")}
                </h2>
                <BurstBload2 />
              </div>
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-[340px] sm:text-right leading-relaxed italic">
                {t("projects.selectedWorksSubtitle")}
              </p>
            </div>

            {/* Top divider */}
            <div className="w-full h-px bg-neutral-300 dark:bg-neutral-800 mb-2" />

            {/* Project list */}
            <div className="relative flex flex-col">
              {previewProjects.map((rawProject, index) => {
                const project = getTranslatedProject(rawProject, language);
                return (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 32 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.12, duration: 0.5 }}
                    className="group py-10 sm:py-14 border-b border-neutral-300 dark:border-neutral-800 last:border-b-0"
                  >
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 items-center lg:items-start">

                      {/* LEFT: content */}
                      <div className="flex-1 min-w-0">
                        {/* Category badge */}
                        <div className="mb-4">
                          <span className="inline-block px-3.5 py-1 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 text-xs font-bold uppercase tracking-widest">
                            {Array.isArray(project.category)
                              ? project.category.join(" · ")
                              : project.category}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-neutral-950 dark:text-white leading-tight mb-4 group-hover:text-neutral-500 dark:group-hover:text-neutral-300 transition-colors duration-300">
                          {project.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6 max-w-xl">
                          {project.description.length > 200
                            ? project.description.slice(0, 200) + "…"
                            : project.description}
                        </p>

                        {/* Tech pills */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.languages.slice(0, 6).map((lang: string, i: number) => (
                            <span
                              key={i}
                              className="px-3.5 py-1 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 text-xs sm:text-sm font-medium"
                            >
                              {lang}
                            </span>
                          ))}
                        </div>

                        {/* Action buttons */}
                        <div className="flex flex-wrap items-center gap-3">
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors duration-200 underline underline-offset-4"
                            >
                              <FaGithub className="text-base" />
                              {t("projects.readCaseStudy")}
                            </a>
                          )}
                          {project.demoUrl && (
                            <a
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-black dark:bg-white text-white dark:text-black text-xs sm:text-sm font-bold hover:opacity-85 transition-all duration-200 hover:scale-105 shadow-md"
                            >
                              {t("projects.visitSite")} <BiLinkExternal className="text-sm" />
                            </a>
                          )}
                          <button
                            onClick={() => handleProjectClick(rawProject)}
                            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 text-xs sm:text-sm font-bold hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-200 hover:scale-105"
                          >
                            {t("projects.details")} <BsArrowRight className="text-xs" />
                          </button>
                        </div>
                      </div>

                      {/* RIGHT: screenshot */}
                      <div className="w-full lg:w-[48%] xl:w-[46%] flex-shrink-0">
                        <div
                          className="relative aspect-video rounded-2xl sm:rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 cursor-pointer group/img shadow-xl hover:shadow-2xl transition-all duration-500"
                          onClick={() => handleProjectClick(rawProject)}
                        >
                          <Image
                            src={project.image.startsWith("/") ? project.image : `/${project.image}`}
                            alt={project.title}
                            fill
                            sizes="(max-width: 1024px) 100vw, 600px"
                            loading="lazy"
                            className="object-cover group-hover/img:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                            <span className="opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 bg-black text-white text-xs font-bold px-4 py-2 rounded-full shadow">
                              {t("projects.viewCaseStudy")}
                            </span>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 pt-10">
                            <p className="text-white text-xs sm:text-sm font-medium truncate">{project.title}</p>
                          </div>
                        </div>
                      </div>

                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-10 sm:mt-12 flex justify-start">
              <Link
                href="/projects"
                className="btn-brand group relative inline-flex items-center gap-2.5 px-8 py-3.5 text-sm sm:text-base font-semibold rounded-full overflow-hidden w-fit shadow-lg hover:scale-105 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {t("projects.viewAll")} <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 h-full w-full bg-neutral-200/20 dark:bg-black/10 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out" />
              </Link>
            </div>

          </div>
        )}
      </div>

      {/* ─── PROJECT DETAIL MODAL ─────────────────────────────── */}
      {selectedProject && (() => {
        const activeProject = getTranslatedProject(selectedProject, language);
        return (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >
            <motion.div
              className="bg-white dark:bg-[#141414] w-full max-w-5xl max-h-[90vh] rounded-2xl shadow-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden flex flex-col lg:flex-row"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* ── LEFT: Image Slider ── */}
              <div className="lg:w-1/2 flex flex-col bg-neutral-100 dark:bg-black/40">
                <div className="relative w-full aspect-video overflow-hidden">
                  <Image
                    key={activeSlide}
                    src={(() => {
                      const list = [activeProject.image, ...activeProject.screenshots];
                      const s = list[activeSlide] || list[0];
                      return s.startsWith("/") ? s : `/${s}`;
                    })()}
                    alt={`slide-${activeSlide}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-cover"
                  />
                  {[activeProject.image, ...activeProject.screenshots].length > 1 && (
                    <>
                      <button
                        onClick={() => setActiveSlide((p) => (p === 0 ? [activeProject.image, ...activeProject.screenshots].length - 1 : p - 1))}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black text-white rounded-full w-8 h-8 flex items-center justify-center transition z-10"
                      >
                        ‹
                      </button>
                      <button
                        onClick={() => setActiveSlide((p) => (p === [activeProject.image, ...activeProject.screenshots].length - 1 ? 0 : p + 1))}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black text-white rounded-full w-8 h-8 flex items-center justify-center transition z-10"
                      >
                        ›
                      </button>
                    </>
                  )}
                  <div className="absolute bottom-2 right-3 bg-black/70 text-white text-xs px-2.5 py-0.5 rounded-full font-mono z-10">
                    {activeSlide + 1} / {[activeProject.image, ...activeProject.screenshots].length}
                  </div>
                </div>

                <div className="flex gap-2 p-3 overflow-x-auto scrollbar-hide">
                  {[activeProject.image, ...activeProject.screenshots].map((src: string, i: number) => (
                    <button
                      key={i}
                      onClick={() => setActiveSlide(i)}
                      className={`relative flex-shrink-0 w-16 h-10 rounded-md overflow-hidden border-2 transition ${
                        i === activeSlide
                          ? "border-neutral-900 dark:border-white"
                          : "border-transparent opacity-50 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={src.startsWith("/") ? src : `/${src}`}
                        alt={`thumb-${i}`}
                        fill
                        sizes="64px"
                        loading="lazy"
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* ── RIGHT: Project Details ── */}
              <div className="lg:w-1/2 overflow-y-auto p-6 flex flex-col gap-4">
                <button
                  onClick={handleCloseModal}
                  className="absolute top-4 right-4 z-10 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 border border-neutral-300 dark:border-neutral-700 rounded-full w-8 h-8 flex items-center justify-center transition"
                >
                  <span className="text-xl leading-none">&times;</span>
                </button>

                <div>
                  <h2 className="text-2xl font-bold text-neutral-950 dark:text-white mb-2">{activeProject.title}</h2>
                  <div className="flex gap-2 flex-wrap">
                    {activeProject.demoUrl && (
                      <a
                        href={activeProject.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-black dark:bg-white text-white dark:text-black text-sm font-medium hover:opacity-85 shadow-sm transition"
                      >
                        <BiLinkExternal className="text-base" /> {t("projects.modal.liveDemo")}
                      </a>
                    )}
                    {activeProject.githubUrl && (
                      <a
                        href={activeProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 text-sm font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
                      >
                        <FaGithub className="text-base" /> {t("projects.modal.github")}
                      </a>
                    )}
                  </div>
                </div>

                <div>
                  <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-sm">{activeProject.description}</p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-2">{t("projects.modal.features")}</h3>
                  <ul className="space-y-1.5">
                    {activeProject.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-neutral-700 dark:text-neutral-300">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-2">{t("projects.modal.techStack")}</h3>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.languages.map((lang: string, index: number) => (
                      <span
                        key={index}
                        className="px-2.5 py-1 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 rounded-full text-xs font-medium"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        );
      })()}
    </motion.section>
  );
};

export default ProjectSection;