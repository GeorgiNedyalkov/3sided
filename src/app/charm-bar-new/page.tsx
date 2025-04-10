import CharmCanvas from "@/components/charms/charm-canvas";
import { getProducts } from "@/lib/shopify";
import Image from "next/image";

export default async function Page() {
  const selectedChain = "necklace";
  // get the chains from a selected category (Necklace)
  const chains = await getProducts({ query: `product_type:${selectedChain}` });

  // get the charms
  const charms = await getProducts({ query: "product_type:charm" });

  return (
    <>
      <h2 className="mx-auto pt-20 text-center text-5xl font-bold">Charm Bar</h2>
      <div>
        {/* This is Product Type */}
        <h3 className="font-bold">Step 1: Choose a category</h3>
        <ul className="flex gap-2">
          <li>Bracelet</li>
          <li>Necklace</li>
          <li>Keychain</li>
          <li>Bagchain</li>
        </ul>
      </div>
      <div>
        {/* Necklace for now */}
        <h3 className="font-bold">Step 2: Pick your chain</h3>
        <div className="flex gap-4">
          {chains.map((chain) => (
            <div key={chain.handle}>
              <h4>{chain.title}</h4>
              <div className="relative h-32 w-32">
                <Image
                  src={chain.featuredImage.url}
                  alt={chain.title}
                  className="h-full w-full object-cover"
                  fill
                />
              </div>
            </div>
          ))}
        </div>
        {/* Chain Variant */}
        {/* <div>Silver or Gold</div>
        <ul>
          <li>Small</li>
          <li>Medium</li>
          <li>Large</li>
        </ul> */}
      </div>
      <div>
        <h3 className="font-bold">Step 3: Pick your charms</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-10">
          {/* <ProductGridItems products={charms} /> */}
          {charms.map((charm) => (
            <div key={charm.handle}>
              <h4>{charm.title}</h4>
              <div className="relative h-32 w-32">
                <Image
                  src={charm.featuredImage.url}
                  alt={charm.title}
                  className="h-full w-full object-cover"
                  fill
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
