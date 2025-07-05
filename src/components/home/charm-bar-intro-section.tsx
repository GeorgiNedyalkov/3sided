import Image from "next/image";

export default function CharmBarSection() {
  return (
    <div className="w-full mb-10 md:px-20 md:mb-20">
      <h2 className="text-center py-10 md:py-12 text-4xl font-bold md:text-left">First Charm Bar in Bulgaria</h2>
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div className="relative h-[700px] w-96">
          <Image
            src="/new/intro_1.jpg"
            className="object-cover opacity-90"
            alt="Charm bar with many charms"
            fill
          />
        </div>
        <p className="w-full md:max-w-64 px-8 py-8 text-center text-gray-900">
          Добре дошли в първия Charm Bar в България — мястото, където ТИ си дизайнерът. Тук можеш да комбинираш различни чармове, за да създадеш бижу, което изразява теб — твоето настроение, стил или момент. Независимо дали обичаш нещо дръзко, минималистично, нежно или различно — твоето бижу е толкова уникално, колкото си самият ти.
        </p>
        <div className="relative h-[700px] w-96">
          <Image
            src="/new/intro_2.jpg"
            className="object-cover opacity-90"
            alt="Charm bar with many charms"
            fill
          />
        </div>
        <p className="w-full md:max-w-64 px-8 py-8 text-center text-gray-900">
          Създаването на твоето бижу е лесно и забавно — само в няколко стъпки. Избери типа бижу и основата му, след което развихри въображението си с безброй комбинации от чармове.Ти решаваш как да изглежда твоето 3SIDED бижу
        </p>
        <div className="relative h-[700px] w-96">
          {/* TODO: Add the new pomegranite */}
          <Image
            src="/home/pomegranite.jpg"
            className="object-cover opacity-90"
            alt="Charm bar with many charms"
            fill
          />
        </div>
      </div>
    </div>
  );
}
