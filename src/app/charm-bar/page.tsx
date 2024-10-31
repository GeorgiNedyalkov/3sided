"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import CharmImages from "@/components/charms/charm-images";

// These should come from our backend
const charmImages = [
  "/charm_1.png",
  "/charm_2.png",
  "/charm_3.png",
  "/charm_4.webp",
  "/charm_5.webp",
];

const necklaces = [
  {
    id: "1",
    src: "/necklace.webp",
    settings: [
      { top: "78%", left: "42%", rotation: "0deg" },
      { top: "62%", right: "16%", rotation: "-45deg" },
      { top: "62%", left: "18%", rotation: "45deg" },
      { top: "40%", right: "8%", rotation: "-45deg" },
      { top: "40%", left: "10%", rotation: "45deg" },
    ],
  },
  {
    id: "2",
    src: "/necklace2.png",
    settings: [
      { top: "80%", left: "42%", rotation: "0deg" },
      { top: "65%", right: "23%", rotation: "-45deg" },
      { top: "65%", left: "23%", rotation: "45deg" },
      { top: "45%", right: "15%", rotation: "-45deg" },
      { top: "45%", left: "15%", rotation: "45deg" },
    ],
  },
];

type CharmPosition = {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  rotation?: string;
};

type Necklace = {
  id: string;
  src: string;
  settings: CharmPosition[];
};

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
    <div className="grid mt-4 h-screen w-full grid-cols-2 grid-rows-7">
      <div className="col-start-2">
        <h1 className="text-3xl font-semibold mb-4">
          Create your own personalized bracelet
        </h1>
        <p className="w-[500px]">
          Select up to five charms to create your unique bracelet.
          <br />
          Click on the charms for each position to see how it looks like.
        </p>
      </div>
      <div className="col-start-2">
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
        <div key={i} className={`col-start-2 row-start-${i + 3}`}>
          <div>Choose Charm {i + 1}</div>
          <CharmImages
            charmImages={charmImages}
            onCharmSelect={handleCharmSelect}
            position={i + 1}
          />
        </div>
      ))}
      <div className="col-start-1 row-span-3 row-start-2">
        <CharmCanvas
          charmPositions={charmPositions}
          necklace={selectedNecklace}
        />
      </div>
    </div>
  );
}

function CharmCanvas({
  charmPositions,
  necklace,
}: {
  charmPositions: (string | null)[];
  necklace: Necklace;
}) {
  // Define positions and rotations for charms
  const charmSettings = [
    { top: "92%", left: "42%", rotation: "0deg" },
    { top: "75%", right: "16%", rotation: "-45deg" },
    { top: "75%", left: "19%", rotation: "45deg" },
    { top: "50%", right: "6%", rotation: "-45deg" },
    { top: "50%", left: "7%", rotation: "45deg" },
  ];

  return (
    <div className="relative mx-auto h-[500px] w-[500px]">
      <Image
        src={necklace.src}
        alt="Necklace background"
        className="absolute h-full w-full object-contain"
        fill
      />
      {charmPositions.map((src, index) =>
        src ? (
          <Image
            key={index}
            src={src}
            alt={`Charm ${index + 1}`}
            style={{
              position: "absolute",
              ...necklace.settings[index],
              transform: `rotate(${necklace.settings[index].rotation})`,
            }}
            className="h-20 w-20 object-cover"
            width={150}
            height={150}
          />
        ) : null
      )}
    </div>
  );
}
