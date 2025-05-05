import Image from "next/image";
import { Necklace, Product } from "@/lib/shopify/types";
import CharmPositionSelector from "../charm-bar/charm-position-selector";

const settings = [
  { top: "78%", left: "42%", rotation: "0deg" },
  { top: "62%", right: "18%", rotation: "-45deg" },
  { top: "62%", left: "18%", rotation: "45deg" },
  { top: "40%", right: "8%", rotation: "-45deg" },
  { top: "40%", left: "10%", rotation: "45deg" },
];

export default function CharmCanvas({
  selectedCharms,
  selectedCharmPosition,
  onSelectPosition,
  chain,
}: {
  selectedCharms: Product[];
  selectedCharmPosition: number;
  onSelectPosition(index: number): void;
  chain: Necklace;
}) {
  return (
    <div className="relative mx-auto h-[250px] w-[90vw] lg:h-[70vh] lg:w-[500px]">
      <Image
        src={chain.src}
        alt="Selected chain on the charm bar"
        className="absolute h-full w-full object-contain"
        fill
        priority
      />

      <CharmPositionSelector
        positionSettings={settings}
        selectedCharms={selectedCharms}
        selectedCharmPosition={selectedCharmPosition}
        onSelectPosition={onSelectPosition}
      />
    </div>
  );
}
