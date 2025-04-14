"use client";

import { useState } from "react";
import Link from "next/link";
import ToggleGold from "./toggle";
import GridImage from "./lookbook-grid-image";

export default function LookBook() {
  const [isGold, setIsGold] = useState(true);

  const toggleIsGold = () => setIsGold((prevIsGold) => !prevIsGold);

  return (
    <section className="bg-slate-50 p-10 lg:p-20">
      {/* Header */}
      <div className="mb-10 flex flex-col gap-4">
        <h2 className="text-6xl font-bold">Look Book</h2>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="max-w-96">
            Get inspired by our signature pieces and create a charm to call your own
          </p>
          <ToggleGold isGold={isGold} toggleIsGold={toggleIsGold} />
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:grid-rows-2 md:gap-10 lg:grid-cols-3 lg:grid-rows-3 lg:gap-16">
        <div className="relative col-start-1 row-span-2 h-72 w-full border lg:h-full">
          <p>Hello</p>
          <GridImage
            isGold={isGold}
            goldImage="/website/letters.jpg"
            silverImage="/activity_1.jpg"
          />
        </div>
        <div className="relative row-span-2 h-72 w-full md:col-start-2 md:h-full lg:col-span-2">
          <GridImage isGold={isGold} goldImage="/image_2.jpg" silverImage="/website/letters.jpg" />
        </div>
        <div className="flex flex-col items-center justify-center md:items-start md:justify-start">
          <p className="mb-4">
            Express your own personality and create something the is as unique as you
          </p>
          <Link href="/lookbook">
            <button className="w-32 bg-black p-2 font-semibold text-white">Get inspired</button>
          </Link>
        </div>

        <div className="relative h-72 w-full md:h-60">
          <GridImage
            isGold={isGold}
            goldImage="/activity_1.jpg"
            silverImage="/website/letters.jpg"
          />
        </div>
        <div className="relative w-full md:hidden lg:block">
          <GridImage isGold={isGold} goldImage="/activity_2.jpg" silverImage="/activity_1.jpg" />
        </div>
      </div>
    </section>
  );
}
