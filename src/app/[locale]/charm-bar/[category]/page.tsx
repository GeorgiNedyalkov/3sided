import Breadcrumbs from "@/components/breadcrumbs";
import ChainSelector from "@/components/charm-bar/chain-selector";
import ChainSizeSelector from "@/components/charm-bar/chain-size-selector";
import { getTranslations } from "next-intl/server";
import { getProducts } from "@/lib/shopify";
import { CharmBarContextProvider } from "@/components/charm-bar/charm-bar-context"

export default async function CategorySelectPage({ params }: { params: Promise<{ category: string; }> }) {
	const { category } = await params;

	const t = await getTranslations("Charmbar");

	const chains = await getProducts({ query: `product_type:${category}` });

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
		<CharmBarContextProvider>
			<Breadcrumbs breadcrumbs={breadcrumbs} />
			<p className="p-2 text-sm">{t("chainSizeStep")}</p>

			<div className="flex flex-col md:flex-row gap-10">
				<div className="order-2 md:order-1">
					<ChainSelector category={category} />
				</div>

				<div className="order-1 md:order-2">
					<ChainSizeSelector chain={chains[0]} />
				</div>
			</div>
		</CharmBarContextProvider>
	);
}
