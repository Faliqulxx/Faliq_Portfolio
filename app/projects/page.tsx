import React from "react";
import ProjectSection from "@/components/sections/project-section";

export const metadata = {
  title: "Projects | Faliqul Ishbah",
  description: "Projects and Works by Faliqul Ishbah - Data Scientist & AI Automation Engineer",
};

export default function ProjectsPage() {
  return (
    <main className="relative flex flex-col items-center w-full min-h-screen pt-24 sm:pt-28 md:pt-32 pb-16 overflow-x-hidden">
      <div className="w-full">
        <ProjectSection variant="full" />
      </div>
    </main>
  );
}
