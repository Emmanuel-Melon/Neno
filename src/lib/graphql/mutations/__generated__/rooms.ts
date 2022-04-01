import * as Types from "../../globalTypes";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type InsertRoomMutationVariables = Types.Exact<{
  room: Types.Rooms_Insert_Input;
}>;

export type InsertRoomMutation = {
  __typename?: "mutation_root";
  insert_rooms_one?: {
    __typename?: "rooms";
    id: string;
    host: { __typename?: "users"; id: string; email: string };
  } | null;
};

export type InsertMessageMutationVariables = Types.Exact<{
  message: Types.Rooms_Messages_Insert_Input;
}>;

export type InsertMessageMutation = {
  __typename?: "mutation_root";
  insert_rooms_messages_one?: {
    __typename?: "rooms_messages";
    id: string;
  } | null;
};

export type InsertRoomMemberMutationVariables = Types.Exact<{
  member: Types.Rooms_Members_Insert_Input;
}>;

export type InsertRoomMemberMutation = {
  __typename?: "mutation_root";
  insert_rooms_members_one?: {
    __typename?: "rooms_members";
    id: string;
    role: Types.Rooms_Roles_Enum;
    roomId: string;
    member: {
      __typename?: "users";
      id: string;
      lastSeen?: string | null;
      createdAt: string;
      email: string;
    };
  } | null;
};

export type DeleteRoomMemberMutationVariables = Types.Exact<{
  roomId?: Types.InputMaybe<Types.Scalars["uuid"]>;
  playerId?: Types.InputMaybe<Types.Scalars["uuid"]>;
}>;

export type DeleteRoomMemberMutation = {
  __typename?: "mutation_root";
  delete_rooms_members?: {
    __typename?: "rooms_members_mutation_response";
    returning: Array<{ __typename?: "rooms_members"; id: string }>;
  } | null;
};

export type DeleteRoomMutationVariables = Types.Exact<{
  roomId: Types.Scalars["uuid"];
}>;

export type DeleteRoomMutation = {
  __typename?: "mutation_root";
  delete_rooms_by_pk?: { __typename?: "rooms"; id: string } | null;
};

export const InsertRoomDocument = gql`
  mutation insertRoom($room: rooms_insert_input!) {
    insert_rooms_one(object: $room) {
      id
      host {
        id
        email
      }
    }
  }
`;
export type InsertRoomMutationFn = Apollo.MutationFunction<
  InsertRoomMutation,
  InsertRoomMutationVariables
>;

/**
 * __useInsertRoomMutation__
 *
 * To run a mutation, you first call `useInsertRoomMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertRoomMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertRoomMutation, { data, loading, error }] = useInsertRoomMutation({
 *   variables: {
 *      room: // value for 'room'
 *   },
 * });
 */
export function useInsertRoomMutation(
  baseOptions?: Apollo.MutationHookOptions<
    InsertRoomMutation,
    InsertRoomMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<InsertRoomMutation, InsertRoomMutationVariables>(
    InsertRoomDocument,
    options
  );
}
export type InsertRoomMutationHookResult = ReturnType<
  typeof useInsertRoomMutation
>;
export type InsertRoomMutationResult =
  Apollo.MutationResult<InsertRoomMutation>;
export type InsertRoomMutationOptions = Apollo.BaseMutationOptions<
  InsertRoomMutation,
  InsertRoomMutationVariables
>;
export const InsertMessageDocument = gql`
  mutation insertMessage($message: rooms_messages_insert_input!) {
    insert_rooms_messages_one(object: $message) {
      id
    }
  }
`;
export type InsertMessageMutationFn = Apollo.MutationFunction<
  InsertMessageMutation,
  InsertMessageMutationVariables
>;

/**
 * __useInsertMessageMutation__
 *
 * To run a mutation, you first call `useInsertMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertMessageMutation, { data, loading, error }] = useInsertMessageMutation({
 *   variables: {
 *      message: // value for 'message'
 *   },
 * });
 */
export function useInsertMessageMutation(
  baseOptions?: Apollo.MutationHookOptions<
    InsertMessageMutation,
    InsertMessageMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    InsertMessageMutation,
    InsertMessageMutationVariables
  >(InsertMessageDocument, options);
}
export type InsertMessageMutationHookResult = ReturnType<
  typeof useInsertMessageMutation
