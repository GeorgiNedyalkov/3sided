import Caroucel from "@/components/grid/caroucel";
import Link from "next/link";

export default function Home() {
  return (
    <div className="m-4 flex h-screen flex-col items-center justify-center">
      <div className="flex flex-col gap-4">
        <p>We are currently under construction. Please check out our charm bar.</p>
        <Link href="/charm-bar">
          <button className="rounded-full bg-green-950 p-4 text-sm font-semibold uppercase text-yellow-100 hover:bg-green-700">
            Visit charm bar
          </button>
        </Link>
        <Caroucel />
      </div>
    </div>
  );
}
