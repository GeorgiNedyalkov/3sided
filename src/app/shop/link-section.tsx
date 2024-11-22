import Image from "next/image";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

export default function LinkSection() {
  return (
    <div className="flex w-full flex-col bg-primary text-secondary-1 sm:flex-row">
      <div className="flex basis-1/2 flex-col gap-4 bg-transparent p-20">
        <h2 className="text-4xl text-tertiary-2">Title</h2>
        <p className="text-lg">
          Her extensive perceived may any sincerity extremity. Indeed add rather may pretty see.
        </p>
        <button className="flex w-32 items-center justify-between gap-4 text-lg">
          <a href="#">Shop now</a>
          <ChevronRightIcon className="h-4" />
        </button>
      </div>
      <div className="basis-1/2">
        <Image className="" width={500} height={500} src="/villan.webp" alt="" />
      </div>
    </div>
  );
}
