import { gql } from "@apollo/client";

/* MUTATION */
export const CREATE_USER = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      email
      id
      name
    }
  }
`;

export const SIGNIN_USER = gql`
  mutation SigninUser($input: SignInUserInput!) {
    signinUser(input: $input) {
      token
    }
  }
`;
