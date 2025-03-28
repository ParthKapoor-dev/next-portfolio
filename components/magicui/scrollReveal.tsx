"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { FC, ReactNode, useRef } from "react";

interface TextRevealByWordProps {
  text: string;
  className?: string;
}

export const TextRevealByWord: FC<TextRevealByWordProps> = ({
  text,
  className,
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const words = text.split(" ");

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[200vh]", className)}>
      <div
        className={
          "sticky top-0 mx-auto flex-col flex h-[50%] max-w-4xl justify-center bg-transparent px-[1rem] py-[5rem] max-md:py-2"
        }
      >
        <p className="py-5 text-2xl font-bold text-black dark:text-white md:py-0 md:text-3xl lg:py-10 lg:text-3xl xl:text-4xl max-md:text-xl">
          About Me <span className="text-gray-500 dark:gray-200 text-2xl font-semibold "> ( scroll to see ) </span>
        </p>
        
        <p
          ref={targetRef}
          className={
            "flex flex-wrap py-5 text-2xl font-bold text-white dark:text-background md:py-8 md:text-3xl lg:py-10 lg:text-3xl xl:text-4xl max-md:text-xl"
          }
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: any;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="xl:lg-3 relative mx-1 lg:mx-2.5">
      <span className={"absolute opacity-0"}>{children}</span>
      <motion.span
        style={{ opacity: opacity }}
        className={"text-black dark:text-white"}
      >
        {children}
      </motion.span>
    </span>
  );
};

export default TextRevealByWord;
