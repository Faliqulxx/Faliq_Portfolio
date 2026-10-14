"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "@/context/theme-context";
import DriftWall, { DriftWallItem } from "@/components/ui/DriftWall";

const galleryItems: DriftWallItem[] = [
  { image: "/images/gallery/G1.webp", title: "Moments & Memories" },
  { image: "/images/gallery/G2.webp", title: "Campus & Activities" },
  { image: "/images/gallery/G3.webp", title: "Team & Journey" },
  { image: "/images/gallery/G4.webp", title: "Collaboration" },
  { image: "/images/gallery/G5.webp", title: "Learning & Growth" },
  { image: "/images/gallery/K1.webp", title: "Community & Events" },
  { image: "/images/gallery/K2.webp", title: "Event Organizing" },
  { image: "/images/gallery/K3.webp", title: "Workshop & Engagement" },
  { image: "/images/gallery/K4.webp", title: "Campus Gathering" },
  { image: "/images/gallery/K5.webp", title: "Social Activities" },
  { image: "/images/gallery/P1.webp", title: "Projects & Discussions" },
  { image: "/images/gallery/P2.webp", title: "Presentation & Work" },
  { image: "/images/gallery/P3.webp", title: "Creative Production" },
  { image: "/images/gallery/P4.webp", title: "Media & Documentation" },
  { image: "/images/gallery/P5.webp", title: "Visual Storytelling" },
  { image: "/images/gallery/P6.webp", title: "Broadcast & Tech Setup" },
  { image: "/images/gallery/P7.webp", title: "Field Documentation" },
  { image: "/images/gallery/R1.webp", title: "Personal Journey" },
  { image: "/images/gallery/R2.webp", title: "Milestones" },
  { image: "/images/gallery/R3.webp", title: "Achievement & Recognition" },
  { image: "/images/gallery/Profil.webp", title: "Profile Moment" },
  { image: "/images/gallery/Profil1.webp", title: "Workspace & Portrait" },
  { image: "/images/gallery/gontor.webp", title: "Pondok Modern Gontor" },
];

export default function GalleryClient() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [device, setDevice] = useState<"mobile" | "tablet" | "desktop">("desktop");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setDevice("mobile");
      } else if (width < 1024) {
        setDevice("tablet");
      } else {
        setDevice("desktop");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const config = {
    mobile: {
      columns: 6,
      tileWidth: 86,
      tileHeight: 58,
      gap: 10,
      radius: 8,
      tilt: 10,
      turn: -8,
      perspective: 1000,
      depth: 50,
      scale: 1.2,
      speed: 28,
      lift: 32,
      parallax: 0.35,
    },
    tablet: {
      columns: 7,
      tileWidth: 150,
      tileHeight: 100,
      gap: 16,
      radius: 12,
      tilt: 12,
      turn: -9,
      perspective: 1100,
      depth: 80,
      scale: 1.4,
      speed: 34,
      lift: 55,
      parallax: 0.5,
    },
    desktop: {
      columns: 8,
      tileWidth: 240,
      tileHeight: 155,
      gap: 24,
      radius: 16,
      tilt: 14,
      turn: -10,
      perspective: 1200,
      depth: 110,
      scale: 1.65,
      speed: 38,
      lift: 75,
      parallax: 0.65,
    },
  }[device];

  return (
    <main className="relative w-full h-screen min-h-[700px] overflow-hidden select-none">
      {/* ── Full-bleed Full-screen DriftWall Background (Starts at top: 0 behind Navbar) ── */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <DriftWall
          key={device}
          items={galleryItems}
          columns={config.columns}
          tileWidth={config.tileWidth}
          tileHeight={config.tileHeight}
          gap={config.gap}
          radius={config.radius}
          tilt={config.tilt}
          turn={config.turn}
          perspective={config.perspective}
          depth={config.depth}
          scale={config.scale}
          speed={config.speed}
          direction="up"
          variance={0.45}
          parallax={config.parallax}
          lift={config.lift}
          fade={0.1}
          dim={isDark ? 0.65 : 0.75}
          grayscale={false}
          overlayColor={isDark ? "#0a0a0a" : "#ffffff"}
          className="w-full h-full"
        />
      </div>
    </main>
  );
}
