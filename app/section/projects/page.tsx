  import { ProjectPinCard } from "@/components/HomePage/ProjectPinCard";
import { ProjectScroll } from "@/components/AcertinityUi/ProjectScroll";
import { OlderProjects } from "@/components/HomePage/OlderProjects";
import { LinkPreview } from "@/components/AcertinityUi/LinkPreview";
import * as data from "@/app/data.json"


export default function ProjectSection() {
  return (
    <div className="flex py-[8rem] h-[400vh] max-md:h-[300vh] justify-center items-center flex-col gap-[4rem] max-md:py-10">

      <ProjectScroll title={ProjectScrollTitle} />

      <div className="z-20 bg-white dark:bg-[#020817] pt-[10rem] w-full flex max-md:flex-col max-md:pt-20 justify-center ">

        {ProjectDetails.map((item , index) => (
          <ProjectPinCard {...item} key={index} />
        ))}

      </div>

      <div className="z-10 bg-white dark:bg-[#020817]  w-full ">
        <OlderProjects />
      </div>

    </div>


  )
}

const ProjectScrollTitle = (
  <div>
    Meet my latest Next JS Project. <LinkPreview url='https://devwizz-nextjs.vercel.app' className="underline underline-offset-6"> npx @devwizz/create-next-js </LinkPreview>
  </div>
)


const ProjectDetails = data.projectSection.side;


