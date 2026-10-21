import type { Metadata } from "next";
import Header from "@/components/layout/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/layout/footer";
import ThemeContextProvider from "@/context/theme-context";
import ToasterProvider from "@/components/providers/ToasterProvider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import LoadingScreen from "@/components/loading/LoadingScreen";
import { CVPreviewProvider } from "@/context/cv-preview-context";
import CVPreviewModal from "@/components/cv/CVPreviewModal";
import { LanguageProvider } from "@/context/language-context";
import SoundEffectsProvider from "@/components/providers/SoundEffectsProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://faliq-portfolio.vercel.app"),
  title: "Faliqul Ishbah | Portfolio",
  description:
    "Faliqul Ishbah is a Full-Stack Developer & AI Automation Engineer building modern, fast, and scalable digital solutions.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  authors: [{ name: "Faliqul Ishbah" }],
  keywords: [
    "Faliqul Ishbah",
    "Portfolio",
    "Full-Stack Developer",
    "Software Engineer",
    "AI Automation Engineer",
    "Data Scientist",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Python",
  ],
  generator: "Next.js",
  applicationName: "Faliqul Ishbah Portfolio",
  referrer: "origin-when-cross-origin",
  creator: "Faliqul Ishbah",
  publisher: "Faliqul Ishbah",
  openGraph: {
    title: "Faliqul Ishbah | Portfolio",
    description:
      "Faliqul Ishbah is a Full-Stack Developer & AI Automation Engineer building modern, fast, and scalable digital solutions.",
    url: "https://faliq-portfolio.vercel.app",
    siteName: "Faliqul Ishbah Portfolio",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "Faliq Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Faliqul Ishbah | Portfolio",
    description:
      "Faliqul Ishbah is a Full-Stack Developer & AI Automation Engineer building modern, fast, and scalable digital solutions.",
    images: ["/og-image.png"],
  },
  verification: {
    google: "j6R3fP0D4ud8wPCNaD3p4bos9CI9Syvy3m3tAuKpC8s",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        {process.env.NODE_ENV !== "development" ? (
          <script
            dangerouslySetInnerHTML={{
              __html: `try{var isReload=false;try{var nav=performance.getEntriesByType("navigation");if(nav&&nav.length>0){isReload=nav[0].type==="reload";}else if(performance.navigation){isReload=performance.navigation.type===1;}}catch(err){}if(isReload||sessionStorage.getItem("portfolio_intro_shown")==="true"){document.documentElement.classList.add("intro-skipped");sessionStorage.setItem("portfolio_intro_shown","true");}}catch(e){}`,
            }}
          />
        ) : (
          <script
            dangerouslySetInnerHTML={{
              __html: `try{sessionStorage.removeItem("portfolio_intro_shown");document.documentElement.classList.remove("intro-skipped");}catch(e){}`,
            }}
          />
        )}
      </head>
      <body
        className={`${inter.className} bg-white dark:bg-black text-gray-900 dark:text-white relative transition-colors duration-300 overflow-x-hidden`}
      >
        {/* Ambient background glow orbs — dark mode only */}
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden hidden dark:block">
          <div className="glow-orb-violet absolute -top-40 -left-40 w-[600px] h-[600px] opacity-30" />
          <div className="glow-orb-electric absolute -bottom-40 -right-40 w-[500px] h-[500px] opacity-20" />
        </div>

        <LoadingScreen />
        <SoundEffectsProvider />

        <ThemeContextProvider>
          <LanguageProvider>
            <CVPreviewProvider>
              <ActiveSectionContextProvider>
                <Header />
                {children}
                <Footer />
                <CVPreviewModal />

                <ToasterProvider />
              </ActiveSectionContextProvider>
            </CVPreviewProvider>
          </LanguageProvider>
        </ThemeContextProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
