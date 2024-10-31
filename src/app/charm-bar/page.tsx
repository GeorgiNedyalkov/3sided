"use client";

import { useState, useEffect } from "react";
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
      <div className="col-start-2 row-start-1">
        <h1 className="text-3xl font-semibold mb-4">
          Create your own personalized bracelet
        </h1>
        <p className="w-[500px]">
          Select up to five charms to create your unique bracelet.
          <br />
          Click on the charms for each position to see how it looks like.
        </p>
      </div>
      {[...Array(5)].map((_, i) => (
        <div key={i} className={`col-start-2 row-start-${i + 2}`}>
          <div>Choose Charm {i + 1}</div>
          <CharmImages onCharmSelect={handleCharmSelect} position={i + 1} />
        </div>
      ))}
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
          className="cursor-pointer object-cover"
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
