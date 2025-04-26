import { Product } from "@/lib/shopify/types";
import Image from "next/image";

export default function CharmSelector({
  charms,
  position,
  onSelect,
}: {
  charms: Product[];
  position: number;
  onSelect(charm: Product, position: number): void;
}) {
  return (
    <ul className="flex max-w-96 flex-wrap gap-4">
      {[...charms].map((charm, index) => (
        <li
          key={index}
          className="relative h-16 w-16 cursor-pointer lg:h-20 lg:w-20"
          onClick={() => onSelect(charm, position)}
        >
          <Image
            src={charm.featuredImage.url}
            alt={charm.title}
            className="h-full w-full object-cover"
            fill
          />
        </li>
      ))}
    </ul>
  );
}
