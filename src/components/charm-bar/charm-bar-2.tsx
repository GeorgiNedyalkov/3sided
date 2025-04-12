"use client";

import { clsx } from "clsx";
import { useState } from "react";
import { Product } from "@/lib/shopify/types";
import Image from "next/image";

export default function CharmBarNew() {
  const numberOfCharms = 5;

  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [selectedCharmPosition, setSelectedCharmPosition] = useState<number>(2);
  const [selectedCharms, setSelectedCharms] = useState<Product[]>(
    new Array(numberOfCharms).fill(null)
  );

  function handleSelectCharmPosition(position: number) {
    setSelectedCharmPosition(position);
  }

  function handleCharmSelect(charm: Product, position: number) {
    const newSelectedCharms = [...selectedCharms];
    newSelectedCharms[position] = charm;
    setSelectedCharms(newSelectedCharms);

    // Fix the price
    setTotalPrice((prevPrice) => (prevPrice += Number(charm.priceRange.maxVariantPrice.amount)));
    console.log(selectedCharms);
  }

  return (
    <div className="m-10 flex flex-col gap-10">
      {/* Info */}
      <div>Total Price: {totalPrice}</div>

      {/* Select Position */}
      <div>Selected Charm Position: {selectedCharmPosition}</div>
      <div className="flex gap-8">
        {selectedCharms.map((selectedCharm, index) =>
          selectedCharm ? (
            <div key={index}>
              <Image
                className={clsx(
                  "rounded-full",
                  selectedCharmPosition == index ? "bg-slate-950" : ""
                )}
                onClick={() => handleSelectCharmPosition(index)}
                src={selectedCharm.featuredImage.url}
                alt={selectedCharm.handle}
                width={100}
                height={100}
              />
            </div>
          ) : (
            <div key={index}>
              <button
                onClick={() => handleSelectCharmPosition(index)}
                className={clsx(
                  "h-12 w-12 rounded-full",
                  selectedCharmPosition === index ? "bg-slate-950" : "bg-slate-400"
                )}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
}
