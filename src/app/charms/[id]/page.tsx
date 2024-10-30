import Gallery from "@/components/product/gallery";
import { getProduct } from "@/lib";
import ProductDescription from "@/components/product/product-description";

export default async function CharmPage() {
  const handle = "first-charm";
  const product = await getProduct(handle);

  return (
    <div className="">
      <div className="w-full pt-20 grid grid-cols-2 mb-10">
        <Gallery />
        {product && <ProductDescription charm={product} />}
      </div>
      {/* <OtherProducts category={charm?.category || ""} /> */}
    </div>
  );
}
