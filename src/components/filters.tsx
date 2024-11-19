"use client";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const categoryOptions = ["Category", "Bracelet", "Necklace", "Charms", "Permanent bracelets"];
const collectionOptions = ["Collection", "Halloween", "Zodiac", "Food", "Drink", "Bars", "Gifts"];
const sortingOptions = ["Price low to high", "Price high to low", "Recommended"];
const minPrice = 50;
const maxPrice = 100;

export default function Filters() {
  const [isPriceOpen, setIsPriceOpen] = useState(true);

  function togglePrice() {
    setIsPriceOpen((prevIsPriceOpen) => !prevIsPriceOpen);
  }

  return (
    <div className="flex items-center justify-between py-10">
      <div className="flex items-center gap-10">
        <span className="text-slate-400">Filter by:</span>
        <select name="category" id="category">
          {categoryOptions.map((option, idx) => (
            <option key={option + idx}>{option}</option>
          ))}
        </select>
        <select name="collection" id="collection">
          {collectionOptions.map((option, idx) => (
            <option key={option + idx}>{option}</option>
          ))}
        </select>
        <div className="relative">
          <button onClick={togglePrice} className="flex items-center gap-4">
            <div>Price</div>
            <ChevronDownIcon className="h-4" />
          </button>
          {isPriceOpen && (
            <div className="absolute top-0 z-10 mt-10 flex items-center justify-between gap-4">
              <div className="w-24">Min price</div>
              <input
                type="range"
                name="minPrice"
                id="minPrice"
                defaultValue={minPrice}
                min={minPrice}
                max={maxPrice}
              />
              <div className="w-24">Max price</div>
            </div>
          )}
        </div>
      </div>
      <div>
        <span className="text-slate-400">Sort by: </span>
        <select name="sort" id="sort">
          {sortingOptions.map((option, idx) => (
            <option key={option + idx}>{option}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
