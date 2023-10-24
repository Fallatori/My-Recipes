import { groq } from "next-sanity";
import client from "./sanity.client";
import { RecipeType } from "root/types";

export async function getRecipe(): Promise<RecipeType[]> {
  return client.fetch(
    groq`*[_type == "recipe"] {
        _id,
        headline,
        mainImage {alt, "image": asset->url},
        description,
        ingredients,
        steps,
      }`,
    {
      next: {
        revalidate: 10,
      },
    }
  );
}
