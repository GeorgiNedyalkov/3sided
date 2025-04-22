import Image from "next/image";

export default function LookbookPage() {
  return (
    <>
      <LookTwo />
      <LookOne />
      <div className="flex items-center justify-between gap-20 p-20">
        <div className="flex flex-col items-start justify-between">
          <div className="relative h-[60vh] w-[60vw]">
            <Image src="/devi.jpg" alt="" className="object-cover" fill />
          </div>
          <p>LOOK #12</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          <div className="relative h-96 w-72">
            <Image src="/devi.jpg" alt="" className="object-cover" fill />
          </div>
          <div className="relative h-96 w-72">
            <Image src="/qni.jpg" alt="" className="object-cover" fill />
          </div>
          <div className="relative h-96 w-72">
            <Image src="/qni.jpg" alt="" className="object-cover" fill />
          </div>
          <div className="relative h-96 w-72">
            <Image src="/devi.jpg" alt="" className="object-cover" fill />
          </div>
        </div>
      </div>
    </>
  );
}

function FullscreenImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-[30vh] w-full md:h-[40vh] lg:h-[50vh]">
      <Image
        src={src}
        alt={alt}
        className="object-cover"
        fill
        sizes="(max-width: 500px) 100vw, (max-width: 1200px) 50vw, 100vw"
      />
    </div>
  );
}

function LookTwo() {
  return (
    <>
      <h2 className="py-4 text-center text-3xl font-semibold md:py-10 md:text-6xl lg:pb-20 lg:text-9xl">
        WELLFIRE
      </h2>
      <div className="mb-8 flex w-full flex-col gap-4 px-10 md:flex-row md:justify-end md:gap-10">
        <p className="max-w-96">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam iusto soluta, sunt, quia
          quas laborum illo blanditiis aliquid itaque provident vero accusantium reprehenderit. Fuga
          delectus aperiam repellat autem id similique.
        </p>
        <p className="max-w-96">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam iusto soluta, sunt, quia
          quas laborum illo blanditiis aliquid itaque provident vero accusantium reprehenderit. Fuga
          delectus aperiam repellat autem id similique.
        </p>
      </div>

      {/* Full screen image */}
      <FullscreenImage src="/hor.png" alt="Charms on a chessboard" />

      {/*  Grid*/}
      <div className="grid grid-cols-3 grid-rows-2 gap-4 lg:my-52">
        <div className="lg:col-span-2">
          <h2 className="text-4xl">BESTSELLERS</h2>
          <div className="relative h-[60vh] w-full bg-stone-700">
            <Image
              className="object-cover"
              src="/hor2.png"
              alt=""
              fill
              sizes="(max-width: 1440px) 60vw"
            />
          </div>
        </div>
        <div className="flex items-end justify-between">
          <p className="w-64">Lorem, ipsum dolor sit amet consectetur</p>
          <p className="w-64">Lorem, ipsum dolor sit amet consectetur</p>
        </div>
        <div className="h-[50vh] w-full bg-transparent"></div>
        <div>
          <div className="relative h-[50vh] w-full bg-stone-700">
            <Image
              src="/qni.jpg"
              alt=""
              className="object-cover"
              fill
              sizes="(max-width: 1440px) 33vw"
            />
          </div>
          <p>Lorem, ipsum dolor sit amet consectetur</p>
        </div>
        <div>
          <div className="relative h-[50vh] w-full bg-stone-700">
            <Image
              src="/devi.jpg"
              alt=""
              className="object-cover"
              fill
              sizes="(max-width: 1440px) 33vw"
            />
          </div>
          <p>Lorem, ipsum dolor sit amet consectetur</p>
        </div>
      </div>

      {/* Full screen image + title*/}
      <FullscreenImage src="/hor2.png" alt="" />
    </>
  );
}

function LookOne() {
  return (
    <div className="flex justify-between gap-10 md:px-10 lg:px-10">
      <div className="hidden lg:block">
        <h2 className="my-10 text-3xl font-bold">LOOK #1</h2>
        <div className="relative h-[60vh] w-[30vw] lg:h-[70vh] lg:w-[40vw]">
          <Image
            src="/qnita/pornstar_martini.jpg"
            alt=" "
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
      <div className="my-5 flex gap-8">
        <div className="flex flex-col">
          <div className="lg:h-ful relative h-64 w-[50vw] max-w-96 lg:h-full">
            <Image
              src="/categories/keychain.jpg"
              alt=" "
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="relative h-64 w-[50vw] max-w-96 lg:h-full">
            <Image
              src="/categories/necklace.jpg"
              alt=" "
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw"
            />
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex h-full items-end justify-end">
            <p className="pb-2 text-center lg:pb-8">
              Here are some words. Maybe some other words here as well. Here are some words. Maybe
            </p>
          </div>
          <div className="relative h-52 w-full max-w-96 md:h-4/5">
            <Image
              src="/categories/bag.jpg"
              alt=" "
              fill
              className="object-cover"
              sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
