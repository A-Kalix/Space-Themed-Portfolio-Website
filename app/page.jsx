import StarsCanvas from "@/components/StarsCanvas";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";

export default function Home() {
  return (
    <main className="home-container">
      <StarsCanvas />
      <Hero />
      <AboutSection />
      <SkillsSection />
    </main>
  );
}
