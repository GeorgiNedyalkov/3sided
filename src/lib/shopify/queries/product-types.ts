export const getProductTypesQuery = /* GraphQL */ `
  query getProductTypes {
    productTypes(first: 10) {
      edges {
        node
      }
    }
  }
`;
