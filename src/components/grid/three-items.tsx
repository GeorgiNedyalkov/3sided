import { getCollectionsProducts } from "@/lib";
import { Product } from "@/lib/shopify/types";
import Image from "next/image";
import Link from "next/link";

function ThreeGridItem({ item, size }: { item: Product; size: "full" | "half" }) {
  return (
    <div className={size === "full" ? "col-span-6 row-span-2" : "col-span-1 row-span-1"}>
      <Link href={`/charms/${item.handle}`} className="relative block aspect-square h-full w-full">
        <Image
          src={item.featuredImage.url}
          fill
          sizes={
            size === "full" ? "(min-width: 768px) 66vw, 100vw" : "(min-width: 768px) 33vw, 100vw"
          }
          alt={item.featuredImage?.altText}
        />
      </Link>
    </div>
  );
}

export default async function ThreeItemGrid() {
  const homepageItems = await getCollectionsProducts({
    collection: "Charms",
  });

  console.log(homepageItems);

  if (!homepageItems[0] || !homepageItems[1] || !homepageItems[2]) return null;

  const [firsItem, secondItem, thirdItem] = homepageItems;
  return (
    <div>
      <div>Three Grid Items</div>
      <div className="grid max-h-[calc(100vh-200px)] max-w-screen-2xl grid-cols-6 grid-rows-2">
        <ThreeGridItem item={firsItem} size="full" />
        <ThreeGridItem item={secondItem} size="half" />
        <ThreeGridItem item={thirdItem} size="half" />
      </div>
    </div>
  );
}
