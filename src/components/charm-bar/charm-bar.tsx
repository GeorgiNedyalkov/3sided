"use client";

import { useEffect, useState } from "react";
import CharmSelector from "@/components/charm-bar/charms";
import CharmCanvas from "@/components/charms/charm-canvas";
import { Product } from "@/lib/shopify/types";
import { AddAllToCartButton } from "../cart/add-to-cart";
import { categoryPositionSettings } from "@/lib/placeholder-data";
import { convertToEur, selectedMoreThanThreeCharms } from "@/lib/utils";

export default function CharmBar({ charms, chain }: { charms: Product[], chain: Product }) {
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [selectedCharmPosition, setSelectedCharmPosition] = useState<number>(0);

  const selectedChain = categoryPositionSettings.find((categoryChain) => categoryChain.handle === chain.handle) || categoryPositionSettings[0];

  const [selectedCharms, setSelectedCharms] = useState<Product[]>(
    new Array(selectedChain?.settings.length).fill(null)
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
    <div className="mb-20 flex flex-col justify-center md:flex-row gap-10">
      <div>
        <CharmCanvas
          chain={chain}
          selectedCharms={selectedCharms}
          selectedCharmPosition={selectedCharmPosition}
          onSelectPosition={setSelectedCharmPosition}
        />
        <div className="mb-10">
          Total Price:
          <span className="lg:ml-4 lg:text-2xl font-bold text-primary">{totalPrice}</span> лв./
          <span className="lg:text-2xl font-bold text-primary"> {convertToEur(totalPrice)} </span>€
        </div>
        <p className="text-lg">Choose a minimum of 3 charms</p>
        {
          selectedMoreThanThreeCharms(selectedCharms) && (
            <AddAllToCartButton items={[...selectedCharms, chain]} />
          )
        }
      </div>

      <div className="lg:max-w-[40vw] flex flex-col gap-10 w-full">
        <CharmSelector
          charms={charms}
          position={selectedCharmPosition}
          onSelect={handleCharmSelect}
        />
      </div>
    </div>
  );
}
