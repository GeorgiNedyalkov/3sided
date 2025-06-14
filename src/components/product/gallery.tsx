"use client"

import Image from "next/image";


export default function Gallery({ images }: { images: { src: string; alt: string }[] }) {
  return (
    <div>
      <div className="relative h-96 w-full md:h-[40vh]">
        <Image
          src={images[0].src || ""}
          alt={images[0].alt || ""}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>

      {/* NOTE: What are we adding here? */}

    </div>
  );
}
