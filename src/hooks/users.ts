import { useMemo } from "react";
import { OperationVariables, useMutation, useQuery } from "@apollo/client";
import { GET_ONLINE_USERS, GET_USER } from "../lib/graphql/queries/user";
import {
  INSERT_USER,
  UPDATE_ONLINE_STATUS,
} from "../lib/graphql/mutations/user";

import {
  InsertUserMutation,
  InsertUserMutationVariables,
  UpdateLastSeenMutation,
  UpdateLastSeenMutationVariables,
} from "../lib/graphql/mutations/__generated__/user";
import {
  GetUserQuery,
  GetUserQueryVariables,
} from "../lib/graphql/queries/__generated__/user";

export const useGetOnlineUsers = () => {
  const { error, data, loading } = useQuery(GET_ONLINE_USERS);

  return useMemo(
    () => ({
      loading,
      users: data?.users,
      error,
    }),
    [loading, data?.users, error]
  );
};

export const useUpdateOnlineStatus = () => {
  const [updateOnlineStatus] = useMutation<
    UpdateLastSeenMutation,
    UpdateLastSeenMutationVariables
  >(UPDATE_ONLINE_STATUS, {
    variables: { now: new Date() },
  });

  return useMemo(
    () => ({
      updateOnlineStatus,
    }),
    [updateOnlineStatus]
  );
};

export const useGetUser = (email?: string | null) => {
  const { error, data, loading } = useQuery<
    GetUserQuery,
    GetUserQueryVariables
  >(GET_USER, {
    variables: {
      email,
    },
  });

  return useMemo(
    () => ({
      loading,
      users: data?.users,
      error,
    }),
    [loading, data?.users, error]
  );
};

export const useInsertNewUser = () => {
  const [insertNewUser, { data, loading, error }] = useMutation<
    InsertUserMutation,
    InsertUserMutationVariables
  >(INSERT_USER);
  return useMemo(
    () => ({
      loading,
      error,
      user: data?.insert_users,
      insertNewUser: (user: OperationVariables) => {
        return insertNewUser({ variables: { ...user } }).then(
          ({ data }) => data?.insert_users
        );
      },
    }),
    [loading, error, data?.insert_users, insertNewUser]
  );
};
