import Breadcrumbs from "@/components/breadcrumbs";
import ChainSelector from "@/components/charm-bar/chain-selector";
import { capitalize } from "@/lib/utils";

export default async function CategorySelectPage({
  params,
}: {
  params: Promise<{
    category: string;
  }>;
}) {
  const { category } = await params;

  const breadcrumbs = [
    {
      label: capitalize(category),
      href: "/charm-bar",
      active: false,
    },
    {
      label: "Step 2: Pick your chain",
      href: "category",
      active: true,
    },
  ];

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <ChainSelector category={category} />
    </>
  );
}
