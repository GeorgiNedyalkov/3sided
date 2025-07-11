import Image from "next/image";

import LookBookHeader from "@/components/lookbook/lookbook-header";

const collages = [
  { src: "/lookbook/blue_collage.jpg", alt: "Blue collage", horizontal: false },
  { src: "/lookbook/blue_collage_2.jpg", alt: "Second blue collage", horizontal: false },
  { src: "/lookbook/devi_2_collage.jpg", alt: "Devi second collage", horizontal: false },
  { src: "/lookbook/devi_collage.jpg", alt: "Devi collage", horizontal: false },
  { src: "/lookbook/hands_collage.jpg", alt: "Hands collage", horizontal: false },
  { src: "/lookbook/horizontal_blue.jpg", alt: "Horizontal blue theme", horizontal: true },
  { src: "/lookbook/horizontal_blue_2.jpg", alt: "Second horizontal blue theme", horizontal: true },
  { src: "/lookbook/horizontal_cowboy.jpg", alt: "Horizontal cowboy theme", horizontal: true },
  { src: "/lookbook/horizontal_devi.jpg", alt: "Horizontal Devi", horizontal: true },
  { src: "/lookbook/horizontal_devi_1.jpg", alt: "Horizontal Devi version 1", horizontal: true },
  { src: "/lookbook/horizontal_hands.jpg", alt: "Horizontal hands", horizontal: true },
  { src: "/lookbook/horizontal_qni.jpg", alt: "Horizontal Qni", horizontal: true },
  { src: "/lookbook/horizontal_qni_2.jpg", alt: "Horizontal Qni version 2", horizontal: true },
  { src: "/lookbook/horizontal_qnina.jpg", alt: "Horizontal Qnina", horizontal: true },
  { src: "/lookbook/horizontal_red.jpg", alt: "Horizontal red", horizontal: true },
  { src: "/lookbook/horizontal_red_2.jpg", alt: "Horizontal red version 2", horizontal: true },
  { src: "/lookbook/qni_2_collage.jpg", alt: "Qni second collage", horizontal: false },
  { src: "/lookbook/qni_collage.jpg", alt: "Qni collage", horizontal: false },
  { src: "/lookbook/qnina_collage.jpg", alt: "Qnina collage", horizontal: false },
  { src: "/lookbook/red_2_collage.jpg", alt: "Second red collage", horizontal: false },
  { src: "/lookbook/red_collage.jpg", alt: "Red collage", horizontal: false },
];


export default function LookbookPage() {
  return (
    <>
      <LookBookHeader />
      <div className="flex flex-wrap gap-10 items-center justify-center">
        {collages.map(({ src, alt }) => (
          <Collage src={src} alt={alt} />
        ))}
      </div>
    </>
  )
}

function Collage({ src, alt, horizontal }: { src: string, alt: string, horizontal?: boolean }) {

  let width = horizontal ? 1280 : 719;
  let height = horizontal ? 720 : 1280;

  return (
    <Image src={src} alt={alt} width={width} height={height} />
  )
}

