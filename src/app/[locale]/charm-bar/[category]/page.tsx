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

  const sizes = [
    "S-22sm", "M-40sm", "L-50sm"
  ]

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <div className="flex gap-10">
        <div>
          <p className="p-2 text-sm">{t("chainSizeStep")}</p>
          <ChainSelector category={category} />
        </div>
        <div>
          <p className="text-sm pb-4">
            Избери размер
          </p>
          <div className="flex gap-4">
            {
              sizes.map((size) => (
                <button className="w-32 h-10 cursor-pointer border">{size}</button>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
}
