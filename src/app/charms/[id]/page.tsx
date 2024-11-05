import Gallery from "@/components/product/gallery";
import { getProduct } from "@/lib";
import ProductDescription from "@/components/product/product-description";
import { notFound } from "next/navigation";

export default async function CharmPage() {
  const handle = "first-charm";
  const product = await getProduct(handle);

  if (!product) return notFound();

  return (
    <div>
      <div className="mb-10 grid w-full grid-cols-2 pt-20">
        <Gallery
          images={product?.images.map((image) => ({
            src: image?.url,
            alt: image?.altText || "",
          }))}
        />
        <ProductDescription charm={product} />
      </div>
      {/* <OtherProducts category={charm?.category || ""} /> */}
    </div>
  );
}
