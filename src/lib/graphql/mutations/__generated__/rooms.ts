import * as Types from "../../globalTypes";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type Unnamed_1_MutationVariables = Types.Exact<{
  room: Types.Rooms_Insert_Input;
}>;

export type Unnamed_1_Mutation = {
  __typename?: "mutation_root";
  insert_rooms_one?: { __typename?: "rooms"; id: string } | null;
};

export type Unnamed_2_MutationVariables = Types.Exact<{
  message: Types.Rooms_Messages_Insert_Input;
}>;

export type Unnamed_2_Mutation = {
  __typename?: "mutation_root";
  insert_rooms_messages_one?: {
    __typename?: "rooms_messages";
    id: string;
  } | null;
};

export type Unnamed_3_MutationVariables = Types.Exact<{
  member: Types.Rooms_Members_Insert_Input;
}>;

export type Unnamed_3_Mutation = {
  __typename?: "mutation_root";
  insert_rooms_members_one?: {
    __typename?: "rooms_members";
    id: string;
  } | null;
};

export const Document = gql`
  mutation ($room: rooms_insert_input!) {
    insert_rooms_one(object: $room) {
      id
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
 *      room: // value for 'room'
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
export const Document = gql`
  mutation ($message: rooms_messages_insert_input!) {
    insert_rooms_messages_one(object: $message) {
      id
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
 *      message: // value for 'message'
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
export const Document = gql`
  mutation ($member: rooms_members_insert_input!) {
    insert_rooms_members_one(object: $member) {
      id
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
 *      member: // value for 'member'
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
