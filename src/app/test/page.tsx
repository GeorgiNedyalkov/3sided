import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className="bg-slate-100">
        <Navbar />
        <HeroSection />
        <MatchSection />
        <PantoneColors />
        <CharmTheMoment />
      </div>
    </>
  );
}

function CharmTheMoment() {
  return (
    <section className="my-20">
      <h1 className="mb-20 text-center text-3xl font-bold">Charm the moment</h1>
      <div className="flex items-center justify-between px-72">
        <div className="relative h-[50vh] w-96 bg-slate-800">
          <Image src="/activity_1.jpg" alt="" fill className="object-cover" />
        </div>
        <h2 className="font-bold uppercase">
          Have <br />
          fun <br />
          while <br />
          wearing it
        </h2>
        <div className="relative h-[50vh] w-96">
          <Image src="/activity_2.jpg" alt="" fill className="object-cover" />
        </div>
      </div>
      <div className="flex items-center justify-center py-20">
        <div className="relative h-[50vh] w-96">
          <Image src="/activity_3.jpg" alt="" fill className="object-cover" />
        </div>
      </div>
      <div className="relative h-[80vh] w-full">
        <Image src="/cocktail_1.png" alt="" fill className="object-contain" />
      </div>
    </section>
  );
}

function Navbar() {
  return (
    <nav className="flex h-24 items-center justify-center">
      <ul className="flex items-center justify-center gap-32">
        <li className="cursor-pointertext-lg font-semibold uppercase">Charm bar</li>
        <li className="cursor-pointertext-lg font-semibold uppercase">Collections</li>
        <li className="cursor-pointertext-lg font-semibold uppercase">Catalogue</li>
        <li className="cursor-pointertext-lg font-semibold uppercase">About us</li>
      </ul>
    </nav>
  );
}

function HeroSection() {
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
        <p className="mt-4 text-lg md:text-xl">Build your own charm creations.</p>
        <button className="mt-6 bg-white px-6 py-3 text-black hover:bg-gray-200">
          Visit Charm Bar
        </button>
      </div>
    </section>
  );
}

function MatchSection() {
  return (
    <div className="my-52">
      <h1 className="mb-20 text-center text-3xl font-semibold text-primary">
        Meant to be mixed, matched, stacked and thoroughly enjoyed
      </h1>
      <div className="flex items-center justify-center gap-20">
        {[1, 2, 4].map((imageNumber, idx) => (
          <div key={idx}>
            <ImageCard src={`/image_${imageNumber}.jpg`} />
          </div>
        ))}
      </div>
    </div>
  );
}

function ImageCard({ src }: { src: string }) {
  return (
    <div>
      <p className="flex items-end justify-end">WINTER SEASON 25</p>
      <div className="relative h-[50vh] w-96 bg-slate-800">
        <Image src={src} alt="" fill className="object-cover" />
      </div>
      <div className="flex justify-between">
        <p className="pl-10">NEW COLLECTION</p>
        <p>SOON</p>
      </div>
    </div>
  );
}

function PantoneColors() {
  return (
    <div className="flex flex-col gap-20 md:flex-row">
      <h2 className="pl-20 pt-10 text-3xl font-bold uppercase text-primary">
        Ти <br /> избираш
      </h2>
      <PantoneCards />
    </div>
  );
}

function PantoneCards() {
  const pantoneColors = ["#403225", "#FFF0E9", "#9BA287", "#EDDAD1", "#DADAD9", "#504136"];
  return (
    <ul className="mx-48 grid w-1/2 md:grid-cols-3 md:grid-rows-2">
      {pantoneColors.map((pantoneColorHash) => (
        <li key={pantoneColorHash}>
          <PantoneCard colorHash={pantoneColorHash} />
        </li>
      ))}
    </ul>
  );
}

function PantoneCard({ colorHash }: { colorHash: string }) {
  return (
    <div className="mx-auto flex h-52 w-52 flex-col items-center justify-center p-4">
      <div className="flex h-40 w-full items-center justify-center">
        <div
          className={`h-32 w-32`}
          style={{
            backgroundColor: colorHash,
          }}
        />
      </div>
      <p className="text-center text-xl text-primary">{colorHash}</p>
    </div>
  );
}

function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
      />
    </svg>
  );
}

function ShoppingBag() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-6"
    >
      <path
        fillRule="evenodd"
        d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
