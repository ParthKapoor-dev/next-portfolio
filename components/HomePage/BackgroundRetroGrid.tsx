"use client";

import RetroGrid from "@/components/magicui/RetroGrid";

interface RetroGridBackgroundProps {
  title : string
}

export default function RetroGridBackground() {
  return (
    <div className="relative flex flex-col gap-4 h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-20 max-md:p-4 md:shadow-xl">
      <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl  max-md:text-4xl  font-bold leading-none tracking-tighter text-transparent">
        Parth Kapoor Dev
      </span>
      <span className="font-semibold text-3xl max-md:text-sm">
        MERN Stack | Next JS | React Native Expo | AWS
      </span>

      <RetroGrid />
    </div>
  );
};

