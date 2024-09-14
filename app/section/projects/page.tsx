import { ProjectPinCard } from "@/components/HomePage/ProjectPinCard";
import { ProjectScroll } from "@/components/AcertinityUi/ProjectScroll";
import { OlderProjects } from "@/components/HomePage/OlderProjects";
import { LinkPreview } from "@/components/AcertinityUi/LinkPreview";


export default function ProjectSection() {
  return (
    <div className="flex py-[8rem] h-[400vh] max-md:h-[300vh] justify-center items-center flex-col gap-[4rem] max-md:py-10">

      <ProjectScroll title={ProjectScrollTitle} />

      <div className="z-20 bg-white dark:bg-[#020817] pt-[10rem] w-full flex max-md:flex-col max-md:pt-20 justify-center">

        {ProjectDetails.map((item , index) => (
          <ProjectPinCard {...item} key={index}/>
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


const ProjectDetails = [
  {
    title: "Create MERN JS",
    href: "https://github.com/parthKapoor-dev/create-mern-js",
    linkTitle: "@github/create-mern-js",
    description: "A MERN Stack Starter pack inc JWT Auth Flow , MVC File Structuring & more.",
    cardClassName: "from-violet-400 via-purple-500 to-red-300"

  },
  {
    title: "Echo Hub",
    href: "https://echo-hub.vercel.app",
    linkTitle: "echo-hub.com",
    description: "A MERN Stack Newsletter Webapp with a complex Tag based Recommendation system",
    cardClassName: "from-blue-400 via-purple-300 to-green-500"

  },
  {
    title: "Next Gen Blog Site",
    href: "https://nextgen-blogsite.vercel.app",
    linkTitle: "nextjs.blogsite.com",
    description: "A Next.js & Prisma based Blog Site including Google OAuth2.0",
    cardClassName: "from-red-400 via-yellow-300 to-blue-500"
  }
];


