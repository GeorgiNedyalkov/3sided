import Breadcrumbs from "@/components/breadcrumbs";
import ChainSelector from "@/components/charm-bar/chain-selector";

export default async function CategorySelectPage({ params }: { params: Promise<{ category: string; }> }) {
  const { category } = await params;

  const breadcrumbs = [
    {
      label: "Home",
      href: "/",
      active: false,
    },
    {
      label: "Category",
      href: "/charm-bar",
      active: false,
    },
    {
      label: "Step 2: Pick your chain",
      href: "#",
      active: true,
    },
  ];

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <p className="p-2 text-sm">Pick your base chain — silver or gold-tone — and select the size that fits your style. This is the foundation of your creation.</p>
      <ChainSelector category={category} />
    </>
  );
}
