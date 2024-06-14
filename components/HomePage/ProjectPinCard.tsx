"use client";
import React from "react";
import { PinContainer } from "../AcertinityUi/3dPin";
import Link from "next/link";
import { cn } from "@/lib/utils";


interface ProjectPinCardProps {
  title: string,
  href: string,
  linkTitle: string,
  description: string,
  cardClassName : string
}

export function ProjectPinCard({ title, href, linkTitle, description , cardClassName}: ProjectPinCardProps) {
  return (
    <Link target="_blank" href={href} className="h-[30rem] w-full flex items-center justify-center max-md:h-[25rem] ">
      <PinContainer
        title={linkTitle}
        href={href}
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100 dark:text-white">
            {title}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 dark:text-slate-200 ">
              {description}
            </span>
          </div>
          <div className={cn(cardClassName, "flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br") } />
        </div>
      </PinContainer>
    </Link>
  );
}
