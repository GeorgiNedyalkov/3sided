"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastYPosition, setLastYPosition] = useState<number>(0);

  function handleScroll() {
    const windowScrollY = window.scrollY;

    if (windowScrollY > lastYPosition) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    setLastYPosition(windowScrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastYPosition]);

  return (
    <nav
      className={`bg-gray-100 text-black fixed w-full ${
        isVisible ? "fixed" : "hidden"
      }`}
    >
      <ul className="flex items-center justify-between h-20 px-20">
        <Link href="/">
          <li className="text-3xl font-extrabold uppercase w-[50vw] text-right">
            3Sided
          </li>
        </Link>
        {/* <Link href="/cart">
          <li>cart</li>
        </Link> */}
      </ul>
    </nav>
  );
}
