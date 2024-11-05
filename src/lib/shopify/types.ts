export type Edge<T> = {
  node: T;
};

export type Connection<T> = {
  edges: Array<Edge<T>>;
};

export type Money = {
  amount: string;
  currencyCode: string;
};

export type ShopifyCart = {
  id: string | undefined;
  checkoutUrl: string;
  cost: {
    subtotalAmount: Money;
    totalAmount: Money;
    totalTaxAmount: Money;
  };
  lines: Connection<CartItem>;
  totalQuantity: number;
};

export type ShopifyCartOperation = {
  data: {
    cart: ShopifyCart;
  };
  variables: {
    cartId: string;
  };
};

export type Cart = Omit<ShopifyCart, "lines"> & {
  lines: CartItem[];
};

export type CartItem = {
  id: string | undefined;
  quantity: number;
  cost: {
    totalAmount: Money;
  };
  merchandise: {
    id: string;
    title: string;
    selectedOptions: {
      name: string;
      value: string;
    }[];
    product: CartProduct;
  };
};

export type CartProduct = {
  id: string;
  handle: string;
  title: string;
  featuredImage: Image;
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

export type Product = Omit<ShopifyProduct, "variants" | "images"> & {
  variants: ProductVariant[];
  images: Image[];
};

export type ShopifyProduct = {
  id: string;
  handle: string;
  availableForSale: boolean;
  title: string;
  description: string;
  descriptionHtml: string;
  // options: ProductOption[];
  priceRange: {
    maxVariantPrice: Money;
    minVariantPrice: Money;
  };
  variants: Connection<ProductVariant>;
  featuredImage: Image;
  images: Connection<Image>;
  // seo: SEO;
  tags: string[];
  updatedAt: string;
};

export type ProductVariant = {
  id: string;
  title: string;
  availableForSale: boolean;
  selectedOptions: {
    name: string;
    value: string;
  }[];
  price: Money;
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
