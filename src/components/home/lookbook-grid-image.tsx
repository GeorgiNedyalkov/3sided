import Image from "next/image";

export default function GridImage({
  isGold,
  goldImage,
  silverImage,
  className,
}: {
  isGold: boolean;
  goldImage: string;
  silverImage: string;
  className?: string;
}) {
  const imageSrc = isGold ? goldImage : silverImage;

  return <Image src={imageSrc} alt={`An image of a charm`} className={`h-full w-full object-cover ${className}`} fill />;
}
