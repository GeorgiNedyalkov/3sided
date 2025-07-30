"use client"

import clsx from "clsx";
import Image from "next/image";
import { Product } from "@/lib/shopify/types";

export default function CharmPositionSelector({
  selectedCharms,
  selectedCharmPosition,
  onSelectPosition,
  positionSettings,
}: {
  selectedCharms: Product[];
  selectedCharmPosition: number;
  onSelectPosition(index: number): void;
  positionSettings: {
    top: string;
    right?: string;
    left?: string;
    rotation?: string;
  }[];
}) {

  const isSmall = (charm: Product) => charm.tags.includes("small");
  const isMedium = (charm: Product) => charm.tags.includes("medium");
  const isLarge = (charm: Product) => charm.tags.includes("large");

  const getOffset = (charm: Product) => {
    if (isLarge(charm)) return 12;
    if (isMedium(charm)) return 10;
    return 8;
  };

  return (
    <div>
      {selectedCharms.map((selectedCharm, index) =>
        selectedCharm ? (
          <div
            key={index}
            className={clsx("ring-black rounded-full absolute cursor-pointer hover:ring-slate-600",
              selectedCharmPosition === index ? "ring-1 ring-black" : "", // add ring-1 to if not selected for testing
              {
                "h-16 w-16": isSmall(selectedCharm),
                "h-20 w-20": isMedium(selectedCharm),
                "h-24 w-24": isLarge(selectedCharm),
              })}
            style={{
              top: `calc(${positionSettings[index]?.top} - ${getOffset(selectedCharm)}px)`,
              right: positionSettings[index].right ? `calc(${positionSettings[index]?.right} - ${getOffset(selectedCharm)}px)` : undefined,
              left: positionSettings[index].left ? `calc(${positionSettings[index]?.left} - ${getOffset(selectedCharm)}px)` : undefined,
              rotate: `${positionSettings[index]?.rotation}`,
            }}
          >
            <Image
              className="rounded-full"
              onClick={() => onSelectPosition(index)}
              src={selectedCharm.featuredImage.url}
              alt={selectedCharm.handle}
              fill
            />
          </div>
        ) : (
          <div key={index}>
            <button
              onClick={() => onSelectPosition(index)}
              className={clsx(
                "absolute h-8 w-8 rounded-full ring-1",
                selectedCharmPosition === index ? "ring-black" : "ring-stone-200"
              )}
              style={{
                top: `${positionSettings[index]?.top}`,
                right: `${positionSettings[index]?.right}`,
                left: `${positionSettings[index]?.left}`,
                rotate: `${positionSettings[index]?.rotation}`,
              }}
            >
              {index}
            </button>
          </div>
        )
      )
      }
    </div >
  );
}
