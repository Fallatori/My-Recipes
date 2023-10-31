"use client";

import Link from "next/link";
import { useState } from "react";
import Navbar from "./global/Navbar";
import Image from "next/image";

interface Props {
  recipes: Recipe[];
}

interface Recipe {
  headline: string;
  _id: string;
  slug: string;
  mainImage: any;
}

export const MainPage = ({ recipes }: Props) => {
  const [query, setQuery] = useState("cake");

  const searchFilter = (array: Recipe[]) => {
    return array.filter((el) => el.headline.toLowerCase().includes(query));
  };

  const filtered = searchFilter(recipes);

  console.log({ recipes, filtered, query });

  // maybe move this to SearchInput
  const handleChange = (e: any) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto lg:px-16 px-2 min min-h-screen">
        <section className="grid grid-cols-2 mb-16 min-h-full gap-x-2 gap-y-6">
          {filtered &&
            filtered.map((data) => (
              <Link
                key={data._id}
                href={`/recipes/${data.slug}`}
                className="lg:max-w-2xl max-w-2xl"
              >
                {data.mainImage && (
                  <Image
                    className="rounded-2xl object-cover h-60 w-full  bg-top bg-[#1d1d20] mb-2"
                    src={data.mainImage.image}
                    width={150}
                    height={150}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={100}
                    alt={data.mainImage.alt}
                  />
                )}
                <h1 className="text-sm font-medium tracking-tight leading-tight min-w-full px-1">
                  {data.headline}
                </h1>
              </Link>
            ))}
        </section>
      </main>
    </>
  );
};