"use client";
import { clsx } from "clsx";
import { useState } from "react";
import { Charm } from "@/lib/shopify/types";
import { charms } from "@/lib/placeholder-data";
import Image from "next/image";

export default function Page() {
  const numberOfCharms = 5;

  const [selectedCharms, setSelectedCharms] = useState<Charm[]>(
    new Array(numberOfCharms).fill(null)
  );

  const [selectedCharmPosition, setSelectedCharmPosition] = useState<number>(2);

  const [totalPrice, setTotalPrice] = useState<number>(0);

  function handleSelectCharmPosition(position: number) {
    setSelectedCharmPosition(position);
  }

  function handleCharmSelect(charm: Charm, position: number) {
    const newSelectedCharms = [...selectedCharms];
    newSelectedCharms[position] = charm;
    setSelectedCharms(newSelectedCharms);

    // Fix the price
    setTotalPrice((prevPrice) => (prevPrice += charm.price));
    console.log(selectedCharms);
  }

  return (
    <div className="m-10 flex flex-col gap-10">
      {/* Info */}
      <div>Total Price: {totalPrice}</div>

      {/* Select Position */}
      <div>Selected Charm Position: {selectedCharmPosition}</div>
      <div className="flex gap-8">
        {selectedCharms.map((selectedCharm, index) =>
          selectedCharm ? (
            <div key={index}>
              <Image
                className={clsx(
                  "rounded-full",
                  selectedCharmPosition == index ? "bg-slate-950" : ""
                )}
                onClick={() => handleSelectCharmPosition(index)}
                src={selectedCharm.imageSrc}
                alt={selectedCharm.label}
                width={80}
                height={80}
              />
            </div>
          ) : (
            <div key={index}>
              <button
                onClick={() => handleSelectCharmPosition(index)}
                className={clsx(
                  "h-12 w-12 rounded-full",
                  selectedCharmPosition === index ? "bg-slate-950" : "bg-slate-400"
                )}
              />
            </div>
          )
        )}
      </div>

      {/* Charms */}
      <div className="flex gap-10">
        {charms.map((charm) => (
          <div key={charm.id}>
            <Image
              src={charm.imageSrc}
              onClick={() => handleCharmSelect(charm, selectedCharmPosition)}
              width={80}
              height={80}
              className="cursor-pointer object-contain"
              alt={`Charm ${1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
