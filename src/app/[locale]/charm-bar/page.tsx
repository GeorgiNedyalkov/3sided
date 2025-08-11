import CategorySelector from "@/components/charm-bar/category-selector";
import Breadcrumbs from "@/components/breadcrumbs";
import { useTranslations } from "next-intl";

export default function Page() {
	const t = useTranslations("Charmbar")

	const breadcrumbs = [
		{
			label: "Home",
			href: "/",
			active: false,
		},
		{
			label: t("categoryTitle"),
			href: "/charm-bar",
			active: true,
		},
	]

	return (
		<div>
			<p className="w-full mx-auto text-center max-w-xl">{t("paragraph")}</p>
			<Breadcrumbs breadcrumbs={breadcrumbs} />
			<p className="text-sm p-2 max-w-3xl">{t("categoryStep")}</p>
			<CategorySelector />
		</div>
	);
}
