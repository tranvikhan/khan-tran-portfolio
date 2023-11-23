import { ProjectsSection } from "@/components/pages/home/ProjectsSection";
import { HeroSection } from "@/components/pages/home/HeroSection";
import { AboutSection } from "@/components/pages/home/AboutSection";
import { ContactSection } from "@/components/pages/home/ContactSection";

export default function Home() {
  return (
    <main className="space-y-40 mb-40">
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
