import clsx from "clsx";

export default function CategorySelector({
  selectedCategory,
  onSelect,
}: {
  selectedCategory: string;
  onSelect(catergory: string): void;
}) {
  const categories = ["bracelet", "necklace", "keychain", "bagchain"];

  return (
    <>
      <div className="flex gap-2">
        {categories.map((category) => (
          <button
            className={clsx("rounded border p-2", {
              "bg-black text-white": selectedCategory == category,
            })}
            key={category}
            onClick={() => onSelect(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
    </>
  );
}
