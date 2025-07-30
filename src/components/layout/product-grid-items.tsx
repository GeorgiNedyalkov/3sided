import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/shopify/types";
import Grid from "../grid";

export default function ProductGridItems({ products }: { products: Product[] }) {
  return (
    <>
      {products.map((product) => (
        <Grid.Item key={product.handle}>
          <Link href={`/product/${product.handle}`} className="relative h-full w-full">
            {/* TODO: Extract this to grid tile image */}
            <div className="relative h-full w-full border border-black">
              <Image
                fill
                src={product.featuredImage?.url}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                alt="Product"
              />
            </div>
            <div className="flex items-center justify-between text-primary font-bold">
              <p>{product.title}</p>
            </div>
            <p className="text-primary font-bold">{product.priceRange.maxVariantPrice.amount} лв.</p >
          </Link>
        </Grid.Item>
      ))}
    </>
  );
}
