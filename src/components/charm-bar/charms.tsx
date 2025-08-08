import { Product } from "@/lib/shopify/types";
import Image from "next/image";
import { useCharmBar } from "./charm-bar-context";

function Charm({ charm }: { charm: Product }) {
  const { selectedCharmPosition, handleCharmSelect } = useCharmBar();

  return (
    <li
      key={charm.id}
      className="relative cursor-pointer w-16 h-16 lg:w-20 lg:h-20"
      onClick={() => handleCharmSelect(charm, selectedCharmPosition)}
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

function CharmsList({ charms }: { charms: Product[] }) {
  return (
    <ul className="flex w-full max-h-[50vh] flex-wrap gap-4 overflow-y-scroll">
      {[...charms].map((charm) => (
        <Charm
          key={charm.id}
          charm={charm}
        />
      ))
      }
    </ul >
  )
}

function SizeTitle({ title }: { title: string }) {
  return <h3 className="font-semibold text-xl text-primary w-48 text-center rounded-md">{title}</h3>
}

export default function CharmSelector({ charms }: { charms: Product[] }) {
  const smallCharms = charms.filter((charm) => charm.tags.includes("small"))
  const mediumCharms = charms.filter((charm) => charm.tags.includes("medium"))
  const largeCharms = charms.filter((charm) => charm.tags.includes("large"))

  return (
    <>
      <SizeTitle title="Small Charms" />
      <CharmsList charms={smallCharms} />
      <SizeTitle title="Medium Charms" />
      <CharmsList charms={mediumCharms} />
      <SizeTitle title="Big Charms" />
      <CharmsList charms={largeCharms} />
    </>
  );
}


