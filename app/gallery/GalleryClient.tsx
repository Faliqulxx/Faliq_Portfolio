"use client";

import React from "react";
import { useTheme } from "@/context/theme-context";
import DriftWall, { DriftWallItem } from "@/components/DriftWall";

const galleryItems: DriftWallItem[] = [
  { image: "/images/gallery/G1.JPG", title: "Moments & Memories" },
  { image: "/images/gallery/G2.JPG", title: "Campus & Activities" },
  { image: "/images/gallery/P1.JPG", title: "Projects & Discussions" },
  { image: "/images/gallery/P2.JPG", title: "Presentation & Work" },
  { image: "/images/gallery/R2.JPG", title: "Milestones" },
  { image: "/images/gallery/Profil.jpg", title: "Profile Moment" },
  { image: "/images/gallery/Profil1.png", title: "Workspace & Portrait" },
  { image: "/images/gallery/G3.jpeg", title: "Team & Journey" },
  { image: "/images/gallery/G4.jpeg", title: "Collaboration" },
  { image: "/images/gallery/G5.jpg", title: "Learning & Growth" },
  { image: "/images/gallery/K1.jpeg", title: "Community & Events" },
  { image: "/images/gallery/R1.jpeg", title: "Personal Journey" },
  { image: "/images/gallery/gontor.jpeg", title: "Pondok Modern Gontor" },
  { image: "/images/gallery/P1.JPG", title: "Engineering & Innovation" },
  { image: "/images/gallery/G1.JPG", title: "Visual Journey" },
  { image: "/images/gallery/G2.JPG", title: "Creative Process" },
  { image: "/images/gallery/R2.JPG", title: "Achievements" },
  { image: "/images/gallery/Profil.jpg", title: "Faliqul Ishbah" },
  { image: "/images/gallery/G5.jpg", title: "Exploration" },
  { image: "/images/gallery/P2.JPG", title: "Public Speaking" },
  { image: "/images/gallery/K1.jpeg", title: "Networking" },
  { image: "/images/gallery/G3.jpeg", title: "Shared Moments" },
  { image: "/images/gallery/R1.jpeg", title: "Behind the Scenes" },
  { image: "/images/gallery/Profil1.png", title: "Studio & Focus" },
];

export default function GalleryClient() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <main className="relative w-full h-screen min-h-[700px] -mt-10 md:-mt-36 overflow-hidden select-none">
      {/* ── Full-bleed Full-screen DriftWall Background (Starts at top: 0 behind Navbar) ── */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <DriftWall
          items={galleryItems}
          columns={8}
          tileWidth={240}
          tileHeight={155}
          gap={24}
          radius={16}
          tilt={14}
          turn={-10}
          perspective={1200}
          depth={110}
          speed={38}
          direction="up"
          variance={0.45}
          parallax={0.65}
          lift={75}
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
