import * as Types from "../../globalTypes";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type GetActiveRoomsQueryVariables = Types.Exact<{
  privacy?: Types.InputMaybe<Types.Rooms_Privacy_Enum>;
}>;

export type GetActiveRoomsQuery = {
  __typename?: "query_root";
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
      id: string;
      role: Types.Rooms_Roles_Enum;
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

export type GetRoomMessagesQueryVariables = Types.Exact<{
  roomId?: Types.InputMaybe<Types.Scalars["uuid"]>;
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

export type GetRoomMembersQueryVariables = Types.Exact<{
  roomId?: Types.InputMaybe<Types.Scalars["uuid"]>;
}>;

export type GetRoomMembersQuery = {
  __typename?: "query_root";
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

export type GetMemberCountQueryVariables = Types.Exact<{
  roomId?: Types.InputMaybe<Types.Scalars["uuid"]>;
}>;

export type GetMemberCountQuery = {
  __typename?: "query_root";
  rooms_members_aggregate: {
    __typename?: "rooms_members_aggregate";
    aggregate?: {
      __typename?: "rooms_members_aggregate_fields";
      count: number;
    } | null;
  };
};

export type GetRoomByIdQueryVariables = Types.Exact<{
  roomId: Types.Scalars["uuid"];
}>;

export type GetRoomByIdQuery = {
  __typename?: "query_root";
  rooms_by_pk?: {
    __typename?: "rooms";
    capacity: number;
    active: boolean;
    categories?: string | null;
    createdAt: string;
    hostId: string;
    id: string;
    privacy: Types.Rooms_Privacy_Enum;
    updatedAt?: string | null;
    rooms_members: Array<{
      __typename?: "rooms_members";
      id: string;
      role: Types.Rooms_Roles_Enum;
      member: {
        __typename?: "users";
        email: string;
        lastSeen?: string | null;
        username?: string | null;
      };
    }>;
  } | null;
};

export const GetActiveRoomsDocument = gql`
  query getActiveRooms($privacy: rooms_privacy_enum) {
    rooms(where: { privacy: { _eq: $privacy }, active: { _eq: true } }) {
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

/**
 * __useGetActiveRoomsQuery__
 *
 * To run a query within a React component, call `useGetActiveRoomsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetActiveRoomsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetActiveRoomsQuery({
 *   variables: {
 *      privacy: // value for 'privacy'
 *   },
 * });
 */
export function useGetActiveRoomsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetActiveRoomsQuery,
    GetActiveRoomsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetActiveRoomsQuery, GetActiveRoomsQueryVariables>(
    GetActiveRoomsDocument,
    options
  );
}
export function useGetActiveRoomsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetActiveRoomsQuery,
    GetActiveRoomsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetActiveRoomsQuery, GetActiveRoomsQueryVariables>(
    GetActiveRoomsDocument,
    options
  );
}
export type GetActiveRoomsQueryHookResult = ReturnType<
  typeof useGetActiveRoomsQuery
>;
export type GetActiveRoomsLazyQueryHookResult = ReturnType<
  typeof useGetActiveRoomsLazyQuery
>;
export type GetActiveRoomsQueryResult = Apollo.QueryResult<
  GetActiveRoomsQuery,
  GetActiveRoomsQueryVariables
>;
export const GetRoomMessagesDocument = gql`
  query getRoomMessages($roomId: uuid) {
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
 *      roomId: // value for 'roomId'
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
export const GetRoomMembersDocument = gql`
  query getRoomMembers($roomId: uuid) {
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
 * __useGetRoomMembersQuery__
 *
 * To run a query within a React component, call `useGetRoomMembersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRoomMembersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRoomMembersQuery({
 *   variables: {
 *      roomId: // value for 'roomId'
 *   },
 * });
 */
export function useGetRoomMembersQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetRoomMembersQuery,
    GetRoomMembersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetRoomMembersQuery, GetRoomMembersQueryVariables>(
    GetRoomMembersDocument,
    options
  );
}
export function useGetRoomMembersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetRoomMembersQuery,
    GetRoomMembersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetRoomMembersQuery, GetRoomMembersQueryVariables>(
    GetRoomMembersDocument,
    options
  );
}
export type GetRoomMembersQueryHookResult = ReturnType<
  typeof useGetRoomMembersQuery
>;
export type GetRoomMembersLazyQueryHookResult = ReturnType<
  typeof useGetRoomMembersLazyQuery
>;
export type GetRoomMembersQueryResult = Apollo.QueryResult<
  GetRoomMembersQuery,
  GetRoomMembersQueryVariables
>;
export const GetMemberCountDocument = gql`
  query getMemberCount($roomId: uuid) {
    rooms_members_aggregate(where: { roomId: { _eq: $roomId } }) {
      aggregate {
        count
      }
    }
  }
`;

/**
 * __useGetMemberCountQuery__
 *
 * To run a query within a React component, call `useGetMemberCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMemberCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMemberCountQuery({
 *   variables: {
 *      roomId: // value for 'roomId'
 *   },
 * });
 */
export function useGetMemberCountQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetMemberCountQuery,
    GetMemberCountQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetMemberCountQuery, GetMemberCountQueryVariables>(
    GetMemberCountDocument,
    options
  );
}
export function useGetMemberCountLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetMemberCountQuery,
    GetMemberCountQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetMemberCountQuery, GetMemberCountQueryVariables>(
    GetMemberCountDocument,
    options
  );
}
export type GetMemberCountQueryHookResult = ReturnType<
  typeof useGetMemberCountQuery
>;
export type GetMemberCountLazyQueryHookResult = ReturnType<
  typeof useGetMemberCountLazyQuery
>;
export type GetMemberCountQueryResult = Apollo.QueryResult<
  GetMemberCountQuery,
  GetMemberCountQueryVariables
>;
export const GetRoomByIdDocument = gql`
  query getRoomById($roomId: uuid!) {
    rooms_by_pk(id: $roomId) {
      capacity
      active
      categories
      createdAt
      hostId
      id
      privacy
      updatedAt
      rooms_members {
        id
        role
        member {
          email
          lastSeen
          username
        }
      }
    }
  }
`;

/**
 * __useGetRoomByIdQuery__
 *
 * To run a query within a React component, call `useGetRoomByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRoomByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRoomByIdQuery({
 *   variables: {
 *      roomId: // value for 'roomId'
 *   },
 * });
 */
export function useGetRoomByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetRoomByIdQuery,
    GetRoomByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetRoomByIdQuery, GetRoomByIdQueryVariables>(
    GetRoomByIdDocument,
    options
  );
}
export function useGetRoomByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetRoomByIdQuery,
    GetRoomByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetRoomByIdQuery, GetRoomByIdQueryVariables>(
    GetRoomByIdDocument,
    options
  );
}
export type GetRoomByIdQueryHookResult = ReturnType<typeof useGetRoomByIdQuery>;
export type GetRoomByIdLazyQueryHookResult = ReturnType<
  typeof useGetRoomByIdLazyQuery
>;
export type GetRoomByIdQueryResult = Apollo.QueryResult<
  GetRoomByIdQuery,
  GetRoomByIdQueryVariables
>;
