// import { useActionState, useRef } from "react";
// import html2canvas from "html2canvas";
// import { uploadImage } from "@/lib/cloudinary/actions";
import Image from "next/image";
import { Product } from "@/lib/shopify/types";
import CharmPositionSelector from "../charm-bar/charm-position-selector";
import { categoryPositionSettings } from "@/lib/placeholder-data";

export default function CharmCanvas({
  selectedCharms,
  selectedCharmPosition,
  onSelectPosition,
  onRemoveCharm,
  chain,
}: {
  selectedCharms: (Product | null)[];
  selectedCharmPosition: number;
  onSelectPosition(index: number): void;
  onRemoveCharm(index: number): void;
  chain: Product;
}) {

  let selectedCategory = categoryPositionSettings.find((category) => category.handle === chain.handle) || categoryPositionSettings[0];

  return (
    <div className="relative mx-auto h-[500px] w-[90vw] lg:h-[70vh] lg:w-[500px]">
      {/* TODO: Add sizes for optmiziation */}
      <Image
        src={chain.featuredImage.url}
        alt="Selected chain on the charm bar"
        className="absolute h-full w-full object-contain"
        fill
        priority
      />

      <CharmPositionSelector
        positionSettings={selectedCategory!.settings}
        selectedCharms={selectedCharms}
        selectedCharmPosition={selectedCharmPosition}
        onSelectPosition={onSelectPosition}
        onRemoveCharm={onRemoveCharm}
      />
    </div>
  );
}

// <div ref={ref} className="relative mx-auto h-[500px] w-[90vw] lg:h-[70vh] lg:w-[500px]">
// const [state, formAction, isPending] = useActionState(takePictureAction, null);
// const ref = useRef<HTMLDivElement>(null);


{/* NOTE: This is just for testing upload Image */ }
{/* <form action={formAction}> */ }
{/*   <button */ }
{/*     className="absolute bg-black text-white p-4" */ }
{/*     type="submit" */ }
{/*     disabled={isPending} */ }
{/*   > */ }
{/*     <p> */ }
{/*       {isPending ? "..." : "Upload"} */ }
{/*     </p> */ }
{/*   </button> */ }
{/* </form> */ }
{/**/ }
{/* {state?.error && <p className="text-red-500">{state.error}</p>} */ }
{/* {state?.success && <p className="text-green-500">Image uploaded successfully</p>} */ }

// async function takePictureAction() {
//   if (!ref.current) {
//     return { error: "No element to capture", success: false };
//   };
//
//   try {
//     const canvas = await html2canvas(ref.current);
//     const dataUrl = canvas.toDataURL("image/png");
//     await uploadImage(dataUrl);
//     return {
//       success: true,
//     }
//   } catch (error) {
//     return { error: "Failed to upload image", success: false };
//   }
// }
