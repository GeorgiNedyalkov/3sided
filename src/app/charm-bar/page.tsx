"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import CharmImages from "@/components/charms/charm-images";
import CharmCanvas from "@/components/charms/charm-canvas";
import { necklaces, charmImages } from "@/lib/placeholder-data";
import { Necklace } from "@/lib/shopify/types";

export default function CharmBar() {
  const [selectedNecklace, setSelectedNecklace] = useState<Necklace>(necklaces[0]);
  const [selectedCharm, setSelectedCharm] = useState<string | null>(null);
  const [selectedPosition, setSelectedPosition] = useState<number>(0);
  const [charmPositions, setCharmPositions] = useState(Array(charmImages.length).fill(null));

  function handleNeckalceSelect(necklace: Necklace) {
    setSelectedNecklace(necklace);
  }

  function handleCharmSelect(imageSrc: string, position: number) {
    setSelectedCharm(imageSrc);
    setSelectedPosition(position - 1); // Adjust index to match array position
  }

  useEffect(() => {
    if (selectedCharm && selectedPosition >= 0) {
      setCharmPositions((prevPositions) => {
        const newPositions = [...prevPositions];
        newPositions[selectedPosition] = selectedCharm;
        return newPositions;
      });
    }
  }, [selectedCharm, selectedPosition]);

  return (
    <div className="m-4 md:m-20 lg:grid-cols-2">
      <div className="mb-4">
        <h1 className="mb-4 text-2xl font-semibold md:text-3xl">
          Create your own personalized bracelet
        </h1>
        <p className="max-w-[500px] text-sm md:text-base">
          Select up to five charms to create your unique bracelet.
          <br />
          Click on the charms for each position to see how it looks like.
        </p>
      </div>
      <div className="grid w-full gap-4 lg:grid-cols-2">
        <div className="row-start-1 lg:col-start-1 lg:row-span-3 lg:row-start-2">
          <CharmCanvas charmPositions={charmPositions} necklace={selectedNecklace} />
        </div>
        <div className="lg:col-start-2">
          <div className="mb-4 rounded-md bg-slate-100 p-2 font-medium">Choose a bracelet</div>
          <div className="flex w-full gap-4 overflow-y-auto p-4">
            {necklaces.map((necklace, index) => (
              <Image
                key={necklace.id}
                src={necklace.src}
                onClick={() => handleNeckalceSelect(necklace)}
                width={100}
                height={100}
                className="cursor-pointer object-cover"
                alt={`Charm ${index + 1}`}
              />
            ))}
          </div>
        </div>
        {[...Array(5)].map((_, i) => (
          <div key={i} className={`lg:col-start-2 lg:row-start-${i + 3}`}>
            <div className="rounded-md bg-slate-100 p-2 font-medium">
              {i == 0 ? "Choose Central Charm" : `Choose Charm ${i + 1}`}
            </div>
            <CharmImages
              charmImages={charmImages}
              onCharmSelect={handleCharmSelect}
              position={i + 1}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
