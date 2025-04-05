"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import MobileMenu from "./mobile-menu";
import NavLink from "./nav-link";
import CartModal from "@/components/cart/cart-modal";

const navItems = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About us",
    url: "/about",
  },
  {
    title: "Charm Bar",
    url: "/charm-bar",
  },
  {
    title: "Charm Bar New",
    url: "/charm-bar-new",
  },
  {
    title: "Catalogue",
    url: "/catalogue",
  },
];

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);

  useEffect(() => {
    function handleScrollbar() {
      if (window.scrollY > lastScrollPosition) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollPosition(window.scrollY);
    }

    window.addEventListener("scroll", handleScrollbar);

    return () => {
      window.removeEventListener("scroll", handleScrollbar);
    };
  }, [lastScrollPosition]);

  return (
    <nav
      className={`sticky z-10 flex h-20 w-full transform items-center justify-between bg-[#490202] p-8 text-white transition-all duration-500 ease-in-out ${isVisible ? "top-0" : "-top-20"}`}
    >
      <div className="block basis-1/3 md:hidden">
        <MobileMenu />
      </div>
      <ul className="hidden basis-1/3 items-center gap-4 md:flex">
        {navItems.map((item) => (
          <li key={item.title}>
            <NavLink href={item.url}>{item.title}</NavLink>
          </li>
        ))}
      </ul>
      <div className="flex basis-1/3 place-content-center">
        <Link href="/">
          <div className="w-full text-3xl font-extrabold uppercase">3Sided</div>
        </Link>
      </div>
      <div className="flex basis-1/3 justify-end">
        <CartModal />
      </div>
    </nav>
  );
}
