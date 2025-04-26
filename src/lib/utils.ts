import { ReadonlyURLSearchParams } from "next/navigation";

export const createUrl = (pathname: string, params: URLSearchParams | ReadonlyURLSearchParams) => {
  const paramsString = params.toString();
  const queryString = `${paramsString.length ? "?" : ""}${paramsString}`;

  console.log({ params, paramsString, queryString });

  return `${pathname}${queryString}`;
};

export function capitalize(str: string) {
  return str[0].toUpperCase() + str.slice(1);
}
