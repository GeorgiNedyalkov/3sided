import Image from "next/image";

export default function LookBookThreeColumnsGrid() {
  return (
    <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2 lg:my-52">
      <div className="lg:col-span-2">
        <h2 className="mb-4 text-4xl">BESTSELLERS</h2>
        <div className="relative h-[60vh] w-full bg-stone-700">
          <Image
            className="object-cover"
            src="/hor2.png"
            priority
            alt=""
            fill
            sizes="(max-width: 1440px) 60vw"
          />
        </div>
      </div>
      <div className="flex items-end justify-between px-2">
        <p className="w-64">Lorem, ipsum dolor sit amet consectetur</p>
        <p className="w-64">Lorem, ipsum dolor sit amet consectetur</p>
      </div>
      <div className="hidden h-[50vh] w-full bg-transparent md:block"></div>
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
        <p className="p-2">Lorem, ipsum dolor sit amet consectetur</p>
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
        <p className="text-center">Lorem, ipsum dolor sit amet consectetur</p>
      </div>
    </div>
  );
}
