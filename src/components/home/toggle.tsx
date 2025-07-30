"use client"

import { usePathname } from "@/i18n/navigation";
import clsx from "clsx";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function Toggle({ initialState }: { initialState: boolean }) {
  const [isGold, setIsGold] = useState<boolean>(initialState);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const toggleIsGold = () => {
    const params = new URLSearchParams(searchParams);

    if (isGold) {
      params.set("material", "silver");
    } else {
      params.set("material", "gold");
    }

    replace(`${pathname}?${params}`)
    setIsGold(prevState => !prevState);
  }

  return (
    <div className="flex items-center gap-2">
      <span className={clsx({ "font-bold": isGold })}>
        Gold
      </span>
      <button
        onClick={toggleIsGold}
        className={clsx(
          "flex h-6 w-14 items-center rounded-xl bg-slate-300 transition-all duration-300",
          {
            "bg-yellow-300": isGold,
          }
        )}
      >
        <div
          className={clsx("m-2 h-4 w-4 rounded-full bg-black transition-all duration-300",
            isGold ? "bg-yellow-700" : "translate-x-6 bg-slate-700"
          )}
        />
      </button>
      <span
        className={clsx({ "font-bold": !isGold })} >
        Silver
      </span>
    </div>
  );
}

export default function ToggleGold({
  isGold,
  toggleIsGold,
}: {
  isGold: boolean;
  toggleIsGold: () => void;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className={clsx({ "font-bold": isGold })}>
        Gold
      </span>
      <button
        onClick={toggleIsGold}
        className={clsx(
          "flex h-6 w-14 items-center rounded-xl bg-slate-300 transition-all duration-300",
          {
            "bg-yellow-300": isGold,
          }
        )}
      >
        <div
          className={clsx("m-2 h-4 w-4 rounded-full bg-black transition-all duration-300", {
            "translate-x-6 bg-slate-700": !isGold,
            "bg-yellow-700": isGold,
          })}
        />
      </button>
      <span
        className={clsx({ "font-bold": !isGold })} >
        Silver
      </span>
    </div>
  );
}


