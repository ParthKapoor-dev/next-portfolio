import RetroGridBackground from "@/components/HomePage/BackgroundRetroGrid";
import { MeteorsCard } from "@/components/HomePage/MeteorsCard";

export default function LandingPage() {
  return (
    <div className="flex px-[16rem] py-[8rem] h-screen justify-center items-center flex-col gap-[4rem]">

      <RetroGridBackground />

      <div className="flex gap-2 ">
        <MeteorsCard link="/section/aboutme" title={"About Me"} />
        <MeteorsCard link="/section/projects" title={"Projects"} />
        <MeteorsCard link="/section/contactme" title={"Contact Me"} />
        {/* <MeteorsCard title={"Awards"} /> */}
      </div>

    </div>
  )
}