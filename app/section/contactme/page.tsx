import { HoverLinks } from "@/components/Hover.dev/HoverLinks";
import * as data from "@/app/data.json"

export default function ContactMeSection() {
  return (
    <div className=" py-[2rem] h-[100vh] justify-center items-center flex-col gap-[4rem]">
      
      <div className="text-4xl font-semibold max-md:text-2xl">
        Contact Me <br/>
        <span className="text-xl font-normal text-gray-400 max-md:text-base">
          If you want to hire a fantastic developer or just to say hello
        </span>
      </div>
      <HoverLinks links={data.contactMeSection.devLinks} />

    </div>
  )
}
