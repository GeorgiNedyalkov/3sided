import Image from "next/image";
import { Necklace } from "@/lib/shopify/types";

export default function CharmCanvas({
  charmPositions,
  necklace,
}: {
  charmPositions: (string | null)[];
  necklace: Necklace;
}) {
  return (
    <div className="relative mx-auto h-[250px] w-[250px] lg:h-[500px] lg:w-[500px]">
      <Image
        src={necklace.src}
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
              ...necklace.settings[index],
              transform: `rotate(${necklace.settings[index].rotation})`,
            }}
            className="h-12 w-12 lg:h-20 lg:w-20 object-cover"
            width={150}
            height={150}
          />
        ) : null
      )}
    </div>
  );
}
