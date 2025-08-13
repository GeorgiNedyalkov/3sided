import Grid from "@/components/grid";
import ProductGridItems from "@/components/layout/product-grid-items";
import { defaultSort, sorting } from "@/lib/constants";
import { getCollectionProducts } from "@/lib/shopify";

export default async function CategoryPage(props: {
  params: Promise<{ collection: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  const { sort } = searchParams as { [key: string]: string };
  const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;
  const params = await props.params;
  const products = await getCollectionProducts({ collection: params.collection, sortKey, reverse });


  return (
    <section>
      <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <ProductGridItems products={products} />
      </Grid>
    </section>
  );
}
