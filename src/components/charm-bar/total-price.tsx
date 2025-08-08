"use client"

import { useState, useEffect } from "react"
import { useCharmBar } from "./charm-bar-context";
import { convertToEur } from "@/lib/utils";

export default function TotalPrice() {
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const { selectedCharms } = useCharmBar();

  useEffect(() => {
    const newPrice = selectedCharms.reduce(
      (sum, charm) => (sum += charm != null ? Number(charm?.priceRange.maxVariantPrice.amount) : 0),
      0
    );

    setTotalPrice(newPrice);
  }, [selectedCharms]);

  return (
    <div className="mb-10">
      Total Price:
      <span className="lg:ml-4 lg:text-2xl font-bold text-primary">{totalPrice}</span> лв./
      <span className="lg:text-2xl font-bold text-primary"> {convertToEur(totalPrice)} </span>€
    </div>
  )
}
