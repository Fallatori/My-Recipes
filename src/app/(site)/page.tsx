import { getRecipes } from "root/sanity/sanity.query";
import { MainPage } from "@/components/MainPage";

export default async function Recipes() {
  const recipes = await getRecipes();

  return <MainPage recipes={recipes} />;
}
