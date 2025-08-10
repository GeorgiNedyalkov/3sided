"use client"

import { useRef } from "react"
import Image from "next/image";
import { Product } from "@/lib/shopify/types";
import { categoryPositionSettings } from "@/lib/placeholder-data";
import { useCharmBar } from "@/components/charm-bar/charm-bar-context";
import CharmPositionSelector from "@/components/charm-bar/charm-position-selector";
import { AddAllToCartButton } from "@/components/cart/add-to-cart"
import TotalPrice from "@/components/charm-bar/total-price";

export default function CharmCanvas({ chain }: { chain: Product }) {
	const { selectedCharms } = useCharmBar();
	let selectedCategory = categoryPositionSettings.find((category) => category.handle === chain.handle) || categoryPositionSettings[0];

	const ref = useRef<HTMLDivElement>(null);

	return (
		<div className="sticky self-start top-20 w-full">
			<div ref={ref} className="relative h-[500px] w-[90vw] lg:h-[70vh] lg:w-[500px] mx-auto">
				<Image
					src={chain.featuredImage.url}
					alt="Selected chain on the charm bar"
					className="absolute h-full w-full object-contain"
					fill
					priority
					sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw"
				/>
				<CharmPositionSelector
					positionSettings={selectedCategory!.settings}
					selectedCharms={selectedCharms}
				/>
			</div>
			<TotalPrice />
			<AddAllToCartButton charmCanvasRef={ref} />
			<p className="text-lg">Choose a minimum of 3 charms</p>

		</div>
	);
}
