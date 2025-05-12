// import CharmCard from "@/components/charms/charm-card";
import Filters from "@/components/filters";
import LinkSection from "./link-section";
import ProductsGrid from "@/components/products/products-grid";

export default async function ShopPage() {
  return (
    <div>
      <div className="lg:px-20 lg:pb-20">
        <Filters />
        <ProductsGrid />
      </div>
      <LinkSection />
    </div>
  );
}
