import Image from "next/image";
import { Product } from "@/lib/shopify/types";
import { categoryPositionSettings } from "@/lib/placeholder-data";
import { useCharmBar } from "@/components/charm-bar/charm-bar-context";
import CharmPositionSelector from "@/components/charm-bar/charm-position-selector";

export default function CharmCanvas({ chain }: { chain: Product }) {
  const { selectedCharms } = useCharmBar();
  let selectedCategory = categoryPositionSettings.find((category) => category.handle === chain.handle) || categoryPositionSettings[0];

  return (
    <div className="relative h-[500px] w-[90vw] lg:h-[70vh] lg:w-[500px] mx-auto">
      <Image
        src={chain.featuredImage.url}
        alt="Selected chain on the charm bar"
        className="absolute h-full w-full object-contain"
        fill
        priority
        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw"
      />

      <CharmPositionSelector
        positionSettings={selectedCategory!.settings}
        selectedCharms={selectedCharms}
      />
    </div>
  );
}

// / import { useActionState, useRef } from "react";
// import html2canvas from "html2canvas";
// import { uploadImage } from "@/lib/cloudinary/actions";

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