>;
export type InsertMessageMutationResult =
  Apollo.MutationResult<InsertMessageMutation>;
export type InsertMessageMutationOptions = Apollo.BaseMutationOptions<
  InsertMessageMutation,
  InsertMessageMutationVariables
>;
export const InsertRoomMemberDocument = gql`
  mutation insertRoomMember($member: rooms_members_insert_input!) {
    insert_rooms_members_one(object: $member) {
      id
      role
      roomId
      member {
        id
        lastSeen
        createdAt
        email
      }
    }
  }
`;
export type InsertRoomMemberMutationFn = Apollo.MutationFunction<
  InsertRoomMemberMutation,
  InsertRoomMemberMutationVariables
>;

/**
 * __useInsertRoomMemberMutation__
 *
 * To run a mutation, you first call `useInsertRoomMemberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertRoomMemberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertRoomMemberMutation, { data, loading, error }] = useInsertRoomMemberMutation({
 *   variables: {
 *      member: // value for 'member'
 *   },
 * });
 */
export function useInsertRoomMemberMutation(
  baseOptions?: Apollo.MutationHookOptions<
    InsertRoomMemberMutation,
    InsertRoomMemberMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    InsertRoomMemberMutation,
    InsertRoomMemberMutationVariables
  >(InsertRoomMemberDocument, options);
}
export type InsertRoomMemberMutationHookResult = ReturnType<
  typeof useInsertRoomMemberMutation
>;
export type InsertRoomMemberMutationResult =
  Apollo.MutationResult<InsertRoomMemberMutation>;
export type InsertRoomMemberMutationOptions = Apollo.BaseMutationOptions<
  InsertRoomMemberMutation,
  InsertRoomMemberMutationVariables
>;
export const DeleteRoomMemberDocument = gql`
  mutation deleteRoomMember($roomId: uuid, $playerId: uuid) {
    delete_rooms_members(
      where: { roomId: { _eq: $roomId }, userId: { _eq: $playerId } }
    ) {
      returning {
        id
      }
    }
  }
`;
export type DeleteRoomMemberMutationFn = Apollo.MutationFunction<
  DeleteRoomMemberMutation,
  DeleteRoomMemberMutationVariables
>;

/**
 * __useDeleteRoomMemberMutation__
 *
 * To run a mutation, you first call `useDeleteRoomMemberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteRoomMemberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteRoomMemberMutation, { data, loading, error }] = useDeleteRoomMemberMutation({
 *   variables: {
 *      roomId: // value for 'roomId'
 *      playerId: // value for 'playerId'
 *   },
 * });
 */
export function useDeleteRoomMemberMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteRoomMemberMutation,
    DeleteRoomMemberMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteRoomMemberMutation,
    DeleteRoomMemberMutationVariables
  >(DeleteRoomMemberDocument, options);
}
export type DeleteRoomMemberMutationHookResult = ReturnType<
  typeof useDeleteRoomMemberMutation
>;
export type DeleteRoomMemberMutationResult =
  Apollo.MutationResult<DeleteRoomMemberMutation>;
export type DeleteRoomMemberMutationOptions = Apollo.BaseMutationOptions<
  DeleteRoomMemberMutation,
  DeleteRoomMemberMutationVariables
>;
export const DeleteRoomDocument = gql`
  mutation deleteRoom($roomId: uuid!) {
    delete_rooms_by_pk(id: $roomId) {
      id
    }
  }
`;
export type DeleteRoomMutationFn = Apollo.MutationFunction<
  DeleteRoomMutation,
  DeleteRoomMutationVariables
>;

/**
 * __useDeleteRoomMutation__
 *
 * To run a mutation, you first call `useDeleteRoomMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteRoomMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteRoomMutation, { data, loading, error }] = useDeleteRoomMutation({
 *   variables: {
 *      roomId: // value for 'roomId'
 *   },
 * });
 */
export function useDeleteRoomMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteRoomMutation,
    DeleteRoomMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteRoomMutation, DeleteRoomMutationVariables>(
    DeleteRoomDocument,
    options
  );
}
export type DeleteRoomMutationHookResult = ReturnType<
  typeof useDeleteRoomMutation
>;
export type DeleteRoomMutationResult =
  Apollo.MutationResult<DeleteRoomMutation>;
export type DeleteRoomMutationOptions = Apollo.BaseMutationOptions<
  DeleteRoomMutation,
  DeleteRoomMutationVariables
>;
