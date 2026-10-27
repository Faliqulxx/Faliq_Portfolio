"use client";

import React from "react";

interface ScrollVelocityProps {
  texts: string[];
  velocity?: number;
  duration?: number;
  className?: string;
  numCopies?: number;
  parallaxClassName?: string;
  scrollerClassName?: string;
  parallaxStyle?: React.CSSProperties;
  scrollerStyle?: React.CSSProperties;
}

export const ScrollVelocity: React.FC<ScrollVelocityProps> = ({
  texts = [],
  velocity = 40,
  duration,
  className = "",
  parallaxClassName = "",
  scrollerClassName = "",
  parallaxStyle,
  scrollerStyle,
}) => {
  // Hitung durasi animasi: nilai detik lebih besar = gerakan lebih lambat & tenang
  const animDuration =
    duration ?? Math.max(30, Math.round(4200 / Math.max(velocity, 10)));

  return (
    <section className={`overflow-hidden select-none ${parallaxClassName}`} style={parallaxStyle}>
      <style jsx>{`
        @keyframes marquee-left {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-50%, 0, 0);
          }
        }
        @keyframes marquee-right {
          from {
            transform: translate3d(-50%, 0, 0);
          }
          to {
            transform: translate3d(0, 0, 0);
          }
        }
        .animate-marquee-left {
          display: flex;
          width: max-content;
          will-change: transform;
          animation: marquee-left ${animDuration}s linear infinite;
        }
        .animate-marquee-right {
          display: flex;
          width: max-content;
          will-change: transform;
          animation: marquee-right ${animDuration}s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee-left,
          .animate-marquee-right {
            animation-play-state: paused !important;
          }
        }
      `}</style>

      {texts.map((rawText, idx) => {
        const isReverse = idx % 2 !== 0;
        const animClass = isReverse ? "animate-marquee-right" : "animate-marquee-left";

        // Pisahkan item berdasarkan pipe dan bersihkan spasi
        const items = rawText
          .split("|")
          .map((s) => s.trim())
          .filter(Boolean);

        if (items.length === 0) return null;

        // Gandakan item secukupnya agar track cukup panjang
        const copies = Math.max(4, Math.ceil(18 / items.length));
        const trackItems = Array.from({ length: copies }, () => items).flat();

        const renderTrack = (ariaHidden?: boolean) => (
          <div className="flex items-center flex-shrink-0" aria-hidden={ariaHidden}>
            {trackItems.map((item, i) => (
              <span key={i} className="inline-flex items-center whitespace-nowrap">
                <span className={className}>{item}</span>
                <span className={`${className} mx-2.5 sm:mx-3.5 select-none`} aria-hidden="true">
                  |
                </span>
              </span>
            ))}
          </div>
        );

        return (
          <div key={idx} className="relative overflow-hidden w-full py-0.5">
            <div className={`${animClass} ${scrollerClassName}`} style={scrollerStyle}>
              {renderTrack()}
              {renderTrack(true)}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ScrollVelocity;
