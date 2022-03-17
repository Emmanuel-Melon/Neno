import { gql } from "@apollo/client";

export const GET_ROOM_MESSAGES = gql`
  query getRoomMessages {
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
