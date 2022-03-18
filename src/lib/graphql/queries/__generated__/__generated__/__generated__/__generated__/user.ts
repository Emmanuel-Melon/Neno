import * as Types from "../../../../../globalTypes";

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
