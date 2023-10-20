import { PortableText } from "@portabletext/react";
import { getRecipe } from "root/sanity/sanity.query";
import type { RecipeType } from "root/types";
import Image from "next/image";

export default async function Home() {
  const recipe: RecipeType[] = await getRecipe();

  return (
    <main className="max-w-7xl mx-auto lg:px-16 px-6">
      <section className="flex xl:flex-row flex-col xl:items-center items-start xl:justify-center justify-between gap-x-12 lg:mt-32 mt-20 mb-16">
        {recipe &&
          recipe.map((data) => (
            <div key={data._id} className="lg:max-w-2xl max-w-2xl">
              <h1 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full">
                {data.headline}
              </h1>
              {data.mainImage && <Image
                    className="rounded-2xl mb-4 object-cover max-h-96 min-h-96 bg-top bg-[#1d1d20]"
                    src={data.mainImage.image}
                    width={400}
                    height={400}
                    quality={100}
                    alt={data.mainImage.alt}
                  />}
              <div className="flex flex-col gap-y-3 text-zinc-400 leading-relaxed">
                  <PortableText value={data.description} />
              </div>
            </div>
          ))}
      </section>
    </main>
  );
}
