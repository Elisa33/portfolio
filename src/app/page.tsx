import HomeSection from "../components/sections/HomeSection";
import SkillsSection from "../components/sections/SkillsSection";
import WorksSection from "@/components/sections/WorksSection";
import ResumeSection from "@/components/sections/ResumeSection";
import Contact from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HomeSection />
      <SkillsSection />
      <WorksSection />
      <ResumeSection />
      <Contact />
    </>
  );
}
