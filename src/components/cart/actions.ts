"use server";
import { addToCart, createCart } from "@/lib/shopify";
// import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export async function createCartAndSetCookies() {
  const cart = await createCart();
  (await cookies()).set("cartId", cart.id!);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function addItem(selectedVariantId: string | undefined) {
  const cartId = (await cookies()).get("cartId")?.value;

  if (!cartId || !selectedVariantId) {
    return "Error adding item to cart";
  }

  try {
    await addToCart(cartId, [{ merchandiseId: selectedVariantId, quantity: 1 }]);
    // revalidateTag(TAGS.cart);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    return "Error adding item to cart";
  }
}
