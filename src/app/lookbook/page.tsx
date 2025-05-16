import Image from "next/image";

import LookBookThreePictureGrid from "@/components/lookbook/lookbook-grid-3";
import LookBookThreeColumnsGrid from "@/components/lookbook/lookbook-grid-3-columns";
import LookBookFourPicturesGrid from "@/components/lookbook/lookbook-grid-4";
import LookBookHeader from "@/components/lookbook/lookbook-header";

export default function LookbookPage() {
  return (
    <>
      <LookBookHeader />
      <Collage />
      <LookBookThreeColumnsGrid />
      <LookBookThreePictureGrid />
      <LookBookFourPicturesGrid />
    </>
  );
}


function Collage() {
  return (
    <div className="flex items-center justify-center">
      <Image src="/lookbook/collage.jpg" width={1980} height={1080} alt="" />
    </div>
  )
}

