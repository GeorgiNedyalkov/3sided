import { girls } from "@/lib/placeholder-data";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const { name, zodiac, interests, charms, favoriteDrink, songs } = girls[0];

  return (
    <div>
      <div className="mx-auto max-w-screen-2xl">
        <div className="grid grid-cols-3 grid-rows-2">
          <div className="col-start-1 row-start-1">
            <div className="mt-10 flex w-96 flex-col gap-10">
              {/* Desciption and Title */}
              <div>
                <h4 className="mb-4 text-2xl font-bold text-gray-950">Social Media Queen</h4>
                <p className="text-slate-500">
                  Social media lurker during the night. A go getter business girly during the day.
                </p>
              </div>
              {/* Zodiac */}
              <div className="relative h-64 w-64">
                <div>
                  <p className="flex text-sm text-slate-500">Sign</p>
                  <h4 className="text-2xl font-semibold text-slate-900">{zodiac}</h4>
                </div>
                <Image
                  src="/capri.png"
                  alt={`Image of a ${zodiac} sing charm`}
                  className="object-fill"
                  fill
                />
              </div>
            </div>
          </div>
          {/* Name and Main Picture */}
          <div className="relative col-start-2 row-span-2 row-start-1">
            <Image
              src="/devi/devi.jpg"
              alt={`Image of ${name}`}
              className="absolute z-0 object-cover"
              fill
            />
            <div className="absolute -left-40 top-4 z-10 bg-secondary-2 p-2 text-5xl font-semibold text-primary">
              {name}
            </div>
          </div>
          {/* Songs */}
          <div className="z-10 col-start-3">
            <Songs songs={songs} />
          </div>
          {/* Favorite Drink*/}
          <div className="relative col-start-1 row-start-2 p-4">
            <p className="text-sm text-slate-500">Favorite Drink</p>
            <h4 className="text-2xl font-semibold text-slate-900">{favoriteDrink.name}</h4>
            <Image
              src={favoriteDrink.src}
              alt={favoriteDrink.name}
              fill
              className="object-contain"
            />
          </div>
          {/* Hobbies and Charms*/}
          <div className="col-start-3 row-start-2 flex flex-col gap-10 pl-20">
            <Hobbies interests={interests} />
            <FavoriteCharms favoriteCharms={charms} />
          </div>
        </div>
      </div>
    </div>
  );
}

type FavoriteCharm = {
  name: string;
  imgSrc: string;
  link: string;
};

function FavoriteCharms({ favoriteCharms }: { favoriteCharms: FavoriteCharm[] }) {
  return (
    <div>
      <ul className="flex gap-4">
        {favoriteCharms.map(({ link, name, imgSrc }, idx) => (
          <li key={idx} className="h-52 w-52 text-center">
            <Link href={link}>
              <p>{name}</p>
              <Image src={imgSrc} alt={`An image of a ${name} charm.`} width={100} height={100} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

type Song = {
  song: string;
  artist: string;
  album?: string | undefined;
};

function Songs({ songs }: { songs: Song[] }) {
  return (
    <div className="mx-auto mt-10 max-w-80 border border-secondary-1">
      <h3 className="p-4 text-4xl font-bold">Top 3 Songs</h3>
      <ul>
        {songs.map(({ song, artist, album }, idx) => (
          <li key={idx} className="border">
            <div className="p-4">
              <div className="font-semibold text-gray-900">{song}</div>
              <div className="text-gray-500">
                <div className="flex items-center gap-1 text-sm">
                  {artist}
                  {album && (
                    <div className="text-md">
                      <span className="text-md">&middot; </span>
                      {album}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Hobbies({ interests }: { interests: string[] }) {
  return (
    <div>
      <h4 className="text-sm text-slate-500">Hobbies</h4>
      <ul className="items-left flex flex-col justify-between">
        {interests.map((interest, idx) => (
          <li key={idx}>
            <p className="text-lg">{interest}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
