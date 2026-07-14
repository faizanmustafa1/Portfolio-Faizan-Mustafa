import dynamic from "next/dynamic";
import { AnimatedBackground } from "@/components/layout/animated-background";
import { CursorGlow } from "@/components/layout/cursor-glow";
import { Footer } from "@/components/layout/footer";
import { LoadingScreen } from "@/components/layout/loading-screen";
import { Navbar } from "@/components/layout/navbar";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { EducationSection } from "@/components/sections/education-section";
import { HeroSection } from "@/components/sections/hero-section";

const SkillsSection = dynamic(
  () =>
    import("@/components/sections/skills-section").then((m) => m.SkillsSection),
  { ssr: true }
);

const ProjectsSection = dynamic(
  () =>
    import("@/components/sections/projects-section").then(
      (m) => m.ProjectsSection
    ),
  { ssr: true }
);

export default function Home() {
  return (
    <SmoothScrollProvider>
      <LoadingScreen />
      <AnimatedBackground />
      <CursorGlow />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </SmoothScrollProvider>
  );
}
