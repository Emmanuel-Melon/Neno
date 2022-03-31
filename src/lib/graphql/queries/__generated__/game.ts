import * as Types from "../../globalTypes";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type GetWordCategoriesQueryVariables = Types.Exact<{
  [key: string]: never;
}>;

export type GetWordCategoriesQuery = {
  __typename?: "query_root";
  rooms_word_categories: Array<{
    __typename?: "rooms_word_categories";
    type: string;
  }>;
};

export type GetGameRoundsQueryVariables = Types.Exact<{
  gameId?: Types.InputMaybe<Types.Scalars["uuid"]>;
}>;

export type GetGameRoundsQuery = {
  __typename?: "query_root";
  games_rounds: Array<{
    __typename?: "games_rounds";
    gameId?: string | null;
    id: string;
    roomId: string;
    time?: string | null;
    timeRemaining?: string | null;
    letterId?: any | null;
    playerId?: string | null;
    letters: Array<{ __typename?: "animals"; letter: any; name: string }>;
  }>;
};

export type GetCurrentGameQueryVariables = Types.Exact<{
  roomId?: Types.InputMaybe<Types.Scalars["uuid"]>;
}>;

export type GetCurrentGameQuery = {
  __typename?: "query_root";
  rooms_games: Array<{
    __typename?: "rooms_games";
    startedAt?: string | null;
    id: string;
    roomId: string;
  }>;
};

export type GetRoundAnswersQueryVariables = Types.Exact<{
  playerId?: Types.InputMaybe<Types.Scalars["uuid"]>;
}>;

export type GetRoundAnswersQuery = {
  __typename?: "query_root";
  rounds_answers: Array<{ __typename?: "rounds_answers"; correct: boolean }>;
};

export const GetWordCategoriesDocument = gql`
  query getWordCategories {
    rooms_word_categories {
      type
    }
  }
`;

/**
 * __useGetWordCategoriesQuery__
 *
 * To run a query within a React component, call `useGetWordCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWordCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWordCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetWordCategoriesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetWordCategoriesQuery,
    GetWordCategoriesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetWordCategoriesQuery,
    GetWordCategoriesQueryVariables
  >(GetWordCategoriesDocument, options);
}
export function useGetWordCategoriesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetWordCategoriesQuery,
    GetWordCategoriesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetWordCategoriesQuery,
    GetWordCategoriesQueryVariables
  >(GetWordCategoriesDocument, options);
}
export type GetWordCategoriesQueryHookResult = ReturnType<
  typeof useGetWordCategoriesQuery
>;
export type GetWordCategoriesLazyQueryHookResult = ReturnType<
  typeof useGetWordCategoriesLazyQuery
>;
export type GetWordCategoriesQueryResult = Apollo.QueryResult<
  GetWordCategoriesQuery,
  GetWordCategoriesQueryVariables
>;
export const GetGameRoundsDocument = gql`
  query getGameRounds($gameId: uuid) {
    games_rounds(where: { gameId: { _eq: $gameId } }) {
      gameId
      id
      roomId
      time
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
 * __useGetGameRoundsQuery__
 *
 * To run a query within a React component, call `useGetGameRoundsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGameRoundsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGameRoundsQuery({
 *   variables: {
 *      gameId: // value for 'gameId'
 *   },
 * });
 */
export function useGetGameRoundsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetGameRoundsQuery,
    GetGameRoundsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetGameRoundsQuery, GetGameRoundsQueryVariables>(
    GetGameRoundsDocument,
    options
  );
}
export function useGetGameRoundsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetGameRoundsQuery,
    GetGameRoundsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetGameRoundsQuery, GetGameRoundsQueryVariables>(
    GetGameRoundsDocument,
    options
  );
}
export type GetGameRoundsQueryHookResult = ReturnType<
  typeof useGetGameRoundsQuery
>;
export type GetGameRoundsLazyQueryHookResult = ReturnType<
  typeof useGetGameRoundsLazyQuery
>;
export type GetGameRoundsQueryResult = Apollo.QueryResult<
  GetGameRoundsQuery,
  GetGameRoundsQueryVariables
>;
export const GetCurrentGameDocument = gql`
  query getCurrentGame($roomId: uuid) {
    rooms_games(where: { roomId: { _eq: $roomId } }) {
      startedAt
      id
      roomId
    }
  }
`;

/**
 * __useGetCurrentGameQuery__
 *
 * To run a query within a React component, call `useGetCurrentGameQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCurrentGameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCurrentGameQuery({
 *   variables: {
 *      roomId: // value for 'roomId'
 *   },
 * });
 */
export function useGetCurrentGameQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetCurrentGameQuery,
    GetCurrentGameQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetCurrentGameQuery, GetCurrentGameQueryVariables>(
    GetCurrentGameDocument,
    options
  );
}
export function useGetCurrentGameLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCurrentGameQuery,
    GetCurrentGameQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetCurrentGameQuery, GetCurrentGameQueryVariables>(
    GetCurrentGameDocument,
    options
  );
}
export type GetCurrentGameQueryHookResult = ReturnType<
  typeof useGetCurrentGameQuery
>;
export type GetCurrentGameLazyQueryHookResult = ReturnType<
  typeof useGetCurrentGameLazyQuery
>;
export type GetCurrentGameQueryResult = Apollo.QueryResult<
  GetCurrentGameQuery,
  GetCurrentGameQueryVariables
>;
export const GetRoundAnswersDocument = gql`
  query getRoundAnswers($playerId: uuid) {
    rounds_answers(where: { playerId: { _eq: $playerId } }) {
      correct
    }
  }
`;

/**
 * __useGetRoundAnswersQuery__
 *
 * To run a query within a React component, call `useGetRoundAnswersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRoundAnswersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRoundAnswersQuery({
 *   variables: {
 *      playerId: // value for 'playerId'
 *   },
 * });
 */
export function useGetRoundAnswersQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetRoundAnswersQuery,
    GetRoundAnswersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetRoundAnswersQuery, GetRoundAnswersQueryVariables>(
    GetRoundAnswersDocument,
    options
  );
}
export function useGetRoundAnswersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetRoundAnswersQuery,
    GetRoundAnswersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetRoundAnswersQuery,
    GetRoundAnswersQueryVariables
  >(GetRoundAnswersDocument, options);
}
export type GetRoundAnswersQueryHookResult = ReturnType<
  typeof useGetRoundAnswersQuery
>;
export type GetRoundAnswersLazyQueryHookResult = ReturnType<
  typeof useGetRoundAnswersLazyQuery
>;
export type GetRoundAnswersQueryResult = Apollo.QueryResult<
  GetRoundAnswersQuery,
  GetRoundAnswersQueryVariables
>;
