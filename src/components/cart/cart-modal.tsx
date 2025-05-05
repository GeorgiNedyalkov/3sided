
"use client";

import { useState, useEffect, useRef, Fragment } from "react";
import { ShoppingCartIcon } from "@heroicons/react/16/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useCart } from "./cart-context";
import { createCartAndSetCookies } from "./actions";
import { Dialog, DialogPanel, Transition, TransitionChild } from "@headlessui/react";
import { ShoppingBagIcon } from "@heroicons/react/20/solid";

export default function CartModal() {
  const { cart } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const quantityRef = useRef(cart?.totalQuantity);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    if (!cart) {
      createCartAndSetCookies();
    }
  }, [cart]);

  useEffect(() => {
    if (cart?.totalQuantity && cart?.totalQuantity !== quantityRef.current && cart?.totalQuantity > 0) {
      if (!isOpen) {
        setIsOpen(true)
      }

      quantityRef.current = cart?.totalQuantity;
    }

  }, [isOpen, cart?.totalQuantity, quantityRef]);

  return (
    <>
      <button onClick={openModal} className="rounded-md p-2">
        <ShoppingBagIcon className="h-6" />
      </button>

      <Transition show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[999]" onClose={closeModal}>
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <TransitionChild
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <DialogPanel className="pointer-events-auto w-screen max-w-md bg-primary px-10 py-4 text-white">
                    <div className="mb-20 flex items-center justify-between">
                      <h2 className="text-xl">My Cart</h2>

                      <button onClick={closeModal} className="rounded-md border-white/90 p-2">
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
                </TransitionChild>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
