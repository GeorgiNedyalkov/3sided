import { createContext, useReducer } from "react";

type Cart = {
  products: { id: string; amount: number }[];
};

type CartContextValues = {
  cart: Cart;
};

const initialCart: Cart = {
  products: [{ id: "1", amount: 10 }],
};

export const CartContext = createContext<CartContextValues | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const contextValues = {
    cart: initialCart,
  };

  return <CartContext.Provider value={contextValues}>{children}</CartContext.Provider>;
}
