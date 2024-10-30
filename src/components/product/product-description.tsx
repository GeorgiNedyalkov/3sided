"use client";

import { useState } from "react";
import AddToCartButton from "@/components/add-to-cart";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import { ShopifyProduct } from "@/lib/shopify/types";

export default function ProductDescription({
  charm,
}: {
  charm: ShopifyProduct;
}) {
  const [quantity, setQuantity] = useState(1);

  console.log(charm);

  function increaseQuantity() {
    setQuantity((prevQuantity) => prevQuantity + 1);
  }

  function decreaseQuantity() {
    setQuantity((prevQuantity) => prevQuantity - 1);
  }

  function handleAddToCart() {
    // addToCart(charm, quantity);
    console.log("added to cart");
  }

  return (
    <div className="w-3/4 pt-20">
      <h1 className="text-5xl font-semibold mb-4">Precious Charm</h1>
      <div className="text-gray-600">Handle: {charm.handle}</div>
      <div className="mb-2 text-gray-600">{charm?.description}</div>
      <div className="bg-gray-200 p-4">
        <div className="text-base">Цена</div>
        <span className="font-semibold text-3xl">
          {charm?.priceRange?.maxVariantPrice?.amount}
        </span>
        <span className="text-lg"> лв.</span>
        <div className="border border-gray-100 my-5" />
        <div className="flex gap-4 items-end">
          <div>
            <div className="mb-4">Количество:</div>
            <div className="bg-white flex items-center justify-between px-4 py-2 rounded-xl">
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

          <AddToCartButton onAddToCart={handleAddToCart} />
        </div>
      </div>
    </div>
  );
}
