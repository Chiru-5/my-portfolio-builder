import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import CodeBackground3D from "@/components/CodeBackground3D";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CodeBackground3D />
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default Index;
