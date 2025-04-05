import { FilterList } from "@/components/layout/catalogue/filter";
import { getCollections } from "@/lib/shopify";

export default async function Page() {
  const collections = await getCollections();

  return (
    <>
      <div className="mx-20 mt-20 flex justify-between">
        <div className="bg-slate-200 p-20">
          <FilterList list={collections} title="Collections" />
        </div>
        <div>Charms go here</div>
        <div>Sorting Goes Here</div>
      </div>
    </>
  );
}
