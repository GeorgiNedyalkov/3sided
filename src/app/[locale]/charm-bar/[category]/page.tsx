import Breadcrumbs from "@/components/breadcrumbs";
import ChainSelector from "@/components/charm-bar/chain-selector";
import { getTranslations } from "next-intl/server";

export default async function CategorySelectPage({ params }: { params: Promise<{ category: string; }> }) {
  const { category } = await params;

  const t = await getTranslations("Charmbar");

  const breadcrumbs = [
    {
      label: t("category"),
      href: "/charm-bar",
      active: false,
    },
    {
      label: t("chainSizeTitle"),
      href: "#",
      active: true,
    },
  ];

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <p className="p-2 text-sm">{t("chainSizeStep")}</p>
      <ChainSelector category={category} />
    </>
  );
}
