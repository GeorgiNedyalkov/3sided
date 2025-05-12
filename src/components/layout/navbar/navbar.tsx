"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon, UserIcon } from "@heroicons/react/16/solid";
import CartModal from "@/components/cart/cart-modal";
import { LogoMark } from "@/components/logo";
import { categoriesComponents } from "@/lib/placeholder-data"
import { NavigationItemComponent, NavItem } from "@/lib/definitions"

const navItems: NavItem[] = [
  {
    title: "Charm Bar",
    url: "/charm-bar",
	components: categoriesComponents,
  },
  {
    title: "Catalogue",
    url: "/catalogue",
  },
  {
    title: "Lookbook",
    url: "/lookbook",
  },
  {
    title: "About us",
    url: "/about",
  },
  {
    title: "Contact us",
    url: "/contact",
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
	  className={clsx("sticky z-[999] flex h-20 w-full transform items-center justify-between bg-[#490202] p-8 text-white transition-all duration-500 ease-in-out top-0", 
					  { 
						"-top-20": !isVisible 
					  }
					 )}>
	  <div className="flex basis-1/3">
	  <NavigationMenu />
	  </div>

      <div className="flex basis-1/3 place-content-center">
        <LogoMark />
      </div>

      <div className="flex basis-1/3 justify-end items-center gap-4">
        <MagnifyingGlassIcon className="h-8" />
        <UserIcon className="h-8" />
        <CartModal />
      </div>
    </nav>
  );
}



function NavigationMenu() {
	const [isOpen, setIsOpen] = useState(true);

	const openMenu = () => setIsOpen(true);
	const closeMenu = () => setIsOpen(false);
	return (
		<>
			<button onClick={openMenu}>
			  <Bars3Icon className="flex h-10" />
			</button>
			<div
			  className={clsx(
				"absolute top-0 z-50 flex h-screen w-96 transform bg-primary transition-all duration-500 ease-in-out -left-0",
				{
				  "-left-full": !isOpen,
				}
			  )}
			>
			  <div className="p-6">
				<button onClick={closeMenu} className="mb-20">
				  <XMarkIcon className="h-10" />
				</button>

				<ul className="grid gap-10">
				  {navItems.map((item) => (
					<li key={item.title} onClick={closeMenu}>
						<NavigationItem item={item} />
					</li>
				  ))}
				</ul>
			  </div>
			</div>
		</>
	)
}

function NavigationItem({item}: {item: NavItem}) {
	return (
		<Link href={item.url} className="cursor-pointer text-3xl group">
		<div className="group">
			<span className="group relative inline-block">
				{item.title}
			<span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-red-500 transition-all duration-500 group-hover:left-0 group-hover:w-full"></span>
		</span>
		{
			item.components && item.components.length > 0 && (
				<div className="absolute h-screen top-0 p-10 -right-[300px] bg-slate-500 w-96 h-96 hidden group-hover:block">
				{
					item.components.map((component) => (
						<div>
							<p>{component.title}</p>
						</div>
					))
				}
				</div>
			)
		}
		</div>
		</Link>
	)
}
