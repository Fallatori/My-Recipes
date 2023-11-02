import { groq } from "next-sanity";
import client from "./sanity.client";
import { ProfileType, RecipeType } from "root/types";

export async function getRecipes(): Promise<RecipeType[]> {
  return client.fetch(
    groq`*[_type == "recipe"] {
        _id,
        headline,
        profile->{
          username, 
          profileImage{
            alt, 
            "image": asset->url
            }
          },
        mainImage {alt, "image": asset->url},
        "slug": slug.current,
      }`,
    {
      next: {
        revalidate: 10,
      },
    }
  );
}

export async function getSingleRecipe(slug: string) {
  return client.fetch(
    groq`*[_type == "recipe" && slug.current == $slug][0]{
      _id,
      headline,
      mainImage {alt, "image": asset->url},
      description,
      ingredients,
      steps[] {shortDescription, stepImage {alt, "image": asset->url}},
    }`,
    { slug }
  );
}

export async function getProfiles(): Promise<ProfileType[]> {
  return client.fetch(
    groq`*[_type == "profile"] {
        _id,
        email,
        username,
        profileImage{alt, "image": asset->url},
        shortBio,
      }`
  );
}
