import { gql } from "@apollo/client";

export const GET_CURRENT_GAME = gql`
  subscription getCurrentGame {
    games {
      createdAt
      id
      roomId
      winner
    }
  }
`;
