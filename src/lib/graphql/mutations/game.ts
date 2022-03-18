import { gql } from "@apollo/client";

export const INSERT_NEW_GAME = gql`
  mutation ($id: uuid, $roomId: uuid) {
    insert_games(objects: { id: $id, roomId: $roomId }) {
      returning {
        createdAt
        id
        roomId
        winner
      }
    }
  }
`;
