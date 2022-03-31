import * as Types from "../../globalTypes";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type GetCurrentLiveGameSubscriptionVariables = Types.Exact<{
  roomId?: Types.InputMaybe<Types.Scalars["uuid"]>;
}>;

export type GetCurrentLiveGameSubscription = {
  __typename?: "subscription_root";
  rooms_games: Array<{
    __typename?: "rooms_games";
    startedAt?: string | null;
    id: string;
    roomId: string;
  }>;
};

export type GetGameLiveRoundsordCategoriesSubscriptionVariables = Types.Exact<{
  gameId?: Types.InputMaybe<Types.Scalars["uuid"]>;
}>;

export type GetGameLiveRoundsordCategoriesSubscription = {
  __typename?: "subscription_root";
  games_rounds: Array<{
    __typename?: "games_rounds";
    gameId?: string | null;
    id: string;
    roomId: string;
    timeRemaining?: string | null;
    letterId?: any | null;
    playerId?: string | null;
    letters: Array<{ __typename?: "animals"; letter: any; name: string }>;
  }>;
};

export const GetCurrentLiveGameDocument = gql`
  subscription getCurrentLiveGame($roomId: uuid) {
    rooms_games(where: { roomId: { _eq: $roomId } }) {
      startedAt
      id
      roomId
    }
  }
`;

/**
 * __useGetCurrentLiveGameSubscription__
 *
 * To run a query within a React component, call `useGetCurrentLiveGameSubscription` and pass it any options that fit your needs.
 * When your component renders, `useGetCurrentLiveGameSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCurrentLiveGameSubscription({
 *   variables: {
 *      roomId: // value for 'roomId'
 *   },
 * });
 */
export function useGetCurrentLiveGameSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    GetCurrentLiveGameSubscription,
    GetCurrentLiveGameSubscriptionVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSubscription<
    GetCurrentLiveGameSubscription,
    GetCurrentLiveGameSubscriptionVariables
  >(GetCurrentLiveGameDocument, options);
}
export type GetCurrentLiveGameSubscriptionHookResult = ReturnType<
  typeof useGetCurrentLiveGameSubscription
>;
export type GetCurrentLiveGameSubscriptionResult =
  Apollo.SubscriptionResult<GetCurrentLiveGameSubscription>;
export const GetGameLiveRoundsordCategoriesDocument = gql`
  subscription getGameLiveRoundsordCategories($gameId: uuid) {
    games_rounds(where: { gameId: { _eq: $gameId } }) {
      gameId
      id
      roomId
      timeRemaining
      letterId
      playerId
      letters {
        letter
        name
      }
    }
  }
`;

/**
 * __useGetGameLiveRoundsordCategoriesSubscription__
 *
 * To run a query within a React component, call `useGetGameLiveRoundsordCategoriesSubscription` and pass it any options that fit your needs.
 * When your component renders, `useGetGameLiveRoundsordCategoriesSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGameLiveRoundsordCategoriesSubscription({
 *   variables: {
 *      gameId: // value for 'gameId'
 *   },
 * });
 */
export function useGetGameLiveRoundsordCategoriesSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    GetGameLiveRoundsordCategoriesSubscription,
    GetGameLiveRoundsordCategoriesSubscriptionVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSubscription<
    GetGameLiveRoundsordCategoriesSubscription,
    GetGameLiveRoundsordCategoriesSubscriptionVariables
  >(GetGameLiveRoundsordCategoriesDocument, options);
}
export type GetGameLiveRoundsordCategoriesSubscriptionHookResult = ReturnType<
  typeof useGetGameLiveRoundsordCategoriesSubscription
>;
export type GetGameLiveRoundsordCategoriesSubscriptionResult =
  Apollo.SubscriptionResult<GetGameLiveRoundsordCategoriesSubscription>;
