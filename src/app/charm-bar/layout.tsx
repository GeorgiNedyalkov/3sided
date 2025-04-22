export default function CharmBarLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex flex-col gap-10 lg:mx-20">{children}</div>
    </>
  );
}
