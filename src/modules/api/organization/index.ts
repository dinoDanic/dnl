import { gql } from "@apollo/client";

export const CREATE_ORGANIZATION = gql`
  mutation createOrganization($input: CreateOrganizationInput!) {
    createOrganization(input: $input) {
      id
      name
      oib
    }
  }
`;
