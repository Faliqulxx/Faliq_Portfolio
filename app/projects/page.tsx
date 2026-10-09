import React from "react";
import ProjectSection from "@/components/project-section";

export const metadata = {
  title: "Projects | Faliqul Ishbah",
  description: "Projects and Works by Faliqul Ishbah - Data Scientist & AI Automation Engineer",
};

export default function ProjectsPage() {
  return (
    <main className="relative flex flex-col items-center w-full min-h-screen -mt-2 sm:-mt-6 md:-mt-8 pt-0 pb-16 overflow-x-hidden">
      <div className="relative w-[92vw] max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col items-center">
        <ProjectSection variant="full" />
      </div>
    </main>
  );
}
