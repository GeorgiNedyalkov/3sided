import Link from "next/link";
import Image from "next/image";

export default function Categories() {
  return (
    <div className="bg-primary text-white underline">
      <div className="flex h-52 items-center md:h-96">
        <h2 className="pl-4 pt-10 text-3xl uppercase">Select a category</h2>
      </div>
      <div className="flex flex-col items-center md:flex-row">
        <CategoryCard link="/charm-bar/necklace" src="/categories/necklace.jpg" title="Gerdan" />
        <CategoryCard link="charm-bar/bracelet" src="/categories/glass.jpg" title="Grivna" />
        <CategoryCard
          link="/charm-bar/keychain"
          src="/categories/keychain.jpg"
          title="Kluchodurjatel"
        />
        <CategoryCard
          link="/charm-bar/bagchain"
          src="/categories/bag.jpg"
          title="Verijka za chanti"
        />
      </div>
    </div>
  );
}

function CategoryCard({ src, title, link }: { src: string; title: string; link: string }) {
  return (
    <Link href={link}>
      <h3 className="text-lg md:pb-10 md:pl-10">{title}</h3>
      <div className="relative h-[60vh] w-96 overflow-hidden">
        <Image
          src={src}
          alt=""
          fill
          className="object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
    </Link>
  );
}
