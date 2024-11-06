import Caroucel from "@/components/grid/caroucel";
import ThreeItemGrid from "@/components/grid/three-items";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <ThreeItemGrid />

      <div className="mx-auto flex h-[300px] w-full flex-col items-center justify-center gap-4 bg-slate-100">
        <p>We are currently under construction. Please check out our charm bar.</p>
        <Link href="/charm-bar">
          <button className="rounded-full bg-green-950 p-4 text-sm font-semibold uppercase text-yellow-100 hover:bg-green-700">
            Visit charm bar
          </button>
        </Link>
      </div>
      <Caroucel />
    </>
  );
}
