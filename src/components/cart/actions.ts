"use server";
import { createCart } from "@/lib/shopify";
import { cookies } from "next/headers";

export async function createCartAndSetCookies() {
  const cart = await createCart();
  (await cookies()).set("cartId", cart.id!);
}
