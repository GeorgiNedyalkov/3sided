export type Edge<T> = {
  node: T;
};
export type Connection<T> = {
  edges: Array<Edge<T>>;
};

export type Image = {
  id: string;
  url: string;
  altText: string;
  width: number;
};

export type ShopifyProductOperation = {
  data: { product: ShopifyProduct };
  variables: {
    handle: string;
  };
};

export type ShopifyProductsOperation = {
  data: {
    products: Connection<ShopifyProduct>;
  };
};

// export type Product = Omit<ShopifyProduct, "variants" | "images"> & {
//   variants: ProductVariant[];
//   images: Image[];
// };

export type Product = Omit<ShopifyProduct, "images"> & {
  images: Image[];
};

export type ShopifyProduct = {
  id: string;
  handle: string;
  title: string;
  availableForSale: boolean;
  description: string;
  descriptionHtml: string;
  options: {
    id: string;
    name: string;
  };
  priceRange: {
    maxVariantPrice: {
      amount: number;
      currencyCode: string;
    };
    minVariantPrice: {
      amount: number;
      currencyCode: string;
    };
  };
  images: Connection<Image>;
};

// General Types
export type Charm = {
  id: string;
  number: string;
  category: string;
  label: string;
  imageSrc: string;
  description: string;
  quantity: number;
  price: number;
};

export type CharmPosition = {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  rotation?: string;
};

export type Necklace = {
  id: string;
  src: string;
  settings: CharmPosition[];
};
