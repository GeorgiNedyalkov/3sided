import CharmCard from "@/components/card";
import Sidebar from "@/components/sidebar";
import { charms } from "@/lib/placeholder-data";

export default function Home() {
  return (
    <div className="pt-20 bg-gray-300 w-full h-screen flex">
      <Sidebar />
      <div className="text-center w-full pt-10 pl-10 grid grid-cols-4">
        {charms.map((charm) => (
          <div key={charm.id}>
            <CharmCard
              label={charm.label}
              price={charm.price}
              imageSrc={charm.imageSrc}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
