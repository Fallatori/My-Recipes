import { getRecipes } from "root/sanity/sanity.query";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/global/Navbar";
import { MainPage } from "@/components/MainPage";

export default async function Recipes() {
  const recipes = await getRecipes();

  return <MainPage recipes={recipes} />;
}
