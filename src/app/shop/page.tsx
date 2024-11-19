import CharmCard from "@/components/charms/charm-card";
import Filters from "@/components/filters";
import { getProducts } from "@/lib";

export default async function ShopPage() {
  const products = await getProducts();

  return (
    <div className="lg:px-32">
      <Filters />
      <div className="grid grid-cols-2 gap-1 lg:grid-cols-4 lg:gap-4">
        {[...products, ...products].map((product, index) => (
          <div key={product.id + "-" + index}>
            <CharmCard
              description={product.description}
              imageSrc={product.images.edges[0].node.url}
              price={Number(product.priceRange.maxVariantPrice.amount)}
              label={product.handle}
              status="Sale"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
