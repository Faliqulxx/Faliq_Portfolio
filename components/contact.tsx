"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import toast from "react-hot-toast";
import { HiOutlineMail } from "react-icons/hi";
import { BsLinkedin, BsInstagram, BsArrowRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight, FiChevronDown } from "react-icons/fi";
import Link from "next/link";
import { useLanguage } from "@/context/language-context";
import { useTheme } from "@/context/theme-context";
import SlideCommit from "./SlideCommit";

interface ContactProps {
  variant?: "full" | "preview";
}

export default function Contact({ variant = "full" }: ContactProps = {}) {
  const { ref } = useSectionInView("Contact");
  const { t, language } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const isIndo = language === "id";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleConfirm = async () => {
    if (!name.trim() || !email.trim() || !message.trim()) {
      const errMsg = isIndo
        ? "Mohon lengkapi Nama, Email, dan Pesan terlebih dahulu."
        : "Please fill in Name, Email, and Message before sliding.";
      toast.error(errMsg);
      throw new Error(errMsg);
    }

    const fullMessage = subject
      ? `Subject: ${subject}\n\n${message}`
      : message;

    const result = await sendEmail({
      senderEmail: email,
      message: `From: ${name}\n\n${fullMessage}`,
    });

    if (result?.error) {
      toast.error(result.error);
      throw new Error(result.error);
    } else {
      toast.success(t("contact.success"));
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };

  // ── Preview on Home Page ──
  if (variant === "preview") {
    return (
      <motion.section
        id="contact"
        ref={ref}
        className="w-full mb-28 sm:mb-32 lg:mb-40 scroll-mt-28 relative text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <SectionHeading>{t("contact.title")}</SectionHeading>

        <div className="max-w-2xl mx-auto -mt-2 space-y-4">
          <p className="text-lg sm:text-xl font-semibold text-black dark:text-white leading-snug">
            {t("contact.subtitle")}
          </p>

          <div className="pt-6 flex justify-center">
            <Link
              href="/contact"
              className="btn-brand group relative inline-flex items-center gap-2 px-8 py-3.5 text-base font-semibold rounded-full overflow-hidden w-fit focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-400 shadow-sm hover:scale-105 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                {t("contact.title")}{" "}
                <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </motion.section>
    );
  }

  // ── Full Page View (/contact) ──
  return (
    <motion.section
      id="contact"
      ref={ref}
      className="w-full mb-20 sm:mb-28 lg:mb-36 scroll-mt-28 relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.35fr] gap-10 lg:gap-14 items-start">
        {/* ── LEFT COLUMN: Get In Touch & Social Links ── */}
        <div className="flex flex-col">
          {/* Pill Tag */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-5 h-0.5 bg-neutral-400 dark:bg-neutral-600 rounded-full inline-block" />
            <span className="text-xs font-bold tracking-widest uppercase text-neutral-600 dark:text-neutral-400 font-mono">
              {t("contact.tag")}
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-900 dark:text-white leading-[1.1] mb-4">
            Get In <span className="text-neutral-500 dark:text-neutral-400">Touch</span>
          </h1>

          {/* Subtitle Description */}
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-md leading-relaxed mb-8 sm:mb-10">
            {t("contact.getInTouchDesc")}
          </p>

          {/* Contact Link Cards */}
          <div className="flex flex-col gap-3.5">
            {/* 1. Email */}
            <a
              href="mailto:faliqul.isback@gmail.com"
              className="group flex items-center justify-between p-3.5 sm:p-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#141414] hover:border-neutral-400 dark:hover:border-neutral-600 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-neutral-100 dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700/60 flex items-center justify-center text-neutral-900 dark:text-white flex-shrink-0 group-hover:scale-105 transition-transform">
                  <HiOutlineMail className="text-xl" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-sm font-bold text-neutral-900 dark:text-white leading-tight mb-0.5">
                    Email
                  </span>
                  <span className="text-xs text-neutral-500 dark:text-neutral-400">
                    faliqul.isback@gmail.com
                  </span>
                </div>
              </div>
              <FiArrowUpRight className="text-lg text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            {/* 2. LinkedIn */}
            <a
              href="https://www.linkedin.com/in/faliqulishbah/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-3.5 sm:p-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#141414] hover:border-neutral-400 dark:hover:border-neutral-600 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-neutral-900 dark:bg-neutral-100 text-white dark:text-black flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                  <BsLinkedin className="text-lg" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-sm font-bold text-neutral-900 dark:text-white leading-tight mb-0.5">
                    LinkedIn
                  </span>
                  <span className="text-xs text-neutral-500 dark:text-neutral-400">
                    linkedin.com/in/faliqulxx
                  </span>
                </div>
              </div>
              <FiArrowUpRight className="text-lg text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            {/* 3. Instagram */}
            <a
              href="https://www.instagram.com/Faliqulx/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-3.5 sm:p-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#141414] hover:border-neutral-400 dark:hover:border-neutral-600 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center text-neutral-900 dark:text-white flex-shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                  <BsInstagram className="text-lg" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-sm font-bold text-neutral-900 dark:text-white leading-tight mb-0.5">
                    Instagram
                  </span>
                  <span className="text-xs text-neutral-500 dark:text-neutral-400">
                    @faliqulxx
                  </span>
                </div>
              </div>
              <FiArrowUpRight className="text-lg text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            {/* 4. GitHub */}
            <a
              href="https://github.com/Faliqulxx"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-3.5 sm:p-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#141414] hover:border-neutral-400 dark:hover:border-neutral-600 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-neutral-900 dark:bg-neutral-800 flex items-center justify-center text-white flex-shrink-0 shadow-sm border border-neutral-700/60 group-hover:scale-105 transition-transform">
                  <FaGithub className="text-xl" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-sm font-bold text-neutral-900 dark:text-white leading-tight mb-0.5">
                    GitHub
                  </span>
                  <span className="text-xs text-neutral-500 dark:text-neutral-400">
                    github.com/faliqulxx
                  </span>
                </div>
              </div>
              <FiArrowUpRight className="text-lg text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          </div>

          {/* Response Time Indicator */}
          <div className="flex items-center gap-2 mt-8 text-xs text-neutral-500 dark:text-neutral-400 font-medium">
            <span className="w-2 h-2 rounded-full bg-neutral-400 dark:bg-neutral-500 animate-pulse flex-shrink-0" />
            <span>{t("contact.responseTime")}</span>
          </div>
        </div>

        {/* ── RIGHT COLUMN: Send a Message Form Card ── */}
        <div className="rounded-[2rem] border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#141414] p-7 sm:p-9 lg:p-10 shadow-xl shadow-black/5 dark:shadow-2xl flex flex-col justify-between">
          <div>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-neutral-900 dark:text-white mb-1.5">
              {t("contact.formTitle")}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mb-7">
              {t("contact.formDesc")}
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4 sm:gap-5">
              {/* Row 1: Full Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-neutral-800 dark:text-neutral-200 mb-1.5">
                    {t("contact.fullName")} <span className="text-neutral-400 dark:text-neutral-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t("contact.namePlaceholder")}
                    className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/70 dark:bg-[#1a1a1a] text-sm text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:border-neutral-900 dark:focus:border-neutral-100 focus:bg-white dark:focus:bg-[#1a1a1a] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-800 dark:text-neutral-200 mb-1.5">
                    {t("contact.email")} <span className="text-neutral-400 dark:text-neutral-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t("contact.emailPlaceholder")}
                    className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/70 dark:bg-[#1a1a1a] text-sm text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:border-neutral-900 dark:focus:border-neutral-100 focus:bg-white dark:focus:bg-[#1a1a1a] transition-all"
                  />
                </div>
              </div>

              {/* Row 2: Subject */}
              <div>
                <label className="block text-xs font-bold text-neutral-800 dark:text-neutral-200 mb-1.5">
                  {t("contact.subject")} <span className="text-neutral-400 dark:text-neutral-500">*</span>
                </label>
                <div className="relative">
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                    className="w-full appearance-none px-4 py-3 sm:py-3.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/70 dark:bg-[#1a1a1a] text-sm text-neutral-900 dark:text-white focus:outline-none focus:border-neutral-900 dark:focus:border-neutral-100 focus:bg-white dark:focus:bg-[#1a1a1a] transition-all pr-10 cursor-pointer"
                  >
                    <option value="" disabled className="dark:bg-[#141414] text-neutral-400">
                      {t("contact.selectTopic")}
                    </option>
                    <option value="Project Collaboration" className="dark:bg-[#141414]">
                      {t("contact.topicCollab")}
                    </option>
                    <option value="Job Opportunity / Hiring" className="dark:bg-[#141414]">
                      {t("contact.topicHiring")}
                    </option>
                    <option value="Technical & AI Discussion" className="dark:bg-[#141414]">
                      {t("contact.topicTech")}
                    </option>
                    <option value="Other" className="dark:bg-[#141414]">
                      {t("contact.topicOther")}
                    </option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-neutral-400">
                    <FiChevronDown className="text-base" />
                  </div>
                </div>
              </div>

              {/* Row 3: Message */}
              <div>
                <label className="block text-xs font-bold text-neutral-800 dark:text-neutral-200 mb-1.5">
                  {t("contact.message")} <span className="text-neutral-400 dark:text-neutral-500">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t("contact.messagePlaceholder")}
                  className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/70 dark:bg-[#1a1a1a] text-sm text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:border-neutral-900 dark:focus:border-neutral-100 focus:bg-white dark:focus:bg-[#1a1a1a] transition-all resize-none"
                />
              </div>

              {/* SlideCommit Action Button */}
              <div className="w-full flex items-center justify-center pt-2">
                <SlideCommit
                  label={isIndo ? "Geser untuk kirim pesan" : "Slide to send message"}
                  doneLabel={isIndo ? "Pesan Terkirim" : "Message Sent"}
                  errorLabel={isIndo ? "Gagal Mengirim" : "Sending Failed"}
                  onConfirm={handleConfirm}
                  trackColor={isDark ? "#222222" : "#EAEAEA"}
                  handleColor={isDark ? "#FFFFFF" : "#000000"}
                  successColor="#525252"
                  dangerColor="#737373"
                  width={340}
                  height={56}
                  radius={28}
                  speed={50}
                  returnBounce={0.38}
                  landingDip={0.026}
                  holdMs={2000}
                  className="shadow-md hover:shadow-lg transition-shadow"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
}