import Image from "next/image";

interface CardProps {
  imageSrc: string;
  label: string;
  price: number;
}

export default function CharmCard({ label, price, imageSrc }: CardProps) {
  return (
    <div className="w-80 h-80">
      <Image src={imageSrc} alt={label} width={400} height={400} />
      <div className="text-left p-4">
        <div className="mb-2">{label}</div>
        <div className="text-3xl">
          <span className="font-semibold">{price}</span>{" "}
          <span className="text-lg">лв.</span>
        </div>
      </div>
    </div>
  );
}
