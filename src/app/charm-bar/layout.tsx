export default function CharmBarLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="mx-20 flex flex-col gap-10">{children}</div>
    </>
  );
}
