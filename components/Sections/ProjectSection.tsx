import { ProjectPinCard } from "@/components/HomePage/ProjectPinCard";
import { ProjectScroll } from "@/components/AcertinityUi/ProjectScroll";

export default function ProjectSection() {
  return (
    <div className="flex py-[8rem] h-[300vh] justify-center items-center flex-col gap-[4rem]">

      <ProjectScroll title={ProjectScrollTitle} />

      <div className="z-20 bg-white h-fit w-full flex ">

        {ProjectDetails.map((item) => (
          <ProjectPinCard {...item} />
        ))}

      </div>

    </div>


  )
}

const ProjectScrollTitle = "Meet my latest Next JS Project. npx @devwizz/create-next-js"


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
    description: "A MERN Stack Newsletter Webapp with a complex Tag based Recommendation system"
  },
  {
    title: "Next Gen Blog Site",
    href: "https://nextgen-blogsite.vercel.app",
    linkTitle: "nextjs.blogsite.com",
    description: "A Next.js & Prisma based Blog Site including Google OAuth2.0"
  }
];


