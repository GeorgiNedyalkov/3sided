import Gallery from "@/components/product/gallery";
import { getProduct } from "@/lib";
import ProductDescription from "@/components/product/product-description";
import { notFound } from "next/navigation";

export default async function CharmPage() {
  const handle = "first-charm";
  const product = await getProduct(handle);

  if (!product) return notFound();

  console.log(product);

  return (
    <div className="">
      <div className="w-full pt-20 grid grid-cols-2 mb-10">
        <Gallery
          images={product?.images.map((image) => ({
            src: image?.url,
            alt: image?.altText || "",
          }))}
        />
        {product && <ProductDescription charm={product} />}
      </div>
      {/* <OtherProducts category={charm?.category || ""} /> */}
    </div>
  );
}
