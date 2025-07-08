import { useTranslations } from "next-intl";

export default function CharmBarHeader() {
  const t = useTranslations("Charmbar")

  return (
    <div className="grid gap-4 pb-4 md:gap-2 md:py-5 lg:py-10 text-center">
      <h1 className="mx-auto text-5xl font-bold">Charm Bar</h1>
      <div className="mx-auto">
        <p className="text-center max-w-xl">{t("paragraph")}</p>
      </div>
    </div>
  );
}
