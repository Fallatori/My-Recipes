"use client";

import React, { useEffect, useRef, useState } from "react";
import { useEffectOnce, useMedia, useMountedState } from "react-use";
import Image from "next/image";
import mooncake from "@/icons/mooncake.png";
import Link from "next/link";
import { BiSolidUser } from "react-icons/bi";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { MoonIcon, SunIcon } from "@/icons/svg/darktheme";

export default function Navbar() {
  const prefersDark = useMedia("(prefers-color-scheme: dark)", false);

  const [isDark, setIsDark] = useState<boolean>(prefersDark);
  const [isMounted, setIsMounted] = useState(false);

  useEffectOnce(() => setIsMounted(true));

  useEffect(() => {
    setIsDark(prefersDark);
  }, [prefersDark]);

  useEffect(() => {
    const rootElement = document.querySelector("html");
    console.log({ isDark });

    rootElement?.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <div className="grid grid-cols-2 px-12 h-14 font-medium min-h-48">
      <Link href="/" className="flex items-center gap-6 hover:text-blue-500">
        <Image
          alt="Recipe logo"
          src={mooncake}
          width={50}
          height={50}
          className="w-12 h-fit"
        />
        My Recipes
      </Link>
      <div className="flex gap-6 justify-end items-center">
        <Link
          href="/studio"
          className="flex items-center  gap-1 hover:text-blue-500"
        >
          <BsFillPlusSquareFill />
          Studio
        </Link>
        <Link
          href="/profiles"
          className="flex items-center gap-1 hover:text-blue-500"
        >
          <BiSolidUser />
          Profiles
        </Link>
        <button
          className="hover:text-blue-500 h-full w-12 flex justify-center items-center"
          onClick={() => {
            setIsDark((t) => !t);
          }}
        >
          {isMounted && (isDark ? <MdLightMode /> : <MdDarkMode />)}
        </button>
      </div>
    </div>
  );
}
