"use client";
import Link from "next/link";
// import { ShoppingCartIcon } from "@heroicons/react/20/solid";
import { useState, useEffect } from "react";
// import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastYPosition, setLastYPosition] = useState<number>(0);

  // const { cart } = useCart();

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
      className={`bg-gray-100 text-black fixed w-full z-10 ${
        isVisible ? "fixed" : "hidden"
      }`}
    >
      <ul className="flex items-center justify-center h-20 px-20">
        <Link href="/">
          <li className="text-3xl font-extrabold uppercase w-full text-center">
            3Sided
          </li>
        </Link>
        {/* <Link href="/cart">
          <li className="font-5xl flex items-start justify-center gap-2">
            <ShoppingCartIcon className="h-5 w-5" />
            <div>{cart?.length}</div>
          </li>
        </Link> */}
      </ul>
    </nav>
  );
}
