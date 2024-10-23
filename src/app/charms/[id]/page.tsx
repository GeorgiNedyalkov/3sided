"use client";
import Image from "next/image";
import { useState } from "react";
import { useParams } from "next/navigation";
import { charms } from "@/lib/placeholder-data";
import AddToCartButton from "@/components/add-to-cart";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import OtherProducts from "@/components/other-options";
import { useCart } from "@/context/CartContext";

function getCharmByLabel(label: string | string[]) {
  return charms.find((charm) => `${charm.label}` == label);
}

export default function CharmPage() {
  const params = useParams();
  const charmLabel = params?.id;
  const charm = getCharmByLabel(charmLabel);

  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState<string | null>(
    charm?.imageSrc || ""
  );

  function increaseQuantity() {
    setQuantity((prevQuantity) => prevQuantity + 1);
  }

  function decreaseQuantity() {
    setQuantity((prevQuantity) => prevQuantity - 1);
  }

  function chooseImage(imageSrc: string) {
    setSelectedImage(imageSrc);
  }

  function handleAddToCart() {
    addToCart(charm, quantity);
  }

  return (
    <div className="">
      <div className="w-full pt-20 grid grid-cols-2 mb-10">
        <div>
          <div className="h-[500px] w-full relative">
            <Image
              src={selectedImage || ""}
              alt={charm?.label || ""}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>

          <ul className="flex items-center justify-center gap-5">
            {charms.map((charm) => (
              <li
                key={charm.id}
                className="border rounded-lg"
                onClick={() => chooseImage(charm.imageSrc)}
                value={charm.imageSrc}
              >
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
        <div className="w-3/4 pt-20">
          <h1 className="text-5xl font-semibold mb-4">Precious Charm</h1>
          <div className="text-gray-600">{charm?.number}</div>
          <div className="mb-2 text-gray-600">{charm?.description}</div>
          <div className="bg-gray-200 p-4">
            <div className="text-base">Цена</div>
            <span className="font-semibold text-3xl">{charm?.price}</span>
            <span className="text-lg"> лв.</span>
            <div className="border border-gray-100 my-5" />
            <div className="flex gap-4 items-end">
              <div>
                <div className="mb-4">Количество:</div>
                <div className="bg-white flex items-center justify-between px-4 py-2 rounded-xl">
                  <div className="text-xl">{quantity}</div>

                  <div className="flex flex-col items-center justify-center">
                    <button onClick={increaseQuantity}>
                      <ChevronUpIcon className="h-5" />
                    </button>
                    <button onClick={decreaseQuantity} disabled={quantity <= 1}>
                      <ChevronDownIcon className="h-5" />
                    </button>
                  </div>
                </div>
              </div>

              <AddToCartButton onAddToCart={handleAddToCart} />
            </div>
          </div>
        </div>
      </div>
      <OtherProducts category={charm?.category || ""} />
    </div>
  );
}
