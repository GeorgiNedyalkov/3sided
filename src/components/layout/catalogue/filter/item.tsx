"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import type { SortFilterItem } from "@/lib/constants";
import type { ListItem, PathFilterItem } from ".";
import { createUrl } from "@/lib/utils";
import clsx from "clsx";

function PathFilterItem({ item }: { item: PathFilterItem }) {
  // const pathname = usePathname(); // returns current path as string "/catalogue", "/catalogue/charms"
  const searchParams = useSearchParams(); // provides functions to read the search params and extract their values

  const newParams = new URLSearchParams(searchParams.toString());

  return (
    <>
      <li key={item.title}>
        <Link href={createUrl(item.path, newParams)}>{item.title}</Link>
      </li>
    </>
  );
}

function SortFilterItem({ item }: { item: SortFilterItem }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const active = searchParams.get("sort") === item.slug;
  const q = searchParams.get("q");
  const href = createUrl(
    pathname,
    new URLSearchParams({
      ...(q && { q }),
      ...(item.slug && item.slug.length && { sort: item.slug }),
    })
  );

  const DynamicTag = active ? "p" : Link;

  return (
    <li>
      <DynamicTag
        prefetch={!active ? false : undefined}
        href={href}
        className={clsx("hover:underline", {
          underline: active,
        })}
      >
        {item.title}
      </DynamicTag>
    </li>
  );
}

export default function FilterItem({ item }: { item: ListItem }) {
  return "path" in item ? <PathFilterItem item={item} /> : <SortFilterItem item={item} />;
}
