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
  }
`;
