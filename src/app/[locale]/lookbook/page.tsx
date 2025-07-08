import Image from "next/image";

import LookBookHeader from "@/components/lookbook/lookbook-header";

export default function LookbookPage() {
  return (
    <>
      <LookBookHeader />
      <Collage />
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

