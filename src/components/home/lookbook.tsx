"use client";

import { useState } from "react";
import ToggleGold from "./toggle";
import Link from "next/link";
import Image from "next/image";

export default function LookBook() {
  const [isGold, setIsGold] = useState(true);

  const toggleIsGold = () => setIsGold((prevIsGold) => !prevIsGold);

  return (
    <section className="bg-slate-50 p-4 lg:p-20">
      <div className="mb-10 flex flex-col gap-4">
        <h2 className="text-6xl font-bold">Look Book</h2>
        <div className="flex flex-col items-center justify-between md:flex-row">
          <p className="w-96">
            Get inspired by our signature pieces and create a charm to call your own
          </p>
          <ToggleGold isGold={isGold} toggleIsGold={toggleIsGold} />
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-20 lg:grid-cols-3 lg:grid-rows-3">
        <div className="relative row-span-2 w-full border">
          <GridImage
            isGold={isGold}
            goldImage="/website/letters.jpg"
            silverImage="/activity_1.jpg"
          />
        </div>
        <div className="relative col-span-2 row-span-2 w-full">
          <GridImage isGold={isGold} goldImage="/image_2.jpg" silverImage="/website/letters.jpg" />
        </div>
        <div>
          <p className="mb-4">
            Express your own personality and create something the is as unique as you
          </p>
          <Link href="/lookbook">
            <button className="w-32 bg-black p-2 font-semibold text-white">Get inspired</button>
          </Link>
        </div>

        <div className="relative h-60 w-full">
          <GridImage
            isGold={isGold}
            goldImage="/activity_1.jpg"
            silverImage="/website/letters.jpg"
          />
        </div>
        <div className="relative w-full">
          <GridImage isGold={isGold} goldImage="/activity_2.jpg" silverImage="/activity_1.jpg" />
        </div>
      </div>
    </section>
  );
}

function GridImage({
  isGold,
  goldImage,
  silverImage,
}: {
  isGold: boolean;
  goldImage: string;
  silverImage: string;
}) {
  const imageSrc = isGold ? goldImage : silverImage;

  return <Image src={imageSrc} alt="" className="h-full w-full object-cover" fill />;
}
