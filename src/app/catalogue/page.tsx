import { getProducts } from "@/lib/shopify";
import Grid from "@/components/grid";
import ProductGridItems from "@/components/grid/product-grid-items";

export default async function CataloguePage() {
  const searchValue = "";

  // Products is now ShopifyProduct type but on NextJs commerse it is a Product type
  const products = await getProducts({ query: searchValue });

  return (
    <>
      {/* Products */}
      <Grid className="grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        <ProductGridItems products={products} />
      </Grid>
    </>
  );
}
