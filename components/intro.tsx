"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { RiMailSendLine } from "react-icons/ri";
import { useSectionInView } from "@/lib/hooks";
import CircularText from "./circular-text";
import ScrollVelocity from "@/app/components/ScrollVelocity/ScrollVelocity";
import { useLanguage } from "@/context/language-context";
import { useTheme } from "@/context/theme-context";
import TechText from "./TechText";
import profileImg from "@/public/images/profile.webp";
import WebThreads from "./WebThreads";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { t } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      id="home"
      ref={ref}
      className="relative w-full mb-8 sm:mb-10 lg:mb-12 scroll-mt-[28rem]
        min-h-screen
        pt-24 sm:pt-28 md:pt-32
        flex flex-col justify-between"
    >
      {/* ── BACKGROUND WEBTHREADS ── */}
      <div className="absolute inset-0 -z-10 pointer-events-none w-full h-full opacity-90 dark:opacity-90">
        <WebThreads
          color1={isDark ? "#b2afc2" : "#64748b"}
          color2={isDark ? "#94a3b8" : "#94a3b8"}
          color3={isDark ? "#ffffff" : "#1e293b"}
          speed={0.22}
          threadCount={8}
          frequency={3.6}
          spread={0.65}
          taper={1.8}
          position={0.5}
          fanMode="center"
          glow={0.025}
          falloff={0.55}
          thickness={1.2}
          brightness={isDark ? 0.65 : 0.55}
          opacity={1.0}
          mirror={true}
          shimmer={true}
          grain={true}
          grainIntensity={0.05}
          mouseInteraction={true}
          mouseStrength={0.35}
          lightMode={!isDark}
          backgroundColor={isDark ? "#09090b" : "#ffffff"}
        />
      </div>
      {/* ── HERO CONTENT ── */}
      <div className="flex-1 flex items-center w-full px-4 sm:px-8 lg:px-12">
        <div className="w-full max-w-[1600px] mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16 text-center lg:text-left">
          {/* TEKS (KIRI) */}
          <div className="flex-1 w-full max-w-3xl flex items-center justify-center lg:justify-start">
            <motion.div
              className="w-full h-[140px] sm:h-[180px] md:h-[220px] lg:h-[260px] xl:h-[300px] relative"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <TechText
                text="Faliqul Ishbah."
                fontWeight={800}
                fontSize={180}
                letterSpacing={-0.04}
                color={isDark ? "#ffffff" : "#171717"}
                accentColor={isDark ? "#737373" : "#525252"}
                reveal="letter"
                dashLength={4}
                dashGap={2}
                specks={18}
                selection={true}
                labels={true}
                draggable={true}
                sweep={true}
                speed={1}
              />
            </motion.div>
          </div>

          {/* FOTO (KANAN) + SOSIAL MEDIA */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
            className="flex flex-col items-center gap-4 flex-shrink-0"
          >
            {/* Photo + CircularText ring */}
            <div className="relative flex items-center justify-center w-44 h-44 sm:w-56 sm:h-56 lg:w-72 lg:h-72 xl:w-80 xl:h-80">
              <div className="absolute inset-0 pointer-events-none z-0">
                <CircularText
                  text="Available for Work * Available for Collaboration * "
                  spinDuration={18}
                  onHover="goBonkers"
                  className="w-full h-full text-[0.52rem] sm:text-[0.58rem] lg:text-[0.68rem] xl:text-[0.72rem] text-neutral-800 dark:text-neutral-400"
                />
              </div>

              {/* Profile photo */}
              <Image
                src={profileImg}
                alt="Faliqul Ishbah"
                priority
                className="w-32 h-32 sm:w-40 sm:h-40 lg:w-56 lg:h-56 xl:w-64 xl:h-64 rounded-full object-cover border-[0.35rem] border-white shadow-lg dark:border-neutral-800 dark:shadow-none z-10 relative"
              />
            </div>

            {/* SOSIAL MEDIA */}
            <div className="flex flex-row items-center justify-center gap-3 text-lg mt-5">
              {/* LinkedIn */}
              <a
                className="group bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 p-4 text-neutral-800 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:border-neutral-400 dark:hover:border-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-full transition-all duration-300 shadow-sm hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600"
                href="https://www.linkedin.com/in/faliqulishbah/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <BsLinkedin className="transition" />
              </a>

              {/* Email */}
              <a
                className="group bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 p-4 text-neutral-800 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:border-neutral-400 dark:hover:border-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-full transition-all duration-300 shadow-sm hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600"
                href="mailto:faliqul.isback@gmail.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Email"
              >
                <RiMailSendLine className="transition" />
              </a>

              {/* GitHub */}
              <a
                className="group bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 p-4 text-neutral-800 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:border-neutral-400 dark:hover:border-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-full transition-all duration-300 shadow-sm hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600"
                href="https://github.com/Faliqulxx"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithubSquare className="transition" />
              </a>

              {/* Instagram */}
              <a
                className="group bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 p-4 text-neutral-800 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:border-neutral-400 dark:hover:border-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-full transition-all duration-300 shadow-sm hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600"
                href="https://www.instagram.com/Faliqulx/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <BsInstagram className="transition" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── SCROLL VELOCITY TEXT ── */}
      <div className="w-full overflow-hidden pb-4">
        <ScrollVelocity
          texts={[
            "| Data Scientist | Data Analyst | AI Automation | IoT Developer | Frontend Developer",
            t("intro.availableForWork"),
          ]}
          velocity={100}
          className="custom-scroll-text"
        />
      </div>
    </section>
  );
}
