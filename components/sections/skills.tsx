"use client";

import React, { useEffect, useRef, useState } from "react";
import { skilss } from "@/lib/data";
import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { MOTION_EASINGS } from "@/lib/motion";

type MarqueeSkillRowProps = {
  skills: typeof skilss | (typeof skilss)[number][];
  direction: 1 | -1;
  speed?: number;
  offset?: number;
  sweepIndex?: number | null;
};

function AnimatedSkillIcon({
  skill,
  isSwept = false,
}: {
  skill: any;
  isSwept?: boolean;
}) {
  const [isRandomHighlighted, setIsRandomHighlighted] = useState(false);

  useEffect(() => {
    const initialDelay = 2000 + Math.random() * 4000;

    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (Math.random() > 0.75) {
          setIsRandomHighlighted(true);
          setTimeout(() => setIsRandomHighlighted(false), 2000 + Math.random() * 2000);
        }
      }, 3000 + Math.random() * 3000);

      return () => clearInterval(interval);
    }, initialDelay);

    return () => clearTimeout(timeout);
  }, []);

  const isHighlighted = isSwept || isRandomHighlighted;

  return (
    <div className="flex justify-center items-center">
      <Image
        src={skill.imgUrl}
        alt={`Skill ${skill.id}`}
        width={192}
        height={192}
        quality={95}
        priority={true}
        draggable={false}
        className={`w-6 sm:w-8 md:w-12 lg:w-16 xl:w-20 transition-all duration-500 ${
          isHighlighted
            ? "grayscale-0 opacity-100 scale-110 drop-shadow-[0_4px_12px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_4px_12px_rgba(255,255,255,0.15)]"
            : "grayscale opacity-40 scale-100"
        } hover:grayscale-0 hover:opacity-100 hover:scale-110 hover:drop-shadow-[0_4px_16px_rgba(0,0,0,0.2)] dark:hover:drop-shadow-[0_4px_16px_rgba(255,255,255,0.2)] hover:duration-300`}
      />
    </div>
  );
}

function MarqueeSkillRow({
  skills,
  direction,
  speed = 1,
  offset = 0,
  sweepIndex = null,
}: MarqueeSkillRowProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isPointerDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const pausedRef = useRef(false);
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const rafRef = useRef<number>();
  const [isDragging, setIsDragging] = useState(false);

  const displaySkills = offset > 0 ? [...skills].reverse() : skills;
  const items = [...displaySkills, ...displaySkills];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (direction === -1 && container.scrollLeft === 0) {
      container.scrollLeft = container.scrollWidth / 2;
    }

    const step = () => {
      if (!pausedRef.current && container) {
        const halfWidth = container.scrollWidth / 2;
        container.scrollLeft += direction * speed;

        if (direction === 1 && container.scrollLeft >= halfWidth) {
          container.scrollLeft -= halfWidth;
        } else if (direction === -1 && container.scrollLeft <= 0) {
          container.scrollLeft += halfWidth;
        }
      }
      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [direction, speed]);

  const getPageX = (e: React.MouseEvent | React.TouchEvent) =>
    "touches" in e ? e.touches[0].pageX : (e as React.MouseEvent).pageX;

  const handlePointerDown = (e: React.MouseEvent | React.TouchEvent) => {
    const container = containerRef.current;
    if (!container) return;
    isPointerDownRef.current = true;
    pausedRef.current = true;
    setIsDragging(true);
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    startXRef.current = getPageX(e) - container.offsetLeft;
    scrollLeftRef.current = container.scrollLeft;
  };

  const handlePointerMove = (e: React.MouseEvent | React.TouchEvent) => {
    const container = containerRef.current;
    if (!isPointerDownRef.current || !container) return;
    const x = getPageX(e) - container.offsetLeft;
    const walk = x - startXRef.current;
    container.scrollLeft = scrollLeftRef.current - walk;
  };

  const endDrag = () => {
    isPointerDownRef.current = false;
    setIsDragging(false);
    resumeTimeoutRef.current = setTimeout(() => {
      pausedRef.current = false;
    }, 700);
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (!container) return;
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.preventDefault();
      pausedRef.current = true;
      container.scrollLeft += e.deltaY;
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
      resumeTimeoutRef.current = setTimeout(() => {
        pausedRef.current = false;
      }, 800);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`flex gap-8 md:gap-12 w-full overflow-x-hidden select-none no-scrollbar py-4 ${
        isDragging ? "cursor-grabbing" : "cursor-grab"
      }`}
      onMouseDown={handlePointerDown}
      onMouseMove={handlePointerMove}
      onMouseUp={endDrag}
      onMouseLeave={endDrag}
      onTouchStart={handlePointerDown}
      onTouchMove={handlePointerMove}
      onTouchEnd={endDrag}
      onWheel={handleWheel}
      style={{ WebkitOverflowScrolling: "touch" }}
    >
      {items.map((skill, index) => {
        const itemIdx = index % displaySkills.length;
        const isSwept = sweepIndex !== null && sweepIndex === itemIdx;
        return (
          <div key={`${skill.id}-${index}`} className="flex-shrink-0">
            <AnimatedSkillIcon skill={skill} isSwept={isSwept} />
          </div>
        );
      })}
    </div>
  );
}

