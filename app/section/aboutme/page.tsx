import { AboutMeReveal } from "@/components/HomePage/AboutMeReveal";
import { TechStackCloud } from "@/components/HomePage/TechStackCloud";

export default function AboutMeSection() {
  return (
    <div className="flex h-[250vh] justify-center items-center flex-col gap-[4rem]">

      <AboutMeReveal text={aboutMeText} />

      <div className="flex gap-2 justify-around max-md:flex-col">
        <div className="font-semibold text-4xl  max-md:text-2xl flex justify-center items-center">
          Here , Interact with my Tech Stack
        </div>
        <TechStackCloud />
      </div>

    </div>
  )
}

const aboutMeText = "Hi I am Parth Kapoor . Backend App Dev @Talecto || Open Source Contributor @SSoC'24 || MERN Stack & Next JS Web Dev || React Native Expo App Dev || Junior Year COE undergrad @TIET'26"
