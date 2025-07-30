import Gallery from "@/components/product/gallery";
import ProductDescription from "@/components/product/product-description";
import { getProduct } from "@/lib/shopify";
import { notFound } from "next/navigation";

export default async function CharmPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const product = await getProduct(params.id);

  console.log(product);

  console.log(product);

  if (!product) return notFound();

  return (
    <div className="h-[60vh] items-center grid w-full grid-cols-1 sm:grid-cols-2">
      <Gallery
        images={product?.images.map((image) => ({
          src: image?.url,
          alt: image?.altText || "",
        }))}
      />
      <ProductDescription charm={product} />
    </div>
  );
}
