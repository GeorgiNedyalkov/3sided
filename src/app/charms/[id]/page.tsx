"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { charms } from "@/lib/placeholder-data";

function getCharmByLabel(label: string | string[]) {
  return charms.find((charm) => `${charm.label}` == label);
}

export default function CharmPage() {
  const params = useParams();

  const charmLabel = params?.id;

  const charm = getCharmByLabel(charmLabel);

  return (
    <div className="w-full h-96 pt-20">
      <div className="w-80 h-80 hover:border hover:border-green-900">
        <Image
          src={charm?.imageSrc || ""}
          alt={charm?.label || ""}
          width={400}
          height={400}
        />
        <div className="text-left p-4">
          <div className="mb-2">{charm?.description}</div>
          <div className="text-3xl">
            <span className="font-semibold">{charm?.price}</span>
            <span className="text-lg">лв.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
