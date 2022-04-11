import { gql } from "@apollo/client";

export const GET_ACTIVE_ROOMS = gql`
  query getActiveRooms($privacy: rooms_privacy_enum) {
    rooms(
      where: { privacy: { _eq: $privacy }, active: { _eq: true } }
      order_by: { createdAt: desc }
    ) {
      active
      id
      host {
        email
        lastSeen
        username
        image
        id
      }
      rooms_members {
        id
        role
        member {
          email
          id
          lastSeen
          username
          image
        }
        joinedAt
      }
      capacity
      createdAt
      hostId
      privacy
      word_categories {
        type
      }
    }
  }
`;

export const GET_ROOM_MESSAGES = gql`
  query getRoomMessages($roomId: uuid) {
    rooms_messages(where: { roomId: { _eq: $roomId } }) {
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

export const GET_ROOM_MEMEMBERS = gql`
  query getRoomMembers($roomId: uuid) {
    rooms_members(where: { roomId: { _eq: $roomId } }) {
      id
      role
      roomId
      member {
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

export const GET_ROOM_MEMBER_COUNT = gql`
  subscription getMemberCount($roomId: uuid) {
    rooms_members_aggregate(where: { roomId: { _eq: $roomId } }) {
      aggregate {
        count
      }
    }
  }
`;

export const GET_ROOM_BY_ID = gql`
  query getRoomById($roomId: uuid!) {
    rooms_by_pk(id: $roomId) {
      capacity
      active
      createdAt
      hostId
      host {
        id
        lastSeen
        createdAt
        email
        image
        username
      }
      id
      privacy
      updatedAt
      rooms_members {
        id
        role
        member {
          id
          lastSeen
          createdAt
          email
          image
          username
        }
      }
      word_categories {
        type
      }
    }
  }
`;
