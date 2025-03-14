import Image from "next/image";

export default function CharmImages({
  onCharmSelect,
  position,
  charmImages,
}: {
  onCharmSelect: (src: string, position: number) => void;
  position: number;
  charmImages: string[];
}) {
  return (
    <div className="flex h-40 w-full gap-4 overflow-x-scroll p-4">
      {charmImages.map((src, index) => (
        <Image
          key={index}
          src={src}
          onClick={() => onCharmSelect(src, position)}
          width={100}
          height={100}
          className="cursor-pointer object-contain"
          alt={`Charm ${index + 1}`}
        />
      ))}
    </div>
  );
}
