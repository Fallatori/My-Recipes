import { BiSearch } from "react-icons/bi";

export function SearchInput() {
  return (
    <div className="border rounded-2xl p-1 border-gray-200 flex flex-row items-center justify-center w-full mb-2">
      <BiSearch />
      <input placeholder="Search..." className="w-full" />
    </div>
  );
}
