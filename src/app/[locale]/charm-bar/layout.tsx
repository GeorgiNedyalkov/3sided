import CharmBarHeader from "@/components/charm-bar/charm-bar-header";

export default function CharmBarLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-20">
      <CharmBarHeader />
      <div className="flex flex-col gap-4 lg:mx-20 lg:mb-40">{children}</div>
    </div>
  );
}
