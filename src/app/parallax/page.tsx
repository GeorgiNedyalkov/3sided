"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const charms = [
  { src: "/charm_3.png", baseRotation: 0, offset: 2 },
  { src: "/charm_4.webp", baseRotation: 45, offset: 0 },
  { src: "/charm_5.webp", baseRotation: -45, offset: 0 },
];

export default function Page() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const calculateRotation = (baseRotation: number) => baseRotation + scrollY * 1;
  const calculateTranslation = (offset: number) => scrollY * offset * 0.2;

  return (
    <div className="bg-primary">
      <div className="mx-auto flex h-screen w-full max-w-screen-xl flex-col justify-between md:flex-row">
        <div className="flex h-screen flex-col justify-between">
          <h1 className="pt-20 text-2xl text-tertiary-2">
            MEANT TO BE MIXED, MATCHED,
            <br />
            STACKED, AND THOROUGHLY <span className="font-bo text-tertiary-1">ENJOYED</span>
          </h1>

          <div className="pb-64">
            <h3 className="text-2xl text-secondary-1">Welcome to our charm bar</h3>
            <p className="text-tertiary-2">
              You can create the jewelry based on your own personal style, hobbies, zodiac and more
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center">
            <Image src="/hand_charm_drop_no_background.png" width={400} height={400} alt="" />
            {charms.map((charm, idx) => (
              <Image
                key={idx}
                src={charm.src}
                width={100}
                height={100}
                alt={`Charm ${idx + 1}`}
                style={{
                  transform: `rotate(${calculateRotation(charm.baseRotation)}deg) translateY(${calculateTranslation(
                    charm.offset
                  )}px)`,
                  transformOrigin: "50% 50%",
                }}
              />
            ))}
            <Image src="/pornstar_martini.png" width={400} height={400} alt="" className="" />
          </div>
        </div>
      </div>
      <div className="h-64 bg-secondary-1"></div>
    </div>
  );
}

// function CharmedCocktail() {
//   return (
//     <div className="flex flex-col items-center">
//       <div className="-mb-24">
//         <Image src="/hand_charm_drop_no_background.png" width={400} height={400} alt="" />
//       </div>
//       <Image src="/charm_3.png" width={100} height={100} alt="" className="ml-32" />
//       <Image src="/charm_4.webp" width={100} height={100} alt="" className="mr-32" />
//       <Image src="/charm_5.webp" width={100} height={100} alt="" className="" />
//       <Image src="/pornstar_martini.png" width={400} height={400} alt="" className="" />
//     </div>
//   );
// }
