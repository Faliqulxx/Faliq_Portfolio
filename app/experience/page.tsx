import React from "react";
import Experience from "@/components/sections/experience";

export const metadata = {
  title: "Experience | Faliqul Ishbah",
  description: "Experience and Education of Faliqul Ishbah - Data Scientist & AI Automation Engineer",
};

export default function ExperiencePage() {
  return (
    <main className="relative flex flex-col items-center w-full min-h-screen pt-24 sm:pt-28 md:pt-32 pb-16 overflow-x-hidden">
      <div className="relative w-full max-w-[1600px] mx-auto px-2 sm:px-8 lg:px-12 flex flex-col items-center">
        <Experience variant="full" />
      </div>
    </main>
  );
}
