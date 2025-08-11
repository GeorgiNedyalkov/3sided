import Link from "next/link";
import Image from "next/image";
import { categoriesComponents } from "@/lib/placeholder-data"
import { useTranslations } from "next-intl";

export default function Categories() {
	const t = useTranslations("categories");

	return (
		<section className="bg-white text-primary mt-12 md:mt-32">
			<h2 className="px-4 pb-8 font-bold text-4xl md:text-5xl md:pb-16 uppercase lg:px-10 lg:pb-16">
				{t("heading")}
			</h2>
			<div className="px-4 grid grid-cols-1 gap-10 md:px-0 md:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:px-0">
				{categoriesComponents.slice(0, 5).map((category) => (
					<CategoryCard
						key={category.title}
						link={category.link}
						src={category.imageSrc}
						title={category.title}
					/>
				))}
			</div>
		</section>
	);
}

function CategoryCard({ src, title, link }: { src: string; title: string; link: string }) {
	const t = useTranslations("categories");

	return (
		<Link href={link} className="w-full">
			<h3 className="relative text-2xl underline pb-2 lg:pl-10 lg:pb-4">
				{t(title)}
			</h3>
			<div className="relative h-[40vh] lg:h-[60vh] w-full overflow-hidden">
				<Image
					src={src}
					alt={`An image of a ${title} category`}
					className="object-cover transition-transform duration-300 hover:scale-110"
					fill
					sizes=""
				/>
			</div>
		</Link>
	);
}
