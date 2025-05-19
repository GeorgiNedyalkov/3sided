"use client";

import { useState } from "react";
import ToggleGold from "./toggle";
import GridImage from "./lookbook-grid-image";
import { LinkButton } from "../buttons";

export default function LookBook() {
  const [isGold, setIsGold] = useState(true);

  const toggleIsGold = () => setIsGold((prevIsGold) => !prevIsGold);

  return (
    <section className="p-10 lg:p-20">
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
      <div className="flex gap-20 mb-20">
        <div className="relative h-72 w-full border lg:h-[40vh]">
          <GridImage
            isGold={isGold}
            goldImage="/website/letters.jpg"
            silverImage="/activity_1.jpg"
          />
        </div>
        <div className="relative h-72 w-full border lg:h-[40vh]">
          <GridImage isGold={isGold} goldImage="/image_2.jpg" silverImage="/website/letters.jpg" />
        </div>
        <div className="relative h-72 w-full border lg:h-[40vh]">
          <GridImage isGold={isGold} goldImage="/image_2.jpg" silverImage="/website/letters.jpg" />
        </div>
      </div>

      <div className="flex gap-20">
        <div className="flex flex-col w-full items-center justify-start">
          <p className="mb-4 w-64 text-center">
            Express your own personality and create something the is as unique as you
          </p>
          <LinkButton href="/lookbook">
            Get Inspired
          </LinkButton>
        </div>

        <div className="relative h-72 w-full md:h-[40vh]">
          <GridImage
            className=""
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
