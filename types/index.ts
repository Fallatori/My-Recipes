import { PortableTextBlock } from "sanity";

export type RecipeType = {
  _id: string;
  mainImage: {
    alt: string;
    image: string;
  };
  headline: string;
  description: PortableTextBlock[];
  ingredients: string[];
  steps: string[];
};
