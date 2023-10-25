import { ButtonCategory } from "../ButtonCategory";
import { SearchInput } from "../SearchInput";

export default function Navbar() {
  return (
    <header className="py-8 z-30  px-8">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <SearchInput />
      </div>
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto">
        <ButtonCategory>Breakfast</ButtonCategory>
        <ButtonCategory>Lunch</ButtonCategory>
        <ButtonCategory>Dinner</ButtonCategory>
        <ButtonCategory>Dessert</ButtonCategory>
      </div>
    </header>
  );
}