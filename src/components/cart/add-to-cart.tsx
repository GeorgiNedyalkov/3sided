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


export function AddAllToCartButton({ items }: { items: Product[] }) {
  const { addCartItem, cart } = useCart();
  const [message, formAction] = useActionState(addItem, null);

  // Function to handle adding multiple items
  const handleAddItems = async () => {
    for (const item of items) {

      if (!item) {
        // remove all null items
        continue
      }

      const selectedVariantId = item.variants[0].id;
      const finalVariant = item.variants.find((variant) => variant.id === selectedVariantId)!;

      // Add item to cart context
      addCartItem(finalVariant, item);

      // Call the server action for each item
      const actionWithVariant = formAction.bind(null, selectedVariantId);
      await actionWithVariant();
    }
  };

  console.log(cart);
  return (
    <form
      action={async () => {
        await handleAddItems();
      }}
    >
      <button
        type="submit"
        className="w-52 rounded-md bg-primary p-3 uppercase text-white transition-all duration-300 hover:bg-red-900"
      >
        Add all to cart
      </button>

      <p aria-live="polite" className="sr-only" role="status">
        {message}
      </p>
    </form>
  );
}
