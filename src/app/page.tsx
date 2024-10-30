import CharmCard from "@/components/card";
import { getProducts } from "@/lib";

export default async function Home() {
  const products = await getProducts();
  console.log(products);

  return (
    <div className="pt-20 bg-white w-full flex">
      {/* <Sidebar /> */}
      <div className="w-full flex flex-wrap gap-32 m-20">
        {products.map((charm, index) => (
          <div key={index}>
            <CharmCard
              label={charm.handle}
              description={charm.description}
              imageSrc="/jewel_1.jpg"
              price={charm.priceRange.maxVariantPrice.amount}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