interface SkillsProps {
  variant?: "full" | "preview";
  previewCount?: number;
}

export default function Skills({
  variant = "full",
  previewCount = 16,
}: SkillsProps = {}) {
  const displaySkills =
    variant === "preview" ? skilss.slice(0, previewCount) : skilss;

  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.05 });
  const prefersReduced = useReducedMotion();

  const [sweepIndex, setSweepIndex] = useState<number | null>(null);

  // Single sweep sequence after entrance
  useEffect(() => {
    if (!isInView || prefersReduced) return;

    const startTimer = setTimeout(() => {
      let current = 0;
      const sweepInterval = setInterval(() => {
        if (current < displaySkills.length) {
          setSweepIndex(current);
          current++;
        } else {
          setSweepIndex(null);
          clearInterval(sweepInterval);
        }
      }, 60);

      return () => clearInterval(sweepInterval);
    }, 1000);

    return () => clearTimeout(startTimer);
  }, [isInView, displaySkills.length, prefersReduced]);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className={`w-full ${
        variant === "preview"
          ? "mb-6 sm:mb-8 lg:mb-10"
          : "mb-20 sm:mb-24"
      } overflow-hidden scroll-mt-28 text-center`}
    >
      <div className="flex flex-col gap-6 mt-8 overflow-hidden">
        {/* Row 1: Kinetic slide from left */}
        <motion.div
          initial={{ opacity: 0, x: -60, filter: "blur(6px)" }}
          animate={isInView ? { opacity: 1, x: 0, filter: "blur(0px)" } : { opacity: 0, x: -60, filter: "blur(6px)" }}
          transition={{ duration: 1.0, ease: MOTION_EASINGS.entrance }}
          className="w-full will-change-transform"
        >
          <MarqueeSkillRow
            skills={displaySkills}
            direction={1}
            speed={1.2}
            sweepIndex={sweepIndex}
          />
        </motion.div>

        {/* Row 2: Kinetic slide from right */}
        <motion.div
          initial={{ opacity: 0, x: 60, filter: "blur(6px)" }}
          animate={isInView ? { opacity: 1, x: 0, filter: "blur(0px)" } : { opacity: 0, x: 60, filter: "blur(6px)" }}
          transition={{ duration: 1.0, delay: 0.1, ease: MOTION_EASINGS.entrance }}
          className="w-full will-change-transform"
        >
          <MarqueeSkillRow
            skills={displaySkills}
            direction={-1}
            speed={1}
            offset={1}
            sweepIndex={sweepIndex}
          />
        </motion.div>
      </div>
    </section>
  );
}
