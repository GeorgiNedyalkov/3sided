"use client";

import { Product } from "@/lib/shopify/types";
import { useCart } from "./cart-context";
import { addItem } from "./actions";
import { useActionState } from "react";
import { useCharmBar } from "@/components/charm-bar/charm-bar-context"
import { selectedMoreThanThreeCharms } from "@/lib/utils";
import { uploadCanvasScreenshot } from "@/components/cart/actions"

export default function AddToCartButton({ charm }: { charm: Product }) {
	const { addCartItem, cart } = useCart();
	const { variants } = charm;

	const [message, formAction] = useActionState(addItem, null);

	const selectedVariantId = variants[0].id;
	const actionWithVariant = formAction.bind(null, selectedVariantId);
	const finalVariant = variants.find((variant) => variant.id === selectedVariantId)!;

	return (
		<form
			action={async () => {
				addCartItem(finalVariant, charm);
				await actionWithVariant();
			}}
		>
			<button
				type="submit"
				className="w-52 rounded-md bg-primary p-3 uppercase text-white transition-all duration-300 hover:bg-red-900"
			>
				Add to cart
			</button>

			<p aria-live="polite" className="sr-only" role="status">
				{message}
			</p>
		</form>
	);
}


export function AddAllToCartButton({ charmCanvasRef }: { charmCanvasRef: React.RefObject<HTMLDivElement> }) {
	const { addCartItem, cart } = useCart();
	const { selectedCharms, selectedChain } = useCharmBar();
	const [message, formAction, isPending] = useActionState(addItem, null);

	const items = [selectedChain, ...selectedCharms];

	const handleAddItems = async () => {
		const linkToOrderImage = await uploadCanvasScreenshot(charmCanvasRef);
		for (const item of items) {
			if (!item) {
				continue
			}

			const selectedVariantId = item.variants[0].id;
			const finalVariant = item.variants.find((variant) => variant.id === selectedVariantId)!;

			addCartItem(finalVariant, item);
			const actionWithVariant = formAction.bind(null, selectedVariantId);
			await actionWithVariant();
		}

	};

	return (
		<form
			action={async () => {
				await handleAddItems();
			}}
		>
			{
				selectedMoreThanThreeCharms(selectedCharms) && (
					<button
						type="submit"
						disabled={isPending}
						className="w-52 rounded-md bg-primary p-3 uppercase text-white transition-all duration-300 hover:bg-red-900"
					>

						{isPending ? "..." : "Add all to cart"}

					</button>
				)
			}
			<p aria-live="polite" className="sr-only" role="status">
				{message}
			</p>
		</form>
	);
}
