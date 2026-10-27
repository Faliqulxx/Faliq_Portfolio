"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface ScrambleTextProps {
  text: string;
  className?: string;
  duration?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
}

const CHARS = "ABCDEFGHJKLMNOPQRSTUVWXYZ0123456789!@#$&*~+=-/";

export default function ScrambleText({
  text,
  className = "",
  duration = 0.8,
  as: Component = "span",
}: ScrambleTextProps) {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  const [displayText, setDisplayText] = useState(text);
  const [hasRun, setHasRun] = useState(false);

  useEffect(() => {
    if (!isInView || hasRun) return;
    setHasRun(true);

    const length = text.length;
    const totalFrames = Math.max(10, Math.round((duration * 1000) / 30));
    let frame = 0;

    const interval = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const settledCount = Math.floor(progress * length);

      let scrambled = "";
      for (let i = 0; i < length; i++) {
        const char = text[i];
        if (char === " " || char === "\n") {
          scrambled += char;
        } else if (i < settledCount) {
          scrambled += char;
        } else {
          scrambled += CHARS[Math.floor(Math.random() * CHARS.length)];
        }
      }

      setDisplayText(scrambled);

      if (frame >= totalFrames) {
        clearInterval(interval);
        setDisplayText(text);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [isInView, text, duration, hasRun]);

  return (
    <Component ref={containerRef as any} className={className} aria-label={text}>
      <span aria-hidden="true">{displayText}</span>
    </Component>
  );
}

