import CharmBarIntroSection from "@/components/home/charm-bar-intro-section";
import HeroSection from "@/components/hero/hero-section";
import LookBook from "@/components/home/lookbook";
import NewsletterBanner from "@/components/newsletter/newsletter-banner";
import CollectionsSection from "@/components/home/collections-section";
import Categories from "@/components/hero/categories-section";
import FallingCharms from "@/components/falling-charms";

export default function Page() {
  return (
    <>
      <HeroSection />
      <CharmBarIntroSection />
      <FallingCharms />
      <Categories />
      <CollectionsSection />
      <LookBook />
      <NewsletterBanner />
    </>
  );
}
