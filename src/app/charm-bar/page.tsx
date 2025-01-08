import CharmBar from "@/components/charm-bar/charm-bar";
import { getProducts } from "@/lib/shopify";

export default async function Page() {
  const charms = await getProducts();
  console.log(charms);

  return <CharmBar />;
}
