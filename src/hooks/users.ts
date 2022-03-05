import { useMemo } from "react";
import {
  useLazyQuery,
  useMutation,
  useQuery,
  useSubscription,
} from "@apollo/client";

import { GET_ONLINE_USERS } from "../lib/graphql/queries/user";


export const useGetOnlineUsers = (filters: any = null) => {
  const { error, data, loading, refetch } = useQuery(GET_ONLINE_USERS, {
    variables: { filters },
  });

  return useMemo(
    () => ({
      loading,
      users: data?.users,
      refetch,
      error,
    }),
    [loading, data?.users, refetch, error]
  );
};
