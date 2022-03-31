import * as Types from "../../globalTypes";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type GetOnlineUsersSubscriptionVariables = Types.Exact<{
  [key: string]: never;
}>;

export type GetOnlineUsersSubscription = {
  __typename?: "subscription_root";
  users: Array<{ __typename?: "users"; id: string }>;
};

export type GetUserQueryVariables = Types.Exact<{
  email?: Types.InputMaybe<Types.Scalars["String"]>;
}>;

export type GetUserQuery = {
  __typename?: "query_root";
  users: Array<{
    __typename?: "users";
    id: string;
    email: string;
    username?: string | null;
  }>;
};

export const GetOnlineUsersDocument = gql`
  subscription getOnlineUsers {
    users {
      id
    }
  }
`;

/**
 * __useGetOnlineUsersSubscription__
 *
 * To run a query within a React component, call `useGetOnlineUsersSubscription` and pass it any options that fit your needs.
 * When your component renders, `useGetOnlineUsersSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOnlineUsersSubscription({
 *   variables: {
 *   },
 * });
 */
export function useGetOnlineUsersSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    GetOnlineUsersSubscription,
    GetOnlineUsersSubscriptionVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSubscription<
    GetOnlineUsersSubscription,
    GetOnlineUsersSubscriptionVariables
  >(GetOnlineUsersDocument, options);
}
export type GetOnlineUsersSubscriptionHookResult = ReturnType<
  typeof useGetOnlineUsersSubscription
>;
export type GetOnlineUsersSubscriptionResult =
  Apollo.SubscriptionResult<GetOnlineUsersSubscription>;
export const GetUserDocument = gql`
  query getUser($email: String) {
    users(where: { email: { _eq: $email } }) {
      id
      email
      username
    }
  }
`;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useGetUserQuery(
  baseOptions?: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(
    GetUserDocument,
    options
  );
}
export function useGetUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(
    GetUserDocument,
    options
  );
}
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<
  GetUserQuery,
  GetUserQueryVariables
>;
