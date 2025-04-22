"use client";

import { useEffect, useState } from "react";
import { Product } from "@/lib/shopify/types";
import CategorySelector from "./category-selector";
import ChainSelector from "./chain-selector";
import CharmSelector from "./charms";
import CharmCanvas from "../charms/charm-canvas";
import { necklaces } from "@/lib/placeholder-data";

export default function CharmBar({ charms, chains }: { charms: Product[]; chains: Product[] }) {
  const numberOfCharms = 5;

  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [selectedCategory, setSelectedCategory] = useState("bracelet");
  const [selectedCharmPosition, setSelectedCharmPosition] = useState<number>(0);
  // Select a chain from a specific category

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
    <div>
      <div className="grid gap-2 md:py-5 lg:py-10">
        <h1 className="mx-auto text-center text-5xl font-bold">Charm Bar</h1>
        <p className="text-center">Create your own personalized jewlry as unique as you.</p>
      </div>
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div className="lg:fixed lg:h-screen lg:w-1/2 lg:p-10">
          <CharmCanvas
            selectedCharms={selectedCharms}
            selectedCharmPosition={selectedCharmPosition}
            onSelectPosition={setSelectedCharmPosition}
            chain={necklaces[1]}
          />

          <div className="mb-10">Total Price: {totalPrice}</div>
          <button className="text-mid w-32 bg-black p-2 text-center text-white">Add to cart</button>
        </div>

        <div className="flex h-screen w-full flex-col gap-10 lg:ml-[50vw] lg:w-1/2 lg:p-4">
          <div>
            <h2 className="font-bold">Step 1: Choose a category</h2>
            <CategorySelector selectedCategory={selectedCategory} onSelect={setSelectedCategory} />
          </div>
          <div>
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
    </div>
  );
}
