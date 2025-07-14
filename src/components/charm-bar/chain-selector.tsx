import Image from "next/image";
import Link from "next/link";
import { getProducts } from "@/lib/shopify";

export default async function ChainSelector({ category }: { category: string }) {
  const chains = await getProducts({ query: `product_type:${category}` });

  // TODO: optimize
  return (
    <nav className="flex gap-4">
      {chains.map((chain) => (
        <Link href={`/charm-bar/${category}/${chain.handle}`} key={chain.handle}>
          <Image src={chain.featuredImage.url} alt={chain.title} width={300} height={300} />
          <h4 className="text-center">{chain.title}</h4>
        </Link>
      ))}
    </nav>
  );
}
