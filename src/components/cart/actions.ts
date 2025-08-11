"use server";

import { addToCart, createCart, getCart } from "@/lib/shopify";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { TAGS } from "@/lib/constants";
import { revalidateTag } from "next/cache";
import html2canvas from "html2canvas";
import { uploadImage } from "@/lib/cloudinary/actions";

export async function addItem(prevState: any, selectedVariantId: string) {
  let cartId = (await cookies()).get("cartId")?.value;

  if (!cartId || !selectedVariantId) {
    return "Error adding item to the cart";
  }

  try {
    await addToCart(cartId, [{ merchandiseId: selectedVariantId, quantity: 1 }]);
    revalidateTag(TAGS.cart);
  } catch (e) {
    console.error(e);
    return "Error adding item to cart";
  }
}

export async function redirectToCheckout() {
  let cartId = (await cookies()).get("cartId")?.value;

  if (!cartId) {
    throw new Error("Missing cart ID");
  }

  let cart = await getCart(cartId);

  if (!cart) {
    throw new Error("Missing cart ID");
  }

  redirect(cart.checkoutUrl);
}

export async function createCartAndSetCookie() {
  let cart = await createCart();
  (await cookies()).set("cartId", cart.id!);
}

export async function uploadCanvasScreenshot(ref: React.RefObject<HTMLDivElement>) {
  if (!ref.current) {
    return { error: "No element to capture", success: false };
  }

  try {
    const canvas = await html2canvas(ref.current);
    const dataUrl = canvas.toDataURL("image/png");
    const link = await uploadImage(dataUrl);
    return {
      success: true,
      link,
    };
  } catch (error) {
    return { error: "Failed to upload image", success: false };
  }
}
