"use client";

import { useEffect, useState } from "react";
import CharmSelector from "@/components/charm-bar/charms";
import CharmCanvas from "@/components/charms/charm-canvas";
import { necklaces } from "@/lib/placeholder-data";
import { Product } from "@/lib/shopify/types";
import AddToCartButton from "../cart/add-to-cart";

export default function CharmBar({ charms }: { charms: Product[] }) {
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
    <div className="mb-20 flex flex-col justify-around md:flex-row">
      <div>
        <CharmCanvas
          selectedCharms={selectedCharms}
          selectedCharmPosition={selectedCharmPosition}
          onSelectPosition={setSelectedCharmPosition}
          chain={necklaces[1]}
        />
        <div className="mb-10">Total Price: {totalPrice}</div>
      </div>

      <div className="flex flex-col gap-10">
        <CharmSelector
          charms={charms}
          position={selectedCharmPosition}
          onSelect={handleCharmSelect}
        />
        <div className="flex items-center justify-center">
          <AddToCartButton charm={selectedCharms[0]} />
        </div>
      </div>
    </div>
  );
}
