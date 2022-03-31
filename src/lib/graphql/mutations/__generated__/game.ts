import * as Types from "../../globalTypes";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type InsertNewGameMutationVariables = Types.Exact<{
  game: Types.Rooms_Games_Insert_Input;
}>;

export type InsertNewGameMutation = {
  __typename?: "mutation_root";
  insert_rooms_games_one?: {
    __typename?: "rooms_games";
    id: string;
    room: {
      __typename?: "rooms";
      id: string;
      privacy: Types.Rooms_Privacy_Enum;
    };
  } | null;
};

export type InsertGameRoundsMutationVariables = Types.Exact<{
  rounds:
    | Array<Types.Games_Rounds_Insert_Input>
    | Types.Games_Rounds_Insert_Input;
}>;

export type InsertGameRoundsMutation = {
  __typename?: "mutation_root";
  insert_games_rounds?: {
    __typename?: "games_rounds_mutation_response";
    returning: Array<{
      __typename?: "games_rounds";
      gameId?: string | null;
      id: string;
    }>;
  } | null;
};

export type InsertRoundAnswersMutationVariables = Types.Exact<{
  answers:
    | Array<Types.Rounds_Answers_Insert_Input>
    | Types.Rounds_Answers_Insert_Input;
}>;

export type InsertRoundAnswersMutation = {
  __typename?: "mutation_root";
  insert_rounds_answers?: {
    __typename?: "rounds_answers_mutation_response";
    returning: Array<{
      __typename?: "rounds_answers";
      score: number;
      value?: string | null;
    }>;
  } | null;
};

export const InsertNewGameDocument = gql`
  mutation insertNewGame($game: rooms_games_insert_input!) {
    insert_rooms_games_one(object: $game) {
      id
      room {
        id
        privacy
      }
    }
  }
`;
export type InsertNewGameMutationFn = Apollo.MutationFunction<
  InsertNewGameMutation,
  InsertNewGameMutationVariables
>;

/**
 * __useInsertNewGameMutation__
 *
 * To run a mutation, you first call `useInsertNewGameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertNewGameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertNewGameMutation, { data, loading, error }] = useInsertNewGameMutation({
 *   variables: {
 *      game: // value for 'game'
 *   },
 * });
 */
export function useInsertNewGameMutation(
  baseOptions?: Apollo.MutationHookOptions<
    InsertNewGameMutation,
    InsertNewGameMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    InsertNewGameMutation,
    InsertNewGameMutationVariables
  >(InsertNewGameDocument, options);
}
export type InsertNewGameMutationHookResult = ReturnType<
  typeof useInsertNewGameMutation
>;
export type InsertNewGameMutationResult =
  Apollo.MutationResult<InsertNewGameMutation>;
export type InsertNewGameMutationOptions = Apollo.BaseMutationOptions<
  InsertNewGameMutation,
  InsertNewGameMutationVariables
>;
export const InsertGameRoundsDocument = gql`
  mutation insertGameRounds($rounds: [games_rounds_insert_input!]!) {
    insert_games_rounds(objects: $rounds) {
      returning {
        gameId
        id
      }
    }
  }
`;
export type InsertGameRoundsMutationFn = Apollo.MutationFunction<
  InsertGameRoundsMutation,
  InsertGameRoundsMutationVariables
>;

/**
 * __useInsertGameRoundsMutation__
 *
 * To run a mutation, you first call `useInsertGameRoundsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertGameRoundsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertGameRoundsMutation, { data, loading, error }] = useInsertGameRoundsMutation({
 *   variables: {
 *      rounds: // value for 'rounds'
 *   },
 * });
 */
export function useInsertGameRoundsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    InsertGameRoundsMutation,
    InsertGameRoundsMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    InsertGameRoundsMutation,
    InsertGameRoundsMutationVariables
  >(InsertGameRoundsDocument, options);
}
export type InsertGameRoundsMutationHookResult = ReturnType<
  typeof useInsertGameRoundsMutation
>;
export type InsertGameRoundsMutationResult =
  Apollo.MutationResult<InsertGameRoundsMutation>;
export type InsertGameRoundsMutationOptions = Apollo.BaseMutationOptions<
  InsertGameRoundsMutation,
  InsertGameRoundsMutationVariables
>;
export const InsertRoundAnswersDocument = gql`
  mutation insertRoundAnswers($answers: [rounds_answers_insert_input!]!) {
    insert_rounds_answers(objects: $answers) {
      returning {
        score
        value
      }
    }
  }
`;
export type InsertRoundAnswersMutationFn = Apollo.MutationFunction<
  InsertRoundAnswersMutation,
  InsertRoundAnswersMutationVariables
>;

/**
 * __useInsertRoundAnswersMutation__
 *
 * To run a mutation, you first call `useInsertRoundAnswersMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertRoundAnswersMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertRoundAnswersMutation, { data, loading, error }] = useInsertRoundAnswersMutation({
 *   variables: {
 *      answers: // value for 'answers'
 *   },
 * });
 */
export function useInsertRoundAnswersMutation(
  baseOptions?: Apollo.MutationHookOptions<
    InsertRoundAnswersMutation,
    InsertRoundAnswersMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    InsertRoundAnswersMutation,
    InsertRoundAnswersMutationVariables
  >(InsertRoundAnswersDocument, options);
}
export type InsertRoundAnswersMutationHookResult = ReturnType<
  typeof useInsertRoundAnswersMutation
>;
export type InsertRoundAnswersMutationResult =
  Apollo.MutationResult<InsertRoundAnswersMutation>;
export type InsertRoundAnswersMutationOptions = Apollo.BaseMutationOptions<
  InsertRoundAnswersMutation,
  InsertRoundAnswersMutationVariables
>;
