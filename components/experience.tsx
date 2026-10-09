"use client";

import React, { useState } from "react";
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { FiMapPin, FiCalendar } from "react-icons/fi";
import Link from "next/link";
import { useLanguage } from "@/context/language-context";

interface ExperienceItem {
  id: string;
  role: { id: string; en: string };
  company: { id: string; en: string };
  location: string;
  period: { id: string; en: string };
  isLive?: boolean;
  summary: { id: string; en: string };
  points: { id: string[]; en: string[] };
  tags: string[];
  image?: string;
  images?: string[];
  projectUrl?: string;
}

const EXPERIENCES: ExperienceItem[] = [
  {
    id: "ai-automation",
    role: {
      id: "AI Automation Engineer",
      en: "AI Automation Engineer",
    },
    company: {
      id: "Freelance / Chatbot UMM",
      en: "Freelance / Informatics Bot",
    },
    location: "Gresik, Indonesia",
    period: {
      id: "Jul 2025 – Sekarang",
      en: "Jul 2025 – Present",
    },
    isLive: true,
    summary: {
      id: "Membangun chatbot AI untuk Program Studi Informatika, mulai dari perancangan arsitektur workflow hingga integrasi API dan basis pengetahuan.",
      en: "Built an AI chatbot for the Informatics Study Program, from workflow design to API integration and knowledge retrieval.",
    },
    points: {
      id: [
        "Merancang alur kerja otomatisasi end-to-end menggunakan n8n untuk menangani pertanyaan akademik mahasiswa secara akurat.",
        "Mengintegrasikan RESTful API dan basis pengetahuan RAG (Retrieval-Augmented Generation) untuk pencarian dokumen cepat.",
        "Meningkatkan efisiensi interaksi pengguna dengan respons otomatis yang konsisten dan tersedia 24/7.",
      ],
      en: [
        "Designed automated workflows that handle academic questions and student queries end to end.",
        "Integrated external APIs and a knowledge base (RAG) for fast, highly accurate contextual answers.",
        "Improved user interaction efficiency with faster, consistent, and 24/7 reliable automated replies.",
      ],
    },
    tags: ["n8n", "RAG", "REST API", "Chatbot", "Python", "FastAPI"],
    image: "/images/Experience/AI Automation Engineer/1.png",
    images: [
      "/images/Experience/AI Automation Engineer/1.png",
      "/images/Experience/AI Automation Engineer/2.png",
      "/images/Experience/AI Automation Engineer/3.png",
    ],
    projectUrl: "/projects",
  },
  {
    id: "web-programmer",
    role: {
      id: "Web Programmer (Intern)",
      en: "Web Programmer (Intern)",
    },
    company: {
      id: "DISPARTA Kab. Pasuruan",
      en: "DISPARTA Pasuruan Regency",
    },
    location: "Pasuruan, Jawa Timur",
    period: {
      id: "Jul – Agt 2025",
      en: "Jul – Aug 2025",
    },
    summary: {
      id: "Mengembangkan dan memelihara portal resmi dinas DISPARTA dan OnTrip untuk layanan informasi pariwisata daerah.",
      en: "Maintained and enhanced official government portals for DISPARTA and OnTrip regional tourism services.",
    },
    points: {
      id: [
        "Melakukan perbaikan bug, penambahan fitur baru, serta optimasi performa halaman web resmi dinas.",
        "Berkolaborasi dengan stakeholder dinas untuk memastikan reliabilitas sistem, keterbacaan data, dan kemudahan akses pengguna.",
        "Mengoptimalkan database relasional MySQL dan struktur backend berbasis framework Laravel.",
      ],
      en: [
        "Engineered feature enhancements, performance tuning, and resolved critical stakeholder-reported bugs.",
        "Collaborated with government departments to optimize UI/UX and system accessibility for tourists.",
        "Optimized relational database queries and backend structures using Laravel and PHP.",
      ],
    },
    tags: ["Laravel", "PHP", "MySQL", "Bootstrap", "Government Portal"],
    image: "/images/Experience/Web Programmer (Intern)/1.png",
    images: [
      "/images/Experience/Web Programmer (Intern)/1.png",
      "/images/Experience/Web Programmer (Intern)/2.png",
      "/images/Experience/Web Programmer (Intern)/3.png",
    ],
    projectUrl: "/projects",
  },
  {
    id: "software-engineer",
    role: {
      id: "Software Engineer / Web Dev",
      en: "Software Engineer / Web Dev",
    },
    company: {
      id: "Project / Freelance",
      en: "Project / Freelance",
    },
    location: "Gresik, Indonesia",
    period: {
      id: "Mar – Des 2022",
      en: "Mar – Dec 2022",
    },
    summary: {
      id: "Membantu UMKM dan bisnis online dalam membangun, mengkustomisasi, dan memelihara aplikasi web toko online modern.",
      en: "Built, customized, and maintained high-performance web applications and e-commerce platforms for MSMEs and clients.",
    },
    points: {
      id: [
        "Mengembangkan aplikasi web responsif end-to-end yang disesuaikan dengan kebutuhan alur bisnis klien.",
        "Mengintegrasikan katalog produk, manajemen inventaris, dan optimasi SEO untuk meningkatkan visibilitas digital.",
        "Meningkatkan kecepatan loading halaman dan pengalaman mobile untuk memaksimalkan tingkat konversi.",
      ],
      en: [
        "Built end-to-end responsive web applications tailored to specific client business requirements.",
        "Integrated product catalogs, inventory management, and SEO optimizations to boost digital visibility.",
        "Optimized page load speed and mobile responsiveness, increasing user engagement and conversions.",
      ],
    },
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "E-Commerce"],
    image: "/images/Experience/Software Engineer/1.png",
    images: [
      "/images/Experience/Software Engineer/1.png",
      "/images/Experience/Software Engineer/2.png",
      "/images/Experience/Software Engineer/3.png",
    ],
    projectUrl: "/projects",
  },
  {
    id: "data-analyst",
    role: {
      id: "Data Analyst / Scientist",
      en: "Data Analyst / Scientist",
    },
    company: {
      id: "Telkom Indonesia",
      en: "Telkom Indonesia",
    },
    location: "Yogyakarta, Indonesia",
    period: {
      id: "Agt 2024 – Feb 2025",
      en: "Aug 2024 – Feb 2025",
    },
    summary: {
      id: "Fokus pada analisis data dan pengembangan fitur data-driven untuk tool HR manajemen kinerja karyawan.",
      en: "Focused on data analysis and data-driven feature development for enterprise HR attendance and performance tools.",
    },
    points: {
      id: [
        "Melakukan pengolahan, pembersihan data, dan analisis eksplorasi terhadap data absensi, pola shift, dan cuti karyawan.",
        "Membangun visualisasi interaktif dan model prediksi performa untuk mendukung pengambilan keputusan operasional.",
        "Menghasilkan dashboard insight berbasis Python dan SQL untuk optimasi efisiensi manajemen sumber daya manusia.",
      ],
      en: [
        "Conducted exploratory data analysis and data preprocessing on employee attendance, shift patterns, and leave records.",
        "Developed interactive visual dashboards and predictive models to assist operational workforce decision-making.",
        "Automated reporting workflows using Python, Pandas, and SQL for actionable HR analytics.",
      ],
    },
    tags: ["Python", "Pandas", "Scikit-learn", "SQL", "Data Analytics", "Streamlit"],
    image: "/images/Experience/Data Analyst/1.png",
    images: [
      "/images/Experience/Data Analyst/1.png",
      "/images/Experience/Data Analyst/2.png",
      "/images/Experience/Data Analyst/3.jfif",
    ],
    projectUrl: "/projects",
  },
];

