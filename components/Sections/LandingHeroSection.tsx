import RetroGridBackground from "../HomePage/BackgroundRetroGrid";
import { MeteorsCard } from "../HomePage/MeteorsCard";

export default function LandingHeroSection() {
  return (
    <div className="flex py-[8rem] h-screen justify-center items-center flex-col gap-[4rem]">

      <RetroGridBackground />

      <div className="flex gap-2 ">
        <MeteorsCard title={"About Me"} />
        <MeteorsCard title={"Projects"} />
        <MeteorsCard title={"Contact Me"} />
        {/* <MeteorsCard title={"Awards"} /> */}
      </div>

    </div>
  )
}