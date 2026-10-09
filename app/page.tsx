import About from "@/components/about";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Skills from "@/components/skills";
import ProjectSection from "@/components/project-section";
import SectionDivider from "@/components/section-divider";
import MaintenanceMode from "../components/MaintenanceMode";

export default function Home() {
  const isMaintenanceMode = false;

  if (isMaintenanceMode) {
    return <MaintenanceMode />;
  }

  return (
    <main className="relative flex flex-col items-center w-full min-h-screen overflow-x-hidden">
      {/* ================= INTRO / HERO (FULL BLEED) ================= */}
      <Intro />

      {/* ================= ABOUT SECTION ================= */}
      <div className="relative w-[92vw] max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col items-center">
        <SectionDivider />

        <About variant="preview" />
      </div>

      {/* ================= SELECTED WORKS (FULL BLEED) ================= */}
      <ProjectSection variant="preview" previewLimit={4} />

      {/* ================= REST OF CONTENT (CONTAINER) ================= */}
      <div className="relative w-[92vw] max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col items-center">
        <Skills variant="preview" previewCount={16} />

        <Experience variant="preview" />
      </div>
    </main>
  );
}