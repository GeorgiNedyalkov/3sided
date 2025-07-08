"use client";

import { useState } from "react";
import ToggleGold from "./toggle";
import GridImage from "./lookbook-grid-image";
import { LinkButton } from "../buttons";
import { useTranslations } from "next-intl";

export default function LookBookSection() {
  const [isGold, setIsGold] = useState(true);

  const t = useTranslations("LookbookSection");

  const toggleIsGold = () => setIsGold((prevIsGold) => !prevIsGold);

  return (
    <section className="p-10 lg:p-20">
      <div className="mb-10 flex flex-col gap-4">
        <h2 className="text-6xl font-bold">Look Book</h2>
        <div className="flex flex-col items-center justify-between gap-4 md:gap-20 md:flex-row">
          <p className="max-w-xl">
            {t("headline")}
            Разгледай нашия Lookbook за доза вдъхновение — комбинации, подбрани визии и безкрайни идеи.
          </p>
        </div>
      </div>
      <div className="flex gap-20 mb-20">
        <div className="relative h-72 w-full border lg:h-[40vh]">
          <GridImage
            isGold={isGold}
            goldImage="/home/lookbook/gold/1.jpg"
            silverImage="/home/lookbook/silver/1.jpg"
          />
        </div>
        <div className="relative h-72 w-full border lg:h-[40vh]">
          <GridImage
            isGold={isGold}
            goldImage="/home/lookbook/gold/2.png"
            silverImage="/home/lookbook/silver/2.jpg"
          />
        </div>
        <div className="relative h-72 w-full border lg:h-[40vh]">
          <GridImage
            isGold={isGold}
            goldImage="/home/lookbook/gold/3.jpg"
            silverImage="/home/lookbook/silver/3.jpg"
          />
        </div>
      </div>
      <div className="flex gap-20">
        <div className="flex flex-col w-full items-center justify-start">
          <ToggleGold isGold={isGold} toggleIsGold={toggleIsGold} />
          <p className="mt-4 mb-2 w-96 text-center">{t("p1")}</p>
          <p className="mb-4 w-96 text-center">- {t("p2")}</p>
          <LinkButton href="/lookbook">{t("linkButton")}</LinkButton>
        </div>
        <div className="relative h-72 w-full md:h-[40vh]">
          <GridImage
            isGold={isGold}
            goldImage="/home/lookbook/gold/4.jpg"
            silverImage="/home/lookbook/silver/4.jpg"
          />
        </div>
        <div className="relative w-full md:hidden lg:block">
          <GridImage
            isGold={isGold}
            goldImage="/home/lookbook/gold/5.jpg"
            silverImage="/home/lookbook/silver/5.jpg"
          />
        </div>
      </div>
    </section>
  );
}
