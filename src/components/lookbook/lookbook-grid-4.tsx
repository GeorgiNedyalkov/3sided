import Image from "next/image";

export default function LookBookFourPicturesGrid() {
  return (
    <div className="my-20 flex flex-col items-center justify-between gap-20 md:flex-row md:p-20">
      <div className="flex flex-col items-start justify-between">
        <p>LOOK #12</p>
        <div className="relative h-[60vh] w-[80vw] md:w-[50vw] lg:h-[80vh]">
          <Image src="/devi.jpg" alt="" className="h-full w-full object-cover" fill />
        </div>
      </div>

      <div className="grid grid-cols-2 grid-rows-2 gap-4">
        <div className="relative h-96 w-full lg:w-72">
          <Image src="/devi.jpg" alt="" className="object-cover" fill />
        </div>
        <div className="relative h-96 w-full md:w-52 lg:w-72">
          <Image src="/qni.jpg" alt="" className="object-cover" fill />
        </div>
        <div className="relative h-96 w-full text-center md:w-52 lg:w-72">
          <Image src="/qni.jpg" alt="" className="object-cover" fill />
        </div>
        <div className="flex h-full w-full flex-col md:w-52 lg:w-72">
          <div className="relative h-72 w-1/2">
            <Image src="/devi.jpg" alt="" className="object-cover" fill />
          </div>
          <div className="text-center">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
