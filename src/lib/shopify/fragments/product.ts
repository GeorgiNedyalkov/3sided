import { imageFragment } from "@/lib/shopify/fragments/images";

export const productFragment = /* GraphQL */ `
  fragment product on Product {
    id
    handle
    title
    availableForSale
    description
    descriptionHtml
    options {
      id
      name
    }
    priceRange {
      maxVariantPrice {
        amount
        currencyCode
      }
      minVariantPrice {
        amount
        currencyCode
      }
    }
    images(first: 10) {
      edges {
        node {
          ...image
        }
      }
    }
  }
  ${imageFragment}
`;
