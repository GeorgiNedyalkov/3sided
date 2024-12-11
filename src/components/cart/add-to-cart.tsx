"use client";
import { Product } from "@/lib/shopify/types";
import { useCart } from "./cart-context";
import { addItem } from "./actions";
import { useActionState } from "react";

export default function AddToCartButton({ charm }: { charm: Product }) {
  const { addCartItem, cart } = useCart();
  const { variants } = charm;

  const [message, formAction] = useActionState(addItem, null);

  const selectedVariantId = variants[0].id;
  const actionWithVariant = formAction.bind(null, selectedVariantId);
  const finalVariant = variants.find((variant) => variant.id === selectedVariantId)!;

  console.log(cart);
  return (
    <form
      action={async () => {
        addCartItem(finalVariant, charm);
        await actionWithVariant();
      }}
    >
      <button type="submit" className="h-12 rounded-xl bg-gray-900 px-4 py-2 text-gray-100">
        Add to cart
      </button>

      <p aria-live="polite" className="sr-only" role="status">
        {message}
      </p>
    </form>
  );
}
