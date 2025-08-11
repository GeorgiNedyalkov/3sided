"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import clsx from "clsx";

const charms = [
	{ src: "/falling/1.png", baseRotation: 0, offsetX: 15 },
	{ src: "/falling/2.png", baseRotation: 15, offsetX: -15 },
	{ src: "/falling/1.png", baseRotation: -15, offsetX: 15 },
	{ src: "/falling/2.png", baseRotation: -45, offsetX: -15 },
	{ src: "/falling/1.png", baseRotation: 45, offsetX: 15 },
];

export default function FallingCharms() {
	const ref = useRef(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		if (!ref.current) return;

		const observer = new IntersectionObserver(([entry]) =>
			setIsVisible(entry.isIntersecting), {
			rootMargin: "0px",
			threshold: 0.2,
		});

		observer.observe(ref.current);
		return () => {
			observer.disconnect();
		};
	}, [ref])

	useEffect(() => {
		const handleScroll = () => {
			let scrollY = window.scrollY;
			console.log({ scrollY });
		}

		document.addEventListener("scroll", handleScroll);
		return () => {
			document.removeEventListener("scroll", handleScroll);
		}

	}, [])

	const t = useTranslations("welocomeToTheCharmbar");
	return (
		<section ref={ref} className="bg-primary">
			<div className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:pl-20">
				<div className="p-4 pt-10 text-white lg:p-10">
					<h3 className="pb-4 text-3xl md:text-5xl">{t("heading")}</h3>
					<p className="text-base max-w-2xl mb-4">
						{t("p1")}
					</p>
					<div className="relative mr-10 h-[50vh] w-full lg:w-[50vw] lg:h-[70vh] ">
						<Image
							className="object-cover"
							src="/falling/chess.jpg"
							alt="Chessboard with a gold bracelet on it with many gold charms with red stones"
							fill
							sizes="(min-width: 1024px) 50vw, 100vw"
						/>
					</div>
				</div>
				<div>
					<div className="flex flex-col items-start">
						{/* TODO: optimize images */}
						<Image
							src="/falling/hand.png"
							alt="Hand that is holding a charm"
							width={800}
							height={800}
						/>

						<div className="ml-32">
							{charms.map((charm, idx) => (
								<div
									key={idx}
									className={clsx("",
										isVisible ? "animate-fall" : "",
									)}
								>
									<Image
										src={charm.src}
										width={100}
										height={100}
										alt={`Charm ${idx + 1}`}
										className="w-12 h-12 lg:w-24 lg:h-24"
										style={{
											transform: `rotate(${charm.baseRotation}deg) translateX(${charm.offsetX}px)`
										}}
										sizes="(max-width: 763px) 48px, (max-width: 1024px) 96px"
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}


// export default function FallingCharms() {
// 	const ref = useRef(null);
// 	const [isVisible, setIsVisible] = useState(false);
// 	const [scrollY, setScrollY] = useState(0);
// 	const [rotation, setRotation] = useState(0);
// 	const [translateY, setTranslateY] = useState(0);
//
// 	const t = useTranslations("welocomeToTheCharmbar");
//
// 	useEffect(() => {
// 		const observer = new IntersectionObserver(([entry]) =>
// 			setIsVisible(entry.isIntersecting), {
// 			rootMargin: "0px",
// 			threshold: 0.2,
// 		});
//
// 		if (!ref.current) return;
//
// 		observer.observe(ref.current);
//
// 		return () => {
// 			observer.disconnect();
// 		};
// 	}, [ref])
//
// 	useEffect(() => {
// 		if (!isVisible) {
// 			return
// 		}
//
// 		const handleScroll = () => {
// 			const lastScrollPosition = window.scrollY;
// 			const scrollUp = scrollY < lastScrollPosition
//
// 			setScrollY(window.scrollY);
// 			setRotation(prevRotation => prevRotation += 45)
// 			setTranslateY(prevTranslate => {
// 				if (scrollUp) {
// 					prevTranslate += 10
// 				} else {
// 					prevTranslate -= 10
// 				}
// 				return prevTranslate;
// 			});
// 		};
//
// 		window.addEventListener("scroll", handleScroll);
// 		return () => window.removeEventListener("scroll", handleScroll);
// 	}, [rotation, translateY, isVisible]);
//
//
// 	return (
// 		<section ref={ref} className="bg-primary">
// 			<div className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:pl-20">
// 				<div className="p-4 pt-10 text-white lg:p-10">
// 					<h3 className="pb-4 text-3xl md:text-5xl">{t("heading")}</h3>
// 					<p className="text-base max-w-2xl mb-4">
// 						{t("p1")}
// 					</p>
// 					<div className="relative mr-10 h-[50vh] w-full lg:w-[50vw] lg:h-[70vh] ">
// 						<Image
// 							className="object-cover"
// 							src="/falling/chess.jpg"
// 							alt="This is a cup"
// 							fill
// 							sizes="(min-width: 1024px) 50vw, 100vw"
// 						/>
// 					</div>
// 				</div>
// 				<div>
// 					<div className="flex flex-col items-start">
// 						{/* TODO: optimize images */}
// 						<Image src="/falling/hand.png" alt="Hand that is holding a charm" width={800} height={800} className="" />
//
// 						<div className="ml-32">
// 							{charms.map((charm, idx) => (
// 								<div
// 									key={idx}
// 									className="transition-all duration-300 ease-linear"
// 									style={{
// 										transform: `translateY(${translateY}px) translateX(${charm.offsetX}px)`,
// 									}}
// 								>
// 									<Image
// 										src={charm.src}
// 										width={100}
// 										height={100}
// 										alt={`Charm ${idx + 1}`}
// 										className="transition-all duration-500 ease-in-out w-12 h-12 lg:w-24 lg:h-24"
// 										style={{
// 											transform: `rotateZ(${charm.baseRotation + rotation}deg)`,
// 										}}
// 										sizes="(max-width: 763px) 48px, (max-width: 1024px) 96px"
// 									/>
// 								</div>
// 							))}
// 						</div>
//
// 					</div>
// 				</div>
// 			</div>
// 		</section>
// 	);
// }
//
