import { ReadonlyURLSearchParams } from "next/navigation";
import { Product } from "@/lib/shopify/types";

export function createUrl(pathname: string, params: URLSearchParams | ReadonlyURLSearchParams) {
  const paramsString = params.toString();
  const queryString = `${paramsString.length ? "?" : ""}${paramsString}`;

  return `${pathname}${queryString}`;
};

export function convertToEur(priceInBgn: number) {
  return (priceInBgn / 1.95583).toFixed(2);
}

export function selectedMoreThanThreeCharms(selectedCharms: Product[]): boolean {
  let count = 0;
  for (let i = 0; i < selectedCharms.length; i++) {
    if (selectedCharms[i] != null) {
      count++;
    }
  }

  console.log({ count })

  return count >= 3;
}
