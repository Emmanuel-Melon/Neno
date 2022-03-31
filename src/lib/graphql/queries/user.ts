import { gql } from "@apollo/client";

export const GET_ONLINE_USERS = gql`
  subscription getOnlineUsers {
    users {
      id
    }
  }
`;

export const GET_USER = gql`
  query getUser ($email: String) {
    users(where: {email: {_eq: $email }}) {
      id
      email
      username
    }
  }
`;
