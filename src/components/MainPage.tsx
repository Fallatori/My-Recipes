"use client";

import { useState } from "react";
import { RecipeType } from "root/types";
import RecipeList from "./RecipeList";
import RecipeFilterBar from "./global/RecipeFilterbar";

interface Props {
	recipes: RecipeType[];
}

export const MainPage = ({ recipes }: Props) => {
	const [query, setQuery] = useState("");

	const searchFilter = (recipes: RecipeType[]) => {
		return recipes.filter(
			(recipe) =>
				recipe.headline.toLowerCase().includes(query) ||
				recipe?.tags?.find((tag) => tag.value === query)
		);
	};

	const filtered = searchFilter(recipes);

	// send this to SearchInput to change the query
	const handleChange = (e: any) => {
		setQuery(e.target.value.toLowerCase());
	};

	return (
		<>
			<div className="flex justify-center my-4 text-3xl text-accent-1 md:hidden">
				<h1>My Recipes</h1>
			</div>
			<RecipeFilterBar
				searchQuery={handleChange}
				setQuery={setQuery}
				query={query}
			/>
			<RecipeList recipes={filtered} />
		</>
	);
};
