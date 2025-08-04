"use client"

import { usePathname } from "@/i18n/navigation";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

// TODO: Figure out where is the best to place these?
// and fix type for hobbies
// is there a collection fruits?
const charmCollections = [
  { id: "all", title: "All" },
  { id: "Animal", title: "Animal" },
  { id: "hobies", title: "Hobbies" },
  { id: "food", title: "Foods and Drinks" },
  { id: "divine", title: "Divine" },
  { id: "letters", title: "Letters" },
  { id: "love", title: "Love" },
  { id: "girls", title: "Just Girls" },
  { id: "summer", title: "Summer" },
  { id: "plants", title: "Plants and Flowers" },
];

export default function FilterCollections() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const selectedCollection = searchParams.get("collection") || "all"

  function onSelectCollection(collection: string) {
    const params = new URLSearchParams(searchParams);

    if (collection && collection !== "all") {
      params.set("collection", collection);
    } else {
      params.delete("collection");
    }

    replace(`${pathname}?${params}`)
  }

  return (
    <div className="flex gap-4">
      <h3>Filter by Collection:</h3>
      <select
        value={selectedCollection}
        onChange={(e) => onSelectCollection(e.target.value)}
      >
        {
          charmCollections.map((c) => (
            <option key={c.id} value={c.id}>
              {c.title}
            </option>
          ))
        }
      </select>
    </div>
  )
}
