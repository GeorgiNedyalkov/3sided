import { Necklace } from "@/lib/definitions";
import Image from "next/image";

export default function CharmCanvas({
  charmPositions,
  necklace,
}: {
  charmPositions: (string | null)[];
  necklace: Necklace;
}) {
  return (
    <div className="relative mx-auto h-[500px] w-[500px]">
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
            className="h-20 w-20 object-cover"
            width={150}
            height={150}
          />
        ) : null
      )}
    </div>
  );
}
