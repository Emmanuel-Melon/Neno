import { gql } from "@apollo/client";

export const INSERT_NEW_GAME = gql`
  mutation ($id: uuid, $roomId: uuid) {
    insert_game(objects: { id: $id, roomId: $roomId }) {
      returning {
        active
        createdAt
        id
        roomId
        winner
      }
    }
  }
`;
