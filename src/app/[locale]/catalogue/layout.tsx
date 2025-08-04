import Collections from "@/components/layout/catalogue/collections";
import { FilterList } from "@/components/layout/catalogue/filter";
// import ProductTypes from "@/components/layout/catalogue/product-types";
import { sorting } from "@/lib/constants";

export default function CatalogueLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="mx-auto flex max-w-screen-2xl flex-col gap-20">
        <div className="flex justify-between mt-40">
          <div className="flex gap-10">
            <Collections />
          </div>
          <div>
            <FilterList list={sorting} title="Sort by:" />
          </div>
        </div>

        <div>{children}</div>
      </div>
    </>
  );
}
