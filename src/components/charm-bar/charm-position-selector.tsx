import { Product } from "@/lib/shopify/types";
import clsx from "clsx";
import Image from "next/image";

export default function CharmPositionSelector({
  selectedCharms,
  selectedCharmPosition,
  onSelectPosition,
}: {
  selectedCharms: Product[];
  selectedCharmPosition: number;
  onSelectPosition(index: number): void;
}) {
  return (
    <div className="flex gap-8">
      {selectedCharms.map((selectedCharm, index) =>
        selectedCharm ? (
          <div key={index}>
            <Image
              className={clsx("rounded-full", selectedCharmPosition == index ? "bg-slate-950" : "")}
              onClick={() => onSelectPosition(selectedCharmPosition)}
              src={selectedCharm.featuredImage.url}
              alt={selectedCharm.handle}
              width={100}
              height={100}
            />
          </div>
        ) : (
          <div key={index}>
            <button
              onClick={() => onSelectPosition(index)}
              className={clsx(
                "h-12 w-12 rounded-full",
                selectedCharmPosition === index ? "bg-slate-950" : "bg-slate-400"
              )}
            />
          </div>
        )
      )}
    </div>
  );
}
