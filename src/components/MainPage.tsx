"use client";

import { useState } from "react";
import Navbar from "./global/Navbar";
import { RecipeType } from "root/types";
import RecipeList from "./RecipeList";

interface Props {
  recipes: RecipeType[];
}

export const MainPage = ({ recipes }: Props) => {
  const [query, setQuery] = useState("");

  const searchFilter = (recipes: RecipeType[]) => {
    return recipes.filter(
      (recipe) =>
        recipe.headline.toLowerCase().includes(query) ||
        recipe.tags.find((tag) => tag.value === query)
    );
  };

  const filtered = searchFilter(recipes);

  // send this to SearchInput to change the query
  const handleChange = (e: any) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <Navbar searchQuery={handleChange} setQuery={setQuery} />
      <RecipeList recipes={filtered} />
    </>
  );
};
