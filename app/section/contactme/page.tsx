import { HoverLinks } from "@/components/Hover.dev/HoverLinks";

export default function ContactMeSection() {
  return (
    <div className=" py-[2rem] h-[100vh] justify-center items-center flex-col gap-[4rem]">
      
      <div className="text-4xl font-semibold max-md:text-2xl">
        Contact Me <br/>
        <span className="text-xl font-normal text-gray-400 max-md:text-base">
          If you want to hire a fantastic developer or just to say hello
        </span>
      </div>
      <HoverLinks links={devLinks} />

    </div>
  )
}

const resumeLink = "https://drive.google.com/file/d/18PmRF-Zp5EQwxD2iRE2ztoIdeLDSvZbt/view?usp=sharing";


const devLinks = {
  github: "https://github.com/parthKapoor-dev/",
  linkedin: "https://www.linkedin.com/in/parthkapoor08/",
  twitter: "https://x.com/Parthkapoor_TE",
  gmail: "mailto:parthkapoor.coder@gmail.com",
  instagram: "https://www.instagram.com/parthkapoor_te/",
  leetcode: "https://leetcode.com/u/parthkapoor-dev/",
  resume: resumeLink,
  discord: "captain_kapoor#1267",
  spotify: "https://open.spotify.com/playlist/35QHh6ExS7P0afinSox4P6?si=s0okFF-gTOelM8x0AJzRGA&pi=WamU8_ezRD6Ag"
}

