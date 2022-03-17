import { gql } from "@apollo/client";

export const GET_LIVE_ROOM_MESSAGES = gql`
  subscription getRoomMessages {
    rooms_messages {
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

export const GET_ACTIVE_ROOMS = gql`
  subscription getActiveRooms {
    rooms {
      id
      createdAt
      updatedAt
    }
  }
`;
