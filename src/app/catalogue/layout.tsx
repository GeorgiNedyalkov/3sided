export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* REMOVE COLORS AFTER YOU ARE DONE */}
      <div className="mx-auto flex max-w-screen-2xl flex-col gap-20">
        {/* Hero Section */}
        <div className="bg-slate-400">Hero section</div>

        {/* Filters and Sorting */}
        <div className="flex justify-between">
          <div>Filter by:</div>
          <div>Sort by:</div>
        </div>

        {/* Products */}
        <div>{children}</div>
      </div>
    </>
  );
}
