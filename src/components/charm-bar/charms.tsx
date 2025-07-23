import { Product } from "@/lib/shopify/types";
import Image from "next/image";

function Charm({
  charm,
  position,
  onSelect,
}: {
  charm: Product;
  position: number;
  onSelect(charm: Product, position: number): void;
}) {
  return (
    <li
      key={charm.id}
      className="relative cursor-pointer w-16 h-16 lg:w-20 lg:h-20"
      onClick={() => onSelect(charm, position)}
    >
      <Image
        src={charm.featuredImage.url}
        alt={charm.title}
        className="object-cover"
        fill
        sizes="80px"
      />
    </li>

  )
}

function CharmsList({
  charms,
  position,
  onSelect,
}: {
  charms: Product[];
  position: number;
  onSelect(charm: Product, position: number): void;
}) {
  return (
    <ul className="flex w-full max-h-[50vh] flex-wrap gap-4 overflow-y-scroll">
      {[...charms].map((charm) => (
        <Charm
          key={charm.id}
          charm={charm}
          position={position}
          onSelect={onSelect}
        />
      ))
      }
    </ul >
  )
}

function SizeTitle({ title }: { title: string }) {
  return <h3 className="font-semibold text-xl text-primary w-48 text-center rounded-md">{title}</h3>
}

export default function CharmSelector({
  charms,
  position,
  onSelect,
}: {
  charms: Product[];
  position: number;
  onSelect(charm: Product, position: number): void;
}) {

  const smallCharms = charms.filter((charm) => charm.tags.includes("small"))
  const mediumCharms = charms.filter((charm) => charm.tags.includes("medium"))
  const largeCharms = charms.filter((charm) => charm.tags.includes("large"))

  return (
    <>
      <SizeTitle title="Small Charms" />
      <CharmsList charms={smallCharms} position={position} onSelect={onSelect} />
      <SizeTitle title="Medium Charms" />
      <CharmsList charms={mediumCharms} position={position} onSelect={onSelect} />
      <SizeTitle title="Big Charms" />
      <CharmsList charms={largeCharms} position={position} onSelect={onSelect} />
    </>
  );
}


