import Breadcrumbs from "@/components/breadcrumbs";
import { getTranslations } from "next-intl/server";

export default async function ChainSelectPage({ children }: { children: React.ReactNode }) {
	const t = await getTranslations("Charmbar");
	return (
		<>
			<Breadcrumbs breadcrumbs={[
				{
					label: t("category"),
					href: "/charm-bar",
					active: false,
				},
				{
					label: t("chainSizeTitle"),
					href: "#",
					active: true,
				},
			]} />
			<p className="p-2 text-sm">{t("chainSizeStep")}</p>
			{children}
		</>

	)
}
