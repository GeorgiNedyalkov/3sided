import ChainSelector from "@/components/charm-bar/chain-selector";
import ChainSizeSelector from "@/components/charm-bar/chain-size-selector";
import { getProduct, getProducts } from "@/lib/shopify";
import { CharmBarContextProvider } from "@/components/charm-bar/charm-bar-context"

export default async function CategorySelectPage({ params }: { params: Promise<{ category: string; }> }) {
	const { category } = await params;
	const chains = await getProducts({ query: `product_type:${category}` });

	return (
		<CharmBarContextProvider>
			<div className="flex flex-col md:flex-row gap-10">
				<div className="order-2 md:order-1">
					<ChainSelector chains={chains} category={category} />
				</div>

				<div className="order-1 md:order-2">
					<ChainSizeSelector category={category} />
				</div>
			</div>
		</CharmBarContextProvider>
	);
}
