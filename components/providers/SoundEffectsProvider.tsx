"use client";

import React, { useEffect, useRef } from "react";

// Helper function that can be imported and called anywhere
export function playClickSound(volume: number = 0.4) {
  if (typeof window === "undefined") return;
  try {
    const audioCtx = (window as unknown as { __soundAudioCtx?: AudioContext }).__soundAudioCtx;
    const audioBuffer = (window as unknown as { __soundAudioBuffer?: AudioBuffer }).__soundAudioBuffer;

    if (audioCtx && audioBuffer) {
      if (audioCtx.state === "suspended") {
        audioCtx.resume().catch(() => {});
      }
      const source = audioCtx.createBufferSource();
      const gainNode = audioCtx.createGain();
      source.buffer = audioBuffer;
      gainNode.gain.value = volume;
      source.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      source.start(0);
      return;
    }

    // Fallback: HTMLAudioElement
    const audio = new Audio("/sound/button.wav");
    audio.volume = volume;
    audio.currentTime = 0;
    audio.play().catch(() => {});
  } catch {
    // Silently ignore audio playback errors
  }
}

export default function SoundEffectsProvider() {
  const audioCtxRef = useRef<AudioContext | null>(null);
  const audioBufferRef = useRef<AudioBuffer | null>(null);

  useEffect(() => {
    let timerId: ReturnType<typeof setTimeout> | null = null;

    const initAudio = () => {
      try {
        const AudioContextClass =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;

        if (AudioContextClass) {
          const ctx = new AudioContextClass();
          audioCtxRef.current = ctx;
          (window as unknown as { __soundAudioCtx?: AudioContext }).__soundAudioCtx = ctx;

          fetch("/sound/button.wav")
            .then((res) => res.arrayBuffer())
            .then((arrayBuffer) => ctx.decodeAudioData(arrayBuffer))
            .then((decodedBuffer) => {
              audioBufferRef.current = decodedBuffer;
              (window as unknown as { __soundAudioBuffer?: AudioBuffer }).__soundAudioBuffer = decodedBuffer;
            })
            .catch(() => {});
        }
      } catch {}
    };

    // Defer audio initialization until idle to not block main thread or LCP
    if ("requestIdleCallback" in window) {
      (window as any).requestIdleCallback(initAudio, { timeout: 2000 });
    } else {
      timerId = setTimeout(initAudio, 1500);
    }

    // Global click listener
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactiveEl = target.closest<HTMLElement>(
        'button, a, [role="button"], input[type="submit"], input[type="button"], input[type="reset"], summary, .cursor-pointer'
      );

      if (interactiveEl) {
        if (interactiveEl.getAttribute("data-no-sound") === "true") return;
        playClickSound(0.4);
      }
    };

    document.addEventListener("click", handleGlobalClick, { capture: true, passive: true });

    return () => {
      if (timerId) clearTimeout(timerId);
      document.removeEventListener("click", handleGlobalClick, { capture: true } as any);
      if (audioCtxRef.current && audioCtxRef.current.state !== "closed") {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return null;
}
