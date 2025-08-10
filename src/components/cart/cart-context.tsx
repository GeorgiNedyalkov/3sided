"use client";

import type { Cart, CartItem, Product, ProductVariant } from "@/lib/shopify/types";
import React, { createContext, useContext, useReducer } from "react";

type CartAction =
	| { type: "ADD_ITEM"; payload: { variant: ProductVariant, product: Product } };

type CartContextType = {
	cart: Cart | undefined;
	addCartItem: (variant: ProductVariant, product: Product) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

function calculateItemCost(quantity: number, price: string): string {
	return (Number(price) * quantity).toString();
}

function createCartItem(variant: ProductVariant, product: Product): CartItem {
	const quantity = 1;
	const totalAmount = calculateItemCost(quantity, product.priceRange.maxVariantPrice.amount)
	return {
		id: product?.id,
		quantity,
		cost: {
			totalAmount: {
				amount: totalAmount,
				currencyCode: product.priceRange.maxVariantPrice.currencyCode,
			}
		},
		merchandise: {
			id: variant.id,
			title: variant.title,
			selectedOptions: variant.selectedOptions,
			product: {
				id: product.id,
				handle: product.handle,
				title: product.title,
				featuredImage: product.featuredImage,
			},
		},
	}
}

// function createOrUpdateCartItem(
//   existingItem: CartItem | undefined,
//   variant: ProductVariant,
//   product: Product
// ): CartItem {
//
//   const quantity = existingItem ? existingItem.quantity + 1 : 1;
//   const totalAmount = calculateItemCost(quantity, variant.price.amount);
//   return {
//     id: existingItem?.id,
//     quantity,
//     cost: {
//       totalAmount: {
//         amount: totalAmount,
//         currencyCode: variant.price.currencyCode,
//       },
//     },
//     merchandise: {
//       id: variant.id,
//       title: variant.title,
//       selectedOptions: variant.selectedOptions,
//       product: {
//         id: product.id,
//         handle: product.handle,
//         title: product.title,
//         featuredImage: product.featuredImage,
//       },
//     },
//   };
// }

function updateCartTotals(lines: CartItem[]): Pick<Cart, "totalQuantity" | "cost"> {
	const totalQuantity = lines.reduce((sum, item) => sum + item.quantity, 0);
	const totalAmount = lines.reduce((sum, item) => sum + Number(item.cost.totalAmount.amount), 0);
	const currencyCode = lines[0]?.cost.totalAmount.currencyCode ?? "USD";

	return {
		totalQuantity,
		cost: {
			subtotalAmount: { amount: totalAmount.toString(), currencyCode },
			totalAmount: { amount: totalAmount.toString(), currencyCode },
			totalTaxAmount: { amount: "0", currencyCode },
		},
	};
}

function createEmptyCart(): Cart {
	return {
		id: undefined,
		checkoutUrl: "",
		totalQuantity: 0,
		lines: [],
		cost: {
			subtotalAmount: { amount: "0", currencyCode: "USD" },
			totalAmount: { amount: "0", currencyCode: "USD" },
			totalTaxAmount: { amount: "0", currencyCode: "USD" },
		},
	};
}

function cartReducer(state: Cart | undefined, action: CartAction): Cart {
	const currentCart = state || createEmptyCart();

	switch (action.type) {
		case "ADD_ITEM": {
			const { variant, product } = action.payload;
			// TODO: see if item exists and update it

			const updatedItem = createCartItem(variant, product);

			const updatedLines = [...currentCart.lines, updatedItem];

			return {
				...currentCart,
				...updateCartTotals(updatedLines),
				lines: updatedLines
			};
		}
	}
}


export function CartProvider({ children, cartFromCookies }: {
	children: React.ReactNode, cartFromCookies: Cart
}) {
	const [cartState, dispatch] = useReducer(cartReducer, cartFromCookies);

	const addCartItem = (variant: ProductVariant, product: Product) => {
		dispatch({ type: "ADD_ITEM", payload: { variant, product } });
	}

	const value = {
		cart: cartState,
		addCartItem
	};

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
	const context = useContext(CartContext);
	if (context === undefined) {
		throw new Error("useCart must be used within a CartProvider");
	}

	return context;
}
