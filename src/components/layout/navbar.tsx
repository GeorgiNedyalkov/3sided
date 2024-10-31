"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      className={`bg-gray-100 text-black z-10 fixed top-0 w-full transition-all duration-300`}
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
