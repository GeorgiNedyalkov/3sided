import Image from "next/image";

export default function CharmBarSection() {
  return (
    <div className="w-full px-20 md:mb-20">
      <h2 className="py-12 text-4xl font-bold">First Charm Bar in Bulgaria</h2>
      <div className="flex items-center">
        <div className="relative z-0 h-[800px] w-1/2">
          <Image
            src="/glass.jpg"
            className="object-cover opacity-90"
            alt="Charm bar with many charms"
            fill
          />
        </div>
        <p className="z-10 -ml-20 max-w-[500px] bg-gray-100 p-4 text-gray-900">
          There are many variations of passages of Lorem Ipsum available, but the majority have
          suffered alteration in some form, by injected humour, or randomised words which dont look
          even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be
          sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum
          generators on the Internet tend to repeat predefined chunks as necessary, making this the
          first true generator on the Internet. It uses a dictionary of over 200 Latin words,
          combined with a handful of model sentence structures, to generate
        </p>
      </div>
    </div>
  );
}
