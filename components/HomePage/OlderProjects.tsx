"use client";
import React from "react";
import { motion } from "framer-motion";
import { LinkPreview } from "../AcertinityUi/LinkPreview";

export function OlderProjects() {
  return (
    <div className="flex justify-center items-center h-[40rem] flex-col px-4">
      <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
        <LinkPreview url="https://ecom-react-dev.vercel.app/" className="font-bold">
          React Ecommerce App
        </LinkPreview>{" "}
        and{" "}
        <LinkPreview url="https://parthkapoor-dev.github.io/type-speed/" className="font-bold">
          Typing Speed
        </LinkPreview>{" "}
        are my older projects , check them out as well
      </p>
      {/* <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto">
        Visit{" "}
        <LinkPreview
          url="https://ui.aceternity.com"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
        >
          Aceternity UI
        </LinkPreview>{" "}
        for amazing Tailwind and Framer Motion components.
      </p> */}
    </div>
  );
}
