import Image from "next/image";
import { Metadata } from "next";
import { PortableText } from "@portabletext/react";
import { portableTextToPlainText } from "@/utils/portableTextToPlainText";
import type { RecipeType } from "root/types";
import { getSingleRecipe } from "root/sanity/sanity.query";
import { BiArrowBack } from "react-icons/bi";
import Link from "next/link";

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
    <main className="text-content">
      <div className="fixed top-4 left-4 block md:hidden">
        <Link href="/">
          <BiArrowBack className="h-12 w-12" />
        </Link>
      </div>
      <div className="max-w-3xl mx-auto">
        <Image
          className="mb-2 object-cover h-72 w-full md:rounded-2xl md:h-96 md:my-6"
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

        <div className="flex flex-col gap-y-6 leading-7 mb-6 px-4 text-accent-1 md:text-xl">
          <PortableText value={recipe.description} />
        </div>
        <div className="mb-6">
          <h2 className="px-4 text-lg font-medium md:text-2xl">
            List of Ingredients
          </h2>
          {ingredientsArray.map((ingredient) => (
            <div
              key={ingredient._key}
              className="flex justify-between border-b m-4 text-accent-1 md:text-xl"
            >
              <p>{ingredient.name}</p>
              <p>{ingredient.amount}</p>
            </div>
          ))}
        </div>
        <div>
          {recipe.steps.map((step, index) => {
            return (
              <div key={index} className="mb-6 px-4">
                <h2 className="font-bold md:text-2xl">Step {index + 1}</h2>
                <Image
                  className="mb-6 object-cover h-72 w-full rounded-xl border"
                  width={900}
                  height={460}
                  src={
                    step.stepImage?.image +
                    (step.stepImage.flip ? "?flip=hv" : "")
                  }
                  alt={step.stepImage?.alt}
                />
                <p className="text-accent-1 px-2 md:text-xl">
                  {step.shortDescription}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
