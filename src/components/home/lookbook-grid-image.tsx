import Image from "next/image";

export default function GridImage({
  isGold,
  goldImage,
  silverImage,
}: {
  isGold: boolean;
  goldImage: string;
  silverImage: string;
}) {
  const imageSrc = isGold ? goldImage : silverImage;

  return <Image src={imageSrc} alt="" className="h-full w-full object-cover" fill />;
}
