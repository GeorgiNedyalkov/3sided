import Image from "next/image";

export default function Page() {
  return (
    <div className="h-screen w-full bg-tertiary-2">
      {/* <h2 className="py-20 text-center text-4xl font-semibold text-primary">Welcome to the bar!</h2>
      <p>May we please take your order?</p> */}
      <h2 className="py-20 text-center text-4xl font-semibold text-primary">
        EXPRESS YOURSELF THROUGH EVERYTHING
      </h2>
      <div className="flex items-center justify-center gap-10">
        <div className="relative h-96 w-72">
          <Image src="/grid/socks.png" alt="Charms on a bag" className="object-cover" fill />
        </div>

        <div className="relative h-96 w-72">
          <Image src="/grid/bag.png" alt="Charms on a bag" className="object-cover" fill />
        </div>

        <div className="relative h-96 w-72">
          <Image src="/grid/makeup.png" alt="Charms on a bag" className="object-cover" fill />
        </div>

        <div className="relative h-96 w-72">
          <Image src="/grid/hats.png" alt="Charms on a bag" className="object-cover" fill />
        </div>
      </div>
      <h2 className="py-20 text-center text-4xl font-semibold text-primary">
        MEANT TO BE MIXED, MATCHED, STACKED AND THOROUGHLY ENJOYED
      </h2>
    </div>
  );
}
