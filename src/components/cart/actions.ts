"use server";
import { TAGS } from "@/lib/constants";
import { addToCart, createCart } from "@/lib/shopify";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";


export async function addItem(prevState: any, selectedVariantId: string | undefined) {
  if (!selectedVariantId) {
    return "Error adding item to cart";
  }

  try {
    await addToCart([{ merchandiseId: selectedVariantId, quantity: 1 }]);
    revalidateTag(TAGS.cart);
  } catch (e) {
    console.log(e);
    return "Error adding item to cart";
  }
}

export async function createCartAndSetCookies() {
  const cart = await createCart();
  (await cookies()).set("cartId", cart.id!);
}

