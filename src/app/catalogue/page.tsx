import { getProducts } from "@/lib/shopify";
import Grid from "@/components/grid";
import ProductGridItems from "@/components/layout/product-grid-items";
import { sorting, defaultSort } from "@/lib/constants";

export default async function CataloguePage(props: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  console.log({ searchParams });

  const { sort, q: searchValue } = searchParams as { [key: string]: string };
  const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;

  const products = await getProducts({ sortKey, reverse, query: searchValue });

  return (
    <>
      <Grid className="grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        <ProductGridItems products={products} />
      </Grid>
    </>
  );
}
