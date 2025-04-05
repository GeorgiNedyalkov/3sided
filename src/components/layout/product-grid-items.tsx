import Link from "next/link";
import Image from "next/image";
import { ShopifyProduct } from "@/lib/shopify/types";
import Grid from "../grid";

export default function ProductGridItems({ products }: { products: ShopifyProduct[] }) {
  return (
    <>
      {products.map((product) => (
        <Grid.Item key={product.handle}>
          <Link href={`product/${product.handle}`} className="relative h-full w-full">
            {/* TODO: Extract this to grid tile image */}
            <div className="relative h-full w-full border">
              <Image
                fill
                src={product.featuredImage?.url}
                className="h-full w-full object-cover"
                alt="Product"
              />
            </div>
            <div className="flex items-center justify-between">
              <p>{product.title}</p>
              <div>Category: </div>
            </div>
            <p>{product.description}</p>
            <p>Price: {product.priceRange.maxVariantPrice.amount}</p>
          </Link>
        </Grid.Item>
      ))}
    </>
  );
}
