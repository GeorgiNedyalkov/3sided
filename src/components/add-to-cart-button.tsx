"use client"

import { useActionState } from "react";
import { useCart } from "@/components/cart/cart-context"
import { Product } from "@/lib/shopify/types";
import { addItem } from "./cart/actions";

export function AddToCartButton({ product }: { product: Product }) {
  const { addCartItem } = useCart();
  const [message, formAction] = useActionState(addItem, null);

  const { variants } = product;

  console.log({ variants })

  const defaultVariantId = variants.length === 1 ? variants[0].id : undefined;
  const actionWithId = formAction.bind(null, defaultVariantId);

  return (
    <form
      action={async () => {
        // This updates the client state and then we need to update the server state
        addCartItem(defaultVariantId, product);
        await actionWithId();
      }}>

      <button
        type="submit"
        className="bg-black text-white p-2 my-10 w-32 cursor-pointer">
        Add To Cart
      </button>
      <p>{message}</p>
    </form>
  )
}
