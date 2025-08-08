"use client"

import { usePathname } from "@/i18n/navigation";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { filtersCharmCollections } from "@/lib/placeholder-data";

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
          filtersCharmCollections.map((collection) => (
            <option key={collection.id} value={collection.id}>
              {collection.title}
            </option>
          ))
        }
      </select>
    </div>
  )
}
