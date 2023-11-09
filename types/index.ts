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

interface Profile {
  username: string;
  profileImage: Image;
}
interface RecipeStep {
  shortDescription: string;
  stepImage: Image;
}

interface Tags {
  label: string;
  value: string;
}

export type RecipeType = {
  _updatedAt: string;
  _id: string;
  mainImage: Image;
  headline: string;
  profile: Profile;
  slug: string;
  description: PortableTextBlock[];
  ingredients: Ingredient[];
  steps: RecipeStep[];
  tags: Tags[];
};

export type ProfileType = {
  _id: string;
  email: string;
  username: string;
  profileImage: Image;
  shortBio: string;
};
