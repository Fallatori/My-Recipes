import { BiSearch } from "react-icons/bi";

export function SearchInput({ searchQuery }: any) {
  return (
    <div className="border rounded-2xl p-1 border-gray-200 flex flex-row items-center justify-center w-full mb-2">
      <BiSearch />
      <input
        onChange={searchQuery}
        placeholder="Search..."
        className="w-full bg-bkg text-content"
      />
    </div>
  );
}
