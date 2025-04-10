import Image from "next/image";
import { Necklace } from "@/lib/shopify/types";
import { chainSettings } from "@/lib/placeholder-data";

export default function CharmCanvas({
  charmPositions,
  chain,
}: {
  charmPositions: (string | null)[];
  chain: Necklace;
}) {
  return (
    <div className="relative mx-auto h-[250px] w-[250px] lg:h-[500px] lg:w-[500px]">
      <Image
        src={chain.src}
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
              ...chainSettings[index],
              transform: `rotate(${chain.settings[index].rotation})`,
            }}
            className="h-12 w-12 object-cover lg:h-20 lg:w-20"
            width={150}
            height={150}
          />
        ) : null
      )}
    </div>
  );
}
