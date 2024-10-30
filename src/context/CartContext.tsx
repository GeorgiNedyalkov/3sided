// "use client";
// import { Charm } from "@/lib/shopify/types";
// import { useEffect, useState, useContext, createContext } from "react";

// const CartContext = createContext(null);

// export const useCart = () => useContext(CartContext);

// export default function CartProvider({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const [cart, setCart] = useState<Charm[] | undefined>(() => {
//     const storedCart =
//       typeof window !== "undefined"
//         ? window.localStorage.getItem("cart")
//         : null;
//     return storedCart ? JSON.parse(storedCart) : [];
//   });

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       window.localStorage.setItem("cart", JSON.stringify(cart));
//     }
//   }, [cart]);

//   function addToCart(product: Charm, quantity: number) {
//     setCart((prevCart) => {
//       // if the item is in the cart update the quantity
//       if (!prevCart) return;

//       const itemIndex = prevCart.findIndex(
//         (cartItem) => cartItem.id === product.id
//       );

//       if (itemIndex > -1) {
//         const updatedCart = [...prevCart];
//         updatedCart[itemIndex].quantity += quantity;
//         return updatedCart;
//       } else {
//         return [...prevCart, { ...product, quantity }];
//       }
//     });
//   }

//   function removeFromCart(product: Charm) {
//     setCart((prevCart) => {
//       if (!prevCart) return;
//       return prevCart.filter((item) => item.id !== product.id);
//     });
//   }

//   function clearCart() {
//     setCart([]);
//   }

//   const contextValue = {
//     cart,
//     addToCart,
//     removeFromCart,
//     clearCart,
//   };

//   return (
//     <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
//   );
// }
