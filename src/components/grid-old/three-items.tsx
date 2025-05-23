import { getCollectionProducts } from "@/lib/shopify";
import { Product } from "@/lib/shopify/types";
import Image from "next/image";
import Link from "next/link";

function ThreeGridItem({ item, size }: { item: Product; size: "full" | "half" }) {
  return (
    <div className={size === "full" ? "col-span-4 row-span-2" : "col-span-2 row-span-1"}>
      <Link href={`/charms/${item.handle}`} className="relative block aspect-square h-full w-full">
        <Image
          src={item.featuredImage.url}
          fill
          className="object-cover"
          alt={item.featuredImage?.altText}
        />
      </Link>
    </div>
  );
}

export default async function ThreeItemGrid() {
  const homepageItems = await getCollectionProducts({
    collection: "Charms",
  });

  if (!homepageItems[0] || !homepageItems[1] || !homepageItems[2]) return null;

  const [firstItem, secondItem, thirdItem] = homepageItems;

  return (
    <section>
      <div className="mx-auto grid max-w-screen-2xl grid-cols-6 grid-rows-2 lg:max-h-[calc(100vh-200px)]">
        <ThreeGridItem item={thirdItem} size="full" />
        <ThreeGridItem item={secondItem} size="half" />
        <ThreeGridItem item={firstItem} size="half" />
      </div>
    </section>
  );
}
