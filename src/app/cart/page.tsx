"use client";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();
  console.log(cart);

  return (
    <div className="pt-40 px-40 w-full text-left font-semibold">
      {cart.length > 0 ? (
        <div>
          <div className="text-2xl font-semibold">Here are all your items:</div>
          {cart.map((item, index) => (
            <div key={index}>
              {item.label} - number of items {item?.quantity} with a total price
              of <span>{item.price * item.quantity} лв.</span>
              <button
                className="bg-red-500 p-2 rounded-xl"
                onClick={() => removeFromCart(item.id)}
              >
                Remove from cart
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <p>Your bag is empty</p>
        </div>
      )}
    </div>
  );
}
