import { Charm } from "@/lib/shopify/types";
import { NavigationItemComponent } from "@/lib/definitions"

export const girls = [
  {
    id: "qnina",
    name: "Yanina Poptomova",
    zodiac: "Leo",
    interests: ["Travel", "Everything makeup", "Aperol connoisseur"],
    // charms: ["turtle with green stone", "airplane with stones", "sloth"],
    charms: [
      {
        name: "Turtle with green stone",
        imgSrc: "/2.png",
        link: "",
      },
      {
        name: "Sloth",
        imgSrc: "/3.png",
        link: "",
      },
      {
        name: "Airplane with stones",
        imgSrc: "/4.png",
        link: "",
      },
    ],
    favoriteDrink: {
      name: "Pornstar Martini",
      src: "/pornstar_martini.png",
    },
    songs: [
      {
        artist: "Jorja Smith",
        album: "Be Right Back",
        song: "Addicted",
      },
      {
        artist: "Party Next Door",
        song: "Come and See me",
      },
      {
        artist: "Starstruck",
        song: "Something about the sunshine",
      },
    ],
  },
  //     id: "qni",
  //     name: "Qni",
  //     zodiac: "Capri",
  //     interests: ["Travel", "Everything makeup", "Aperol connoisseur"],
  //     charms: ["Hello Kitty", "Dinosour", "Boy with red stone"],
  //     favoriteDrink: "Skinos Sour",
  //     songs: [
  //       "Tv Girl - cigarettes out the Window",
  //       "Lucki - more than ever",
  //       "Lancey Foux - Lancey or Lancey",
  //       "Drake - Not you too",
  //       "Ken Carson - Overseas",
  //     ],
  //   },

  {
    id: "devi",
    name: "Devina Slavilova",
    zodiac: "Capri",
    interests: ["Finding new music", "Jewelry", "Taking cute pics"],
    charms: [
      {
        name: "Dinosour",
        imgSrc: "/2.png",
        link: "",
      },
      {
        name: "Cherries",
        imgSrc: "/3.png",
        link: "",
      },
      {
        name: "Pomegranate",
        imgSrc: "/4.png",
        link: "",
      },
    ],
    favoriteDrink: {
      name: "Skinos Sour",
      src: "/devi/skinos.png",
    },
    songs: [
      {
        artist: "Massive Attack",
        album: "Be Right Back",
        song: "Angel",
      },
      {
        artist: "Sade",
        song: "Paradise",
      },
      {
        artist: "PARTYNEXTDOOR",
        song: "1941",
      },
    ],
  },
];

export const charms: Charm[] = [
  {
    id: "1a",
    number: "782524599",
    category: "charm",
    label: "Charm_1",
    imageSrc: "/1.png",
    description: "This charm is defininately him.",
    quantity: 1,
    price: 50,
  },
  {
    id: "2b",
    number: "782534349",
    label: "Charm_2",
    category: "charm",
    imageSrc: "/2.png",
    description: "This charm gives 1000 aura.",
    quantity: 1,
    price: 69,
  },
  {
    id: "3c",
    number: "926534349",
    label: "Bracelet_1",
    category: "bracelet",
    imageSrc: "/3.png",
    description: "Wearing this bracelet makes you a princess",
    quantity: 1,
    price: 45,
  },
  {
    id: "4d",
    number: "782524599",
    category: "charm",
    label: "Charm_1",
    imageSrc: "/4.png",
    description: "This charm is defininately him.",
    quantity: 1,
    price: 50,
  },
  {
    id: "5e",
    number: "782534349",
    label: "Charm_2",
    category: "charm",
    imageSrc: "/5.png",
    description: "This charm gives 1000 aura.",
    quantity: 1,
    price: 69,
  },
  {
    id: "6f",
    number: "926534349",
    label: "Bracelet_1",
    category: "bracelet",
    imageSrc: "/6.png",
    description: "Wearing this bracelet makes you a princess",
    quantity: 1,
    price: 45,
  },
];

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
