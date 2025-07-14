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
    src: "charm-bar/necklace.png",
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
    src: "/charm-bar/necklace.png",
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

export const categoriesComponents = [
  {
    title: "Necklace",
    imageSrc: "/categories/necklace.jpg",
    link: "/charm-bar/necklace",
  },
  {
    title: "Lipgloss Chain",
    imageSrc: "/categories/lipgloss.jpg",
    link: "/charm-bar/lipgloss",
  },
  {
    title: "Bagchain",
    imageSrc: "/categories/bagchain.jpg",
    link: "/charm-bar/bagchain",
  },
  {
    title: "Waistchain",
    imageSrc: "/categories/waistchain.jpg",
    link: "/charm-bar/waistchain",
  }
];


export const desktopCollages = [
  { src: "/lookbook/horizontal_blue.jpg", alt: "Horizontal blue theme" },
  { src: "/lookbook/horizontal_blue_2.jpg", alt: "Second horizontal blue theme" },
  { src: "/lookbook/horizontal_cowboy.jpg", alt: "Horizontal cowboy theme" },
  { src: "/lookbook/horizontal_devi.jpg", alt: "Horizontal Devi" },
  { src: "/lookbook/horizontal_devi_1.jpg", alt: "Horizontal Devi version 1" },
  { src: "/lookbook/horizontal_hands.jpg", alt: "Horizontal hands" },
  { src: "/lookbook/horizontal_qni.jpg", alt: "Horizontal Qni" },
  { src: "/lookbook/horizontal_qni_2.jpg", alt: "Horizontal Qni version 2" },
  { src: "/lookbook/horizontal_qnina.jpg", alt: "Horizontal Qnina" },
  { src: "/lookbook/horizontal_red.jpg", alt: "Horizontal red" },
  { src: "/lookbook/horizontal_red_2.jpg", alt: "Horizontal red version 2" },
];

export const mobileCollages = [
  { src: "/lookbook/qni_2_collage.jpg", alt: "Qni second collage" },
  { src: "/lookbook/qni_collage.jpg", alt: "Qni collage" },
  { src: "/lookbook/qnina_collage.jpg", alt: "Qnina collage" },
  { src: "/lookbook/red_2_collage.jpg", alt: "Second red collage" },
  { src: "/lookbook/red_collage.jpg", alt: "Red collage" },
  { src: "/lookbook/blue_collage.jpg", alt: "Blue collage" },
  { src: "/lookbook/blue_collage_2.jpg", alt: "Second blue collage" },
  { src: "/lookbook/devi_2_collage.jpg", alt: "Devi second collage" },
  { src: "/lookbook/devi_collage.jpg", alt: "Devi collage" },
  { src: "/lookbook/hands_collage.jpg", alt: "Hands collage" },
];

export const faqs = [
  {
    category: "CharmBar",
    questions: [
      "WhatIsCharmBar",
      "HowToOrder",
      "HowToCreateJewelry",
      "Materials",
      "ChainLength"
    ]
  },
  {
    category: "ReturnsAndShipping",
    questions: [
      "DeliveryTime",
      "SpecialPackaging",
      "Returns",
      "OrderDelivery",
      "ShippingCost"
    ]
  },
  {
    category: "Payment",
    questions: [
      "PaymentMethods",
      "AdvancePayment"
    ]
  },
  {
    category: "Care",
    questions: [
      "JewelryCare"
    ]
  }
];
