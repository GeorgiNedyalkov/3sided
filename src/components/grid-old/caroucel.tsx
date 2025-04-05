import Image from "next/image";
import Link from "next/link";
import { getCollectionsProducts } from "@/lib/shopify";

export default async function Caroucel() {
  const products = await getCollectionsProducts({
    collection: "Charms",
  });

  const caroucelProducts = [...products, ...products, ...products];

  return (
    <div className="mx-auto max-w-screen-2xl overflow-x-auto">
      <ul className="flex animate-carousel items-center">
        {caroucelProducts.map((product, i) => (
          <Link
            className="relative h-96 w-96 flex-none"
            key={product.id + "-" + i}
            href={`/products/${product.handle}`}
          >
            <Image fill src={product.featuredImage.url} alt={product.featuredImage.altText} />
          </Link>
        ))}
      </ul>
    </div>
  );
}
