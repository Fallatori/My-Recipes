import Image from "next/image";
import { Metadata } from "next";
import { PortableText } from "@portabletext/react";
import { portableTextToPlainText } from "@/utils/portableTextToPlainText";
import type { RecipeType } from "root/types";
import { getSingleRecipe } from "root/sanity/sanity.query";

type Props = {
  params: {
    recipe: string;
  };
};

// Dynamic metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.recipe;
  const recipe: RecipeType = await getSingleRecipe(slug);

  return {
    title: `${recipe.headline}`,
    description: portableTextToPlainText(recipe.description),
    openGraph: {
      images: recipe.mainImage?.image || "add-a-fallback-recipe-image-here",
      title: recipe.headline,
      description: portableTextToPlainText(recipe.description),
    },
  };
}

export default async function Recipe({ params }: Props) {
  const slug = params.recipe;
  const recipe: RecipeType = await getSingleRecipe(slug);

  const ingredientsArray = recipe.ingredients ?? [];

  return (
    <main className="">
      <div className="max-w-3xl mx-auto">
        <Image
          className="mb-6 object-cover h-72 w-full"
          width={900}
          height={460}
          src={recipe.mainImage?.image}
          alt={recipe.mainImage?.alt || recipe.headline}
        />
        <div className="flex items-start justify-between mb-4">
          <h1 className="font-bold lg:text-5xl text-3xl lg:leading-tight mb-4 px-4">
            {recipe.headline}
          </h1>
        </div>

        <div className="flex flex-col gap-y-6 leading-7 text-zinc-600 mb-6 px-4">
          <PortableText value={recipe.description} />
        </div>
        <div className="mb-6">
          {ingredientsArray.map((ingredient) => (
            <div
              key={ingredient._key}
              className="flex justify-between px-4 border-b"
            >
              <p>{ingredient.name}</p>
              <p>{ingredient.amount}</p>
            </div>
          ))}
        </div>
        <div>
          {recipe.steps.map((step, index) => (
            <div key={index} className="mb-6 px-4">
              <h2 className="font-bold">Step {index + 1}</h2>
              <Image
                className="mb-6 object-cover h-72 w-full rounded-xl border"
                width={900}
                height={460}
                src={step.stepImage?.image}
                alt={step.stepImage?.alt}
              />
              <p className="text-zinc-600 px-4">{step.shortDescription}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
