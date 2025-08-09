import { useTranslations } from "next-intl";
import Image from "next/image";

export default function CharmBarSection() {
	const t = useTranslations("CharmBarIntroSection");

	return (
		<section className="w-full mb-10 md:px-20 md:mb-20">
			<h2 className="text-center py-10 md:py-12 text-4xl font-bold md:text-left">{t("heading")}</h2>
			<div className="flex flex-col items-center justify-between lg:flex-row flex-wrap">
				<div className="relative h-[700px] w-96">
					<Image
						src="/new/intro_1.jpg"
						className="object-cover opacity-90"
						alt="Charm bar with many charms"
						fill
						sizes="(max-width: 1024px) 384px"
					/>
				</div>
				<p className="w-full md:max-w-64 px-8 py-8 text-center text-gray-900">
					{t("p1")}
				</p>
				<div className="relative h-[700px] w-96">
					<Image
						src="/new/intro_2.jpg"
						className="object-cover opacity-90"
						alt="Charm bar with many charms"
						fill
						sizes="(max-width: 1024px) 384px"
					/>
				</div>
				<p className="w-full md:max-w-64 px-8 py-8 text-center text-gray-900">
					{t("p2")}
				</p>
				<div className="relative h-[700px] w-96">
					{/* TODO: Add the new pomegranite */}
					<Image
						src="/home/pomegranite.jpg"
						className="object-cover opacity-90"
						alt="Charm bar with many charms"
						fill
						sizes="(max-width: 1024px) 384px"
					/>
				</div>
			</div>
		</section>
	);
}
