"use client";

import React, { useEffect, useRef } from "react";

// Helper function that can be imported and called anywhere
export function playClickSound(volume: number = 0.4) {
  if (typeof window === "undefined") return;
  try {
    // If Web Audio API is available, use global AudioContext instance
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
    // Preload audio using Web Audio API for zero latency
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
          .catch(() => {
            // Audio loading fallback
          });
      }
    } catch {
      // Ignore initial setup errors
    }

    // Global click listener
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Check if target or its ancestor is interactive (button, link, or role=button)
      const interactiveEl = target.closest<HTMLElement>(
        'button, a, [role="button"], input[type="submit"], input[type="button"], input[type="reset"], summary, .cursor-pointer'
      );

      if (interactiveEl) {
        // Skip elements with data-no-sound="true"
        if (interactiveEl.getAttribute("data-no-sound") === "true") return;

        playClickSound(0.4);
      }
    };

    document.addEventListener("click", handleGlobalClick, { capture: true });

    return () => {
      document.removeEventListener("click", handleGlobalClick, { capture: true });
      if (audioCtxRef.current && audioCtxRef.current.state !== "closed") {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return null;
}
