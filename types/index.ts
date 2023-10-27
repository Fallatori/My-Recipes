import { PortableTextBlock } from "sanity";

interface Image {
  alt: string;
  image: string;
}

interface Ingredient {
  name: string;
  amount: string;
  _key: string;
}

interface RecipeStep {
  shortDescription: string;
  stepImage: Image;
}

export type RecipeType = {
  _id: string;
  mainImage: Image;
  headline: string;
  slug: string;
  description: PortableTextBlock[];
  ingredients: Ingredient[];
  steps: RecipeStep[];
};
