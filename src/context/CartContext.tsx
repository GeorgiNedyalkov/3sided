"use client";
import { useEffect, useState, useContext, createContext } from "react";

// 1. Create cart context
const CartContext = createContext(null);

// 2. Create a useCart function to use the Cart Context
export const useCart = () => useContext(CartContext);

// 3. Create the CartContextProvider component
//  - Store the state of the cart
//  - Initialize the cart from the local storage
//  - create a side effect with the cart as a dependency and save it to local storage
//  - addItem function
//  - removeItem function
//  - clearCart function
export default function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cart, setCart] = useState(() => {
    const storedCart =
      typeof window !== undefined ? window.localStorage.getItem("cart") : null;
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    if (typeof window !== undefined) {
      window.localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  function addToCart(product, quantity = 1) {
    setCart((prevCart) => {
      // if the item is in the cart update the quantity
      const itemIndex = prevCart.findIndex(
        (cartItem) => cartItem.id == product.id
      );

      if (itemIndex > -1) {
        const updatedCart = [...prevCart];
        updatedCart[itemIndex].quantity += quantity;
        return updatedCart;
      } else {
        return [...prevCart, { ...product, quantity }];
      }
    });
  }

  function removeFromCart(product) {
    setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
  }

  function clearCart() {
    setCart([]);
  }

  const contextValue = {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}
