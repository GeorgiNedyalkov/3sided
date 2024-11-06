import CharmCard from "@/components/charms/charm-card";
import { getProducts } from "@/lib";

export default async function ShopPage() {
  const products = await getProducts();

  return (
    <div>
      <div className="flex flex-wrap gap-10 p-10">
        {[...products, ...products].map((product, index) => (
          <div key={product.id + "-" + index}>
            <CharmCard
              description={product.description}
              imageSrc={product.images.edges[0].node.url}
              price={Number(product.priceRange.maxVariantPrice.amount)}
              label={product.handle}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
