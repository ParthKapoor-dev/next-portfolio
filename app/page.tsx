import AboutMeSection from "@/components/Sections/AboutSection";
import LandingHeroSection from "@/components/Sections/LandingHeroSection";
import ProjectSection from "@/components/Sections/ProjectSection";

export default function HomePage() {
  return (
    <div className="px-[16rem] ">

      <LandingHeroSection />
      
      <AboutMeSection />

      <ProjectSection />

    </div>
  )
}