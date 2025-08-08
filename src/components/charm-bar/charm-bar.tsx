"use client"

import CharmSelector from "@/components/charm-bar/charms";
import CharmCanvas from "@/components/charms/charm-canvas";
import { Product } from "@/lib/shopify/types";
import TotalPrice from "./total-price";
import { CharmBarContextProvider } from "./charm-bar-context";

export default async function CharmBar({ charms, chain }: { charms: Product[], chain: Product }) {

  return (
    <CharmBarContextProvider>
      <div className="mb-20 flex flex-col justify-center md:flex-row gap-10">
        <div>
          <CharmCanvas chain={chain} />
          <TotalPrice />
        </div>

        <div className="lg:max-w-[40vw] flex flex-col gap-10 w-full">
          <CharmSelector charms={charms} />
        </div>
      </div>
    </CharmBarContextProvider>
  );
}
