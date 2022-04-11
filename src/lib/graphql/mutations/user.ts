import { gql } from "@apollo/client";

export const INSERT_USER = gql`
  mutation insertUser($user: users_insert_input!) {
    insert_users_one(object: $user) {
      id
      image
      guest
      username
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
