import FilterItem from "@/components/layout/catalogue/filter/item";

// export type ListItem = SortFilterItem | PathFilterItem;
export type ListItem = PathFilterItem;
export type PathFilterItem = { title: string; path: string };

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

export function FilterItemList({ list }: { list: ListItem[] }) {
  return (
    <>
      {list.map((item, i) => (
        <FilterItem key={i} item={item} />
      ))}
    </>
  );
}
