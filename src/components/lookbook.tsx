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
        <p className="mb-4 w-64">
          Get inspired by our signature pieces and create a charm to call your own
        </p>

        <div>
          <div className="m-20 flex items-center gap-2">
            <span
              className={clsx({
                "font-bold": isGold,
              })}
            >
              Gold
            </span>
            <div
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
            </div>
            <span
              className={clsx({
                "font-bold": !isGold,
              })}
            >
              Silver
            </span>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-20 lg:grid-cols-3 lg:grid-rows-3">
        <div className="relative row-span-2 w-full border">
          {isGold ? (
            <Image src="/website/letters.jpg" alt="" className="h-full w-full object-cover" fill />
          ) : (
            <Image src="/activity_1.jpg" alt="" className="h-full w-full object-cover" fill />
          )}
        </div>
        <div className="relative col-span-2 row-span-2 w-full">
          {isGold ? (
            <Image src="/image_2.jpg" alt="" className="h-full w-full object-cover" fill />
          ) : (
            <Image src="/website/letters.jpg" alt="" className="h-full w-full object-cover" fill />
          )}
        </div>
        <div>
          <p className="mb-4">
            Express your own personality and create something the is as unique as you
          </p>
          <Link href="/lookbook">
            <button className="w-32 bg-black p-2 font-semibold text-white">Get inspired</button>
          </Link>
        </div>
        <div className="relative w-full">
          {isGold ? (
            <Image src="/activity_1.jpg" alt="" className="h-full w-full object-cover" fill />
          ) : (
            <Image src="/website/letters.jpg" alt="" className="h-full w-full object-cover" fill />
          )}
        </div>
        <div className="relative h-64 w-full">
          {isGold ? (
            <Image src="/activity_2.jpg" alt="" className="h-full w-full object-cover" fill />
          ) : (
            <Image src="/activity_1.jpg" alt="" className="h-full w-full object-cover" fill />
          )}
        </div>
      </div>
    </section>
  );
}
