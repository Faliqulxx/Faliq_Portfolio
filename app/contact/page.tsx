import React from "react";
import Contact from "@/components/contact";

export const metadata = {
  title: "Contact | Faliqul Ishbah",
  description: "Get in touch with Faliqul Ishbah - Data Scientist & AI Automation Engineer",
};

export default function ContactPage() {
  return (
    <main className="relative flex flex-col items-center w-full min-h-screen pt-28 pb-16 overflow-x-hidden">
      <div className="relative w-[92vw] max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col items-center">
        <Contact variant="full" />
      </div>
    </main>
  );
}
