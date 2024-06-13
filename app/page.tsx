import { AboutMeReveal } from "@/components/HomePage/AboutMeReveal";
import RetroGridBackground from "@/components/HomePage/BackgroundRetroGrid";
import { MeteorsCard } from "@/components/HomePage/MeteorsCard";
import { TechStackCloud } from "@/components/HomePage/TechStackCloud";
import WordRotate from "@/components/magicui/WordRotate";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="px-[16rem] ">

      {/* Landing Hero Section */}
      <div className="flex py-[8rem] h-screen justify-center items-center flex-col gap-[4rem]">

        <RetroGridBackground />

        <div className="flex gap-2 ">
          <MeteorsCard title={"About Me"} />
          <MeteorsCard title={"Projects"} />
          <MeteorsCard title={"Contact Me"} />
          <MeteorsCard title={"Awards"} />
        </div>

      </div>

      <div className="flex py-[8rem] h-[300vh] justify-center items-center flex-col gap-[4rem]">

        <AboutMeReveal text={aboutMeText} />

        <div className="flex gap-2 justify-around">
          <div className="font-semibold text-4xl flex justify-center items-center">
            Here , Interact with my Tech Stack
          </div>
          <TechStackCloud />
        </div>

      </div>


      
      <div>
        
      </div>



      {/* 
      <div>
          <div className="text-2xl">
            I 'm passionate software engineer with an interest in
          </div>
          <WordRotate words={RotatingWords} className="font-semibold text-3xl" />
      </div> */}

    </div>
  )
}


const aboutMeText = "Hi I am Parth Kapoor . Backend App Dev @Talecto || SSoC'24 || MERN Stack & Next JS Web Dev || React Native Expo App Dev || Junior Year COE undergrad @TIET'26"

const RotatingWords = [
  "MERN Stack Web Dev",
  "Next JS Web Dev",
  "React Native App Dev",
  "AWS Cloud Engineer"

]

const typeWritterWords = [
  {
    text: "Build",
  },
  {
    text: "awesome",
  },
  {
    text: "apps",
  },
  {
    text: "with",
  },
  {
    text: "Aceternity.",
    className: "text-blue-500 dark:text-blue-500",
  },
];