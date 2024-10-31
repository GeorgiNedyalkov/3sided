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

const backgroundImg = "/necklace.png";

export default function CharmBar() {
  const [selectedCharm, setSelectedCharm] = useState<string | null>(null);
  const [selectedPosition, setSelectedPosition] = useState<number>(0);
  const [charmPositions, setCharmPositions] = useState(
    Array(charmImages.length).fill(null)
  );

  function handleCharmSelect(imageSrc: string, position: number) {
    setSelectedCharm(imageSrc);
    updateSpecificCharmPosition(position);
  }

  function handlePositionSelect(event: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedPosition(parseInt(event.target.value, 10) - 1); // Convert to index
  }

  function updateSpecificCharmPosition(position: number) {
    if (selectedCharm && position >= 0) {
      setCharmPositions((prevPositions) => {
        const newPositions = [...prevPositions];
        newPositions[position - 1] = selectedCharm;
        return newPositions;
      });
    }
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
    <div className="mt-20 grid h-screen w-full grid-cols-2 grid-rows-5 gap-4">
      <div className="col-start-2 row-start-1">
        <div className="m-5 mb-4 flex w-[500px] text-center text-3xl font-semibold">
          Choose a charm to add
        </div>
        <div>
          <label htmlFor="charmNumber" className="mr-2">
            Select which position to add it to
          </label>
          <select
            name="charmNumber"
            id="charmNumber"
            onChange={handlePositionSelect}
            className="m-2 h-12 w-12 rounded-xl bg-slate-200 p-2"
          >
            {[...Array(5)].map((_, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          <button
            onClick={updateCharmPosition}
            className="ml-2 rounded bg-blue-500 px-4 py-2 text-white"
          >
            Place Charm
          </button>
        </div>
      </div>
      <div className="col-start-2 row-start-2">
        <div>Choose First Charm</div>
        <CharmImages onCharmSelect={handleCharmSelect} position={1} />
      </div>
      <div className="col-start-2 row-start-3">
        <div>Choose First Charm</div>
        <CharmImages onCharmSelect={handleCharmSelect} position={2} />
      </div>
      <div className="col-start-2 row-start-4">
        <div>Choose First Charm</div>
        <CharmImages onCharmSelect={handleCharmSelect} position={3} />
      </div>
      <div className="col-start-2 row-start-5">
        <div>Choose First Charm</div>
        <CharmImages onCharmSelect={handleCharmSelect} position={4} />
      </div>
      <div className="col-start-2 row-start-6">
        <div>Choose First Charm</div>
        <CharmImages onCharmSelect={handleCharmSelect} position={5} />
      </div>
      <div className="col-start-1 row-span-3 row-start-2">
        <CharmCanvas
          charmPositions={charmPositions}
          backgroundImg={backgroundImg}
        />
      </div>
    </div>
  );
}

function CharmImages({
  onCharmSelect,
  position,
}: {
  onCharmSelect: (src: string, position: number) => void;
  position: number;
}) {
  return (
    <div className="flex w-[500px] justify-evenly gap-4">
      {charmImages.map((src, index) => (
        <Image
          key={index}
          src={src}
          onClick={() => onCharmSelect(src, position)}
          width={100}
          height={100}
          className="cursor-pointer border-2 object-cover"
          alt={`Charm ${index + 1}`}
        />
      ))}
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
    <div className="relative mx-auto h-[500px] w-[500px]">
      <Image
        src={backgroundImg}
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
              ...charmSettings[index],
              transform: `rotate(${charmSettings[index].rotation})`,
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
