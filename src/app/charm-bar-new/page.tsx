import FilterItem from "@/components/layout/catalogue/filter/item";
import { getCollections } from "@/lib/shopify";
import { Collection } from "@/lib/shopify/types";

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

export function FilterList({ list, title }: { list: Collection[]; title: string }) {
  return (
    <>
      <nav>
        <h3 className="pb-2 font-bold">{title}</h3>
        <ul>
          <FilterItemList list={list} />
        </ul>
      </nav>
    </>
  );
}

export function FilterItemList({ list }: { list: Collection[] }) {
  return (
    <>
      {list.map((item, i) => (
        <FilterItem key={i} item={item} />
      ))}
    </>
  );
}
