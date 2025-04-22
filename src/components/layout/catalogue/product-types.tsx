import { getProductTypes } from "@/lib/shopify";
// import { FilterList } from "./filter";

export default async function ProductTypes() {
  const products = await getProductTypes();

  return (
    <>
      {products.length > 0 ? (
        <div></div>
      ) : (
        // <FilterList list={products} title="Product Types" />
        <div>No Product Types</div>
      )}
    </>
  );

  // return <FilterList list={products} title="Category" />;
}
