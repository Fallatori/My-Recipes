import clsx from "clsx";

export function ButtonCategory({
  children,
  setQuery,
  query,
}: {
  children: string;
  setQuery: any;
  query: string;
}) {
  const lowerCaseChildren = children.toLowerCase();

  return (
    <button
      className={clsx(
        "flex h-[48px] text-gray-500 grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 md:font-extrabold md:text-lg",
        {
          "bg-sky-100 text-blue-500 underline underline-offset-4":
            query === lowerCaseChildren,
        }
      )}
      onClick={() => setQuery(lowerCaseChildren)}
    >
      {children}
    </button>
  );
}
