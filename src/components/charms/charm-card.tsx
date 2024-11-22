"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";

export default function CharmCard({
  label,
  imageSrc,
  description,
  price,
  status,
}: {
  label: string;
  imageSrc: string;
  description: string;
  price: number;
  status?: string;
}) {
  const [playVideo, setPlayVideo] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  function handleMouseEnter() {
    setPlayVideo(true);
    videoRef.current?.play();
  }

  function handleMouseLeave() {
    setPlayVideo(false);
    videoRef.current?.pause();
  }

  return (
    <Link href={`charms/${label}`}>
      <div
        className="relative h-72 w-full"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src={imageSrc}
          alt={label}
          sizes=""
          fill
          className={`${playVideo ? "hidden" : "object-cover"} bg-white`}
        />

        <video ref={videoRef} src="/video.mp4" className="h-full object-cover" muted loop>
          Video
        </video>
        <div className="absolute top-0 m-4 w-12 max-w-12 rounded-md bg-secondary-1 text-center text-primary">
          {status}
        </div>
        <div className="absolute right-0 top-0 m-4 w-6 rounded-md text-center text-secondary-1 lg:hidden">
          <ShoppingBagIcon className="" />
        </div>
      </div>
      <div className="p-4 text-left">
        <div className="mb-2">{description}</div>
        <div className="text-3xl">
          <span className="font-semibold text-primary">{price} </span>
          <span className="text-lg">лв.</span>
        </div>
      </div>
    </Link>
  );
}
