import Image from "next/image";
import { mobileCollages, desktopCollages } from "@/lib/placeholder-data";
import { useTranslations } from "next-intl";

function Collage({ src, alt }: { src: string, alt: string }) {
  return (
    <Image src={src} alt={alt} width={1280} height={720} />
  )
}

export default function LookbookPage() {
  const t = useTranslations("Lookbook");

  return (
    <div className="mb-20">
      <div className="mt-20 flex flex-col items-center justify-center pb-10">
        <h2 className="py-4 text-3xl font-semibold md:pb-10 md:text-6xl lg:pb-4 lg:text-9xl">
          Lookbook
        </h2>
        <p className="max-w-2xl text-center">
          {t("p1")}
        </p>
      </div>

      {/* Mobile */}
      <div className="md:hidden flex flex-wrap gap-10 items-center justify-center">
        {mobileCollages.map(({ src, alt }) => (
          <Collage src={src} alt={alt} />
        ))}
      </div>

      {/* Desktop*/}
      <div className="hidden md:block md:flex md:flex-wrap gap-10 items-center justify-center">
        {desktopCollages.map(({ src, alt }) => (
          <Collage src={src} alt={alt} />
        ))}
      </div>
    </div>
  )
}

