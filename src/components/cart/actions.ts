"use server";
import { addToCart, createCart } from "@/lib/shopify";
import { cookies } from "next/headers";
// import { TAGS } from "@/lib/constants";
// import { revalidateTag } from "next/cache";

export async function addItem(prevState: any, selectedVariantId: string) {
	console.log(`Add item with id ${selectedVariantId} in the server`);

	// get the cart id from the cookies
	let cartId = (await cookies()).get("cartId")?.value;
	console.log({ cartId });

	if (!cartId || !selectedVariantId) {
		return "Error adding item to the cart";
	}

	try {
		await addToCart(cartId, [{ merchandiseId: selectedVariantId, quantity: 1 }]);
		// revalidateTag(TAGS.cart);
	} catch (e) {
		console.error(e)
		return 'Error adding item to cart';
	}
}

export async function createCartAndSetCookie() {
	let cart = await createCart();
	(await cookies()).set("cartId", cart.id!);
}
