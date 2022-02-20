import { gql } from "@apollo/client";

/* QUERY */
export const GET_PRODUCTS = gql`
  query {
    products {
      code
      id
      name
      eanCode
      weight
    }
  }
`;

/* MUTATION */
export const CREATE_PRODUCT = gql`
  mutation CreateProduct($input: CreateProductInput!) {
    createProduct(input: $input) {
      product {
        code
        id
        name
      }
    }
  }
`;
