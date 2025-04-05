import { getProductTypes } from "@/lib/shopify";
import { FilterList } from "./filter";

export default async function ProductTypes() {
  const products = await getProductTypes();

  console.log(products);
  return (
    <>
      {products.length > 0 ? (
        <FilterList list={products} title="Product Types" />
      ) : (
        <div>No Product Types</div>
      )}
    </>
  );

  // return <FilterList list={products} title="Category" />;
}
