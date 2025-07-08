import NavLink from "@/components/layout/navbar/nav-link";

export default function NotFound() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4">
      <h2 className="text-xl font-semibold">Not Found</h2>
      <p>Could not find the requested page.</p>
      <div className="group">
        <NavLink href="/">Return home</NavLink>
      </div>
    </div>
  );
}
