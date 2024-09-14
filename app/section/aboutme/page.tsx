import { AboutMeReveal } from "@/components/HomePage/AboutMeReveal";
import { TechStackCloud } from "@/components/HomePage/TechStackCloud";
import * as data from "@/app/data.json"


export default function AboutMeSection() {
  return (
    <div className="flex h-[250vh] justify-center items-center flex-col gap-[4rem]">

      <AboutMeReveal text={data.aboutMeSection.desc} />

      <div className="flex gap-2 justify-around max-md:flex-col">
        <div className="font-semibold text-4xl  max-md:text-2xl flex justify-center items-center">
          Here , Interact with my Tech Stack
        </div>
        <TechStackCloud />
      </div>

    </div>
  )
}
