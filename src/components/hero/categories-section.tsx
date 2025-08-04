import Link from "next/link";
import Image from "next/image";
import { categoriesComponents } from "@/lib/placeholder-data"
import { useTranslations } from "next-intl";

export default function Categories() {
	const t = useTranslations("categories");

	return (
		<div className="bg-white text-primary mt-20 mb-40">
			<h2 className="pl-4 pt-4 font-bold text-4xl md:text-6xl uppercase lg:pl-10 lg:pt-10 lg:pb-20">
				{t("heading")}
			</h2>
			<div className="flex flex-col p-4 items-center justify-between md:flex-row md:p-0">
				{categoriesComponents.slice(0, 5).map((category) => (
					<CategoryCard
						key={category.title}
						link={category.link}
						src={category.imageSrc}
						title={category.title}
					/>
				))}
			</div>
		</div>
	);
}

function CategoryCard({ src, title, link }: { src: string; title: string; link: string }) {
	const t = useTranslations("categories");

	return (
		<Link href={link} className="w-full">
			<h3 className="relative text-2xl pb-4 underline md:pb-10 md:pl-10">
				{t(title)}
			</h3>
			<div className="relative h-[60vh] w-full overflow-hidden">
				<Image
					src={src}
					alt={`An image of a ${title} category`}
					className="object-cover transition-transform duration-300 hover:scale-110"
					fill
				/>
			</div>
		</Link>
	);
}
