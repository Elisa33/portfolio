import HomeSection from "../components/sections/HomeSection";
import AboutSection from "../components/sections/AboutSection";
import SkillsSection from "../components/sections/SkillsSection";
import WorksSection from "@/components/sections/WorksSection";
import ResumeSection from "@/components/sections/ResumeSection";
import Contact from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="flex-col">
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <WorksSection />
      <ResumeSection />
      <Contact />
    </div>
  );
}
