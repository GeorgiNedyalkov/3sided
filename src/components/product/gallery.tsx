import Image from "next/image";
import { useParams } from "next/navigation";
import { charms } from "@/lib/placeholder-data";

function getCharmByLabel(label: string | string[]) {
  return charms.find((charm) => `${charm.label}` == label);
}

export default function Gallery({ images }: { images: { src: string; alt: string }[] }) {
  const params = useParams();
  const charmLabel = params.id!;
  const charm = getCharmByLabel(charmLabel);

  return (
    <div>
      <div className="relative h-96 w-full md:h-[40vh]">
        <Image
          src={images[0].src || ""}
          alt={charm?.label || ""}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>
    </div>
  );
}
