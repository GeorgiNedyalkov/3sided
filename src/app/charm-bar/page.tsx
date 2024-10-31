"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import CharmImages from "@/components/charms/charm-images";
import CharmCanvas from "@/components/charms/charm-canvas";
import { necklaces, charmImages } from "@/lib/placeholder-data";
import { Necklace } from "@/lib/definitions";

export default function CharmBar() {
  const [selectedNecklace, setSelectedNecklace] = useState<Necklace>(
    necklaces[0]
  );
  const [selectedCharm, setSelectedCharm] = useState<string | null>(null);
  const [selectedPosition, setSelectedPosition] = useState<number>(0);
  const [charmPositions, setCharmPositions] = useState(
    Array(charmImages.length).fill(null)
  );

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
    <div className="grid mt-4 h-screen w-full lg:grid-cols-2 lg:grid-rows-7">
      <div className="lg:col-start-2">
        <h1 className="text-3xl font-semibold mb-4">
          Create your own personalized bracelet
        </h1>
        <p className="w-[500px]">
          Select up to five charms to create your unique bracelet.
          <br />
          Click on the charms for each position to see how it looks like.
        </p>
      </div>
      <div className="lg:col-start-2">
        <div>Choose a bracelet</div>
        <div className="flex gap-4">
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
          <div>Choose Charm {i + 1}</div>
          <CharmImages
            charmImages={charmImages}
            onCharmSelect={handleCharmSelect}
            position={i + 1}
          />
        </div>
      ))}
      <div className="lg:col-start-1 lg:row-span-3 lg:row-start-2">
        <CharmCanvas
          charmPositions={charmPositions}
          necklace={selectedNecklace}
        />
      </div>
    </div>
  );
}
