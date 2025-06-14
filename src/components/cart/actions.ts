"use server";
import { addToCart } from "@/lib/shopify";
import { cookies } from "next/headers";
// import { TAGS } from "@/lib/constants";
// import { revalidateTag } from "next/cache";

// export async function addItem(prevState: any, selectedVariantId: string | undefined) {
//   if (!selectedVariantId) {
//     return "Error adding item to cart";
//   }
//
//   try {
//     await addToCart([{ merchandiseId: selectedVariantId, quantity: 1 }]);
//     revalidateTag(TAGS.cart);
//   } catch (e) {
//     console.log(e);
//     return "Error adding item to cart";
//   }
// }
//
// export async function createCartAndSetCookies() {
//   const cart = await createCart();
//   (await cookies()).set("cartId", cart.id!);
// }
//

// NOTE: Implementing a new cart
//


/* Adds an item to the cart on the server */
export async function addItem(prevState: any, itemId: string) {
	console.log(`Add item with id ${itemId} in the server`);

	// get the cart id from the cookies
	let cartId = (await cookies()).get("cartId")?.value;
	console.log({ cartId });

	if (!cartId) {
		return "Missing cartId";
	}

	try {
		await addToCart(cartId, [{ merchandiseId: itemId, quantity: 1 }]);
	} catch (e) {
		console.error(e)
		return 'Error adding item to cart';
	}
}

