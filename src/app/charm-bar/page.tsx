import CharmBar from "@/components/charm-bar/charm-bar";
import { getProducts } from "@/lib/shopify";

export default async function Page() {
  const selectedChain = "necklace";
  // get the chains from a selected category (Necklace)
  const chains = await getProducts({ query: `product_type:${selectedChain}` });

  // get the charms
  const charms = await getProducts({ query: "product_type:charm" });

  return (
    <>
      <CharmBar charms={charms} chains={chains} />
    </>
  );
}
