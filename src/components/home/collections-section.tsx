"use client"

import Link from "next/link";
import Image from "next/image";
import React, { useState, useRef } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Grid } from 'swiper/modules'

import 'swiper/css';
import 'swiper/css/navigation';
import { useTranslations } from "next-intl";

// TODO: Import collections from placeholder because they are shared with charm bar

type Collection = {
	id: string;
	name: string;
	link: string;
	imageSrc: string;
};


const collections: Collection[] = [
	{
		id: "love",
		name: "Love",
		link: "/catalogue/love",
		imageSrc: "/collections/love.jpg"
	},
	{
		id: "summer",
		name: "Summer",
		link: "/catalogue/summer",
		imageSrc: "/collections/summer.jpg"
	},
	{
		id: "letters_and_numbers",
		name: "Letters and Numbers",
		link: "/catalogue/letters",
		imageSrc: "/collections/letters.jpg"
	},
	{
		id: "hobbies",
		name: "Hobbies and Professions",
		link: "/catalogue/hobies",
		imageSrc: "/collections/hobbies.jpg"
	},
	{
		id: "food_and_drinks",
		name: "Foods and Drinks",
		link: "/catalogue/food",
		imageSrc: "/collections/food.jpg"
	},
	{
		id: "devine",
		name: "Divine",
		link: "/catalogue/girls",
		imageSrc: "/collections/divine.jpg"
	},
	{
		id: "flowers",
		name: "Flowers",
		link: "/catalogue/plants",
		imageSrc: "/collections/flowers.jpg"
	},
	{
		id: "animals",
		name: "Animals",
		link: "/catalogue/Animal",
		imageSrc: "/collections/animals.jpg"
	},
]

export default function CollectionsSection() {
	const t = useTranslations()
	return (
		<section className="py-10 px-4 bg-primary text-white lg:p-20 min-h-[70vh]">
			<h2 className="pb-10 text-5xl md:text-6xl font-bold">{t("Collections")}</h2>
			<Swiper
				className="h-[90vh]"
				navigation={true}
				modules={[Navigation, Grid]}
				spaceBetween={20}
				breakpoints={{
					0: {
						slidesPerView: 1,
						centeredSlides: true,
						grid: undefined,
					},
					768: {
						slidesPerView: 2,
						centeredSlides: false,
						grid: undefined,
					},
					1024: {
						slidesPerView: 2,
						centeredSlides: false,
						grid: {
							rows: 2,
							fill: "row"
						},
					},
				}}
			>
				{
					collections.map((collection) => (
						<SwiperSlide key={collection.id}>
							<Collection collection={collection} />
						</SwiperSlide>
					))
				}
			</Swiper>
		</section>
	)
}


function Collection({ collection }: { collection: Collection }) {
	return (
		<Link href={collection.link} className="w-full" >
			<div className="relative h-[45vh] w-full md:w-full lg:h-[35vh] lg:w-[35vw] bg-stone-600">
				{/* TODO: optimize images */}
				<Image
					src={collection.imageSrc}
					alt={`Charms from a ${collection.name} collection`}
					className="object-cover"
					fill
					sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
				/>
			</div>
			<h3 className="py-4 text-center text-2xl font-semibold">{collection.name}</h3>
		</Link>
	)
}
