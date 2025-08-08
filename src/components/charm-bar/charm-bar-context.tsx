"use client"

import { createContext, useContext, useState } from "react";
import { Product } from "@/lib/shopify/types";

// Products include one chain and multiple charms

type CharmBarContextType = {
  selectedChain: Product | null;
  setSelectedChain: (chain: Product) => void;

  selectedCharms: (Product | null)[];

  selectedCharmPosition: number;
  handleSelectCharmPosition: (index: number) => void;

  handleCharmSelect: (charm: Product, position: number) => void;
  handleCharmRemove: (position: number) => void;
}

const CharmBarContext = createContext<CharmBarContextType | null>(null);


export function CharmBarContextProvider({ children }: { children: React.ReactNode }) {
  const [selectedChain, setSelectedChain] = useState<Product | null>(null);
  const [selectedCharms, setSelectedCharms] = useState<(Product | null)[]>(
    new Array(5).fill(null)
  );

  const [selectedCharmPosition, setSelectedCharmPosition] = useState<number>(0);

  function handleCharmSelect(charm: Product, position: number) {
    const newSelectedCharms = [...selectedCharms];
    newSelectedCharms[position] = charm;
    setSelectedCharms(newSelectedCharms);
    setSelectedCharmPosition(position);
  }

  function handleCharmRemove(position: number) {
    const newSelectedCharms = [...selectedCharms];
    newSelectedCharms[position] = null;
    setSelectedCharms(newSelectedCharms);

    if (selectedCharmPosition === position) {
      setSelectedCharmPosition(-1);
    }
  }

  function handleSelectCharmPosition(index: number) {
    if (selectedCharmPosition === index) {
      setSelectedCharmPosition(-1);
    } else {
      setSelectedCharmPosition(index);
    }
  }

  const values = {
    selectedChain,
    selectedCharms,
    selectedCharmPosition,

    handleSelectCharmPosition,
    handleCharmSelect,
    handleCharmRemove,
  }

  return <CharmBarContext.Provider value={values}>
    {children}
  </CharmBarContext.Provider>
}


export function useCharmBar() {
  const charmBarContext = useContext(CharmBarContext);

  if (!charmBarContext) {
    throw new Error("useCharmBar must be used within a CartProvider")
  }

  return charmBarContext;
}
