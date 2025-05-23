import { Charm } from "@/lib/shopify/types";


// These should come from our backend
export const charmImages = [
  "/web/star_1.PNG",
  "/web/rapanche.png",
  "/web/5.png",
  "/web/5.png",
  "/web/5.png",
  "/web/5.png",
];

// These should come from our backend
export const necklaces = [
  {
    id: "1",
    src: "/necklace.webp",
    settings: [
      { top: "78%", left: "42%", rotation: "0deg" },
      { top: "62%", right: "18%", rotation: "-45deg" },
      { top: "62%", left: "18%", rotation: "45deg" },
      { top: "40%", right: "8%", rotation: "-45deg" },
      { top: "40%", left: "10%", rotation: "45deg" },
    ],
  },
  {
    id: "2",
    src: "/necklace.png",
    settings: [
      { top: "80%", left: "42%", rotation: "0deg" },
      { top: "65%", right: "23%", rotation: "-45deg" },
      { top: "65%", left: "23%", rotation: "45deg" },
      { top: "45%", right: "15%", rotation: "-45deg" },
      { top: "45%", left: "15%", rotation: "45deg" },
    ],
  },
];

export const chainSettings = [
  { top: "78%", left: "42%", rotation: "0deg" },
  { top: "62%", right: "18%", rotation: "-45deg" },
  { top: "62%", left: "18%", rotation: "45deg" },
  { top: "40%", right: "8%", rotation: "-45deg" },
  { top: "40%", left: "10%", rotation: "45deg" },
];

export const categoriesComponents: NavigationItemComponent[] = [
  {
    title: "Necklace",
    imageSrc: "/categories/necklace.jpg",
    link: "/charm-bar/necklace",
  },
  {
    title: "Bracelet",
    imageSrc: "/categories/bracelet.jpg",
    link: "/charm-bar/necklace",
  },
  {
    title: "Keychain",
    imageSrc: "/categories/keychain.jpg",
    link: "/charm-bar/keychain",
  },
  {
    title: "Bagchain",
    imageSrc: "/categories/bagchain.jpg",
    link: "/charm-bar/bagchain",
  },
  {
    title: "Waistchain",
    imageSrc: "/categories/waistchain.webp",
    link: "/charm-bar/waistchain",
  },
  {
    title: "Pin",
    imageSrc: "/categories/pin.png",
    link: "/charm-bar/pin",
  },
];

export const collectionComponents: NavigationItemComponent[] = [
  {
    title: "Necklace",
    imageSrc: "/categories/necklace.jpg",
    link: "/charm-bar/necklace",
  },
  {
    title: "Bracelet",
    imageSrc: "/categories/bracelet.jpg",
    link: "/charm-bar/necklace",
  },
  {
    title: "Keychain",
    imageSrc: "/categories/keychain.jpg",
    link: "/charm-bar/keychain",
  },
  {
    title: "Bagchain",
    imageSrc: "/categories/bagchain.jpg",
    link: "/charm-bar/bagchain",
  },
  {
    title: "Waistchain",
    imageSrc: "/categories/waistchain.webp",
    link: "/charm-bar/waistchain",
  },
  {
    title: "Pin",
    imageSrc: "/categories/pin.png",
    link: "/charm-bar/pin",
  },
];
