import RetroGridBackground from "@/components/HomePage/BackgroundRetroGrid";
import { MeteorsCard } from "@/components/HomePage/MeteorsCard";

export default function LandingPage() {
  return (
    <div className="flex px-[16rem] py-[8rem] max-md:px-4 h-screen justify-center items-center flex-col gap-[4rem] max-md:gap-10 max-md:py-24">

      <RetroGridBackground />

      <div className="flex gap-2 max-md:flex-col">
        <MeteorsCard link="/section/aboutme" title={"About Me"} />
        <MeteorsCard link="/section/projects" title={"Projects"} />
        <MeteorsCard link="/section/contactme" title={"Contact Me"} />
        {/* <MeteorsCard title={"Awards"} /> */}
      </div>

    </div>
  )
}