"use client";
import { Product } from "@/lib/shopify/types";
import { useCart } from "./cart-context";
import { addItem } from "./actions";

export default function AddToCartButton({ charm }: { charm: Product }) {
  const { addCartItem } = useCart();
  const { variants } = charm;

  const selectedVariantId = variants[0].id;

  const addItemWithId = addItem.bind(null, selectedVariantId);

  return (
    <form
      action={async () => {
        addCartItem(variants[0], charm);
      }}
    >
      <button type="submit" className="h-12 rounded-xl bg-gray-900 px-4 py-2 text-gray-100">
        Add to cart
      </button>
    </form>
  );
}
