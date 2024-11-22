"use client";

import { useState } from "react";
import AddToCartButton from "@/components/cart/add-to-cart";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import { Product } from "@/lib/shopify/types";

export default function ProductDescription({ charm }: { charm: Product }) {
  const [quantity, setQuantity] = useState(1);

  function increaseQuantity() {
    setQuantity((prevQuantity) => prevQuantity + 1);
  }

  function decreaseQuantity() {
    setQuantity((prevQuantity) => prevQuantity - 1);
  }

  return (
    <div className="px-2 pt-20 sm:w-3/4">
      <h1 className="mb-4 text-5xl font-semibold">Precious Charm</h1>
      <div className="text-gray-600">Handle: {charm.handle}</div>
      <div className="mb-2 text-gray-600">{charm?.description}</div>
      <div className="bg-gray-200 p-4">
        <div className="text-base">Цена</div>
        <span className="text-3xl font-semibold">{charm?.priceRange?.maxVariantPrice?.amount}</span>
        <span className="text-lg"> лв.</span>
        <div className="my-5 border border-gray-100" />
        <div className="flex items-end gap-4">
          <div>
            <div className="mb-4">Количество:</div>
            <div className="flex items-center justify-between rounded-xl bg-white px-4 py-2">
              <div className="text-xl">{quantity}</div>

              <div className="flex flex-col items-center justify-center">
                <button onClick={increaseQuantity}>
                  <ChevronUpIcon className="h-5" />
                </button>
                <button onClick={decreaseQuantity} disabled={quantity <= 1}>
                  <ChevronDownIcon className="h-5" />
                </button>
              </div>
            </div>
          </div>

          <AddToCartButton charm={charm} />
        </div>
      </div>
    </div>
  );
}
