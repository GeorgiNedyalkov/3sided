"use client";
import Image from "next/image";
import { useState, useEffect, useRef, MutableRefObject } from "react";

// TODO: Improve through Grok Suggestions https://grok.com/chat/08522e38-a51e-4747-9250-f4b6c177966d
// TODO: Make charms have absolute positions relative 
// to the section and not being influenced if they are not in the viewport

const charms = [
  { src: "/falling/1.png", baseRotation: 0, offsetX: 15 },
  { src: "/falling/2.png", baseRotation: 15, offsetX: -15 },
  { src: "/falling/3.png", baseRotation: -15, offsetX: 15 },
  { src: "/falling/4.png", baseRotation: -45, offsetX: -15 },
  { src: "/falling/5.png", baseRotation: 45, offsetX: 15 },
  { src: "/falling/6.png", baseRotation: -45, offsetX: -15 },
];

export default function FallingCharms() {
  const ref = useRef<MutableRefObject<HTMLDivElement> | null>(null); // this is the reference of an element that triggers a scroll animation
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setIsVisible(entry.isIntersecting), {
      rootMargin: "0px",
      threshold: 0.2,
    });


    if (!ref.current) return;

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref])

  useEffect(() => {
    if (!isVisible) {
      return
    }

    const handleScroll = () => {
      const lastScrollPosition = window.scrollY;
      const scrollUp = scrollY < lastScrollPosition

      setScrollY(window.scrollY);
      setRotation(prevRotation => prevRotation += 45)
      setTranslateY(prevTranslate => {
        if (scrollUp) {
          prevTranslate += 20
        } else {
          prevTranslate -= 20
        }
        return prevTranslate;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [rotation, translateY, isVisible]);


  return (
    <section ref={ref} className="bg-primary">
      <div className="px-4 lg:px-20 text-white flex flex-col gap-4 lg:flex-row">
        <div className="flex flex-col gap-4">
          <h3 className="pb-4 pt-20 text-5xl">Welcome to our charm bar</h3>
          <p className="text-xl max-w-96">You can create the jewelry based on your own personal style, hobbies, zodiac and
            more.
          </p>
          <div className="relative h-[50vh] w-full lg:w-[50vw] lg:h-[70vh] ">
            <Image
              className="object-cover"
              src="/home/chess.png"
              alt="This is a cup"
              fill
            />
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center">
            {/* TODO: optimize images */}
            <Image src="/falling/hand.png" alt="Hand that is holding a charm" width={800} height={800} className="" />

            {charms.map((charm, idx) => (
              <div
                className="transition-all duration-300 ease-linear"
                style={{
                  transform: `translateY(${translateY}px) translateX(${charm.offsetX}px)`,
                }}
              >
                <Image
                  key={idx}
                  src={charm.src}
                  width={100}
                  height={100}
                  alt={`Charm ${idx + 1}`}
                  className="transition-all duration-500 ease-in-out w-12 h-12 lg:w-24 lg:h-24"
                  style={{
                    transform: `rotateZ(${charm.baseRotation + rotation}deg)`,
                  }}
                />
              </div>
            ))}

            <Image src="/falling/bowl.png" alt="Golden bowl where the charms are falling" width={800} height={800} className="" />
          </div>
        </div>
      </div>
    </section>
  );
}

