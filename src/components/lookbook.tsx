"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

export default function LookBook() {
  const [isGold, setIsGold] = useState(true);

  const toggleIsGold = () => setIsGold((prevIsGold) => !prevIsGold);

  return (
    <section className="bg-slate-50 p-20">
      <h2 className="mb-4 text-6xl font-bold">Look Book</h2>
      <div className="flex items-center justify-between">
        <p className="mb-4 w-80">
          Get inspired by our signature pieces and create a charm to call your own
        </p>
        <ToggleGold isGold={isGold} toggleIsGold={toggleIsGold} />
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

        <div className="relative h-64 w-full">
          <GridImage
            isGold={isGold}
            goldImage="/activity_1.jpg"
            silverImage="/website/letters.jpg"
          />
        </div>
        <div className="relative h-64 w-full">
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

function ToggleGold({ isGold, toggleIsGold }: { isGold: boolean; toggleIsGold: () => void }) {
  return (
    <div>
      <div className="m-20 flex items-center gap-2">
        <span
          className={clsx({
            "font-bold": isGold,
          })}
        >
          Gold
        </span>
        <button
          onClick={toggleIsGold}
          className={clsx(
            "flex h-6 w-16 items-center rounded-xl bg-slate-300 transition-all duration-300",
            {
              "bg-yellow-300": isGold,
            }
          )}
        >
          <div
            className={clsx("m-2 h-4 w-4 rounded-full bg-black transition-all duration-300", {
              "translate-x-8 bg-slate-700": !isGold,
              "bg-yellow-700": isGold,
            })}
          />
        </button>
        <span
          className={clsx({
            "font-bold": !isGold,
          })}
        >
          Silver
        </span>
      </div>
    </div>
  );
}
