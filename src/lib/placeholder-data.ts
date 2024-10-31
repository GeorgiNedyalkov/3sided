import { Charm } from "./shopify/types";

const charms: Charm[] = [
  {
    id: "1",
    number: "782524599",
    category: "charm",
    label: "Charm_1",
    imageSrc: "/jewel_1.jpg",
    description: "This charm is defininately him.",
    quantity: 1,
    price: 50,
  },
  {
    id: "2",
    number: "782534349",
    label: "Charm_2",
    category: "charm",
    imageSrc: "/jewel_2.jpg",
    description: "This charm gives 1000 aura.",
    quantity: 1,
    price: 69,
  },
  {
    id: "3",
    number: "926534349",
    label: "Bracelet_1",
    category: "bracelet",
    imageSrc: "/jewel_2.jpg",
    description: "Wearing this bracelet makes you a princess",
    quantity: 1,
    price: 45,
  },
];

// These should come from our backend
const charmImages = [
  "/charm_1.png",
  "/charm_2.png",
  "/charm_3.png",
  "/charm_4.webp",
  "/charm_5.webp",
];

// These should come from our backend
const necklaces = [
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
    src: "/necklace2.png",
    settings: [
      { top: "80%", left: "42%", rotation: "0deg" },
      { top: "65%", right: "23%", rotation: "-45deg" },
      { top: "65%", left: "23%", rotation: "45deg" },
      { top: "45%", right: "15%", rotation: "-45deg" },
      { top: "45%", left: "15%", rotation: "45deg" },
    ],
  },
];

export { charms, necklaces, charmImages };
