import CharmBarIntroSection from "@/components/home/charm-bar-intro-section";
import HeroSection from "@/components/hero/hero-section";
import LookBook from "@/components/home/lookbook";
import NewsletterBanner from "@/components/newsletter/newsletter-banner";
import CollectionsSection from "@/components/home/collections-section";
import Categories from "@/components/hero/categories-section";
// import CategoriesSlider from "@/components/home/categories-slider";
import FallingCharms from "@/components/falling-charms";

export default function Page() {
  return (
    <>
      <HeroSection />
      {/* <CategoriesSlider /> */}
      {/* <CharmBarIntroSection /> */}
      {/* <FallingCharms /> */}
      <Categories />
      <CollectionsSection />
      <LookBook />
      <NewsletterBanner />
    </>
  );
}

// <HeroSection />
// <h3 className="bg-primary py-10 pl-4 text-2xl text-white">Какво правим</h3>
// <ImageCopySection
//   text="Нашият дизайн съчетава функционалност и естетика, за да предложи уникално изживяване"
//   src="/image_1.jpg"
// />
// <div className="h-1 w-full bg-primary pb-10">
//   <div>
//     <div className="h-1 w-full bg-white" />
//   </div>
// </div>
// <ImageCopySection
//   text="Нашият дизайн съчетава функционалност и естетика, за да предложи уникално изживяване"
//   src="/image_2.jpg"
//   reverse
// />
// <div className="h-1 w-full bg-primary pb-10">
//   <div>
//     <div className="h-1 w-full bg-white" />
//   </div>
// </div>
// <Categories />

// function ImageCopySection({
//   text,
//   src,
//   reverse,
// }: {
//   text: string;
//   src: string;
//   reverse?: boolean;
// }) {
//   return (
//     <div className="bg-primary pb-10 text-white">
//       <div className="flex items-center justify-center gap-2">
//         <div className={`relative ${reverse ? "order-2" : "order-1"} h-96 w-56`}>
//           <Image src={src} alt="Charms on a bag" className="object-cover" fill />
//         </div>
//         <p className={`${reverse ? "order-1" : "order-2"} w-32`}>{text}</p>
//       </div>
//     </div>
//   );
// }

// function MatchSection() {
//   return (
//     <div className="my-52">
//       <h1 className="mb-20 text-center text-3xl font-semibold text-primary">
//         Meant to be mixed, matched, stacked and thoroughly enjoyed
//       </h1>
//       <div className="flex items-center justify-center gap-20">
//         {[1, 2, 4].map((imageNumber, idx) => (
//           <div key={idx}>
//             <ImageCard src={`/image_${imageNumber}.jpg`} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// function ImageCard({ src }: { src: string }) {
//   return (
//     <div>
//       <p className="flex items-end justify-end">WINTER SEASON 25</p>
//       <div className="relative h-[50vh] w-96 bg-slate-800">
//         <Image src={src} alt="" fill className="object-cover" />
//       </div>
//       <div className="flex justify-between">
//         <p className="pl-10">NEW COLLECTION</p>
//         <p>SOON</p>
//       </div>
//     </div>
//   );
// }
