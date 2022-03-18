import * as Types from "../../../globalTypes";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type GetRoomMessagesQueryVariables = Types.Exact<{
  [key: string]: never;
}>;

export type GetRoomMessagesQuery = {
  __typename?: "query_root";
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

export const GetRoomMessagesDocument = gql`
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

/**
 * __useGetRoomMessagesQuery__
 *
 * To run a query within a React component, call `useGetRoomMessagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRoomMessagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRoomMessagesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetRoomMessagesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetRoomMessagesQuery,
    GetRoomMessagesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetRoomMessagesQuery, GetRoomMessagesQueryVariables>(
    GetRoomMessagesDocument,
    options
  );
}
export function useGetRoomMessagesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetRoomMessagesQuery,
    GetRoomMessagesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetRoomMessagesQuery,
    GetRoomMessagesQueryVariables
  >(GetRoomMessagesDocument, options);
}
export type GetRoomMessagesQueryHookResult = ReturnType<
  typeof useGetRoomMessagesQuery
>;
export type GetRoomMessagesLazyQueryHookResult = ReturnType<
  typeof useGetRoomMessagesLazyQuery
>;
export type GetRoomMessagesQueryResult = Apollo.QueryResult<
  GetRoomMessagesQuery,
  GetRoomMessagesQueryVariables
>;
