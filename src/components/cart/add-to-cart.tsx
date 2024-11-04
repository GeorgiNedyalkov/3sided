"use client";
import { Product } from "@/lib/shopify/types";
import { useContext } from "react";
import { CartContext } from "@/context/cart-context";

export default function AddToCartButton({ charm }: { charm: Product }) {
  const cartContext = useContext(CartContext);
  console.log(cartContext);

  function handleClick() {
    console.log("added to cart ", charm);
  }

  return (
    <button onClick={handleClick} className="h-12 rounded-xl bg-gray-900 px-4 py-2 text-gray-100">
      Add to cart
    </button>
  );
}
