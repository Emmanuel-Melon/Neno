import { useMemo } from "react";
import {
  OperationVariables,
  useMutation,
  useQuery,
  useSubscription,
} from "@apollo/client";

import {
  GET_ACTIVE_ROOMS,
  GET_LIVE_ROOM_MESSAGES,
} from "../lib/graphql/subscriptions/rooms";
import { INSERT_MESSAGE, INSERT_ROOM } from "../lib/graphql/mutations/rooms";
import { GET_ROOM_MESSAGES } from "../lib/graphql/queries/rooms";

export const useGetActiveRooms = () => {
  const { error, data, loading } = useSubscription(GET_ACTIVE_ROOMS);
  return { loading, rooms: data?.rooms, error };
};

export const useGetRoomMessages = () => {
  const { error, data, loading, subscribeToMore } = useQuery(GET_ROOM_MESSAGES);
  return useMemo(
    () => ({
      loading,
      messages: data?.rooms_messages,
      error,
      subscribeToMore: () =>
        subscribeToMore({
          document: GET_LIVE_ROOM_MESSAGES,
          updateQuery: (previousQueryResult, { subscriptionData }) => {
            const newMessage = subscriptionData.data;
            return {
              ...previousQueryResult,
              rooms_messages: [
                newMessage,
                ...previousQueryResult.rooms_messages,
              ],
            };
          },
        }),
    }),
    [loading, data?.rooms_messages, error, subscribeToMore]
  );
};

export const useInsertRoom = () => {
  const [insertRoom, { data, loading, error }] = useMutation(INSERT_ROOM);
  return useMemo(
    () => ({
      loading,
      error,
      room: data?.insert_rooms,
      insertRoom: (room: OperationVariables | undefined) => {
        return insertRoom({ variables: { ...room } }).then(
          ({ data }) => data?.insert_rooms
        );
      },
    }),
    [loading, error, data?.insertRoom?.data, insertRoom]
  );
};

export const useInsertChatMessage = () => {
  const [insertMessage, { data, loading, error }] = useMutation(INSERT_MESSAGE);
  return useMemo(
    () => ({
      loading,
      error,
      message: data?.insert_message?.affected_rows,
      insertMessage: (message: OperationVariables | undefined) => {
        return insertMessage({ variables: { message } }).then(
          ({ data }) => data?.insert_message
        );
      },
    }),
    [loading, error, data?.insert_message?.affected_rows, insertMessage]
  );
};

export const getRoomMembers = () => {};
