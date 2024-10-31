"use client"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollPosition, setLastScrollPosition] = useState(0)

  function handleScrollbar() {
    if (window.scrollY > lastScrollPosition) {
      setIsVisible(false)
    } else {
      setIsVisible(true)
    }

    setLastScrollPosition(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollbar)

    return () => {
      window.removeEventListener("scroll", handleScrollbar)
    }
  }, [lastScrollPosition])

  return (
    <nav
      className={`sticky z-10 w-full bg-gray-100 text-black duration-300 ${isVisible ? "top-0" : "-top-52"} `}
    >
      <ul className="flex h-20 items-center justify-center px-20">
        <Link href="/">
          <li className="w-full text-center text-3xl font-extrabold uppercase">
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
  )
}
