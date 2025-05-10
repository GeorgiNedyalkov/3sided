import { LinkButton } from "../buttons";
import { LogoMain } from "../logo";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full">
      <video
        src="/Hero.MOV"
        className="absolute left-0 top-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <LogoMain className="-mb-32 text-4xl font-bold md:text-6xl" />

        <p className="mb-5 mt-4 text-lg md:text-xl">Design you own personalized jewelry that’s unique to you</p>

        <LinkButton href="/charm-bar">Visit Charm Bar</LinkButton>
      </div>
    </section>
  );
}
