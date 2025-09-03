import Link from "next/link";
import Image from "next/image";

// TODO: Categories should be fetched from shopify
export default function CategorySelector() {
	const categories = [
		{
			category: "bracelet",
			imageSrc: "/categories/bracelet.jpg",
		},
		{
			category: "necklace",
			imageSrc: "/categories/necklace.jpg",
		},
		{
			category: "lipgloss",
			imageSrc: "/categories/lipgloss.jpg",
		},
		{
			category: "bagchain",
			imageSrc: "/categories/bagchain.jpg",
		},
	];

	return (
		<>
			<li className="flex flex-col gap-2 pb-20 md:flex-row md:justify-between">
				{categories.map(({ category, imageSrc }) => (
					<Link
						key={category}
						href={`/charm-bar/${category}`}
						className="rounded p-2 text-center font-bold"
					>
						<div className="overflow-hidden relative w-[400px] h-[500px]">
							<Image
								src={imageSrc}
								alt={`${category} main picture`}
								fill
								className="object-cover hover:scale-110 duration-300"
							/>
						</div>
						<p className="pt-2">{category.charAt(0).toUpperCase() + category.slice(1)}</p>
					</Link>
				))}
			</li>
		</>
	);
}
