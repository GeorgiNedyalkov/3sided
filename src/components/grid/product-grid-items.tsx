import Link from "next/link";
import Image from "next/image";
import { ShopifyProduct } from "@/lib/shopify/types";
import Grid from ".";

export default function ProductGridItems({ products }: { products: ShopifyProduct[] }) {
  return (
    <>
      {products.map((product) => (
        <Grid.Item key={product.handle}>
          <Link href={`product/${product.handle}`} className="relative h-full w-full">
            <div className="relative h-full w-full border">
              <Image
                fill
                src={product.featuredImage?.url}
                className="h-full w-full object-cover"
                alt="Product"
              />
            </div>
          </Link>
        </Grid.Item>
      ))}
    </>
  );
}
