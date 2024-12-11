"use client";

import { useState, useEffect, Fragment } from "react";
import { ShoppingCartIcon } from "@heroicons/react/16/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useCart } from "./cart-context";
import { createCartAndSetCookies } from "./actions";
import { Dialog, DialogPanel } from "@headlessui/react";

export default function CartModal() {
  const { cart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    if (!cart) {
      createCartAndSetCookies();
    }
  }, [cart]);

  return (
    <>
      <button onClick={openModal} className="rounded-md border-2 border-gray-600 p-2">
        {/* TODO: Need to add the number of items in the cart */}
        <ShoppingCartIcon className="h-6" />
      </button>

      <Dialog open={isOpen} onClose={closeModal} className="relative z-20">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <DialogPanel className="fixed right-0 top-0 h-screen w-96 bg-black px-10 py-4 text-white">
          <div className="mb-20 flex items-center justify-between">
            <h2 className="text-xl">My Cart</h2>

            <button onClick={closeModal} className="rounded-md border-2 border-white/90 p-2">
              <XMarkIcon className="h-6" />
            </button>
          </div>

          {!cart || cart.lines.length === 0 ? (
            <div className="flex flex-col items-center gap-4">
              <ShoppingCartIcon className="h-24" />
              <p>Your cart is empty</p>
            </div>
          ) : (
            <div>You have items in cart</div>
          )}
        </DialogPanel>
      </Dialog>
    </>
  );
}
