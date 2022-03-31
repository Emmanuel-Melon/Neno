import * as Types from "../../globalTypes";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type InsertUserMutationVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars["uuid"]>;
  hostId?: Types.InputMaybe<Types.Scalars["uuid"]>;
}>;

export type InsertUserMutation = {
  __typename?: "mutation_root";
  insert_users?: {
    __typename?: "users_mutation_response";
    returning: Array<{ __typename?: "users"; id: string }>;
  } | null;
};

export type UpdateLastSeenMutationVariables = Types.Exact<{
  now: Types.Scalars["timestamptz"];
}>;

export type UpdateLastSeenMutation = {
  __typename?: "mutation_root";
  update_users?: {
    __typename?: "users_mutation_response";
    returning: Array<{ __typename?: "users"; id: string }>;
  } | null;
};

export const InsertUserDocument = gql`
  mutation insertUser($id: uuid, $hostId: uuid) {
    insert_users(objects: { id: $id }) {
      returning {
        id
      }
    }
  }
`;
export type InsertUserMutationFn = Apollo.MutationFunction<
  InsertUserMutation,
  InsertUserMutationVariables
>;

/**
 * __useInsertUserMutation__
 *
 * To run a mutation, you first call `useInsertUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertUserMutation, { data, loading, error }] = useInsertUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *      hostId: // value for 'hostId'
 *   },
 * });
 */
export function useInsertUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    InsertUserMutation,
    InsertUserMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<InsertUserMutation, InsertUserMutationVariables>(
    InsertUserDocument,
    options
  );
}
export type InsertUserMutationHookResult = ReturnType<
  typeof useInsertUserMutation
>;
export type InsertUserMutationResult =
  Apollo.MutationResult<InsertUserMutation>;
export type InsertUserMutationOptions = Apollo.BaseMutationOptions<
  InsertUserMutation,
  InsertUserMutationVariables
>;
export const UpdateLastSeenDocument = gql`
  mutation updateLastSeen($now: timestamptz!) {
    update_users(where: {}, _set: { lastSeen: $now }) {
      returning {
        id
      }
    }
  }
`;
export type UpdateLastSeenMutationFn = Apollo.MutationFunction<
  UpdateLastSeenMutation,
  UpdateLastSeenMutationVariables
>;

/**
 * __useUpdateLastSeenMutation__
 *
 * To run a mutation, you first call `useUpdateLastSeenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateLastSeenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateLastSeenMutation, { data, loading, error }] = useUpdateLastSeenMutation({
 *   variables: {
 *      now: // value for 'now'
 *   },
 * });
 */
export function useUpdateLastSeenMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateLastSeenMutation,
    UpdateLastSeenMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateLastSeenMutation,
    UpdateLastSeenMutationVariables
  >(UpdateLastSeenDocument, options);
}
export type UpdateLastSeenMutationHookResult = ReturnType<
  typeof useUpdateLastSeenMutation
>;
export type UpdateLastSeenMutationResult =
  Apollo.MutationResult<UpdateLastSeenMutation>;
export type UpdateLastSeenMutationOptions = Apollo.BaseMutationOptions<
  UpdateLastSeenMutation,
  UpdateLastSeenMutationVariables
>;
