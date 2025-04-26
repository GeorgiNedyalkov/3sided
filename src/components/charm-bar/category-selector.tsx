import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";

export default function CategorySelector() {
  const categories = [
    {
      category: "bracelet",
      imageSrc: "/categories/bracelet.jpg",
    },
    {
      category: "necklace",
      imageSrc: "/categories/necklace.jpg",
    },
    {
      category: "keychain",
      imageSrc: "/categories/keychain.jpg",
    },
    {
      category: "bagchain",
      imageSrc: "/categories/bagchain.jpg",
    },
  ];

  return (
    <>
      <li className="flex gap-2 pb-20">
        {categories.map(({ category, imageSrc }) => (
          <Link
            key={category}
            href={`/charm-bar/${category}`}
            className="hover: rounded p-2 text-center font-bold"
          >
            <Image
              src={imageSrc}
              width={500}
              height={500}
              alt={`${category} main picture`}
              className="h-[500px] w-[500px] object-cover"
            />
            <p className="pt-2">{category.charAt(0).toUpperCase() + category.slice(1)}</p>
          </Link>
        ))}
      </li>
    </>
  );
}
