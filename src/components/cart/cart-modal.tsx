"use client";
import { useState } from "react";
import { ShoppingCartIcon } from "@heroicons/react/16/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";

export default function CartModal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <button onClick={openModal} className="rounded-md border-2 border-gray-600 p-2">
        <ShoppingCartIcon className="h-6" />
      </button>
      <div
        className={`absolute top-0 h-screen w-96 transform bg-slate-200 transition-all duration-300 ease-in-out ${isOpen ? "right-0" : "-right-96"} `}
      >
        <div className="flex items-center justify-between p-6">
          <h2 className="text-lg font-bold">My Cart</h2>
          <button onClick={closeModal} className="h-12 rounded-md border-2 border-gray-600 p-2">
            <XMarkIcon className="h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
