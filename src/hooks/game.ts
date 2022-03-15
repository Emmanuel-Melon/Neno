import { useMemo } from "react";
import {
  useQuery,
  useMutation,
  OperationVariables,
  useSubscription
} from "@apollo/client";

import { GET_WORD_CATEGORIES } from "../lib/graphql/queries/game";
import { INSERT_NEW_GAME } from "../lib/graphql/mutations/game";
import { GET_CURRENT_GAME } from "../lib/graphql/subscriptions/game";


export const useGetWordCategories = () => {
  const { error, data, loading } = useQuery(GET_WORD_CATEGORIES);

  return useMemo(
    () => ({
      loading,
      wordCategories: data?.word_categories,
      error,
    }),
    [loading, data?.word_categories, error]
  );
};

export const useInsertGame = () => {
  const [insertGame, { data, loading, error }] = useMutation(INSERT_NEW_GAME);
  return useMemo(
    () => ({
      loading,
      error,
      game: data?.insert_game?.affected_rows,
      insertGame: (game: OperationVariables | undefined) => {
        console.log(game)
        return insertGame({ variables: { ...game } }).then(
          ({ data }) => data?.insert_game
        );
      },
    }),
    [loading, error, data?.insert_game?.affected_rows, insertGame]
  );
};

export const useGetCurrentGame = () => {
  const { error, data, loading } = useSubscription(GET_CURRENT_GAME);

  return useMemo(
    () => ({
      loading,
      game: data?.game,
      error,
    }),
    [loading, data?.game, error]
  );
};