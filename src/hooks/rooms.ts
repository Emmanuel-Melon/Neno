import { useMemo } from "react";
import {
    OperationVariables,
  useLazyQuery,
  useMutation,
  useQuery,
  useSubscription,
} from "@apollo/client";

import { GET_ACTIVE_ROOMS } from "../lib/graphql/queries/rooms";
import { INSERT_ROOM } from "../lib/graphql/mutations/rooms";


export const useGetActiveRooms = (filters: any = null) => {
  const { error, data, loading, refetch } = useQuery(GET_ACTIVE_ROOMS, {
    variables: { filters },
  });

  return useMemo(
    () => ({
      loading,
      rooms: data?.rooms,
      refetch,
      error,
    }),
    [loading, data?.rooms, refetch, error]
  );
};

export const useInsertRoom = () => {
    const [insertRoom, { data, loading, error } ] = useMutation(INSERT_ROOM);
    return useMemo(
      () => ({
        loading,
        error,
        room: data?.insert_tasks?.affected_rows,
        insertRoom: (room: OperationVariables | undefined) => {
          return insertRoom({ variables: { ...room } }).then(
            ({ data }) => data?.insert_tasks
          );
        },
      }),
      [loading, error, data?.insert_tasks?.affected_rows, insertRoom]
    );
  };
  