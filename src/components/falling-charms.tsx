"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const charms = [
  { src: "/falling/1.png", baseRotation: 0, offset: 1 },
  { src: "/falling/2.png", baseRotation: 15, offset: 2 },
  { src: "/falling/3.png", baseRotation: -15, offset: 3 },
  { src: "/falling/4.png", baseRotation: -15, offset: 4 },
];

export default function FallingCharms() {
  const [scrollY, setScrollY] = useState(0);
  const [moveDown, setMoveDown] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setMoveDown((moveDown) => moveDown++);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const calculateRotation = (baseRotation: number) => baseRotation + scrollY * 1;
  return (
    <div className="bg-primary">
      <div className="mx-auto flex h-screen w-full justify-between flex-col md:flex-row">
        <div className="flex h-screen flex-col justify-between">
          <div className="pb-64">
            <div className="pl-40 flex flex-col justify-center gap-2">
              <h3 className="pb-4 pt-20 text-5xl text-secondary-1">Welcome to our charm bar</h3>
              <p className="text-tertiary-2">
                You can create the jewelry based on your own personal style, hobbies, zodiac and
                more.
              </p>
              <p className="text-tertiary-2">3SIDED that brand that took over Bulgaria.</p>
              <div className="h-[70vh] w-[500px] relative">
                <Image
                  className="object-contain"
                  src="/falling/milk.jpg"
                  alt="This is a cup"
                  fill
                />
              </div>


            </div>
          </div>
        </div>
        <div>
          {/* Falling Charms Arm */}
          <div className="flex flex-col items-start">
            <Image src="/falling/hand.png" className="" width={600} height={600} alt="" />
            {charms.map((charm, idx) => (
              <Image
                key={idx}
                src={charm.src}
                width={70}
                height={70}
                alt={`Charm ${idx + 1}`}
                style={{
                  marginLeft: 100,
                  transform: `rotate(${calculateRotation(charm.baseRotation)}deg) translate3d(0, ${moveDown}px, 0)`,
                }}
              />
            ))}
            <Image src="/falling/bowl.png" width={500} height={500} alt="" className="-ml-28" />
          </div>
        </div>
      </div>
    </div>
  );
}
