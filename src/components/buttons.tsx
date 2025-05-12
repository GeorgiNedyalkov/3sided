import Link from "next/link";

export function LinkButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      className="w-52 rounded-md bg-primary p-3 uppercase transition-all duration-300 hover:bg-red-900"
      href={href}
    >
      {children}
    </Link>
  );
}

