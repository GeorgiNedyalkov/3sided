"use client"

import { useState } from "react";
import { useCharmBar } from "@/components/charm-bar/charm-bar-context"
import clsx from "clsx";
import { LinkButton } from "@/components/buttons";

export default function ChainSizeSelector({ category }: { category: string }) {
	const { selectedChain, updateChainOption } = useCharmBar();
	const [selectedSize, setSelectedSize] = useState("");


	function handleSelectSize(size: string) {
		setSelectedSize(size);
		updateChainOption("Size", size);
	}

	if (!selectedChain) return;

	console.log({ selectedChain, selectedSize });

	return (
		<div className="flex flex-col gap-4">
			<p className="text-sm">Избери размер</p>
			<div className="flex gap-4">
				{
					selectedChain.options.map((option) => {
						return option.values.map((value) => (
							<button
								key={value}
								onClick={() => handleSelectSize(value)}
								className={clsx("w-32 h-10 cursor-pointer border",
									{ "border border-black": selectedSize === value }
								)}>
								{value}
							</button>
						))
					}
					)
				}

			</div>
				{
					selectedChain && selectedSize && (
						<LinkButton href={`/charm-bar/${category}/${selectedChain.handle}`}>
							Pick your charms
						</LinkButton>
					)

				}
		</div>
	)
}
