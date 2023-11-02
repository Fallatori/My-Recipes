"use client";

import Link from "next/link";
import { useState } from "react";
import Navbar from "./global/Navbar";
import Image from "next/image";
import { RecipeType } from "root/types";
import RecipeList from "./RecipeList";

interface Props {
  recipes: RecipeType[];
}

export const MainPage = ({ recipes }: Props) => {
  const [query, setQuery] = useState("");

  const searchFilter = (array: RecipeType[]) => {
    return array.filter((el) => el.headline.toLowerCase().includes(query));
  };

  const filtered = searchFilter(recipes);

  // send this to SearchInput to change the query
  const handleChange = (e: any) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <Navbar searchQuery={handleChange} />
      <RecipeList recipes={filtered} />
    </>
  );
};
