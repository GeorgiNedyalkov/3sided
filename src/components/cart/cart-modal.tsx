"use client";
import { useState, useRef } from "react";
import { ShoppingCartIcon } from "@heroicons/react/16/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";

export default function CartModal() {
  const [isOpen, setIsOpen] = useState(false);

  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const openModal = () => {
    const modal = dialogRef.current;
    if (modal) {
      modal.showModal();
    }
    setIsOpen(true);
  };

  const closeModal = () => {
    const modal = dialogRef.current;
    if (modal) {
      modal.close();
    }
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal} className="rounded-md border-2 border-gray-600 p-2">
        <ShoppingCartIcon className="h-6" />
      </button>
      <dialog ref={dialogRef} open={isOpen} className="relative z-50">
        <div className="flex h-20 w-full items-center justify-between px-8 pt-4">
          <h2 className="text-lg font-bold">My Cart</h2>
          <button onClick={closeModal} className="h-12 rounded-md border-2 border-gray-600 p-2">
            <XMarkIcon className="h-6" />
          </button>
        </div>
      </dialog>
    </div>
  );
}
