"use client"

import { useCart } from "@/components/cart/cart-context"
import { Product } from "@/lib/shopify/types";

export function AddToCartButton({ product }: { product: Product }) {
  const { addCartItem } = useCart();

  return (
    <form
      action={async () => {
        console.log("clicked");
        addCartItem(product);
      }}>

      <button
        type="submit"
        className="bg-black text-white p-2 my-10 w-32 cursor-pointer">
        Add To Cart
      </button>

    </form>
  )
}
