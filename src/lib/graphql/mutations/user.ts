import { gql } from "@apollo/client";

export const INSERT_USER = gql`
  mutation insertUser($id: uuid, $hostId: uuid) {
    insert_users(objects: { id: $id }) {
      returning {
        id
      }
    }
  }
`;

export const UPDATE_ONLINE_STATUS = gql`
  mutation updateLastSeen($now: timestamptz!) {
    update_users(where: {}, _set: { lastSeen: $now }) {
      returning {
        id
      }
    }
  }
`;
