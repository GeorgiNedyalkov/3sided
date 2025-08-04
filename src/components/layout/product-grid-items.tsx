import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/shopify/types";
import Grid from "../grid";
import { convertToEur } from "@/lib/utils";

export default function ProductGridItems({ products }: { products: Product[] }) {
  return (
    <>
      {products
        .filter((product) => Number(product.priceRange.minVariantPrice.amount) !== 0)
        .map((product) => (
          <Grid.Item key={product.handle}>
            <Link href={`/product/${product.handle}`} className="relative h-full w-full">
              <div className="relative h-full w-full border border-black">
                <Image
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                  src={product.featuredImage?.url}
                  alt="Product"
                  fill
                />
              </div>
              <div className="flex items-center justify-between text-primary font-bold">
                <p>{product.title}</p>
              </div>
              <p className="text-primary font-bold">{product.priceRange.maxVariantPrice.amount} лв.
                <span>/ € {convertToEur(Number(product.priceRange.maxVariantPrice.amount))}</span>
              </p >
            </Link>
          </Grid.Item>
        ))}
    </>
  );
}
