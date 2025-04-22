import Image from "next/image";

export default function LookBookThreePictureGrid() {
  return (
    <div className="my-20 flex flex-col items-center justify-between gap-10 md:flex-row md:p-20">
      <div className="flex flex-col items-start justify-between">
        <div className="relative h-[60vh] w-[80vw] md:w-[50vw] lg:h-[80vh]">
          <Image src="/devi.jpg" alt="" className="h-full w-full object-cover" fill />
        </div>
        <p>LOOK #33</p>
      </div>

      <div className="flex gap-10">
        <div className="flex flex-col">
          <div className="relative h-96 w-52 lg:w-72">
            <Image src="/devi.jpg" alt="" className="object-cover" fill />
          </div>
          <div className="relative h-96 w-52 md:w-52 lg:w-72">
            <Image src="/qni.jpg" alt="" className="object-cover" fill />
          </div>
        </div>

        <div className="flex flex-col justify-end">
          <div className="mb-4 max-w-96 text-center">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="relative h-80 w-full">
            <Image src="/devi.jpg" alt="" className="object-cover" fill />
          </div>
        </div>
      </div>
    </div>
  );
}
