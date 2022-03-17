import { gql } from "@apollo/client";

export const GET_CURRENT_GAME = gql`
  subscription getCurrentGame {
    game {
      active
      createdAt
      id
      roomId
      winner
    }
  }
`;
