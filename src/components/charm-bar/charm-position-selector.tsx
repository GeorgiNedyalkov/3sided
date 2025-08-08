"use client"

import clsx from "clsx";
import Image from "next/image";
import { Product } from "@/lib/shopify/types";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useCharmBar } from "./charm-bar-context";

export default function CharmPositionSelector({
  selectedCharms,
  positionSettings,
}: {
  selectedCharms: (Product | null)[];
  positionSettings: {
    top: string;
    right?: string;
    left?: string;
    rotation?: string;
  }[];
}) {
  const {
    selectedCharmPosition,
    handleSelectCharmPosition,
    handleCharmRemove,
    handleCharmSelect
  } = useCharmBar();

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
          // NOTE: Charm is selected
          <div>
            <div
              key={index}
              className={clsx("ring-black rounded-full absolute cursor-pointer hover:ring-slate-600",
                selectedCharmPosition === index ? "ring-1 ring-black" : "",
                {
                  "h-16 w-16": isSmall(selectedCharm),
                  "h-20 w-20": isMedium(selectedCharm),
                  "h-24 w-24": isLarge(selectedCharm),
                })}
              style={{
                top: `calc(${positionSettings[index]?.top} - ${getOffset(selectedCharm)}px)`,
                right: positionSettings[index].right ? `calc(${positionSettings[index]?.right} - ${getOffset(selectedCharm)}px)` : undefined,
                left: positionSettings[index].left ? `calc(${positionSettings[index]?.left} - ${getOffset(selectedCharm)}px)` : undefined,
              }}
            >
              {
                selectedCharmPosition === index && (
                  <XMarkIcon
                    onClick={() => handleCharmRemove(index)}
                    className="h-6 w-6 absolute -top-5 right-0 text-red-500" />
                )
              }
              <Image
                className="rounded-full"
                style={{
                  rotate: `${positionSettings[index]?.rotation}`,
                }}
                onClick={() => handleCharmSelect(selectedCharm, index)}
                src={selectedCharm.featuredImage.url}
                alt={selectedCharm.handle}
                fill
              />
            </div>
          </div>
        ) : (
          // NOTE: No charm is selected
          <div key={index}>
            <button
              onClick={() => handleSelectCharmPosition(index)}
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
