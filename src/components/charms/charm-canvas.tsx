import { useActionState, useRef } from "react";

import Image from "next/image";
import html2canvas from "html2canvas";
import { uploadImage } from "@/lib/cloudinary/actions";
import { Necklace, Product } from "@/lib/shopify/types";
import CharmPositionSelector from "../charm-bar/charm-position-selector";

const settings = [
  { top: "78%", left: "42%", rotation: "0deg" },
  { top: "62%", right: "18%", rotation: "-45deg" },
  { top: "62%", left: "18%", rotation: "45deg" },
  { top: "40%", right: "8%", rotation: "-45deg" },
  { top: "40%", left: "10%", rotation: "45deg" },
];

export default function CharmCanvas({
  selectedCharms,
  selectedCharmPosition,
  onSelectPosition,
  chain,
}: {
  selectedCharms: Product[];
  selectedCharmPosition: number;
  onSelectPosition(index: number): void;
  chain: Necklace;
}) {
  const [state, formAction, isPending] = useActionState(takePictureAction, null);

  const ref = useRef<HTMLDivElement>(null);

  async function takePictureAction(
    prevState: { error?: string, success?: boolean } | null,
    formData: FormData
  ) {
    if (!ref.current) {
      return { error: "No element to capture", success: false };
    };

    try {
      const canvas = await html2canvas(ref.current);
      const dataUrl = canvas.toDataURL("image/png");
      await uploadImage(dataUrl);
      return {
        success: true,
      }
    } catch (error) {
      return { error: "Failed to upload image", success: false };
    }
  }

  return (
    <div ref={ref} className="relative mx-auto h-[250px] w-[90vw] lg:h-[70vh] lg:w-[500px]">
      <Image
        src={chain.src}
        alt="Selected chain on the charm bar"
        className="absolute h-full w-full object-contain"
        fill
        priority
      />

      <CharmPositionSelector
        positionSettings={settings}
        selectedCharms={selectedCharms}
        selectedCharmPosition={selectedCharmPosition}
        onSelectPosition={onSelectPosition}
      />


      {/* NOTE: This is just for testing upload Image */}
      <form action={formAction}>
        <button
          className="absolute bg-black text-white p-4"
          type="submit"
          disabled={isPending}
        >
          <p>
            {isPending ? "..." : "Upload"}
          </p>
        </button>
      </form>

      {state?.error && <p className="text-red-500">{state.error}</p>}
      {state?.success && <p className="text-green-500">Image uploaded successfully</p>}

    </div>
  );
}
