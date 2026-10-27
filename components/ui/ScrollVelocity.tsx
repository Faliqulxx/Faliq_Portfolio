"use client";

import React from "react";

interface ScrollVelocityProps {
  texts: string[];
  velocity?: number;
  className?: string;
  numCopies?: number;
  parallaxClassName?: string;
  scrollerClassName?: string;
  parallaxStyle?: React.CSSProperties;
  scrollerStyle?: React.CSSProperties;
}

export const ScrollVelocity: React.FC<ScrollVelocityProps> = ({
  texts = [],
  velocity = 70,
  className = "",
  numCopies = 4,
  parallaxClassName = "",
  scrollerClassName = "",
  parallaxStyle,
  scrollerStyle,
}) => {
  // Hitung durasi animasi berbasis velocity: makin tinggi velocity, makin cepat (durasi makin kecil)
  const duration = Math.max(12, Math.round(2000 / Math.max(velocity, 10)));

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
          animation: marquee-left ${duration}s linear infinite;
        }
        .animate-marquee-right {
          display: flex;
          width: max-content;
          will-change: transform;
          animation: marquee-right ${duration}s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee-left,
          .animate-marquee-right {
            animation-play-state: paused !important;
          }
        }
      `}</style>

      {texts.map((text, idx) => {
        const isReverse = idx % 2 !== 0;
        const animClass = isReverse ? "animate-marquee-right" : "animate-marquee-left";

        // Gandakan teks secukupnya agar pergerakan looping mulus 0% -> -50%
        const repeated = Array.from({ length: Math.max(numCopies, 4) });

        return (
          <div key={idx} className="relative overflow-hidden w-full py-0.5">
            <div className={`${animClass} ${scrollerClassName}`} style={scrollerStyle}>
              {repeated.map((_, i) => (
                <span
                  key={i}
                  className={`flex-shrink-0 inline-block whitespace-nowrap ${className}`}
                  aria-hidden={i > 0 ? "true" : undefined}
                >
                  {text}&nbsp;
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ScrollVelocity;
