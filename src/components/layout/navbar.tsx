"use client"
import { ShoppingCartIcon } from "@heroicons/react/16/solid"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollPosition, setLastScrollPosition] = useState(0)

  useEffect(() => {
    function handleScrollbar() {
      if (window.scrollY > lastScrollPosition) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      setLastScrollPosition(window.scrollY)
    }

    window.addEventListener("scroll", handleScrollbar)

    return () => {
      window.removeEventListener("scroll", handleScrollbar)
    }
  }, [lastScrollPosition])

  return (
    <nav
      className={`sticky z-10 w-full bg-gray-100 text-black duration-300 ${isVisible ? "top-0" : "-top-52"} `}
    >
      <ul className="flex h-20 items-center px-20">
        <div className="flex basis-1/3 justify-center gap-4">
          <Link href="/charm-bar">
            <li>Charm Bar</li>
          </Link>
          <Link href="/cart">
            <li>Collections</li>
          </Link>
          <Link href="/shop">
            <li>Shop</li>
          </Link>
        </div>
        <div className="flex basis-1/3 place-content-center">
          <Link href="/">
            <li className="w-full text-3xl font-extrabold uppercase">3Sided</li>
          </Link>
        </div>
        <div className="flex basis-1/3 justify-end">
          <Link href="/cart">
            <li className="font-5xl flex items-start justify-center gap-2">
              <ShoppingCartIcon className="h-5 w-5" />
            </li>
          </Link>
        </div>
      </ul>
    </nav>
  )
}
