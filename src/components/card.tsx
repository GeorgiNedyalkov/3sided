"use client"
import { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"

interface CharmProps {
  label: string
  imageSrc: string
  description: string
  price: number
}

export default function CharmCard({
  label,
  imageSrc,
  description,
  price,
}: CharmProps) {
  const [playVideo, setPlayVideo] = useState(false)

  const videoRef = useRef<HTMLVideoElement>(null)

  function handleMouseEnter() {
    setPlayVideo(true)
    videoRef.current?.play()
  }

  function handleMouseLeave() {
    setPlayVideo(false)
    videoRef.current?.pause()
  }

  return (
    <Link href={`charms/${label}`}>
      <div className="w-80 border border-transparent hover:border-green-900">
        <div></div>
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
            className={`${playVideo ? "hidden" : "object-cover"}`}
          />

          <video
            ref={videoRef}
            src="/video.mp4"
            className="h-full object-cover"
            autoPlay
            muted
            loop
          >
            Video
          </video>
        </div>
        <div className="p-4 text-left">
          <div className="mb-2">{description}</div>
          <div className="text-3xl">
            <span className="font-semibold">{price}</span>
            <span className="text-lg">лв.</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
