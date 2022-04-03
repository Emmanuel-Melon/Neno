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
        image
        username
      }
    }
  }
`;

export const GET_ACTIVE_LIVE_ROOMS = gql`
  subscription getActiveLiveRooms($privacy: rooms_privacy_enum) {
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
      }
      rooms_members {
        role
        id
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
    }
  }
`;

export const GET_LIVE_ROOM_MEMEMBERS = gql`
  subscription getLiveRoomMembers($roomId: uuid) {
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
