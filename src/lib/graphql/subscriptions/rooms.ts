import { gql } from "@apollo/client";

export const GET_LIVE_ROOM_MESSAGES = gql`
  subscription getLiveRoomMessages($roomId: uuid) {
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
      }
    }
  }
`;

export const GET_ACTIVE_LIVE_ROOMS = gql`
  subscription getActiveLiveRooms {
    rooms {
      active
      id
      host {
        email
        lastSeen
        username
      }
      rooms_members {
        role
        id
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

export const GET_LIVE_ROOM_MEMEMBERS = gql`
  query getLiveRoomMembers($roomId: uuid) {
    rooms_members(where: { roomId: { _eq: $roomId } }) {
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
