"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/AcertinityUi/navbarMenu";
import { cn } from "@/lib/utils";
import { CgDarkMode } from "react-icons/cg";
import { MdDarkMode, MdLightMode, MdOutlineLightMode } from "react-icons/md";
import { useTheme } from "next-themes";

export default function NavbarMenu() {
  return (
    <Navbar className="top-2" />
  );
}

function Navbar({ className }: { className?: string }) {

  const [active, setActive] = useState<string | null>(null);

  const { theme, setTheme } = useTheme();

  function handleTheme() {
    if (theme == "light") setTheme("dark");
    else if (theme == "dark") setTheme("light");
  }

  console.log(theme)

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>

        <MenuItem link="/" setActive={setActive} active={active} item="Home" />

        <MenuItem link="/section/aboutme" setActive={setActive} active={active} item="About Me" />

        <MenuItem link="/section/projects" setActive={setActive} active={active} item="Projects" />

        <MenuItem link="/section/contactme" setActive={setActive} active={active} item="Contact Me" />

        <div className="text-lg flex justify-center items-center" onClick={handleTheme}>
          {theme == "light" ? (
            <>
              <MdOutlineLightMode className="h-6 w-6" />
            </>

          ) : (
            <>
              <MdDarkMode className="h-6 w-6 " />
            </>
          )}
        </div>

      </Menu>
    </div>
  );
}
