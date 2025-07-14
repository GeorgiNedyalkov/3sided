import { useTranslations } from "next-intl";
import { faqs } from "@/lib/placeholder-data"


export default function FaqPage() {
	const t = useTranslations("Faq");

	return (
		<div className="mt-20 p-20 max-w-5xl">
			<h1 className="text-5xl font-bold text-primary pb-10">{t("FAQ")}</h1>

			{faqs.map(({ category, questions }) => (
				<div key={category} className="pb-10">
					<h2 className="text-primary font-bold text-2xl pb-4">{t(`${category}.category`)}</h2>

					<ul className="grid gap-4">
						{questions.map((title) => (
							<li key={title}>
								<p className="font-bold pb-2">{t(`${category}.${title}.question`)}</p>
								<p>{t(`${category}.${title}.answer`)}</p>
							</li>
						))}
					</ul>
				</div>
			))}
		</div>
	)
}
