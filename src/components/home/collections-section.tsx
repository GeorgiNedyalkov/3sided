"use client"

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Grid } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import { useTranslations } from "next-intl";
import { collections } from "@/lib/placeholder-data"

// TODO: Import collections from placeholder because they are shared with charm bar


export default function CollectionsSection() {
	const t = useTranslations()
	return (
		<section className="py-10 px-4 bg-primary text-white lg:p-20 min-h-[70vh]">
			<h2 className="pb-10 text-5xl md:text-6xl font-bold">{t("Collections")}</h2>
			<Swiper
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

type CollectionProps = {
	collection: {
		id: string,
		link: string,
		imageSrc: string,
		name: string,
	}
};

function Collection({ collection }: CollectionProps) {
	return (
		<Link href={collection.link} className="w-full">
			<div className="relative h-[45vh] w-full md:w-full lg:h-[35vh] lg:w-[35vw]">
				<Image
					src={collection.imageSrc}
					alt={`Charms from a ${collection.name} collection`}
					className="object-cover"
					fill
					sizes="(min-width: 1024px) 90vw, (min-width: 768px) 50vw, 35vw"
				/>
			</div>
			<h3 className="py-4 text-center text-2xl font-semibold">{collection.name}</h3>
		</Link>
	)
}
