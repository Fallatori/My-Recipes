"use client";

import React from "react";
import Image from "next/image";
import mooncake from "@/icons/mooncake.png";
import Link from "next/link";
import { BiSolidUser } from "react-icons/bi";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { SunIcon } from "@/icons/svg/darktheme";

export default function Navbar() {
  return (
    <div className="grid grid-cols-2 px-12 h-12 font-medium border-b-2 border-accent-1">
      <Link href="/" className="flex items-center gap-6 hover:text-blue-500">
        <Image
          alt="Recipe logo"
          src={mooncake}
          width={50}
          height={50}
          className="w-12 h-full"
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
          className="hover:text-blue-500"
          onClick={() => {
            const rootElement = document.querySelector("html");
            const currentTheme = rootElement?.getAttribute("data-theme");
            document
              .querySelector("html")
              ?.setAttribute(
                "data-theme",
                currentTheme === "dark" ? "light" : "dark"
              );
          }}
        >
          <SunIcon />
          {/* <MdLightMode /> */}
          {/* <MdDarkMode /> */}
        </button>
      </div>
    </div>
  );
}
