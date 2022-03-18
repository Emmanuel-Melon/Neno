import * as Types from "../../globalTypes";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type Unnamed_1_MutationVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars["uuid"]>;
  hostId?: Types.InputMaybe<Types.Scalars["uuid"]>;
}>;

export type Unnamed_1_Mutation = {
  __typename?: "mutation_root";
  insert_users?: {
    __typename?: "users_mutation_response";
    returning: Array<{ __typename?: "users"; id: string }>;
  } | null;
};

export const Document = gql`
  mutation ($id: uuid, $hostId: uuid) {
    insert_users(objects: { id: $id }) {
      returning {
        id
      }
    }
  }
`;
export type MutationFn = Apollo.MutationFunction<Mutation, MutationVariables>;

/**
 * __useMutation__
 *
 * To run a mutation, you first call `useMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [mutation, { data, loading, error }] = useMutation({
 *   variables: {
 *      id: // value for 'id'
 *      hostId: // value for 'hostId'
 *   },
 * });
 */
export function useMutation(
  baseOptions?: Apollo.MutationHookOptions<Mutation, MutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<Mutation, MutationVariables>(Document, options);
}
export type MutationHookResult = ReturnType<typeof useMutation>;
export type MutationResult = Apollo.MutationResult<Mutation>;
export type MutationOptions = Apollo.BaseMutationOptions<
  Mutation,
  MutationVariables
>;
