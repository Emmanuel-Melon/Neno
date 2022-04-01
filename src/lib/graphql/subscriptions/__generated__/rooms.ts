import * as Types from "../../globalTypes";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type GetLiveRoomMessagesSubscriptionVariables = Types.Exact<{
  roomId?: Types.InputMaybe<Types.Scalars["uuid"]>;
}>;

export type GetLiveRoomMessagesSubscription = {
  __typename?: "subscription_root";
  rooms_messages: Array<{
    __typename?: "rooms_messages";
    createdAt: string;
    id: string;
    senderId: string;
    roomId: string;
    text: string;
    user: {
      __typename?: "users";
      id: string;
      lastSeen?: string | null;
      createdAt: string;
      email: string;
    };
  }>;
};

export type GetActiveLiveRoomsSubscriptionVariables = Types.Exact<{
  privacy?: Types.InputMaybe<Types.Rooms_Privacy_Enum>;
}>;

export type GetActiveLiveRoomsSubscription = {
  __typename?: "subscription_root";
  rooms: Array<{
    __typename?: "rooms";
    active: boolean;
    id: string;
    capacity: number;
    createdAt: string;
    hostId: string;
    privacy: Types.Rooms_Privacy_Enum;
    host: {
      __typename?: "users";
      email: string;
      lastSeen?: string | null;
      username?: string | null;
    };
    rooms_members: Array<{
      __typename?: "rooms_members";
      role: Types.Rooms_Roles_Enum;
      id: string;
      joinedAt: string;
      member: {
        __typename?: "users";
        email: string;
        id: string;
        lastSeen?: string | null;
        username?: string | null;
      };
    }>;
  }>;
};

export type GetLiveRoomMembersSubscriptionVariables = Types.Exact<{
  roomId?: Types.InputMaybe<Types.Scalars["uuid"]>;
}>;

export type GetLiveRoomMembersSubscription = {
  __typename?: "subscription_root";
  rooms_members: Array<{
    __typename?: "rooms_members";
    id: string;
    role: Types.Rooms_Roles_Enum;
    roomId: string;
    member: {
      __typename?: "users";
      id: string;
      lastSeen?: string | null;
      createdAt: string;
      email: string;
    };
  }>;
};

export const GetLiveRoomMessagesDocument = gql`
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

/**
 * __useGetLiveRoomMessagesSubscription__
 *
 * To run a query within a React component, call `useGetLiveRoomMessagesSubscription` and pass it any options that fit your needs.
 * When your component renders, `useGetLiveRoomMessagesSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLiveRoomMessagesSubscription({
 *   variables: {
 *      roomId: // value for 'roomId'
 *   },
 * });
 */
export function useGetLiveRoomMessagesSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    GetLiveRoomMessagesSubscription,
    GetLiveRoomMessagesSubscriptionVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSubscription<
    GetLiveRoomMessagesSubscription,
    GetLiveRoomMessagesSubscriptionVariables
  >(GetLiveRoomMessagesDocument, options);
}
export type GetLiveRoomMessagesSubscriptionHookResult = ReturnType<
  typeof useGetLiveRoomMessagesSubscription
>;
export type GetLiveRoomMessagesSubscriptionResult =
  Apollo.SubscriptionResult<GetLiveRoomMessagesSubscription>;
export const GetActiveLiveRoomsDocument = gql`
  subscription getActiveLiveRooms($privacy: rooms_privacy_enum) {
    rooms(where: { privacy: { _eq: $privacy }, active: { _eq: true } }) {
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

/**
 * __useGetActiveLiveRoomsSubscription__
 *
 * To run a query within a React component, call `useGetActiveLiveRoomsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useGetActiveLiveRoomsSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetActiveLiveRoomsSubscription({
 *   variables: {
 *      privacy: // value for 'privacy'
 *   },
 * });
 */
export function useGetActiveLiveRoomsSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    GetActiveLiveRoomsSubscription,
    GetActiveLiveRoomsSubscriptionVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSubscription<
    GetActiveLiveRoomsSubscription,
    GetActiveLiveRoomsSubscriptionVariables
  >(GetActiveLiveRoomsDocument, options);
}
export type GetActiveLiveRoomsSubscriptionHookResult = ReturnType<
  typeof useGetActiveLiveRoomsSubscription
>;
export type GetActiveLiveRoomsSubscriptionResult =
  Apollo.SubscriptionResult<GetActiveLiveRoomsSubscription>;
export const GetLiveRoomMembersDocument = gql`
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
      }
    }
  }
`;

/**
 * __useGetLiveRoomMembersSubscription__
 *
 * To run a query within a React component, call `useGetLiveRoomMembersSubscription` and pass it any options that fit your needs.
 * When your component renders, `useGetLiveRoomMembersSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLiveRoomMembersSubscription({
 *   variables: {
 *      roomId: // value for 'roomId'
 *   },
 * });
 */
export function useGetLiveRoomMembersSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    GetLiveRoomMembersSubscription,
    GetLiveRoomMembersSubscriptionVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSubscription<
    GetLiveRoomMembersSubscription,
    GetLiveRoomMembersSubscriptionVariables
  >(GetLiveRoomMembersDocument, options);
}
export type GetLiveRoomMembersSubscriptionHookResult = ReturnType<
  typeof useGetLiveRoomMembersSubscription
>;
export type GetLiveRoomMembersSubscriptionResult =
  Apollo.SubscriptionResult<GetLiveRoomMembersSubscription>;
