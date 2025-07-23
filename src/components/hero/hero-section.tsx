import { useTranslations } from "next-intl";
import { LinkButton } from "../buttons";
import { LogoMain } from "../logo";

export default function HeroSection() {
  const t = useTranslations("Homepage");

  return (
    <section className="relative h-screen w-full">
      <video
        className="absolute left-0 top-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/hero_horizontal.mp4" type="video/mp4" />
      </video>
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <LogoMain className="-mb-32 text-4xl font-bold md:text-6xl" />
        <p className="mb-5 mt-4 text-lg md:text-xl">
          {t("heroParagraph")}
        </p>
        <LinkButton href="/charm-bar">
          {t("CharmbarButton")}
        </LinkButton>
      </div>
    </section>
  );
}
