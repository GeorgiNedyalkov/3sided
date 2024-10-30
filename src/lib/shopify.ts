export const SHOPIFY_GRAPHQL_API_ENDPOINT = "/api/2023-01/graphql.json"; // check this

const key = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;
const domain = process.env.SHOPIFY_STORE_DOMAIN;
const endpoint = `${domain}${SHOPIFY_GRAPHQL_API_ENDPOINT}`;

type ExtractVariables<T> = T extends { variables: object }
  ? T["variables"]
  : never;

export async function shopifyFetch({
  query,
  headers,
  variables,
}: {
  query: string;
  headers?: HeadersInit;
  variables?: ExtractVariables<T>;
}) {
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
      throw ;
    }

    return {
      status: result.status,
      body: await result.json(),
    };
  } catch (error) {
    console.error("Error: ", error);
    return {
      status: 500,
      error: "Error receiving data",
    };
  }
}

export async function getAllProducts() {
  return shopifyFetch({
    query: `{
        products(sortKey: TITLE, first: 100) {
          edges{
            node {
              id
              title
              description
              priceRange {
                minVariantPrice {
                  amount
                }
              }
            }
          }
        }
      }`,
  });
}
