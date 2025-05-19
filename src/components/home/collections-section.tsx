import Link from "next/link";
import Image from "next/image";

export default function CollectionsSection() {
	// TODO: Add links, Optimize images
	const collections = [
		{ 
			id: "love", 
			name: "Love", 
			link: "#", 
			imageSrc: "/collections/love.png"
		},
		{ 
			id: "summer", 
			name: "Summer", 
			link: "#", 
			imageSrc:"/collections/summer.jpg"
		},
		{ 
			id: "diamond", 
			name: "Diamond", 
			link: "#", 
			imageSrc: "/collections/diamond.jpg"
		},
		{ 
			id: "just-girls", 
			name: "Just Girls", 
			link: "#", 
			imageSrc: "/collections/girls.webp"
		},
	]

  return (
    <div className="p-20 bg-primary text-white">
      <h2 className="pb-10 text-4xl font-bold">Collections</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20">
		  {collections.map((collection) => (
			<Link key={collection.id} href={collection.link} className="w-full">
			  <div className="relative h-[50vh] w-full bg-stone-600">
				<Image 
					src={collection.imageSrc} 
					alt={`Charms from a ${collection.name} collection`} 
					className="object-cover"
					fill
				/>
			  </div>
			  <h3 className="py-4 text-center text-2xl font-semibold">{collection.name}</h3>
			</Link>
		  ))}
	  </div>
    </div>
  );
}
