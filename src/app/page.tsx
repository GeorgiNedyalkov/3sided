import Link from "next/link";

// import CharmCard from "@/components/card";
// import { getProducts } from "@/lib";

export default async function Home() {
  // const products = await getProducts();

  return (
    <div className="h-screen m-4 flex items-center justify-center">
      <div className="flex flex-col gap-4">
        <p>
          We are currently under construction. Please check out our charm bar.
        </p>
        <Link href="/charm-bar">
          <button className="bg-green-950 hover:bg-green-700 text-yellow-100 font-semibold text-sm uppercase p-4 rounded-full">
            Visit charm bar
          </button>
        </Link>
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
