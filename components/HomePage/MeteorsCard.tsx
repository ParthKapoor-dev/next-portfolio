import Meteors from "@/components/magicui/meteors";
import Link from "next/link";

interface meteorsCardProps {
  title: string
  link : string
}

export function MeteorsCard({title , link} : meteorsCardProps) {
  return (
    <Link href={link} className="relative flex h-full w-full max-w-[32rem] min-w-[20rem] items-center justify-center overflow-hidden rounded-lg border bg-background p-20 px-16 md:shadow-xl cursor-pointer">
      <Meteors number={50} />
      <p className="z-10 whitespace-pre-wrap text-center text-4xl font-medium tracking-tighter text-black dark:text-white w-full">
        {title}
      </p>
    </Link>
  );
}
