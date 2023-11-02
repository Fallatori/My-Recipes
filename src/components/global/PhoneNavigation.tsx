"use client";

import Link from "next/link";
import { GoHomeFill } from "react-icons/go";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { BiSolidUser } from "react-icons/bi";
import useResizeObserver from "@react-hook/resize-observer";
import { useLayoutEffect, useRef, useState } from "react";

interface ISize {
  height: number;
  width: number;
}

const useSize = (target: any) => {
  const [size, setSize] = useState<ISize>();

  useLayoutEffect(() => {
    setSize(target.current.getBoundingClientRect());
  }, [target]);

  // Where the magic happens
  useResizeObserver(target, (entry: any) => setSize(entry.contentRect));
  return size;
};

export default function PhoneNavigation() {
  const ref = useRef(null);
  const size = useSize(ref);

  // Not Sure the best way to deal with this
  const iconStyles = "w-6 h-6 mb-1 text-gray-500 group-hover:text-blue-600";
  const linkStyles =
    "inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group";

  return (
    <footer>
      <div style={{ height: size?.height ?? 0 }}></div>
      <nav
        ref={ref}
        className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200"
      >
        <div className="grid h-full max-w-lg grid-cols-3 mx-auto">
          <Link href="/" className={linkStyles}>
            <GoHomeFill className={iconStyles} />
          </Link>
          <Link href="/studio" className={linkStyles}>
            <BsFillPlusSquareFill className={iconStyles} />
          </Link>
          <Link href="/profiles" className={linkStyles}>
            <BiSolidUser className={iconStyles} />
          </Link>
        </div>
      </nav>
    </footer>
  );
}
