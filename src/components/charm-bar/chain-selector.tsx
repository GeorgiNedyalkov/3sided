import Image from "next/image";
import Link from "next/link";
import { getProducts } from "@/lib/shopify";

export default async function ChainSelector({ category }: { category: string }) {
  console.log({ category });
  const chains = await getProducts({ query: `product_type:${category}` });

  return (
    <nav className="flex gap-4">
      {chains.map((chain) => (
        <Link href={`/charm-bar/${category}/${chain.handle}`} key={chain.handle}>
          <div className="relative w-96 h-96">
            <Image
              src={chain.featuredImage.url}
              alt={chain.title}
              className="object-cover"
              fill
            />
          </div>
          <h4 className="text-center">{chain.title}</h4>
        </Link>
      ))}
    </nav>
  );
}
