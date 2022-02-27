import { gql, useMutation } from "@apollo/client";

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

export const GET_CATEGORIES = gql`
  query {
    categories {
      id
      name
    }
  }
`;

/* MUTATION */
export const CREATE_PRODUCT = gql`
  mutation CreateProduct($input: CreateProductInput!) {
    createProduct(input: $input) {
      categoryId
      code
      description
      dimensionA
      dimensionB
      dimensionC
      ean
      id
      name
      weight
    }
  }
`;

export const CREATE_CATEGORY = gql`
  mutation CreateCategory($input: CreateCategoryInput!) {
    createCategory(input: $input) {
      id
      name
    }
  }
`;
