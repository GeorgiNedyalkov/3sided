"use client";

import { useEffect, useState, useRef, useActionState } from "react";
import CharmSelector from "@/components/charm-bar/charms";
import CharmCanvas from "@/components/charms/charm-canvas";
import { necklaces } from "@/lib/placeholder-data";
import { Product } from "@/lib/shopify/types";
// import { AddToCartButton } from "../add-to-cart-button";
import { AddAllToCartButton } from "../cart/add-to-cart";

export default function CharmBar({ charms, chain }: { charms: Product[], chain: Product }) {
  const numberOfCharms = 5;

  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [selectedCharmPosition, setSelectedCharmPosition] = useState<number>(0);

  const [selectedCharms, setSelectedCharms] = useState<Product[]>(
    new Array(numberOfCharms).fill(null)
  );

  function handleCharmSelect(charm: Product, position: number) {
    const newSelectedCharms = [...selectedCharms];
    newSelectedCharms[position] = charm;
    setSelectedCharms(newSelectedCharms);
  }


  useEffect(() => {
    const newPrice = selectedCharms.reduce(
      (sum, charm) => (sum += charm != null ? Number(charm?.priceRange.maxVariantPrice.amount) : 0),
      0
    );
    setTotalPrice(newPrice);
  }, [selectedCharms]);

  return (
    <div className="mb-20 flex flex-col justify-between md:flex-row gap-52">
      <div>
        <CharmCanvas
          selectedCharms={selectedCharms}
          selectedCharmPosition={selectedCharmPosition}
          onSelectPosition={setSelectedCharmPosition}
          chain={necklaces[1]}
        />
        <div className="mb-10">Total Price: {totalPrice}</div>

        <p className="text-lg">Choose a minimum of 3 charms</p>

        {
          // NOTE: Testing improve
          selectedCharms.length > 3 && (
            <AddAllToCartButton items={[...selectedCharms, chain]} />
          )
        }
      </div>

      <div className="flex flex-col gap-10 w-full">
        <CharmSelector
          charms={charms}
          position={selectedCharmPosition}
          onSelect={handleCharmSelect}
        />
      </div>
    </div>
  );
}
