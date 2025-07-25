import { getTranslations } from "next-intl/server";
import { getProducts, getCollections, getCollectionProducts } from "@/lib/shopify";
import CharmBar from "@/components/charm-bar/charm-bar";
import Breadcrumbs from "@/components/breadcrumbs";
import FilterItemDropdown from "@/components/layout/catalogue/filter/dropdown";
import { getProduct } from "@/lib/shopify";
import { Toggle } from "@/components/home/toggle";
import FilterCollections from "@/components/charm-bar/filter-collections-selector";

type Props = {
  params: Promise<{ category: string; chain: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function CharmsSelectPage({ params, searchParams }: Props) {
  const { category, chain } = await params;
  const { material, collection } = await searchParams;

  console.log(collection);

  const query = `product_type:charm tag:${material ? material : "gold"} ${collection ? `AND tag:${collection}` : ""} `

  const t = await getTranslations("Charmbar")

  const selectedChain = await getProduct(chain);
  const filteredCharms = await getProducts({ query: query });

  const breadcrumbs = [
    { label: "Home", href: "/", active: false },
    { label: t("category"), href: "/charm-bar", active: false },
    { label: t("chain"), href: `/charm-bar/${category}`, active: false },
    { label: t("charmTitle"), href: "#", active: true },];

  console.log(filteredCharms);

  return (
    <>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <Breadcrumbs breadcrumbs={breadcrumbs} />
          <p className="text-sm p-2 max-w-3xl">{t("charmStep")}</p>
        </div>
        <div className="flex items-center justify-end gap-10">
          <FilterCollections />
          <Toggle />
        </div>
      </div>
      <CharmBar charms={filteredCharms} chain={selectedChain!} />
    </>
  );
}

