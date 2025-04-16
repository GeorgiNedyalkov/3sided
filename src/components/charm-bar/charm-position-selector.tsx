// import { useEffect, useRef } from "react";

import { Product } from "@/lib/shopify/types";
import clsx from "clsx";
import Image from "next/image";

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
  // const charmAreaRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   function handleClickOutside(event: MouseEvent) {
  //     if (charmAreaRef.current && !charmAreaRef.current.contains(event.target as Node)) {
  //       onSelectPosition(-1);
  //     }
  //   }

  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [onSelectPosition]);

  return (
    <div>
      {selectedCharms.map((selectedCharm, index) =>
        selectedCharm ? (
          <div
            // ref={charmAreaRef}
            key={index}
            className="absolute h-20 w-20"
            style={{
              top: `${positionSettings[index]?.top}`,
              right: `${positionSettings[index]?.right}`,
              left: `${positionSettings[index]?.left}`,
              rotate: `${positionSettings[index]?.rotation}`,
            }}
          >
            <Image
              className={clsx(
                "absolute rounded-full",
                selectedCharmPosition == index ? "ring-1 ring-black/10" : ""
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
                "absolute h-16 w-16 rounded-full",
                selectedCharmPosition === index ? "bg-slate-950" : "bg-slate-400"
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
