"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Link from "next/link";

export default function CollectionsSliders() {
  return (
    <div>
      <div className="p-10">
        <h2 className="mb-4 text-4xl font-bold">SELECT A CATEGORY</h2>
        <p className="w-72">
          Choose between a bracelet, necklace, keychain, waist chain or even a bag chain
        </p>
      </div>

      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        className="relative h-[80vh] bg-slate-200"
      >
        <SwiperSlide>
          <Image
            src="/categories/necklace.jpg"
            alt=""
            className="relative h-full w-full object-cover"
            fill
          />
          <Link
            className="absolute right-1/2 top-1/2 text-3xl font-bold text-black"
            href="/charm-bar/necklaces"
          >
            Necklaces
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/categories/bracelet.jpg"
            alt=""
            className="relative h-full w-full object-cover"
            fill
          />
          <Link
            href="/charm-bar/necklaces"
            className="absolute right-1/2 top-1/2 text-3xl font-bold text-white"
          >
            Bracelet
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/categories/bagchain.jpg"
            alt=""
            className="h-full w-full object-cover"
            fill
          />
          <Link href="/charm-bar/necklaces">Bagchain</Link>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/categories/keychain.jpg"
            alt=""
            className="absolute h-full w-full object-cover"
            fill
          />
          <Link className="relative" href="/charm-bar/necklaces">
            Keychain
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
