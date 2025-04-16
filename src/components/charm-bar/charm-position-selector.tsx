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
  return (
    <div>
      {selectedCharms.map((selectedCharm, index) =>
        selectedCharm ? (
          <div
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
                selectedCharmPosition == index ? "ring-2 ring-black" : ""
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
