import dynamic from "next/dynamic";
import Intro from "@/components/sections/intro";
import SectionDivider from "@/components/ui/section-divider";
import MaintenanceMode from "@/components/providers/MaintenanceMode";
import LazyViewport from "@/components/ui/LazyViewport";

const About = dynamic(() => import("@/components/sections/about"), {
  ssr: false,
  loading: () => <div className="min-h-[400px] w-full" aria-hidden="true" />,
});

const ProjectSection = dynamic(
  () => import("@/components/sections/project-section"),
  {
    ssr: false,
    loading: () => <div className="min-h-[500px] w-full" aria-hidden="true" />,
  }
);

const Skills = dynamic(() => import("@/components/sections/skills"), {
  ssr: false,
  loading: () => <div className="min-h-[300px] w-full" aria-hidden="true" />,
});

const Experience = dynamic(() => import("@/components/sections/experience"), {
  ssr: false,
  loading: () => <div className="min-h-[400px] w-full" aria-hidden="true" />,
});

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

        <LazyViewport minHeight="600px">
          <About variant="preview" />
        </LazyViewport>
      </div>

      {/* ================= SELECTED WORKS (FULL BLEED) ================= */}
      <LazyViewport minHeight="700px">
        <ProjectSection variant="preview" previewLimit={4} />
      </LazyViewport>

      {/* ================= REST OF CONTENT (CONTAINER) ================= */}
      <div className="relative w-[92vw] max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col items-center">
        <LazyViewport minHeight="400px">
          <Skills variant="preview" previewCount={16} />
        </LazyViewport>

        <LazyViewport minHeight="500px">
          <Experience variant="preview" />
        </LazyViewport>
      </div>
    </main>
  );
}
