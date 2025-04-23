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
    <ul className="grid grid-cols-3 gap-2 md:grid-cols-5">
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
