"use client"

import React, { MouseEvent } from "react";
import {
  SiAdobe,
  SiApple,
  SiDiscord,
  SiFacebook,
  SiGithub,
  SiGmail,
  SiGoogle,
  SiInstagram,
  SiLeetcode,
  SiLinkedin,
  SiShopify,
  SiSoundcloud,
  SiSpotify,
  SiTiktok,
  SiTwitter,
} from "react-icons/si";
import { useAnimate } from "framer-motion";
import { IconType } from "react-icons";
import Link from "next/link";
import { MdDescription } from "react-icons/md";

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"



interface HoverLinksProps {
  links: {
    linkedin: string,
    gmail: string,
    github: string,
    twitter: string,
    instagram: string,
    leetcode: string,
    resume: string,
    discord: string,
    spotify: string
  }
}

export const HoverLinks = ({ links }: HoverLinksProps) => {
  return (
    <div className="bg-neutral-50 px-4 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="font-semibold text-5xl mb-12">
          My Links
        </div>
        <ClipPathLinks links={links} />
      </div>
    </div>
  );
};

const ClipPathLinks = ({ links }: HoverLinksProps) => {
  return (
    <div className="divide-y divide-neutral-900 border border-neutral-900">
      <div className="grid grid-cols-2 divide-x divide-neutral-900">
        <LinkBox Icon={SiLinkedin} href={links.linkedin} />
        <LinkBox Icon={SiGithub} href={links.github} />
      </div>
      <div className="grid grid-cols-4 divide-x divide-neutral-900">
        <LinkBox Icon={SiGmail} href={links.gmail} />
        <LinkBox Icon={MdDescription} href={links.resume} />
        <LinkBox Icon={SiLeetcode} href={links.leetcode} />
        <DiscordLinkBox Icon={SiDiscord} userName={links.discord} />
      </div>
      <div className="grid grid-cols-3 divide-x divide-neutral-900">
        <LinkBox Icon={SiTwitter} href={links.twitter} />
        <LinkBox Icon={SiInstagram} href={links.instagram} />
        <LinkBox Icon={SiSpotify} href={links.spotify} />
      </div>
    </div>
  );
};

const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

type Side = "top" | "left" | "bottom" | "right";
type KeyframeMap = {
  [key in Side]: string[];
};

const ENTRANCE_KEYFRAMES: KeyframeMap = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES: KeyframeMap = {
  left: [NO_CLIP, TOP_RIGHT_CLIP],
  bottom: [NO_CLIP, TOP_RIGHT_CLIP],
  top: [NO_CLIP, TOP_RIGHT_CLIP],
  right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

const LinkBox = ({ Icon, href }: { Icon: IconType; href: string }) => {
  const [scope, animate] = useAnimate();

  const getNearestSide = (e: MouseEvent) => {
    const box = (e.target as HTMLElement).getBoundingClientRect();

    const proximityToLeft = {
      proximity: Math.abs(box.left - e.clientX),
      side: "left" as Side,
    };
    const proximityToRight = {
      proximity: Math.abs(box.right - e.clientX),
      side: "right" as Side,
    };
    const proximityToTop = {
      proximity: Math.abs(box.top - e.clientY),
      side: "top" as Side,
    };
    const proximityToBottom = {
      proximity: Math.abs(box.bottom - e.clientY),
      side: "bottom" as Side,
    };

    const sortedProximity = [
      proximityToLeft,
      proximityToRight,
      proximityToTop,
      proximityToBottom,
    ].sort((a, b) => a.proximity - b.proximity);

    return sortedProximity[0].side;
  };

  const handleMouseEnter = (e: MouseEvent) => {
    const side = getNearestSide(e);

    animate(scope.current, {
      clipPath: ENTRANCE_KEYFRAMES[side],
    });
  };

  const handleMouseLeave = (e: MouseEvent) => {
    const side = getNearestSide(e);

    animate(scope.current, {
      clipPath: EXIT_KEYFRAMES[side],
    });
  };

  return (
    <Link
      href={href}
      target="_blank"
      onMouseEnter={(e) => {
        handleMouseEnter(e);
      }}
      onMouseLeave={(e) => {
        handleMouseLeave(e);
      }}
      className="relative grid h-20 w-full place-content-center sm:h-28 md:h-36"
    >
      <Icon className="text-xl sm:text-3xl lg:text-4xl" />

      <div
        ref={scope}
        style={{
          clipPath: BOTTOM_RIGHT_CLIP,
        }}
        className="absolute inset-0 grid place-content-center bg-neutral-900 text-white"
      >
        <Icon className="text-xl sm:text-3xl md:text-4xl" />
      </div>
    </Link>
  );
};

const DiscordLinkBox = ({ Icon, userName }: { Icon: IconType; userName: string }) => {
  const [scope, animate] = useAnimate();

  const getNearestSide = (e: MouseEvent) => {
    const box = (e.target as HTMLElement).getBoundingClientRect();

    const proximityToLeft = {
      proximity: Math.abs(box.left - e.clientX),
      side: "left" as Side,
    };
    const proximityToRight = {
      proximity: Math.abs(box.right - e.clientX),
      side: "right" as Side,
    };
    const proximityToTop = {
      proximity: Math.abs(box.top - e.clientY),
      side: "top" as Side,
    };
    const proximityToBottom = {
      proximity: Math.abs(box.bottom - e.clientY),
      side: "bottom" as Side,
    };

    const sortedProximity = [
      proximityToLeft,
      proximityToRight,
      proximityToTop,
      proximityToBottom,
    ].sort((a, b) => a.proximity - b.proximity);

    return sortedProximity[0].side;
  };

  const handleMouseEnter = (e: MouseEvent) => {
    const side = getNearestSide(e);

    animate(scope.current, {
      clipPath: ENTRANCE_KEYFRAMES[side],
    });
  };

  const handleMouseLeave = (e: MouseEvent) => {
    const side = getNearestSide(e);

    animate(scope.current, {
      clipPath: EXIT_KEYFRAMES[side],
    });
  };

  return (
    <Dialog>
      <DialogTrigger>
        <div
          onMouseEnter={(e) => {
            handleMouseEnter(e);
          }}
          onMouseLeave={(e) => {
            handleMouseLeave(e);
          }}
          className="relative grid h-20 w-full place-content-center sm:h-28 md:h-36"
        >
          <Icon className="text-xl sm:text-3xl lg:text-4xl" />

          <div
            ref={scope}
            style={{
              clipPath: BOTTOM_RIGHT_CLIP,
            }}
            className="absolute inset-0 grid place-content-center bg-neutral-900 text-white"
          >
            <Icon className="text-xl sm:text-3xl md:text-4xl" />
          </div>
        </div>

      </DialogTrigger>

      <DialogContent className="w-fit px-2">
        <div className="flex gap-8 px-12 py-4">
          <Icon className="text-lg sm:text-3xl lg:text-2xl" />
          <span className="text-xl">
            {userName}
          </span>
        </div>

      </DialogContent>
    </Dialog>
  );
};