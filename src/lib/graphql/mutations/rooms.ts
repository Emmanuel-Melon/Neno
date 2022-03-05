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
        }
      }
  }
`;

export const JOIN_ROOM = gql`
  mutation ($userId: uuid, $roomId: uuid, $id: uuid) {
    insert_room_members(objects: { userId: $userId, id: $id, roomId: $roomId }) {
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
    update_rooms(objects: {userId: $userId, id: $id }) {
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