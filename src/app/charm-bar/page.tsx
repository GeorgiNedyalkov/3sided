"use client";

import { useState } from "react";
import Image from "next/image";

const charmImages = [
  "/charm_1.png",
  "/charm_2.png",
  "/charm_3.png",
  "/charm_4.webp",
  "/charm_5.webp",
];

const backgroundImg = "/necklace.webp";

export default function CharmBar() {
  const [selectedCharm, setSelectedCharm] = useState<string | null>(null);
  const [selectedPosition, setSelectedPosition] = useState<number>(0);
  const [charmPositions, setCharmPositions] = useState(
    Array(charmImages.length).fill(null)
  );

  function handleCharmSelect(imageSrc: string) {
    setSelectedCharm(imageSrc);
  }

  function handlePositionSelect(event: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedPosition(parseInt(event.target.value, 10) - 1); // Convert to index
  }

  function updateCharmPosition() {
    if (selectedCharm && selectedPosition >= 0) {
      setCharmPositions((prevPositions) => {
        const newPositions = [...prevPositions];
        newPositions[selectedPosition] = selectedCharm;
        return newPositions;
      });
    }
  }

  return (
    <div className="w-[600px] mx-auto grid gap-4">
      <div className="text-center w-[500px] text-3xl font-semibold mb-4 mt-4">
        Choose a charm to add
      </div>
      <div className="flex w-[500px] justify-evenly mb-4">
        {charmImages.map((src, index) => (
          <Image
            key={index}
            src={src}
            onClick={() => handleCharmSelect(src)}
            width={100}
            height={100}
            className="cursor-pointer object-cover border-2"
            alt={`Charm ${index + 1}`}
          />
        ))}
      </div>
      <div className="mb-4">
        <label htmlFor="charmNumber" className="mr-2">
          Select which position to add it to
        </label>
        <select
          name="charmNumber"
          id="charmNumber"
          onChange={handlePositionSelect}
          className="bg-slate-200 w-12 h-12 m-2 p-2 rounded-xl"
        >
          {[...Array(5)].map((_, i) => (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
        <button
          onClick={updateCharmPosition}
          className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Place Charm
        </button>
      </div>
      <CharmCanvas
        charmPositions={charmPositions}
        backgroundImg={backgroundImg}
      />
    </div>
  );
}

function CharmCanvas({
  charmPositions,
  backgroundImg,
}: {
  charmPositions: (string | null)[];
  backgroundImg: string;
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
    <div className="relative w-[500px] h-[500px] mx-auto">
      <Image
        src={backgroundImg}
        alt="Necklace background"
        className="absolute w-full h-full object-contain"
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
              ...charmSettings[index],
              transform: `rotate(${charmSettings[index].rotation})`,
            }}
            className="w-20 h-20 object-cover"
            width={150}
            height={150}
          />
        ) : null
      )}
    </div>
  );
}
