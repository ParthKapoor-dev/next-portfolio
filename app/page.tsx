import { ProjectScroll } from "@/components/AcertinityUi/ProjectScroll";
import { AboutMeReveal } from "@/components/HomePage/AboutMeReveal";
import RetroGridBackground from "@/components/HomePage/BackgroundRetroGrid";
import { MeteorsCard } from "@/components/HomePage/MeteorsCard";
import { ProjectPinCard } from "@/components/HomePage/ProjectPinCard";
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


      
      {/* About Me Section */}
      <div className="flex py-[8rem] h-[300vh] justify-center items-center flex-col gap-[4rem]">

        <AboutMeReveal text={aboutMeText} />

        <div className="flex gap-2 justify-around">
          <div className="font-semibold text-4xl flex justify-center items-center">
            Here , Interact with my Tech Stack
          </div>
          <TechStackCloud />
        </div>

      </div>


      

      {/* Project Section */}
      <div className="flex py-[8rem] h-[300vh] justify-center items-center flex-col gap-[4rem]">
        
        <ProjectScroll title={ProjectScrollTitle} />

        <div className="z-20 bg-white h-fit w-full flex ">
          
          {ProjectDetails.map((item) => (
            <ProjectPinCard {...item} />
          ))}

        </div>

      </div>




    </div>
  )
}


const ProjectDetails = [
  {
    title: "Create MERN JS",
    href: "https://github.com/parthKapoor-dev/create-mern-js",
    linkTitle: "@github/create-mern-js",
    description: "A MERN Stack Starter pack inc JWT Auth Flow , MVC File Structuring & more."
  },
  {
    title: "Echo Hub",
    href: "https://echo-hub.vercel.app",
    linkTitle: "echo-hub.com",
    description : "A MERN Stack Newsletter Webapp with a complex Tag based Recommendation system"
  },
  {
    title: "Next Gen Blog Site",
    href: "https://nextgen-blogsite.vercel.app",
    linkTitle: "nextjs.blogsite.com",
    description : "A Next.js & Prisma based Blog Site including Google OAuth2.0"
  }
]


const ProjectScrollTitle = "Meet my latest Next JS Project. npx @devwizz/create-next-js"

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