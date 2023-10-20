import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getRecipe() {
  return client.fetch(
    groq`*[_type == "recipe"] {
        _id,
        headline,
        mainImage {alt, "image": asset->url},
        description,
        ingredients,
        steps,
      }`
  );
}
