import { gql } from "@apollo/client";

/* MUTATION */
export const CREATE_USER = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      email
      id
    }
  }
`;

/* QUERYS */

export const LOGIN_USER = gql`
  query login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

export const CURRENT_USER = gql`
  query currentUser {
    id
    email
  }
`;
