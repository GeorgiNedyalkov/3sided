import { getTranslations } from "next-intl/server";
import { getProduct, getProducts } from "@/lib/shopify";
import CharmBar from "@/components/charm-bar/charm-bar";
import Breadcrumbs from "@/components/breadcrumbs";

type Props = {
	params: Promise<{ category: string; chain: string }>;
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function CharmsSelectPage({ params, searchParams }: Props) {
	const { category, chain } = await params;
	const { material, collection } = await searchParams;
	const t = await getTranslations("Charmbar")
	const selectedChain = await getProduct(chain);

	let selectedMaterial;
	if (material) {
		selectedMaterial = material;
	} else {
		if (selectedChain?.tags.includes("gold")) {
			selectedMaterial = "gold";
		} else if (selectedChain?.tags.includes("silver")) {
			selectedMaterial = "silver";
		}
	}

	const selectedCollection = collection ? `AND tag:${collection}` : ""

	const query = `product_type:charm tag:${selectedMaterial} ${selectedCollection}`

	const filteredCharms = await getProducts({ query: query });

	console.log({ selectedChain });

	const breadcrumbs = [
		{ label: t("category"), href: "/charm-bar", active: false },
		{ label: t("chain"), href: `/charm-bar/${category}`, active: false },
		{ label: t("charmTitle"), href: "#", active: true },];

	return (
		<>
			<div className="flex flex-col">
				<Breadcrumbs breadcrumbs={breadcrumbs} />
				<p className="text-sm p-2 max-w-3xl">{t("charmStep")}</p>
			</div>
			<CharmBar
				selectedMaterial={selectedMaterial}
				charms={filteredCharms}
				chain={selectedChain!}
			/>
		</>
	);
}

