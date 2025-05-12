import { getProducts } from "@/lib/shopify";
import { capitalize } from "@/lib/utils";
import CharmBar from "@/components/charm-bar/charm-bar";
import Breadcrumbs from "@/components/breadcrumbs";
// import type { Metadata } from "next";

type Props = {
  params: Promise<{ category: string; chain: string }>;
};

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const { chain } = await params;

//   return {
//     title: chain,
//   };
// }

export default async function CharmsSelectPage({ params }: Props) {
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
      href: "",
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
