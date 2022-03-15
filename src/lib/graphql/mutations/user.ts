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

export const UPDATE_ONLINE_STATUS = gql`
  mutation updateLastSeen($now: timestamptz!) {
    update_users(where: {}, _set: { lastSeen: $now }) {
      affected_rows
    }
  }
`;
