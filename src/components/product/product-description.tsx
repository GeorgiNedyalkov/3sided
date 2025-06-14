import { Product } from "@/lib/shopify/types";
import { LinkButton } from "@/components/buttons"
import { AddToCartButton } from "@/components/add-to-cart-button";

export default async function ProductDescription({ charm }: { charm: Product }) {
  return (
    <div className="px-2 pt-20 sm:w-3/4">
      <h1 className="mb-4 text-6xl font-semibold">Precious Charm</h1>
      <div className="mb-2 text-lg text-gray-600 lg:mb-10">{charm?.description}</div>
      <div className="flex gap-10 border max-w-96 pt-4 pl-4 pb-10 mb-10 bg-neutral-50">
        <div className="text-base flex flex-col">
          <p>Цена</p>
          <p>
            <span className="text-3xl font-semibold">{charm?.priceRange?.maxVariantPrice?.amount}</span>
            <span className="text-lg"> лв.</span>
          </p>
        </div>
        <div>
          <div className="text-base">Размер (Small) </div>
          <p>
            <span className="text-3xl font-semibold">9</span>
            <span className="text-lg"> mm.</span>
          </p>
        </div>
      </div>
      <div className="flex items-end gap-4">
        <LinkButton href="/charm-bar">Go to Charm Bar</LinkButton>
      </div>



      <AddToCartButton product={charm} />
    </div>
  );
}
