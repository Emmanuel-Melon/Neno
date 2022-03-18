import { gql } from "@apollo/client";

export const GET_ONLINE_USERS = gql`
  subscription getOnlineUsers {
    users {
      id
    }
  }
`;
