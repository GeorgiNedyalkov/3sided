// import CharmCard from "@/components/charms/charm-card";
// import Filters from "@/components/filters";
// import { getProducts } from "@/lib";
import Image from "next/image";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

export default async function ShopPage() {
  // const products = await getProducts();
  return (
    <div className="flex h-[40vh] w-full bg-slate-400 py-10">
      <div className="flex basis-1/2 flex-col gap-4 bg-transparent p-20">
        <h2 className="text-4xl">Title</h2>
        <p className="text-lg">
          Her extensive perceived may any sincerity extremity. Indeed add rather may pretty see.
        </p>
        <button className="flex w-32 items-center justify-between gap-4 text-lg">
          <a href="#">Shop now</a>
          <ChevronRightIcon className="h-4" />
        </button>
      </div>

      <div className="relative size-full basis-1/2">
        <Image className="object-cover" src="/villan.webp" fill alt="" />
      </div>
    </div>
    // <div className="lg:px-32">
    //   <Filters />

    //   <div className="grid grid-cols-2 gap-1 lg:grid-cols-4 lg:gap-4">
    //     {[...products, ...products].map((product, index) => (
    //       <div key={product.id + "-" + index}>
    //         <CharmCard
    //           description={product.description}
    //           imageSrc={product.images.edges[0].node.url}
    //           price={Number(product.priceRange.maxVariantPrice.amount)}
    //           label={product.handle}
    //           status="Sale"
    //         />
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
}
