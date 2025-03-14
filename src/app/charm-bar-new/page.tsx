"use client";
import { clsx } from "clsx";
import { useState } from "react";
import { Charm } from "@/lib/shopify/types";
import { charms } from "@/lib/placeholder-data";
import Image from "next/image";

export default function Page() {
  const [selectedCharms, setSelectedCharms] = useState<Charm[]>([]);
  const [selectedCharm, setSelectedCharm] = useState(3);
  const [totalPrice, setTotalPrice] = useState(0);

  function handleCharmSelect(charm: Charm, position: number) {
    const newSelectedCharms = [...selectedCharms];
    newSelectedCharms[position] = charm;
    setSelectedCharms(newSelectedCharms);

    setTotalPrice((prevPrice) => (prevPrice += charm.price));
  }

  console.log(selectedCharms);

  return (
    <div className="m-10 flex flex-col gap-10">
      {/* Info */}
      <div>
        Selected charms:
        {selectedCharms.length != 0 &&
          selectedCharms.map((charm) => (
            <div key={charm.id}>
              <Image
                src={charm.imageSrc}
                // onClick={() => onCharmSelect(src, position)}
                onClick={() => handleCharmSelect(charm, selectedCharm)}
                width={80}
                height={80}
                className="cursor-pointer object-contain"
                alt={`Charm ${1}`}
              />
            </div>
          ))}
      </div>

      <div>Total Price: {totalPrice}</div>

      {/* Select Position */}
      <div>Selected Charm Position: {selectedCharm}</div>
      <div className="flex gap-10">
        {[1, 2, 3, 4, 5].map((position) => (
          <button
            key={position}
            onClick={() => setSelectedCharm(position)}
            className={clsx("h-10 w-10 rounded-full bg-slate-200", {
              "bg-slate-900": position == selectedCharm,
            })}
          />
        ))}
      </div>

      {/* Charms */}
      <div className="flex gap-10">
        {charms.map((charm) => (
          <div key={charm.id}>
            <Image
              src={charm.imageSrc}
              // onClick={() => onCharmSelect(src, position)}
              onClick={() => handleCharmSelect(charm, selectedCharm)}
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
