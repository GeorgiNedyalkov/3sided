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
    <ul className="flex flex-wrap gap-4">
      {charms.map((charm) => (
        <li key={charm.handle} onClick={() => onSelect(charm, position)}>
          <h4>{charm.title}</h4>
          <div className="relative h-20 w-20 cursor-pointer">
            <Image
              src={charm.featuredImage.url}
              alt={charm.title}
              className="h-full w-full object-cover"
              fill
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
