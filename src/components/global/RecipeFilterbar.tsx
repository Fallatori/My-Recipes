"use client";

import clsx from "clsx";
import { ButtonCategory } from "../ButtonCategory";
import { SearchInput } from "../SearchInput";

export default function RecipeFilterBar({ searchQuery, setQuery, query }: any) {
  return (
    <header className="z-30  px-8 bg-bkg pb-4 text-content md:pt-8">
      <div className="max-w-sm mx-auto flex items-center justify-between md:max-w-[450px]">
        <SearchInput searchQuery={searchQuery} />
      </div>
      <div className="flex justify-center">
        <div className="flex px-4 gap-2 md:max-w-[669px] text-accent-1">
          <button
            className={clsx(
              "flex h-[48px] items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 md:font-bold md:text-lg",
              {
                "text-blue-500 underline underline-offset-4": query === "",
              }
            )}
            onClick={() => setQuery("")}
          >
            All
          </button>
          <div className="flex flex-1 justify-between">
            {/* maybe change import from context insted of props */}
            {/* uses ButtonCategorys children to setQuery */}
            <ButtonCategory setQuery={setQuery} query={query}>
              Breakfast
            </ButtonCategory>
            <ButtonCategory setQuery={setQuery} query={query}>
              Lunch
            </ButtonCategory>
            <ButtonCategory setQuery={setQuery} query={query}>
              Dinner
            </ButtonCategory>
            <ButtonCategory setQuery={setQuery} query={query}>
              Dessert
            </ButtonCategory>
          </div>
        </div>
      </div>
    </header>
  );
}
