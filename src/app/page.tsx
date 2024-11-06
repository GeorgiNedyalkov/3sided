import Caroucel from "@/components/grid/caroucel";
import Link from "next/link";

// import CharmCard from "@/components/card";
// import { getProducts } from "@/lib";

export default async function Home() {
  // const products = await getProducts();

  return (
    <div className="m-4 flex h-screen flex-col items-center justify-center">
      <div className="flex flex-col gap-4">
        <p>We are currently under construction. Please check out our charm bar.</p>
        <Link href="/charm-bar">
          <button className="rounded-full bg-green-950 p-4 text-sm font-semibold uppercase text-yellow-100 hover:bg-green-700">
            Visit charm bar
          </button>
        </Link>
        <Caroucel />
      </div>

      {/* <Sidebar /> */}
      {/* <div className="w-full flex flex-wrap gap-32 m-20">
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
      </div> */}
    </div>
  );
}
