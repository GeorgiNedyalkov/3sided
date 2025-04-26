import Link from "next/link";

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
        <h1 className="text-4xl font-bold md:text-6xl">3SIDED</h1>
        <p className="mt-4 text-lg md:text-xl">Build your own customized jewelry.</p>
        <Link href="/charm-bar" className="mt-6 bg-white px-6 py-3 text-black hover:bg-gray-200">
          Visit Charm Bar
        </Link>
      </div>
    </section>
  );
}
