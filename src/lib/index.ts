import { getProductQuery, getProductsQuery } from "@/lib/shopify/queries/product";
import {
  Connection,
  Product,
  ShopifyProduct,
  ShopifyProductOperation,
  ShopifyProductsOperation,
} from "./shopify/types";

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

function reshapeProduct(product: ShopifyProduct) {
  if (!product) return undefined;

  const { images } = product;

  return {
    ...product,
    images: removeEdgesAndNodes(images),
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

  return reshapeProduct(res.body.data.product);
}
