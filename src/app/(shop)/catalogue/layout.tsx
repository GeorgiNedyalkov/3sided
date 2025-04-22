import Collections from "@/components/layout/catalogue/collections";
import { FilterList } from "@/components/layout/catalogue/filter";
import ProductTypes from "@/components/layout/catalogue/product-types";
import { sorting } from "@/lib/constants";

export default function CatalogueLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* REMOVE COLORS AFTER YOU ARE DONE */}
      <div className="mx-auto flex max-w-screen-2xl flex-col gap-20">
        {/* Hero Section */}
        <div className="bg-slate-400">Hero section</div>

        {/* Filters and Sorting */}
        <div className="flex justify-between">
          <div className="flex gap-10">
            Filter by:
            <Collections />
            <ProductTypes />
          </div>
          <div>
            <FilterList list={sorting} title="Sort by:" />
          </div>
        </div>

        {/* Products */}
        <div>{children}</div>
      </div>
    </>
  );
}
