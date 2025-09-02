"use client"

import Image from "next/image";
import { Product } from "@/lib/shopify/types";
import { useCharmBar } from "./charm-bar-context";

type ChainSelectorProps = {
	chains: Product[],
	category: string
}

export default function ChainSelector({ chains, category }: ChainSelectorProps) {
	const { selectedChain, handleChainSelect } = useCharmBar();

	return (
		<div className="flex flex-wrap">
			{
				selectedChain ?
					(
						<div>
							<div className="relative w-96 h-96">
								<Image
									src={selectedChain.featuredImage.url || ""}
									alt={selectedChain.title}
									className="object-cover hover:scale-110 transition-all ease-in-out duraion-300"
									fill
									sizes="384px"
								/>
							</div>
							<h4 className="text-center">{selectedChain.title}</h4>
						</div>
					) :
					(
						chains.map((chain) => (
							<div
								key={chain.handle}
								className="overflow-hidden cursor-pointer"
								onClick={() => handleChainSelect(chain)}
							>
								<div className="relative w-96 h-96">
									<Image
										src={chain.featuredImage.url || ""}
										alt={chain.title}
										className="object-cover hover:scale-110 transition-all ease-in-out duraion-300"
										fill
										sizes="384px"
									/>
								</div>
								<h4 className="text-center">{chain.title}</h4>
							</div>
						))
					)
			}
		</div>
	);
}

{ /* <div className="grid justfy-center md:grid-rows-2 md:grid-cols-2 lg:grid-rows-2 lg:grid-cols-3 gap-4" */ }
