import * as Types from "../../../../../globalTypes";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type GetLiveRoomMessagesSubscriptionVariables = Types.Exact<{
  [key: string]: never;
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

export type GetActiveRoomsSubscriptionVariables = Types.Exact<{
  [key: string]: never;
}>;

export type GetActiveRoomsSubscription = {
  __typename?: "subscription_root";
  rooms: Array<{
    __typename?: "rooms";
    id: string;
    createdAt: string;
    updatedAt?: string | null;
  }>;
};

export const GetLiveRoomMessagesDocument = gql`
  subscription getLiveRoomMessages {
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
export const GetActiveRoomsDocument = gql`
  subscription getActiveRooms {
    rooms {
      id
      createdAt
      updatedAt
    }
  }
`;

/**
 * __useGetActiveRoomsSubscription__
 *
 * To run a query within a React component, call `useGetActiveRoomsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useGetActiveRoomsSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetActiveRoomsSubscription({
 *   variables: {
 *   },
 * });
 */
export function useGetActiveRoomsSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    GetActiveRoomsSubscription,
    GetActiveRoomsSubscriptionVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSubscription<
    GetActiveRoomsSubscription,
    GetActiveRoomsSubscriptionVariables
  >(GetActiveRoomsDocument, options);
}
export type GetActiveRoomsSubscriptionHookResult = ReturnType<
  typeof useGetActiveRoomsSubscription
>;
export type GetActiveRoomsSubscriptionResult =
  Apollo.SubscriptionResult<GetActiveRoomsSubscription>;
