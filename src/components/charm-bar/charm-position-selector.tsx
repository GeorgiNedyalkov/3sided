"use client"

import { useRef } from "react";

import { Product } from "@/lib/shopify/types";
import clsx from "clsx";
import Image from "next/image";
import html2canvas from "html2canvas";

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


  const isMedium = (charm: Product) => charm.tags.includes("size:medium");
  const isLarge = (charm: Product) => charm.tags.includes("size:large");

  const ref = useRef<HTMLDivElement>(null);

  async function handleScreenshot() {
    console.log("clicked")
    if (!ref.current) return;

    const canvas = await html2canvas(ref.current);
    const dataURL = canvas.toDataURL("image/png")


    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "layered-image.png";
    link.click();
  }

  return (
    <div ref={ref}>
      {selectedCharms.map((selectedCharm, index) =>
        selectedCharm ? (
          <div
            key={index}
            className={clsx("absolute h-16 w-16",
              {
                "h-20 w-20": isMedium(selectedCharm),
                "h-24 w-24": isLarge(selectedCharm),
              })}
            style={{
              top: `${positionSettings[index]?.top}`,
              right: `${positionSettings[index]?.right}`,
              left: `${positionSettings[index]?.left}`,
              rotate: `${positionSettings[index]?.rotation}`,
            }}
          >
            <Image
              className={clsx("absolute rounded-full",
                {
                  "ring-1 ring-black/10": selectedCharmPosition == index
                }
              )}
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
                "absolute h-8 w-8 rounded-full ring-1 md:h-16 md:w-16",
                selectedCharmPosition === index ? "ring-black" : "ring-stone-200"
              )}
              style={{
                top: `${positionSettings[index]?.top}`,
                right: `${positionSettings[index]?.right}`,
                left: `${positionSettings[index]?.left}`,
                rotate: `${positionSettings[index]?.rotation}`,
              }}
            />
          </div>
        )
      )}
    </div>
  );
}
