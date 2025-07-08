import CategorySelector from "@/components/charm-bar/category-selector";
import Breadcrumbs from "@/components/breadcrumbs";

const breadcrumbs = [
  {
    label: "Home",
    href: "/",
    active: false,
  },
  {
    label: "Step 1: Choose a category",
    href: "/charm-bar",
    active: true,
  },
];

export default async function Page() {
  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <p className="text-sm p-2">
        First, choose what kind of piece you want to create — bracelet, necklace, bag, waist or lipgloss chain. Your design journey starts here.
      </p>
      <CategorySelector />
    </>
  );
}
