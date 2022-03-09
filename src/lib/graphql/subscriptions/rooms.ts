import { gql } from "@apollo/client";

export const GET_ROOM_MESSAGES = gql`
  subscription getRoomMessages {
      message {
        createdAt
        sender
        id
        text
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
