import { getProducts } from "@/lib/shopify";
import CharmBar from "@/components/charm-bar/charm-bar";
import Breadcrumbs from "@/components/breadcrumbs";
import { FilterList } from "@/components/layout/catalogue/filter";
import Collections from "@/components/layout/catalogue/collections";

type Props = {
  params: Promise<{ category: string; chain: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function CharmsSelectPage({ params, searchParams }: Props) {
  const charms = await getProducts({ query: "product_type:charm" });

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
      label: "Chain",
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
      <div className="flex justify-between">
        <div className="flex flex-col">
          <Breadcrumbs breadcrumbs={breadcrumbs} />
          <p className="text-sm p-2">
            Now the best part begins — mix and match charms that reflect your mood, memories, or personality. Go minimal or go bold — it’s all up to you.
          </p>
        </div>
        <Collections />
      </div>
      <CharmBar charms={charms} />
    </>
  );
}

