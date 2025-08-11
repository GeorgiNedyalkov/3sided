"use client"
import { Product } from "@/lib/shopify/types"

const sizes = ["S-22sm", "M-40sm", "L-50sm"]

export default function ChainSizeSelector({ chain }: { chain: Product }) {
	return (
		<>
			<p className="text-sm pb-4">Избери размер</p>
			<div className="flex gap-4">
				{
					sizes.map((size) => (
						<button className="w-32 h-10 cursor-pointer border">{size}</button>
					))
				}
			</div>
		</>

	)
}
