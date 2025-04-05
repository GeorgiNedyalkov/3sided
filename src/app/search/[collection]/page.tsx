import { getCollectionProducts } from "@/lib/shopify";

export default async function CategoryPage(props: {
  params: Promise<{ collection: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  const params = await props.params;
  const products = await getCollectionProducts({ collection: params.collection });

  console.log({ products });

  return (
    <section>
      <ul>
        {products.map((product, i) => (
          <SampleProduct key={i} product={product} />
        ))}
      </ul>
    </section>
  );
}

export function SampleProduct({ product }) {
  return <div>{product.title}</div>;
}
