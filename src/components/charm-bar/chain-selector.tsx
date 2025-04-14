import Image from "next/image";
import { Product } from "@/lib/shopify/types";

export default function ChainSelector({ chains }: { chains: Product[] }) {
  return (
    <ul className="flex gap-4">
      {chains.map((chain) => (
        <li key={chain.handle}>
          <h4>{chain.title}</h4>
          <div className="relative h-32 w-32">
            <Image
              src={chain.featuredImage.url}
              alt={chain.title}
              className="h-full w-full object-cover"
              fill
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
