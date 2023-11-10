export function ButtonCategory({
  children,
  setQuery,
}: {
  children: string;
  setQuery: any;
}) {
  return (
    <button
      className="text-gray-500 hover:text-blue-500"
      onClick={() => setQuery(children.toLowerCase())}
    >
      {children}
    </button>
  );
}
