import { gql } from "@apollo/client";

export const INSERT_ROOM = gql`
  mutation ($room: rooms_insert_input!) {
    insert_rooms_one(
      object: $room
    ) {
      id
    }
  }
`;

export const INSERT_MESSAGE = gql`
  mutation ($message: rooms_messages_insert_input!) {
    insert_rooms_messages_one(object: $message) {
      id
    }
  }
`;

export const JOIN_ROOM = gql`
  mutation ($member: rooms_members_insert_input!) {
    insert_rooms_members_one(
      object: $member
    ) {
      id
    }
  }
`;

