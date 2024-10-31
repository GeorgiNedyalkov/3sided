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
    <div className="flex w-full gap-4 p-4 overflow-x-scroll lg:overflow-hidden">
      {charmImages.map((src, index) => (
        <Image
          key={index}
          src={src}
          onClick={() => onCharmSelect(src, position)}
          width={100}
          height={100}
          className="cursor-pointer object-cover"
          alt={`Charm ${index + 1}`}
        />
      ))}
    </div>
  );
}
