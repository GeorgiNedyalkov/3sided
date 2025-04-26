import CharmBar from "@/components/charm-bar/charm-bar";
import { getProducts } from "@/lib/shopify";
import { capitalize } from "@/lib/utils";
import Breadcrumbs from "@/components/breadcrumbs";

export default async function CharmsSelectPage({
  params,
}: {
  params: {
    chain: string;
    category: string;
  };
}) {
  const charms = await getProducts({ query: "product_type:charm" });

  const { category, chain } = await params;

  const breadcrumbs = [
    {
      label: capitalize(category),
      href: "/charm-bar",
      active: false,
    },
    {
      label: capitalize(chain),
      href: `/charm-bar/${category}`,
      active: false,
    },
    {
      label: "Step 3: Pick your charms",
      href: "category",
      active: true,
    },
  ];

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <CharmBar charms={charms} />
    </>
  );
}
