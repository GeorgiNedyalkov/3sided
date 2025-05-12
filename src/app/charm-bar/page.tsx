import CategorySelector from "@/components/charm-bar/category-selector";
import Breadcrumbs from "@/components/breadcrumbs";

const breadcrumbs = [
  {
    label: "Charm-bar",
    href: "/charm-bar",
    active: true,
  },
  {
    label: "Step 1: Choose a category",
    href: "/charm-bar",
    active: false,
  },
];

export default async function Page() {
  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <CategorySelector />
    </>
  );
}
