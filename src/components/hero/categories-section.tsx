import Link from "next/link";
import Image from "next/image";

const categories = [
	{
		title: "Necklace",
		imageSrc: "/categories/necklace.jpg",
		link: "/charm-bar/necklace",
	},
	{
		title: "Bracelet",
		imageSrc: "/categories/bracelet.jpg",
		link: "/charm-bar/necklace",
	},
	{
		title: "Keychain",
		imageSrc: "/categories/keychain.jpg",
		link: "/charm-bar/keychain",
	},
	{
		title: "Bagchain",
		imageSrc: "/categories/bagchain.jpg",
		link: "/charm-bar/bagchain",
	},
	{
		title: "Waistchain",
		imageSrc: "/categories/waistchain.webp",
		link: "/charm-bar/waistchain",
	},
	{
		title: "Pin",
		imageSrc: "/categories/pin.png",
		link: "/charm-bar/pin",
	},
];

export default function Categories() {
	return (
		<div className="bg-primary text-white underline">
			<h2 className="pl-4 pt-10 text-3xl uppercase lg:pl-10 lg:pt-20 lg:pb-8">Select a category</h2>
			<div className="flex flex-col items-center justify-between md:flex-row">
				{categories.slice(0, 5).map((category) => (
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
