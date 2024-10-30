"use client";

import Image from "next/image";
import { useState } from "react";
import { useParams } from "next/navigation";
import { charms } from "@/lib/placeholder-data";

function getCharmByLabel(label: string | string[]) {
  return charms.find((charm) => `${charm.label}` == label);
}

export default function Gallery({
  images,
}: {
  images: { src: string; alt: string }[];
}) {
  const params = useParams();
  const charmLabel = params?.id;
  const charm = getCharmByLabel(charmLabel);

  const [selectedImage, setSelectedImage] = useState<string | null>(
    images[0].src || ""
  );

  function chooseImage(imageSrc: string) {
    setSelectedImage(imageSrc);
  }

  return (
    <div>
      <div className="h-[500px] w-full relative">
        <Image
          src={selectedImage || ""}
          alt={charm?.label || ""}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>

      <ul className="flex items-center justify-center gap-5">
        {charms.map((charm) => (
          <li
            key={charm.id}
            className="border rounded-lg"
            onClick={() => chooseImage(charm.imageSrc)}
            value={charm.imageSrc}
          >
            <Image
              src={charm.imageSrc}
              width={150}
              height={150}
              alt=""
              className="rounded-lg hover:scale-110 duration-300 cursor-pointer"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
