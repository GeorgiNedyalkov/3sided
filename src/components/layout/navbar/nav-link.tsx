import Link from "next/link";

export default function NavLink({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <div className="group">
      <Link className="relative text-lg text-[#efece8] transition duration-500" href={href}>
        {children}
        <span className="block h-0.5 max-w-0 text-[#efece8] transition-all duration-500 group-hover:max-w-full" />
      </Link>
    </div>
  );
}
