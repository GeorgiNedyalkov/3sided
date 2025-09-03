import { CharmBarContextProvider } from "@/components/charm-bar/charm-bar-context";

export default function CharmBarLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<h1 className="pb-4 text-5xl font-bold text-center mt-32">Charm Bar</h1>
			<div className="lg:px-20 lg:pb-40">
				<CharmBarContextProvider>
					{children}
				</CharmBarContextProvider>
			</div>
		</>
	);
}