interface ExperienceProps {
  variant?: "full" | "preview";
}

export default function Experience({ variant = "full" }: ExperienceProps = {}) {
  const { ref } = useSectionInView("Experience");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const { language, t } = useLanguage();
  const isIndo = language === "id";

  const activeExp = EXPERIENCES[selectedIndex] || EXPERIENCES[0];
  const currentImage = (activeExp.images && activeExp.images[selectedImageIndex]) || activeExp.image;

  if (variant === "preview") {
    return (
      <section
        id="experience"
        ref={ref}
        className="w-full scroll-mt-20 sm:scroll-mt-24 md:scroll-mt-28 my-12 sm:my-16 lg:my-20"
      >
        <div className="w-full max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-[380px_1fr] xl:grid-cols-[430px_1fr] gap-10 lg:gap-16 items-start">
          {/* ── LEFT COLUMN ── */}
          <div className="flex flex-col items-start lg:sticky lg:top-28">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-400 dark:text-neutral-500 font-bold mb-4">
              {t("experience.eyebrow")}
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-neutral-950 dark:text-white tracking-tight leading-[1.05] mb-5">
              {t("experience.heading")}
            </h2>

            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8 max-w-[360px]">
              {t("experience.subtitle")}
            </p>

            <Link
              href="/experience"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-black text-white dark:bg-white dark:text-black font-semibold text-sm shadow-md hover:scale-105 active:scale-95 transition-all duration-200 group"
            >
              <span>{t("experience.viewAll")}</span>
              <BsArrowRight className="text-base group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* ── RIGHT COLUMN: EXPERIENCE LIST ── */}
          <div className="flex flex-col border-t border-neutral-300 dark:border-neutral-800">
            {EXPERIENCES.map((exp, idx) => {
              const numberStr = String(idx + 1).padStart(2, "0");
              return (
                <Link
                  key={exp.id}
                  href="/experience"
                  className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-7 sm:py-8 border-b border-neutral-300 dark:border-neutral-800 hover:bg-neutral-100/60 dark:hover:bg-neutral-900/40 -mx-3 px-3 sm:-mx-4 sm:px-4 rounded-xl transition-all duration-200 cursor-pointer"
                >
                  {/* Left part of row: number + title + company + LIVE */}
                  <div className="flex items-start gap-5 sm:gap-7 flex-1 min-w-0">
                    <span className="font-mono text-xs sm:text-sm font-semibold text-neutral-400 dark:text-neutral-500 pt-1 shrink-0 select-none">
                      {numberStr}
                    </span>

                    <div className="flex flex-col min-w-0">
                      <h3 className="text-lg sm:text-xl font-bold text-neutral-950 dark:text-white tracking-tight group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors leading-snug">
                        {isIndo ? exp.role.id : exp.role.en}
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                        {isIndo ? exp.company.id : exp.company.en}
                      </p>
                      {exp.isLive && (
                        <div className="flex items-center gap-1.5 mt-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white animate-pulse" />
                          <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-neutral-900 dark:text-neutral-200">
                            LIVE
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right part of row: period + arrow */}
                  <div className="flex items-center gap-3 sm:gap-5 self-end sm:self-center shrink-0 pl-10 sm:pl-0">
                    <span className="text-xs sm:text-sm font-mono text-neutral-500 dark:text-neutral-400">
                      {isIndo ? exp.period.id : exp.period.en}
                    </span>
                    <BsArrowRight className="text-sm sm:text-base text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-950 dark:group-hover:text-white group-hover:translate-x-1.5 transition-all" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="experience" ref={ref} className="w-full scroll-mt-20 sm:scroll-mt-24 md:scroll-mt-28 mb-20 sm:mb-28 lg:mb-36">
      <h1 className="sr-only">{t("experience.title")}</h1>

      <div className="w-full max-w-[1240px] mx-auto flex flex-col gap-6 sm:gap-8">
        {/* ─── MAIN DUAL-PANE EXPERIENCE BOARD ─── */}
        <div className="w-full rounded-[2rem] border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121212] overflow-hidden shadow-xl shadow-black/5 dark:shadow-2xl grid grid-cols-1 lg:grid-cols-[330px_1fr] xl:grid-cols-[360px_1fr]">

          {/* ── LEFT COLUMN: Role Tabs Sidebar ── */}
          <div className="flex flex-col border-b lg:border-b-0 lg:border-r border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-[#0e0e0e]/60">
            {EXPERIENCES.map((exp, idx) => {
              const isSelected = selectedIndex === idx;
              return (
                <button
                  key={exp.id}
                  onClick={() => {
                    setSelectedIndex(idx);
                    setSelectedImageIndex(0);
                  }}
                  className={`text-left p-5 sm:p-6 transition-all duration-200 border-b border-neutral-200/80 dark:border-neutral-800/80 last:border-b-0 relative group cursor-pointer ${isSelected
                      ? "bg-neutral-900 text-white dark:bg-white dark:text-black shadow-md z-10"
                      : "bg-transparent text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800/50"
                    }`}
                >
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3
                        className={`text-sm sm:text-base font-bold tracking-tight leading-snug ${isSelected
                            ? "text-white dark:text-black"
                            : "text-neutral-900 dark:text-white group-hover:text-black dark:group-hover:text-white"
                          }`}
                      >
                        {isIndo ? exp.role.id : exp.role.en}
                      </h3>
                    </div>

                    <p
                      className={`text-xs font-medium ${isSelected
                          ? "text-neutral-300 dark:text-neutral-600"
                          : "text-neutral-500 dark:text-neutral-400"
                        }`}
                    >
                      {isIndo ? exp.company.id : exp.company.en}
                    </p>

                    <div className="flex items-center gap-2 mt-3 text-[11px] font-mono">
                      <span
                        className={`font-semibold ${isSelected
                            ? "text-neutral-300 dark:text-neutral-700"
                            : "text-neutral-400 dark:text-neutral-500"
                          }`}
                      >
                        {isIndo ? exp.period.id : exp.period.en}
                      </span>
                      {exp.isLive && (
                        <span
                          className={`inline-flex items-center gap-1 font-bold text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full ${isSelected
                              ? "bg-white/20 text-white dark:bg-black/10 dark:text-black"
                              : "bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                            }`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-500 animate-pulse" />
                          LIVE
                        </span>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* ── RIGHT COLUMN: Active Role Details View ── */}
          <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeExp.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col flex-1"
              >
                {/* 1. Big Role Title */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-950 dark:text-white tracking-tight leading-tight mb-2">
                  {isIndo ? activeExp.role.id : activeExp.role.en}
                </h2>

                {/* 2. Subtitle: Company, Location & Period Capsule */}
                <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mb-6">
                  <span className="font-semibold text-neutral-900 dark:text-white">
                    {isIndo ? activeExp.company.id : activeExp.company.en}
                  </span>
                  <span className="text-neutral-300 dark:text-neutral-700">•</span>
                  <span className="flex items-center gap-1">
                    <FiMapPin className="text-neutral-400" /> {activeExp.location}
                  </span>
                  <span className="text-neutral-300 dark:text-neutral-700">•</span>
                  <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800/90 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-neutral-200 flex items-center gap-1.5">
                    <FiCalendar className="text-[11px]" />
                    {isIndo ? activeExp.period.id : activeExp.period.en}
                  </span>
                </div>

                {/* 3. Summary sentence */}
                <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6 font-normal">
                  {isIndo ? activeExp.summary.id : activeExp.summary.en}
                </p>

                {/* 4. Numbered Responsibility & Achievement Points */}
                <div className="flex flex-col mb-6">
                  {(isIndo ? activeExp.points.id : activeExp.points.en).map((point, pIdx) => (
                    <div
                      key={pIdx}
                      className="flex items-start gap-3.5 py-3 border-b border-dashed border-neutral-200 dark:border-neutral-800/80 first:pt-0 last:border-b-0"
                    >
                      <span className="font-mono text-xs font-bold text-neutral-400 dark:text-neutral-500 w-6 pt-0.5 select-none shrink-0">
                        {String(pIdx + 1).padStart(2, "0")}
                      </span>
                      <p className="text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 leading-relaxed flex-1">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>

                {/* 5. Technology Pill Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {activeExp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3.5 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-800/60 text-xs font-semibold text-neutral-900 dark:text-neutral-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* 6. Screenshot / Visual Preview Frame (16:8 ratio) */}
                <div className="relative w-full aspect-[16/8] rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-[#181818] mb-4 group shadow-sm">
                  {currentImage ? (
                    <Image
                      key={currentImage}
                      src={currentImage}
                      alt={activeExp.role.en}
                      fill
                      sizes="(max-width: 1024px) 100vw, 800px"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-neutral-400 dark:text-neutral-600 font-mono text-xs tracking-widest uppercase">
                      <span>EXPERIENCE SCREENSHOT</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-white text-xs font-semibold">
                      {isIndo ? activeExp.role.id : activeExp.role.en}
                    </span>
                  </div>
                </div>

                {/* Multi-image thumbnail selector */}
                {activeExp.images && activeExp.images.length > 1 && (
                  <div className="flex items-center gap-3 mb-6 overflow-x-auto pb-1">
                    {activeExp.images.map((imgSrc, imgIdx) => {
                      const isImgActive = selectedImageIndex === imgIdx;
                      return (
                        <button
                          key={imgSrc}
                          type="button"
                          onClick={() => setSelectedImageIndex(imgIdx)}
                          className={`relative w-20 h-12 rounded-lg overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                            isImgActive
                              ? "border-neutral-950 dark:border-white ring-2 ring-neutral-400/30 dark:ring-white/30 scale-105"
                              : "border-neutral-200 dark:border-neutral-800 opacity-60 hover:opacity-100"
                          }`}
                        >
                          <Image
                            src={imgSrc}
                            alt={`Preview ${imgIdx + 1}`}
                            fill
                            sizes="80px"
                            className="object-cover object-top"
                          />
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* 7. Bottom Explore Project Link */}
                <div className="pt-2 flex items-center justify-between">
                  <Link
                    href={activeExp.projectUrl || "/projects"}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-neutral-900 dark:text-white underline underline-offset-4 hover:opacity-75 transition-opacity"
                  >
                    <span>{isIndo ? "Lihat proyek" : "View project"}</span>
                    <BsArrowRight className="text-xs" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ─── BOTTOM STATS BAR (3 COLUMNS) ─── */}
        <div className="w-full rounded-2xl sm:rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121212] p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-neutral-200 dark:divide-neutral-800 text-center gap-6 md:gap-0 shadow-sm">
          {/* Col 1 */}
          <div className="flex flex-col items-center justify-center px-4 pt-2 md:pt-0">
            <span className="text-4xl sm:text-5xl font-black text-neutral-950 dark:text-white leading-none mb-1.5 tracking-tight">
              4
            </span>
            <span className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 font-medium">
              {isIndo ? "Peran & proyek riwayat" : "Roles & projects"}
            </span>
          </div>

          {/* Col 2 */}
          <div className="flex flex-col items-center justify-center px-4 pt-6 md:pt-0">
            <span className="text-4xl sm:text-5xl font-black text-neutral-950 dark:text-white leading-none mb-1.5 tracking-tight">
              10+
            </span>
            <span className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 font-medium">
              {isIndo ? "Alur otomatisasi dibangun" : "Workflows automated"}
            </span>
          </div>

          {/* Col 3 */}
          <div className="flex flex-col items-center justify-center px-4 pt-6 md:pt-0">
            <span className="text-4xl sm:text-5xl font-black text-neutral-950 dark:text-white leading-none mb-1.5 tracking-tight">
              3
            </span>
            <span className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 font-medium">
              {isIndo ? "Domain utama: Data · AI · Web" : "Core domains: Data · AI · Web"}
            </span>
          </div>
        </div>

        {/* ─── BOTTOM CTA BUTTON ─── */}
        <div className="flex justify-center pt-2 sm:pt-4">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-black text-sm sm:text-base font-bold shadow-lg hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-neutral-400"
          >
            <span>{isIndo ? "Mari bekerja sama" : "Let's work together"}</span>
            <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
