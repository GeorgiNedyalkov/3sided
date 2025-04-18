import Image from "next/image";

export default function LookbookPage() {
  return (
    <>
      <LookOne />;
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
