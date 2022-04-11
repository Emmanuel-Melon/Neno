import { gql } from "@apollo/client";

export const INSERT_ROOM = gql`
  mutation insertRoom($room: rooms_insert_input!) {
    insert_rooms_one(object: $room) {
      id
      host {
        id
        email
      }
    }
  }
`;

export const INSERT_MESSAGE = gql`
  mutation insertMessage($message: rooms_messages_insert_input!) {
    insert_rooms_messages_one(object: $message) {
      createdAt
      id
      senderId
      roomId
      text
      user {
        id
        lastSeen
        createdAt
        email
        image
        username
      }
    }
  }
`;

export const INSERT_ROOM_MEMBER = gql`
  mutation insertRoomMember($member: rooms_members_insert_input!) {
    insert_rooms_members_one(object: $member) {
      id
      role
      roomId
      member {
        id
        lastSeen
        createdAt
        email
      }
    }
  }
`;

export const INSERT_WORD_CATEGORIES = gql`
  mutation insertWordCategories(
    $categories: [rooms_word_categories_insert_input!]!
  ) {
    insert_rooms_word_categories(objects: $categories) {
      returning {
        roomId
        type
      }
    }
  }
`;

export const DELETE_ROOM_MEMBER = gql`
  mutation deleteRoomMember($roomId: uuid, $playerId: uuid) {
    delete_rooms_members(
      where: { roomId: { _eq: $roomId }, userId: { _eq: $playerId } }
    ) {
      returning {
        id
      }
    }
  }
`;

export const DELETE_ROOM = gql`
  mutation deleteRoom($roomId: uuid!) {
    delete_rooms_by_pk(id: $roomId) {
      id
    }
  }
`;
