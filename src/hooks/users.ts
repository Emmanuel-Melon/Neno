import { useMemo } from "react";
import {
  useLazyQuery,
  useMutation,
  useQuery,
  useSubscription,
} from "@apollo/client";

import { GET_ONLINE_USERS } from "../lib/graphql/queries/user";
import {
  INSERT_USER,
  UPDATE_ONLINE_STATUS,
} from "../lib/graphql/mutations/user";

export const useGetOnlineUsers = () => {
  const { error, data, loading } = useSubscription(GET_ONLINE_USERS);

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
  const [updateOnlineStatus] = useMutation(UPDATE_ONLINE_STATUS, {
    variables: { now: new Date() },
  });

  return useMemo(
    () => ({
      updateOnlineStatus,
    }),
    [updateOnlineStatus]
  );
};
