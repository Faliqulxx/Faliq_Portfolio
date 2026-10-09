"use client";

import React, { useEffect, useState } from "react";
import { useLanguage } from "@/context/language-context";
import { useTheme } from "@/context/theme-context";
import SquishSwitch from "./SquishSwitch";

export default function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isId = language === "id";
  const isDark = theme === "dark";

  return (
    <div
      className="
        fixed top-[0.85rem] left-16 sm:top-6 sm:left-auto sm:right-[5.75rem] z-[999]
        flex items-center justify-center
        drop-shadow-sm
      "
    >
      <SquishSwitch
        checked={isId}
        onChange={(checked) => setLanguage(checked ? "id" : "en")}
        ariaLabel="Toggle language between US and ID"
        leftLabel="US"
        rightLabel="ID"
        trackColor={isDark ? "#232328" : "#ececef"}
        trackOnColor={isDark ? "#232328" : "#ececef"}
        thumbColor="#ffffff"
        thumbOnColor="#ffffff"
        width={78}
        height={38}
        radius={19}
        speed={52}
        stretch={38}
        hoverScale={1.04}
        colorDuration={280}
        className="transition-transform active:scale-95"
      />
    </div>
  );
}
