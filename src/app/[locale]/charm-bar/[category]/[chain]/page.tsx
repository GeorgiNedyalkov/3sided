import { getProducts } from "@/lib/shopify";
import CharmBar from "@/components/charm-bar/charm-bar";
import Breadcrumbs from "@/components/breadcrumbs";
import { FilterList } from "@/components/layout/catalogue/filter";
import Collections from "@/components/layout/catalogue/collections";
import { getTranslations } from "next-intl/server";

type Props = {
  params: Promise<{ category: string; chain: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function CharmsSelectPage({ params, searchParams }: Props) {
  const charms = await getProducts({ query: "product_type:charm" });

  const { category } = await params;

  const t = await getTranslations("Charmbar");

  const breadcrumbs = [
    {
      label: "Home",
      href: "/",
      active: false,
    },
    {
      label: t("category"),
      href: "/charm-bar",
      active: false,
    },
    {
      label: t("chain"),
      href: `/charm-bar/${category}`,
      active: false,
    },
    {
      label: t("charmTitle"),
      href: "#",
      active: true,
    },
  ];

  return (
    <>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <Breadcrumbs breadcrumbs={breadcrumbs} />
          <p className="text-sm p-2">{t("charmStep")}</p>
        </div>
        <Collections />
      </div>
      <CharmBar charms={charms} />
    </>
  );
}

