import { useMemo } from "react";
import { useQuery, useMutation, OperationVariables, useSubscription } from "@apollo/client";

import {
  GET_WORD_CATEGORIES,
  GET_GAME_ROUNDS,
  GET_ROUND_ANSWERS,
} from "../lib/graphql/queries/game";
import {
  INSERT_NEW_GAME,
  INSERT_GAME_ROUNDS,
  INSERT_ROUND_ANSWERS,
} from "../lib/graphql/mutations/game";
import { GET_CURRENT_LIVE_GAME } from "../lib/graphql/subscriptions/game";

import {
  InsertGameRoundsMutation,
  InsertNewGameMutation,
  InsertGameRoundsMutationVariables,
  InsertNewGameMutationVariables,
  InsertRoundAnswersMutation,
  InsertRoundAnswersMutationVariables,
} from "../lib/graphql/mutations/__generated__/game";

import {
  GetWordCategoriesQuery,
  GetWordCategoriesQueryVariables,
} from "../lib/graphql/queries/__generated__/game";
import { GetCurrentLiveGameSubscription, GetCurrentLiveGameSubscriptionVariables } from "../lib/graphql/subscriptions/__generated__/game";

export const useGetWordCategories = () => {
  const { error, data, loading } = useQuery<
    GetWordCategoriesQuery,
    GetWordCategoriesQueryVariables
  >(GET_WORD_CATEGORIES);
  return useMemo(
    () => ({
      loadingCategories: loading,
      wordCategories: data?.word_categories,
      error,
    }),
    [loading, data?.word_categories, error]
  );
};

export const useInsertGame = () => {
  const [insertGame, { data, loading, error }] = useMutation<
    InsertNewGameMutation,
    InsertNewGameMutationVariables
  >(INSERT_NEW_GAME);
  return useMemo(
    () => ({
      loading,
      error,
      game: data?.insert_rooms_games_one,
      insertGame: (game: OperationVariables) => {
        return insertGame({ variables: { game } }).then(
          ({ data }) => data?.insert_rooms_games_one
        );
      },
    }),
    [loading, error, data?.insert_rooms_games_one, insertGame]
  );
};

export const useInsertGameRounds = () => {
  const [insertGameRounds, { data, loading, error }] = useMutation<
    InsertGameRoundsMutation,
    InsertGameRoundsMutationVariables
  >(INSERT_GAME_ROUNDS);
  return useMemo(
    () => ({
      loading,
      error,
      game: data?.insert_games_rounds,
      insertGameRounds: (rounds: OperationVariables) => {
        return insertGameRounds({ variables: { rounds } }).then(
          ({ data }) => data?.insert_games_rounds
        );
      },
    }),
    [loading, error, data?.insert_games_rounds, insertGameRounds]
  );
};

export const useGetCurrentGame = (roomId: string) => {
  const { error, data, loading } = useSubscription<
    GetCurrentLiveGameSubscription,
    GetCurrentLiveGameSubscriptionVariables
  >(GET_CURRENT_LIVE_GAME, {
    variables: {
      roomId,
    },
  });

  return useMemo(
    () => ({
      loadingGame: loading,
      game: data?.rooms_games,
      error,
    }),
    [loading, data?.rooms_games, error]
  );
};

export const useInsertRoundAnswers = () => {
  const [insertAnswers, { data, loading, error }] = useMutation<
    InsertRoundAnswersMutation,
    InsertRoundAnswersMutationVariables
  >(INSERT_ROUND_ANSWERS);
  return useMemo(
    () => ({
      loadingAnswers: loading,
      error,
      answers: data?.insert_rounds_answers,
      insertAnswers: (answers: OperationVariables) => {
        return insertAnswers({ variables: { answers } }).then(
          ({ data }) => data?.insert_rounds_answers
        );
      },
    }),
    [loading, error, data?.insert_rounds_answers, insertAnswers]
  );
};

export const useGetGameRounds = (gameId: string) => {
  const { error, data, loading } = useQuery(GET_GAME_ROUNDS, {
    variables: {
      gameId,
    },
  });
  return useMemo(
    () => ({
      loadingRounds: loading,
      rounds: data?.games_rounds,
      error,
    }),
    [loading, data?.games_rounds, error]
  );
};

export const useCheckRoundAnswers = () => {
  const { data, loading, error } = useQuery(GET_ROUND_ANSWERS);
  return useMemo(
    () => ({
      loadingResults: loading,
      results: data?.animals,
      error,
    }),
    [loading, data?.animals, error]
  );
};
