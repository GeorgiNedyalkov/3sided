"use client"

import { Product } from "@/lib/shopify/types"

import { useCharmBar } from "@/components/charm-bar/charm-bar-context"

export default function ChainSizeSelector({ chain }: { chain: Product }) {

	const { selectedChain } = useCharmBar();

	console.log({ variants: chain.variants })
	console.log({ selectedChain });
	console.log({chain})

	return (
		<>
			<p className="text-sm pb-4">Избери размер</p>
			<div className="flex gap-4">
				{
					chain.options.map((option) => {
						return option.values.map((value) => (
						<button
							key={value}
							onClick={() => { console.log(value) }}
							className="w-32 h-10 cursor-pointer border">
							{value}
						</button>
						))}
					)
				}
			</div>
		</>
	)
}
