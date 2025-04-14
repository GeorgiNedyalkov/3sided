"use client";

import { useEffect, useState } from "react";
import { Product } from "@/lib/shopify/types";
import CategorySelector from "./category-selector";
import ChainSelector from "./chain-selector";
import CharmSelector from "./charms";
import CharmPositionSelector from "./charm-position-selector";

export default function CharmBar({ charms, chains }: { charms: Product[]; chains: Product[] }) {
  const numberOfCharms = 5;

  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [selectedCategory, setSelectedCategory] = useState("bracelet");
  const [selectedCharmPosition, setSelectedCharmPosition] = useState<number>(2);
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
    <div className="flex flex-col items-center justify-between md:flex-row">
      <div className="h-screen w-1/2 bg-slate-300 p-10">
        {/* Info */}
        <div>Total Price: {totalPrice}</div>

        {/* Select Position */}
        <div>Selected Charm Position: {selectedCharmPosition}</div>
        <CharmPositionSelector
          selectedCharms={selectedCharms}
          selectedCharmPosition={selectedCharmPosition}
          onSelectPosition={setSelectedCharmPosition}
        />
      </div>

      <div className="flex h-screen w-1/2 flex-col gap-10 p-4">
        <h1 className="mx-auto text-center text-5xl font-bold">Charm Bar</h1>
        <div>
          <h2 className="font-bold">Step 1: Choose a category</h2>
          <CategorySelector selectedCategory={selectedCategory} onSelect={setSelectedCategory} />
        </div>
        <div>
          {/* Necklace for now */}
          <h2 className="font-bold">Step 2: Pick your chain</h2>
          <ChainSelector chains={chains} />
        </div>

        <div>
          <h2 className="font-bold">Step 3: Pick your charms</h2>
          <CharmSelector
            charms={charms}
            position={selectedCharmPosition}
            onSelect={handleCharmSelect}
          />
        </div>
      </div>
    </div>
  );
}
