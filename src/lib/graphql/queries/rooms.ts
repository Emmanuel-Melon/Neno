import { gql } from "@apollo/client";

export const GET_ACTIVE_ROOMS = gql`
  query getActiveRooms {
    rooms {
      id
      createdAt
      updatedAt
    }
  }
`;
