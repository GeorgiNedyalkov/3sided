import Link from "next/link";
import Image from "next/image";
import { categoriesComponents } from "@/lib/placeholder-data"

export default function Categories() {
	return (
		<div className="bg-primary text-white underline">
			<h2 className="pl-4 pt-10 text-3xl uppercase lg:pl-10 lg:pt-20 lg:pb-8">Select a category</h2>
			<div className="flex flex-col items-center justify-between md:flex-row">
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
	return (
		<Link href={link} className="w-full">
		<h3 className="relative text-xl md:pb-10 md:pl-10">
			{title}
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
