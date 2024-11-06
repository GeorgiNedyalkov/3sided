import { getProductQuery, getProductsQuery } from "@/lib/shopify/queries/product";
import {
  Cart,
  Image,
  Connection,
  Product,
  ShopifyCart,
  ShopifyCartOperation,
  ShopifyProduct,
  ShopifyProductOperation,
  ShopifyProductsOperation,
  ShopifyCollectionProductsOperation,
} from "./shopify/types";
import { getCartQuery } from "./shopify/queries/cart";
import { getCollectionProductsQuery } from "./shopify/queries/collections";

const key = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN!;
const domain = process.env.SHOPIFY_STORE_DOMAIN;
const endpoint = `${domain}/${process.env.SHOPIFY_GRAPHQL_API_ENDPOINT}`;

type ExtractVariables<T> = T extends { variables: object } ? T["variables"] : never;

export async function shopifyFetch<T>({
  query,
  headers,
  variables,
}: {
  query: string;
  headers?: HeadersInit;
  variables?: ExtractVariables<T>;
}): Promise<{ status: number; body: T } | never> {
  try {
    const result = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": key,
        ...headers,
      },
      body: JSON.stringify({
        ...(query && { query }),
        ...(variables && { variables }),
      }),
    });
    const body = await result.json();

    if (body.errors) {
      throw body.errors[0];
    }

    return {
      status: result.status,
      body,
    };
  } catch (error) {
    console.error(error);
    throw {
      error,
      query,
    };
  }
}

function removeEdgesAndNodes<T>(array: Connection<T>): T[] {
  return array.edges.map((edge) => edge?.node);
}

const reshapeImages = (images: Connection<Image>, productTitle: string) => {
  const flattened = removeEdgesAndNodes(images);

  return flattened.map((image) => {
    const filename = image.url.match(/.*\/(.*)\..*/)?.[1];
    return {
      ...image,
      altText: image.altText || `${productTitle} - ${filename}`,
    };
  });
};

function reshapeProduct(product: ShopifyProduct) {
  if (!product) return undefined;

  const { images, variants, ...rest } = product;

  return {
    ...rest,
    variants: removeEdgesAndNodes(variants),
    images: reshapeImages(images, product.title),
    // variants: removeEdgesAndNodes(variants),
  };
}

const reshapeProducts = (products: ShopifyProduct[]) => {
  const reshapedProducts = [];

  for (const product of products) {
    if (product) {
      const reshapedProduct = reshapeProduct(product);

      if (reshapedProduct) {
        reshapedProducts.push(reshapedProduct);
      }
    }
  }

  return reshapedProducts;
};

function reshapeCart(cart: ShopifyCart) {
  if (!cart.cost?.totalTaxAmount) {
    cart.cost.totalTaxAmount = {
      amount: "0.0",
      currencyCode: cart.cost.totalAmount.currencyCode,
    };
  }

  return {
    ...cart,
    lines: removeEdgesAndNodes(cart.lines),
  };
}

export async function getProducts(): Promise<ShopifyProduct[]> {
  const result = await shopifyFetch<ShopifyProductsOperation>({
    query: getProductsQuery,
  });

  return removeEdgesAndNodes(result.body.data.products);
}

export async function getProduct(handle: string): Promise<Product | undefined> {
  const res = await shopifyFetch<ShopifyProductOperation>({
    query: getProductQuery,
    variables: {
      handle,
    },
  });

  console.log(res);

  return reshapeProduct(res.body.data.product);
}

export async function getCart(cartId: string | undefined): Promise<Cart | undefined> {
  if (!cartId) {
    return undefined;
  }

  const res = await shopifyFetch<ShopifyCartOperation>({
    query: getCartQuery,
    variables: {
      cartId,
    },
  });

  return reshapeCart(res.body.data.cart);
}

export async function getCollectionsProducts({
  collection,
  reverse,
  sortKey,
}: {
  collection: string;
  reverse?: boolean;
  sortKey?: string;
}): Promise<Product[]> {
  const res = await shopifyFetch<ShopifyCollectionProductsOperation>({
    query: getCollectionProductsQuery,
    variables: {
      handle: collection,
      reverse,
      sortKey: sortKey === "CREATED_AT" ? "CREATED" : sortKey,
    },
  });

  if (!res.body.data.collection) {
    console.log(`No collection found for \`${collection}\``);
    return [];
  }

  return reshapeProducts(removeEdgesAndNodes(res.body.data.collection.products));
}
