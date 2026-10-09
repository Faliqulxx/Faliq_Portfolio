import React from "react";
import Experience from "@/components/experience";

export const metadata = {
  title: "Experience | Faliqul Ishbah",
  description: "Experience and Education of Faliqul Ishbah - Data Scientist & AI Automation Engineer",
};

export default function ExperiencePage() {
  return (
    <main className="relative flex flex-col items-center w-full min-h-screen -mt-10 md:-mt-36 pt-20 sm:pt-24 md:pt-28 pb-16 overflow-x-hidden">
      <div className="relative w-[92vw] max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col items-center">
        <Experience variant="full" />
      </div>
    </main>
  );
}
