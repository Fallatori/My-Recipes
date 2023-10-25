import { PortableText } from "@portabletext/react";
import { getRecipe } from "root/sanity/sanity.query";
import Image from "next/image";

export default async function Recipes() {
  const recipe = await getRecipe();

  return (
    <main className="max-w-7xl mx-auto lg:px-16 px-2 min min-h-screen">
      <section className="grid grid-cols-2 mb-16 min-h-full gap-x-2 gap-y-6">
        {recipe &&
          recipe.map((data) => (
            <div key={data._id} className="lg:max-w-2xl max-w-2xl">
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
              {/* <div className="flex flex-col gap-y-3 text-zinc-400 leading-relaxed">
                  <PortableText value={data.description} />
              </div> */}
            </div>
          ))}
      </section>
    </main>
  );
}