import IntroSection from "../components/sections/IntroSection";
import SkillsSection from "../components/sections/SkillsSection";
import WorksSection from "@/components/sections/WorksSection";
import ResumeSection from "@/components/sections/ResumeSection";
import Contact from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="flex-col">
      <IntroSection />
      <SkillsSection />
      <WorksSection />
      <ResumeSection />
      <Contact />
    </div>
  );
}
