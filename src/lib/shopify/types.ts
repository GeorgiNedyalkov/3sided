export type Edge<T> = {
  node: T;
};
export type Connection<T> = {
  edges: Array<Edge<T>>;
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
};

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
