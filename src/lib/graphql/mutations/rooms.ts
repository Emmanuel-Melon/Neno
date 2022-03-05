import { gql } from "@apollo/client";

export const INSERT_ROOM = gql`
  mutation ($id: uuid, $hostId: uuid) {
    insert_rooms(objects: {host: $hostId, id: $id }) {
        affected_rows
        returning {
          createdAt
          host
          id
          updatedAt
          users
        }
      }
  }
`;