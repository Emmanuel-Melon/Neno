import { useMemo } from "react";
import {
  OperationVariables,
  useLazyQuery,
  useMutation,
  useQuery,
  useSubscription,
} from "@apollo/client";

import { GET_ACTIVE_ROOMS, GET_ROOM_MESSAGES } from "../lib/graphql/subscriptions/rooms";
import { INSERT_MESSAGE, INSERT_ROOM } from "../lib/graphql/mutations/rooms";

export const useGetActiveRooms = () => {
  const { error, data, loading } = useSubscription(GET_ACTIVE_ROOMS);

  return useMemo(
    () => ({
      loading,
      rooms: data?.rooms,
      error,
    }),
    [loading, data?.rooms, error]
  );
};

export const useGetRoomMessages = () => {
  const { error, data, loading } = useSubscription(GET_ROOM_MESSAGES);
  return useMemo(
    () => ({
      loading,
      messages: data?.message,
      error,
    }),
    [loading, data?.message, error]
  );
};

export const useInsertRoom = () => {
  const [insertRoom, { data, loading, error }] = useMutation(INSERT_ROOM);
  return useMemo(
    () => ({
      loading,
      error,
      room: data?.insert_rooms?.affected_rows,
      insertRoom: (room: OperationVariables | undefined) => {
        return insertRoom({ variables: { ...room } }).then(
          ({ data }) => data?.insert_rooms
        );
      },
    }),
    [loading, error, data?.insert_rooms?.affected_rows, insertRoom]
  );
};


export const useInsertChatMessage = () => {
  const [insertMessage, { data, loading, error }] = useMutation(INSERT_MESSAGE);
  return useMemo(
    () => ({
      loading,
      error,
      message: data?.insert_tasks?.affected_rows,
      insertMessage: (message: OperationVariables | undefined) => {
        return insertMessage({ variables: { ...message } }).then(
          ({ data }) => data?.insert_tasks
        );
      },
    }),
    [loading, error, data?.insert_tasks?.affected_rows, insertMessage]
  );
};
