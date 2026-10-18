"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineTrash, HiOutlineLightBulb } from "react-icons/hi";
import { IoSend, IoSparkles } from "react-icons/io5";

import dynamic from "next/dynamic";
import { useChat } from "@/components/chat/useChat";
import ChatMessage from "@/components/chat/ChatMessage";
import ClearChatDialog from "@/components/chat/ClearChatDialog";
import PromptBar from "@/components/chat/PromptBar";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useLanguage } from "@/context/language-context";
import { useTheme } from "@/context/theme-context";

const CrystalizedBall = dynamic(() => import("@/components/ui/CrystalizedBall"), {
  ssr: false,
});

export default function AIAssistantPage() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const chat = useChat();
  const { messages, sendMessage, isLoading, error, resetChat } = chat;
  const [input, setInput] = useState("");
  const [confirmingClear, setConfirmingClear] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { setActiveSection } = useActiveSectionContext();

  const quickPrompts: {
    title: string;
    prompt: string;
  }[] = [
    {
      title: t("ai.prompt1.title"),
      prompt: t("ai.prompt1.desc"),
    },
    {
      title: t("ai.prompt2.title"),
      prompt: t("ai.prompt2.desc"),
    },
    {
      title: t("ai.prompt3.title"),
      prompt: t("ai.prompt3.desc"),
    },
    {
      title: t("ai.prompt4.title"),
      prompt: t("ai.prompt4.desc"),
    },
    {
      title: t("ai.prompt5.title"),
      prompt: t("ai.prompt5.desc"),
    },
  ];

  useEffect(() => {
    setActiveSection("AI Assistant");
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [setActiveSection]);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    sendMessage(input);
    setInput("");
  };

  const handlePromptSelect = (promptText: string) => {
    if (isLoading) return;
    sendMessage(promptText);
  };

  const handleConfirmClear = () => {
    resetChat();
    setConfirmingClear(false);
  };

  const isEmpty = messages.length === 0;

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center pt-[86px] sm:pt-[110px] pb-2 sm:pb-6 px-2 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-[#0a0a0a] z-10 overflow-hidden">
      {/* DYNAMIC FIT CHAT CONTAINER */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full h-[calc(100dvh-98px)] sm:h-[calc(100dvh-135px)] max-w-5xl flex flex-col rounded-2xl sm:rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white/95 dark:bg-[#111111]/95 backdrop-blur-xl shadow-2xl overflow-hidden"
      >
        {/* TOP BAR */}
        <div className="px-4 sm:px-6 py-2.5 sm:py-3 border-b border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-[#141414]/60 flex items-center justify-between backdrop-blur-md flex-shrink-0">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-neutral-900 text-white dark:bg-white dark:text-black p-0.5 shadow-md flex items-center justify-center">
              <IoSparkles className="text-sm sm:text-lg" />
            </div>
            <div>
              <h2 className="text-xs sm:text-base font-bold text-neutral-900 dark:text-white flex items-center gap-1.5 sm:gap-2">
                {t("ai.title")}
              </h2>
              <p className="text-[10px] sm:text-xs text-neutral-500 dark:text-neutral-400">
                {t("ai.subtitle")}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {!isEmpty && (
              <button
                type="button"
                onClick={() => setConfirmingClear(true)}
                className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl border border-neutral-200 dark:border-neutral-800 text-xs font-medium text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all cursor-pointer shadow-sm"
              >
                <HiOutlineTrash className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400" />
                <span className="hidden sm:inline">{t("ai.clear")}</span>
              </button>
            )}
          </div>
        </div>

        {/* MESSAGES / WELCOME AREA */}
        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto p-3 sm:p-6 space-y-3 sm:space-y-4 custom-scrollbar"
        >
          {isEmpty ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative h-full flex flex-col items-center justify-center text-center py-1 sm:py-2 overflow-hidden"
            >
              {/* CRYSTALIZED BALL BACKGROUND BEHIND QUICK CHAT */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                <div className="w-full max-w-[560px] h-[360px] sm:h-[460px] pointer-events-auto opacity-75 dark:opacity-85">
                  <CrystalizedBall
                    preset="plasma"
                    color="#94a3b8"
                    theme={isDark ? "dark" : "light"}
                    size={0.7}
                    crackle={0.85}
                    fill={0.5}
                    interactive
                    hoverStrength={0.7}
                  />
                </div>
              </div>

              {/* FOREGROUND CONTENT */}
              <div className="relative z-10 flex flex-col items-center max-w-2xl px-2">
                <div className="w-9 h-9 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white/70 dark:bg-neutral-800/70 backdrop-blur-md border border-neutral-200/80 dark:border-neutral-700/60 flex items-center justify-center text-neutral-900 dark:text-white text-base sm:text-2xl mb-1.5 sm:mb-3 shadow-inner">
                  <HiOutlineLightBulb />
                </div>
                <h3 className="text-sm sm:text-xl font-bold text-neutral-900 dark:text-white mb-0.5 sm:mb-1 drop-shadow-sm">
                  {t("ai.welcomeTitle")}
                </h3>
                <p className="text-[11px] sm:text-sm text-neutral-600 dark:text-neutral-300 max-w-md mb-4 sm:mb-6 px-2 drop-shadow-sm">
                  {t("ai.welcomeDesc")}
                </p>

                {/* QUICK PROMPTS */}
                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 w-full max-w-2xl px-2">
                  {quickPrompts.map((item, idx) => (
                    <motion.button
                      key={idx}
                      whileHover={{ y: -2, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handlePromptSelect(item.prompt)}
                      className="px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl border border-neutral-200/90 dark:border-neutral-800/90 bg-white/85 dark:bg-[#161616]/85 backdrop-blur-md hover:bg-white dark:hover:bg-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 text-xs sm:text-sm font-semibold text-neutral-800 dark:text-neutral-200 transition-all shadow-sm cursor-pointer"
                    >
                      {item.title}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="space-y-4 max-w-3xl mx-auto">
              {messages.map((message, i) => (
                <ChatMessage key={i} message={message} />
              ))}
              {error && (
                <div className="p-3 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 text-xs text-neutral-900 dark:text-white text-center">
                  {error}
                </div>
              )}
            </div>
          )}
        </div>

        {/* INPUT BAR (PROMPTBAR) */}
        <div className="p-3 sm:p-4 border-t border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-[#141414]/80 backdrop-blur-md flex-shrink-0 flex items-center justify-center">
          <PromptBar
            placeholder={t("ai.inputPlaceholder")}
            busy={isLoading}
            onSend={(text) => {
              if (text.trim() && !isLoading) {
                sendMessage(text);
              }
            }}
            background={isDark ? "#181818" : "#f4f4f4"}
            color={isDark ? "#ffffff" : "#171717"}
            menuBackground={isDark ? "#222222" : "#ffffff"}
            sparkColor={isDark ? "#ffffff" : "#000000"}
            width={768}
            radius={18}
            className="w-full max-w-3xl shadow-sm"
          />
        </div>
      </motion.div>

      {/* CLEAR CHAT MODAL */}
      <AnimatePresence>
        {confirmingClear && (
          <ClearChatDialog
            onCancel={() => setConfirmingClear(false)}
            onConfirm={handleConfirmClear}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
