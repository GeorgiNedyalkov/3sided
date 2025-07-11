import FilterItem from "@/components/layout/catalogue/filter/item";
import { SortFilterItem } from "@/lib/constants";

export type ListItem = SortFilterItem | PathFilterItem;
export type PathFilterItem = { title: string; path: string };

export function FilterItemList({ list }: { list: ListItem[] }) {
  return (
    <>
      {list.map((item, i) => (
        <FilterItem key={i} item={item} />
      ))}
    </>
  );
}

export function FilterList({ list, title }: { list: ListItem[]; title: string }) {
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
