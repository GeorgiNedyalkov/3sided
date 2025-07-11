"use server";
import { addToCart, createCart, getCart } from "@/lib/shopify";
import { redirect } from "next/navigation"
import { cookies } from "next/headers";
import { TAGS } from "@/lib/constants";
import { revalidateTag } from "next/cache";

export async function addItem(prevState: any, selectedVariantId: string) {
	let cartId = (await cookies()).get("cartId")?.value;

	if (!cartId || !selectedVariantId) {
		return "Error adding item to the cart";
	}

	try {
		await addToCart(cartId, [{ merchandiseId: selectedVariantId, quantity: 1 }]);
		revalidateTag(TAGS.cart);
	} catch (e) {
		console.error(e)
		return 'Error adding item to cart';
	}
}

export async function redirectToCheckout() {
	let cartId = (await cookies()).get("cartId")?.value;
	if (!cartId) {
		return "Missing cart id";
	}

	let cart = await getCart(cartId);
	if (!cart) {
		return "Missing cart";
	}

	redirect(cart.checkoutUrl);
}

export async function createCartAndSetCookie() {
	let cart = await createCart();
	(await cookies()).set("cartId", cart.id!);
}


