import { gql } from "@apollo/client";

export const INSERT_ROOM = gql`
  mutation ($hostId: uuid, $capacity: Int, $privacy: rooms_privacy_enum) {
    insert_rooms(
      objects: { host: $hostId, privacy: $privacy, capacity: $capacity }
    ) {
      affected_rows
      returning {
        createdAt
        host
        id
        updatedAt
        privacy
      }
    }
  }
`;

export const INSERT_MESSAGE = gql`
  mutation ($message: rooms_messages_insert_input!) {
    insert_rooms_messages_one(object: $message) {
      createdAt
      text
    }
  }
`;

export const JOIN_ROOM = gql`
  mutation ($userId: uuid, $roomId: uuid, $id: uuid) {
    insert_room_members(
      objects: { userId: $userId, id: $id, roomId: $roomId }
    ) {
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

export const LEAVE_ROOM = gql`
  mutation ($userId: uuid, $roomId: uuid) {
    update_rooms(objects: { userId: $userId, id: $id }) {
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
