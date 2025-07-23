import { getTranslations } from "next-intl/server";
import { getProducts, getCollections } from "@/lib/shopify";
import CharmBar from "@/components/charm-bar/charm-bar";
import Breadcrumbs from "@/components/breadcrumbs";
import FilterItemDropdown from "@/components/layout/catalogue/filter/dropdown";
import { getProduct } from "@/lib/shopify";
import { Toggle } from "@/components/home/toggle";

type Props = {
  params: Promise<{ category: string; chain: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function CharmsSelectPage({ params, searchParams }: Props) {
  const { category, chain } = await params;
  const { material } = await searchParams;

  const t = await getTranslations("Charmbar")
  const charms = await getProducts({ query: `product_type:charm tag:${material ? material : "gold"}` });
  const collections = await getCollections();
  const selectedChain = await getProduct(chain);

  // console.log(charms);

  const breadcrumbs = [
    { label: "Home", href: "/", active: false },
    { label: t("category"), href: "/charm-bar", active: false },
    { label: t("chain"), href: `/charm-bar/${category}`, active: false },
    { label: t("charmTitle"), href: "#", active: true },];

  return (
    <>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <Breadcrumbs breadcrumbs={breadcrumbs} />
          <p className="text-sm p-2 max-w-3xl">{t("charmStep")}</p>
        </div>
        <div className="flex items-center justify-end">
          <div className="flex items-center">
            <h2>Collections: </h2>
            <FilterItemDropdown list={collections} />
          </div>
          <Toggle />
        </div>
      </div>
      <CharmBar charms={charms} chain={selectedChain!} />
    </>
  );
}
