import Gallery from "@/components/product/gallery";
import OtherProducts from "@/components/product/other-options";
import ProductDescription from "@/components/product/product-description";
import { getProduct } from "@/lib/shopify";
import { notFound } from "next/navigation";

export default async function CharmPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const product = await getProduct(params.id); // the id is a handle here must fix

  if (!product) return notFound();

  return (
    <>
      <div className="mb-10 grid w-full grid-cols-1 sm:grid-cols-2">
        <Gallery
          images={product?.images.map((image) => ({
            src: image?.url,
            alt: image?.altText || "",
          }))}
        />
        <ProductDescription charm={product} />
      </div>
      <OtherProducts category="charm" />
    </>
  );
}
