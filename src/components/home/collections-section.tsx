"use client"

import Link from "next/link";
import Image from "next/image";
import React, { useState, useRef } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'

import 'swiper/css';
import 'swiper/css/navigation';
import { useTranslations } from "next-intl";

type CollectionsProps = {
	id: string;
	name: string;
	link: string;
	imageSrc: string;
}[];

const collectionsSlide1: CollectionsProps = [
	{
		id: "love",
		name: "Love",
		link: "/catalogue/",
		imageSrc: "/collections/love.jpg"
	},
	{
		id: "summer",
		name: "Summer",
		link: "/catalogue/",
		imageSrc: "/collections/summer.jpg"
	},
	{
		id: "letters_and_numbers",
		name: "Letters and Numbers",
		link: "/catalogue/",
		imageSrc: "/collections/letters.jpg"
	},
	{
		id: "hobbies",
		name: "Hobbies and Professions",
		link: "/catalogue/",
		imageSrc: "/collections/hobbies.jpg"
	},
]

const collectionsSlide2: CollectionsProps = [
	{
		id: "food_and_drinks",
		name: "Foods and Drinks",
		link: "/catalogue/",
		imageSrc: "/collections/food.jpg"
	},
	{
		id: "devine",
		name: "Divine",
		link: "/catalogue/",
		imageSrc: "/collections/girls.webp"
	},
	{
		id: "flowers",
		name: "Flowers",
		link: "/catalogue/",
		imageSrc: "/collections/diamond.jpg"
	},
	{
		id: "animals",
		name: "Animals",
		link: "/catalogue/",
		imageSrc: "/collections/girls.webp"
	},
]


export default function CollectionsSection() {
	const t = useTranslations()
	return (
		<section className="px-4 bg-primary text-white lg:p-20 ">
			<SectionTitle>{t("Collections")}</SectionTitle>
			<Swiper
				navigation={true}
				modules={[Navigation]}
			>
				<SwiperSlide>
					<Collections collections={collectionsSlide1} />
				</SwiperSlide>
				<SwiperSlide>
					<Collections collections={collectionsSlide2} />
				</SwiperSlide>
			</Swiper>
		</section>
	)
}

function Collections({ collections }: {
	collections: {
		id: string,
		name: string,
		link: string,
		imageSrc: string
	}[]
}) {
	return (
		< ul className="grid px-20 grid-cols-1 md:grid-cols-2 md:gap-20">
			{collections.map((collection) => (
				<Link key={collection.id} href={collection.link} className="w-full">
					<div className="relative h-[35vh] w-[35vw] w-full bg-stone-600">
						{/* TODO: optimize images */}
						<Image
							src={collection.imageSrc}
							alt={`Charms from a  ${collection.name} collection`}
							className="object-cover"
							fill
						/>
					</div>
					<h3 className="py-4 text-center text-2xl font-semibold">{collection.name}</h3>
				</Link>
			))}
		</ul>
	)
}

function SectionTitle({ children }: { children: React.ReactNode }) {
	return <h2 className="pb-10 text-6xl font-bold">{children}</h2>
}
