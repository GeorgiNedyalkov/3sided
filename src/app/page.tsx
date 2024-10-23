import CharmCard from "@/components/card";
import Sidebar from "@/components/sidebar";
import { charms } from "@/lib/placeholder-data";

export default async function Home() {
  return (
    <div className="pt-20 bg-white w-full flex">
      <Sidebar />
      <div className="w-full flex flex-wrap gap-32 m-20">
        {[...charms, ...charms].map((charm, index) => (
          <div key={index}>
            <CharmCard {...charm} />
          </div>
        ))}
      </div>
    </div>
  );
}
