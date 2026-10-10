import React from "react";
import About from "@/components/about";

export const metadata = {
  title: "About | Faliqul Ishbah",
  description: "About Faliqul Ishbah - Data Scientist & AI Automation Engineer",
};

export default function AboutPage() {
  return (
    <main className="relative flex flex-col items-center w-full min-h-screen overflow-x-hidden">
      <About variant="full" />
    </main>
  );
}
