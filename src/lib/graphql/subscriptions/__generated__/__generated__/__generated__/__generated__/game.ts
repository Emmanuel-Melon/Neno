import * as Types from "../../../../../globalTypes";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type GetCurrentGameSubscriptionVariables = Types.Exact<{
  [key: string]: never;
}>;

export type GetCurrentGameSubscription = {
  __typename?: "subscription_root";
  games: Array<{
    __typename?: "games";
    createdAt: string;
    id: string;
    roomId: string;
    winner: string;
  }>;
};

export const GetCurrentGameDocument = gql`
  subscription getCurrentGame {
    games {
      createdAt
      id
      roomId
      winner
    }
  }
`;

/**
 * __useGetCurrentGameSubscription__
 *
 * To run a query within a React component, call `useGetCurrentGameSubscription` and pass it any options that fit your needs.
 * When your component renders, `useGetCurrentGameSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCurrentGameSubscription({
 *   variables: {
 *   },
 * });
 */
export function useGetCurrentGameSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    GetCurrentGameSubscription,
    GetCurrentGameSubscriptionVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSubscription<
    GetCurrentGameSubscription,
    GetCurrentGameSubscriptionVariables
  >(GetCurrentGameDocument, options);
}
export type GetCurrentGameSubscriptionHookResult = ReturnType<
  typeof useGetCurrentGameSubscription
>;
export type GetCurrentGameSubscriptionResult =
  Apollo.SubscriptionResult<GetCurrentGameSubscription>;
