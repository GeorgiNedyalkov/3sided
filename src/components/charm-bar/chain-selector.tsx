import Image from "next/image";
import Link from "next/link";
import { getProducts } from "@/lib/shopify";

export default async function ChainSelector({ category }: { category: string }) {
  const chains = await getProducts({ query: `product_type:${category}` });

  return (
    <nav className="flex gap-4">
      {chains.map((chain) => (
        <Link href={`/charm-bar/${category}/${chain.handle}`} key={chain.handle}>
          <h4>{chain.title}</h4>
          <Image src={chain.featuredImage.url} alt={chain.title} width={500} height={500} />
        </Link>
      ))}
    </nav>
  );
}
