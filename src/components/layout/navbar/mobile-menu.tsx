"use client";

import { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const navItems = [
  {
    title: "Charm bar",
    url: "/charm-bar",
  },
  {
    title: "Collections",
    url: "/collections",
  },
  {
    title: "Shop",
    url: "/shop",
  },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  return (
    <div>
      <button onClick={openMenu}>
        <Bars3Icon className="h-6" />
      </button>
      <div
        className={`absolute top-0 flex h-screen w-full transform bg-slate-200 transition-all duration-500 ease-in-out ${isOpen ? "left-0" : "-left-96"} `}
      >
        <div className="p-6">
          <button onClick={closeMenu} className="mb-4">
            <XMarkIcon className="h-6" />
          </button>
          <ul className="grid gap-2">
            {navItems.map((item) => (
              <li key={item.title}>
                <Link onClick={closeMenu} href={item.url}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
