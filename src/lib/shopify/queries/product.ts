import { productFragment } from "@/lib/shopify/fragments/product";

export const getProductsQuery = /* GraphQL*/ `
  query getProducts {
    products(first: 10) {
      edges {
        node {
          ...product
        }
      }
    }
  }
  ${productFragment}
`;

export const getProductQuery = /* GraphQL*/ `
  query getProduct($handle: String!) {
    product(handle: $handle) {
      ...product
    }
  }
  ${productFragment}
`;
