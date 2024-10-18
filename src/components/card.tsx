import Link from "next/link";
import Image from "next/image";

interface CharmProps {
  label: string;
  imageSrc: string;
  description: string;
  price: number;
}

export default function CharmCard({
  label,
  imageSrc,
  description,
  price,
}: CharmProps) {
  return (
    <Link href={`charms/${label}`}>
      <div className="w-80 h-80 hover:border hover:border-green-900">
        <Image src={imageSrc} alt={label} width={400} height={400} />
        <div className="text-left p-4">
          <div className="mb-2">{description}</div>
          <div className="text-3xl">
            <span className="font-semibold">{price}</span>
            <span className="text-lg">лв.</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
