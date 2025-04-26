import CharmBarHeader from "@/components/charm-bar/charm-bar-header";

export default function CharmBarLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CharmBarHeader />
      <div className="flex flex-col gap-10 lg:mx-20">{children}</div>
    </>
  );
}
