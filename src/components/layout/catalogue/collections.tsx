import { getCollections } from "@/lib/shopify";
import { FilterList } from "@/components/layout/catalogue/filter";

export default async function Collections() {
  const collections = await getCollections();

  return (
    <>
      <FilterList list={collections} title="Collections" />
    </>
  );
}
