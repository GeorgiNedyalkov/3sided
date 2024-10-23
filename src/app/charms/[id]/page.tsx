"use client";
import Image from "next/image";
import { useState } from "react";
import { useParams } from "next/navigation";
import { charms } from "@/lib/placeholder-data";
import AddToCartButton from "@/components/add-to-cart";

function getCharmByLabel(label: string | string[]) {
  return charms.find((charm) => `${charm.label}` == label);
}

export default function CharmPage() {
  const [quantity, setQuantity] = useState(1);
  const params = useParams();

  const charmLabel = params?.id;
  const charm = getCharmByLabel(charmLabel);

  function increaseQuantity() {
    setQuantity((prevQuantity) => prevQuantity + 1);
  }

  function decreaseQuantity() {
    setQuantity((prevQuantity) => prevQuantity - 1);
  }

  return (
    <div className="w-full pt-20 grid grid-cols-2">
      {/* col 1 */}
      <div>
        <div className="h-[500px] w-full relative">
          <Image
            src={charm?.imageSrc || ""}
            alt={charm?.label || ""}
            fill
            className="object-contain"
          />
        </div>

        {/* images of this product */}
        <ul className="flex items-center justify-center gap-5">
          {charms.map((charm) => (
            <li key={charm.id} className="border rounded-lg">
              <Image
                src={charm.imageSrc}
                width={150}
                height={150}
                alt=""
                className="rounded-lg hover:scale-110 duration-300 cursor-pointer"
              />
            </li>
          ))}
        </ul>
      </div>

      {/* col 2 */}
      <div className="w-3/4 pt-20">
        <h1 className="text-5xl font-semibold mb-4">Precious Charm</h1>
        <div className="text-gray-600">{charm?.number}</div>
        <div className="mb-2 text-gray-600">{charm?.description}</div>
        <div className="bg-gray-200 p-4">
          <div className="text-base">Цена</div>
          <span className="font-semibold text-3xl">{charm?.price}</span>
          <span className="text-lg"> лв.</span>
          <div className="border border-gray-100 my-5" />
          {/* Quantity Buy button */}
          <div className="flex gap-4 items-end">
            <div>
              <div className="mb-4">Количество:</div>
              <div className="bg-white flex items-center justify-between h-12 px-4 py-2 rounded-xl">
                <div>{quantity}</div>

                <div className="flex flex-col items-center justify-center">
                  <button onClick={increaseQuantity}>+</button>
                  <button onClick={decreaseQuantity} disabled={quantity <= 1}>
                    -
                  </button>
                </div>
              </div>
            </div>

            <AddToCartButton />
          </div>
        </div>
      </div>
    </div>
  );
}
