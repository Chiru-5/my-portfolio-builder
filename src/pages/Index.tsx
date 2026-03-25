import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutMeSection from "@/components/AboutMeSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import CustomCursor from "@/components/CustomCursor";
import CodeBackground3D from "@/components/CodeBackground3D";

const Index = () => {
  return (
    <div className="custom-cursor-enabled min-h-screen bg-background">
      <CodeBackground3D />
      <CustomCursor />
      <Navbar />
      <HeroSection />
      <AboutMeSection />
      <SkillsSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default Index;
