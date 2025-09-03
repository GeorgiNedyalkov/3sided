"use client"

import { Product } from "@/lib/shopify/types";
import { CharmBarContextProvider } from "@/components/charm-bar/charm-bar-context";
import { Toggle } from "@/components/home/toggle";
import FilterCollections from "@/components/charm-bar/filter-collections-selector";
import CharmSelector from "@/components/charm-bar/charms";
import CharmCanvas from "@/components/charm-bar/charm-canvas";

type CharmBarProps = {
	charms: Product[],
	chain: Product,
	selectedMaterial: string | string[] | undefined; // this is a hack to build for now
}

export default function CharmBar({ charms, chain, selectedMaterial }: CharmBarProps) {
	return (
		<div className="relative mb-20">
			<div className="flex justify-between">
				<CharmCanvas chain={chain} />
				<div className="flex flex-col gap-10 lg:max-w-[40vw]">
					<div className="flex items-center justify-between">
						<Toggle initialState={selectedMaterial === "gold"} />
						<FilterCollections />
					</div>
					<CharmSelector charms={charms} />
				</div>
			</div>
		</div>
	);
}
