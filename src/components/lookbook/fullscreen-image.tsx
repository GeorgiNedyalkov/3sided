import Image from "next/image";

export default function FullscreenImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-[30vh] w-full md:h-[40vh] lg:h-[50vh]">
      <Image
        src={src}
        alt={alt}
        className="object-cover"
        fill
        sizes="(max-width: 500px) 100vw, (max-width: 1200px) 50vw, 100vw"
        priority
      />
    </div>
  );
}
