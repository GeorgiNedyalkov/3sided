import Image from "next/image";
import Link from "next/link";
import { charms } from "@/lib/placeholder-data";

export default function OtherProducts({ category }: { category: string }) {
  const filteredCharms = charms.filter((charm) => charm.category == category);

  return (
    <div className="bg-gray-200">
      <h4 className="text-3xl font-semibold pt-20 px-20 pb-10">
        Other Products
      </h4>
      <ul className="grid grid-cols-5 grid-rows-1 gap-5 p-4">
        {[...filteredCharms, ...filteredCharms, filteredCharms[0]].map(
          (charm) => (
            <Link href={`/charms/${charm.label}`} key={charm.id}>
              <li className="bg-white">
                <Image
                  src={charm.imageSrc}
                  alt={charm.description}
                  width={400}
                  height={400}
                />
                <div className="p-4">
                  <div>{charm.description}</div>
                  <span className="font-semibold text-xl">{charm?.price}</span>
                  <span className="text-lg"> лв.</span>
                </div>
              </li>
            </Link>
          )
        )}
      </ul>
    </div>
  );
}
