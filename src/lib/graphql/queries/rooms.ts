import { gql } from "@apollo/client";

export const GET_ACTIVE_ROOMS = gql`
  query getActiveRooms {
    rooms {
      active
      id
      host {
        email
        lastSeen
        username
      }
      rooms_members {
        id
        role
        member {
          email
          id
          lastSeen
          username
        }
        joinedAt
      }
      capacity
      createdAt
      hostId
      privacy
    }
  }
`;

export const GET_ROOM_MESSAGES = gql`
  query getRoomMessages($roomId: uuid) {
    rooms_messages(where: {roomId: {_eq: $roomId }}) {
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
      }
    }
  }
`;

export const GET_ROOM_MEMEMBERS = gql`
  query getRoomMembers($roomId: uuid) {
    rooms_members(where: {roomId: {_eq: $roomId }}) {
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
