"use client";

import { ButtonCategory } from "../ButtonCategory";
import { SearchInput } from "../SearchInput";

export default function Navbar({ searchQuery, setQuery }: any) {
  return (
    <header className="py-8 z-30  px-8">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <SearchInput searchQuery={searchQuery} />
      </div>
      <div className="flex pr-4 gap-2">
        <button
          className="text-gray-500 hover:text-blue-500 w-11"
          onClick={() => setQuery("")}
        >
          All
        </button>
        <div className="flex flex-1 justify-between">
          {/* maybe change import from context insted of props */}
          <ButtonCategory setQuery={setQuery}>Breakfast</ButtonCategory>
          <ButtonCategory setQuery={setQuery}>Lunch</ButtonCategory>
          <ButtonCategory setQuery={setQuery}>Dinner</ButtonCategory>
          <ButtonCategory setQuery={setQuery}>Dessert</ButtonCategory>
        </div>
      </div>
    </header>
  );
}
