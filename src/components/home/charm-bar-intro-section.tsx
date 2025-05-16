import Image from "next/image";

export default function CharmBarSection() {
  return (
    <div className="w-full mb-10 md:px-20 md:mb-20">
      <h2 className="text-center py-10 md:py-12 text-4xl font-bold md:text-left">First Charm Bar in Bulgaria</h2>
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div className="relative h-[700px] w-96">
          <Image
            src="/home/fork.jpg"
            className="object-cover opacity-90"
            alt="Charm bar with many charms"
            fill
          />
        </div>
        <p className="w-full md:max-w-64 px-8 py-8 text-center text-gray-900">
          There are many variations of passages of Lorem Ipsum available, but the majority have
          suffered alteration in some form, by injected humour, or randomised words which dont look
          even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be.
        </p>
        <div className="relative h-[700px] w-96">
          <Image
            src="/glass.jpg"
            className="object-cover opacity-90"
            alt="Charm bar with many charms"
            fill
          />
        </div>
        <p className="w-full md:max-w-64 px-8 py-8 text-center text-gray-900">
          There are many variations of passages of Lorem Ipsum available, but the majority have
          suffered alteration in some form, by injected humour, or randomised words which dont look
          even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be.
        </p>
        <div className="relative h-[700px] w-96">
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
