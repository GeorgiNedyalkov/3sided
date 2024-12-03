"use client";

import { createContext, useOptimistic, use, useMemo, useContext } from "react";
import { Cart, CartItem, Product, ProductVariant } from "@/lib/shopify/types";

type CartAction = {
  type: "ADD_ITEM";
  payload: {
    product: Product;
    variant: ProductVariant;
  };
};

type CartContextType = {
  cart: Cart | undefined;
  addCartItem: (variant: ProductVariant, product: Product) => void;
};

export const CartContext = createContext<CartContextType | undefined>(undefined);

function calculateItemCost(quantity: number, price: string): string {
  return (Number(price) * quantity).toString();
}

function createItem(product: Product, variant: ProductVariant): CartItem {
  const quantity = 1;
  const totalAmount = calculateItemCost(quantity, variant.price.amount);
  return {
    id: product.id,
    quantity,
    cost: {
      totalAmount: {
        amount: totalAmount,
        currencyCode: variant.price.currencyCode,
      },
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
  };
}

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
      subtotalAmount: {
        amount: "0",
        currencyCode: "EUR",
      },
      totalAmount: {
        amount: "0",
        currencyCode: "EUR",
      },
      totalTaxAmount: {
        amount: "0",
        currencyCode: "EUR",
      },
    },
  };
}

function cartReducer(state: Cart | undefined, action: CartAction): Cart {
  const currentCart = state || createEmptyCart();

  switch (action.type) {
    case "ADD_ITEM": {
      const { product, variant } = action.payload;
      const createdItem = createItem(product, variant);
      const updatedLines = [...currentCart.lines, createdItem];

      return { ...currentCart, ...updateCartTotals(updatedLines), lines: updatedLines };
    }

    default:
      return currentCart;
  }
}

export function CartProvider({
  children,
  cartPromise,
}: {
  children: React.ReactNode;
  cartPromise: Promise<Cart | undefined>;
}) {
  const initialCart = use(cartPromise);
  const [optimisticCart, updateOptimisticCart] = useOptimistic(initialCart, cartReducer);

  const addCartItem = (variant: ProductVariant, product: Product) => {
    updateOptimisticCart({ type: "ADD_ITEM", payload: { variant, product } });
  };

  const value = useMemo(
    () => ({
      cart: optimisticCart,
      addCartItem,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [optimisticCart]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
