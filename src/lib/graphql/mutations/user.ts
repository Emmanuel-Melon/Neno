import { gql } from "@apollo/client";

export const INSERT_USER = gql`
  mutation ($id: uuid, $hostId: uuid) {
    insert_users(objects: { id: $id }) {
        affected_rows
        returning {
          id
          name
        }
      }
  }
`;