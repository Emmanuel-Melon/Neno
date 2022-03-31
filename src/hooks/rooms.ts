import { useMemo } from "react";
import { OperationVariables, useMutation, useQuery } from "@apollo/client";
import { client } from "../lib/apolloClient";

import {
  GET_ACTIVE_LIVE_ROOMS,
  GET_LIVE_ROOM_MEMEMBERS,
  GET_LIVE_ROOM_MESSAGES,
} from "../lib/graphql/subscriptions/rooms";
import {
  INSERT_MESSAGE,
  INSERT_ROOM,
  INSERT_ROOM_MEMBER,
} from "../lib/graphql/mutations/rooms";
import {
  GET_ROOM_MESSAGES,
  GET_ROOM_MEMEMBERS,
  GET_ACTIVE_ROOMS,
} from "../lib/graphql/queries/rooms";

import {
  InsertMessageMutation,
  InsertMessageMutationVariables,
  InsertRoomMemberMutation,
  InsertRoomMemberMutationVariables,
  InsertRoomMutation,
  InsertRoomMutationVariables,
} from "../lib/graphql/mutations/__generated__/rooms";

import {
  GetActiveRoomsQuery,
  GetActiveRoomsQueryVariables,
  GetRoomMembersQuery,
  GetRoomMembersQueryVariables,
  GetRoomMessagesQuery,
  GetRoomMessagesQueryVariables,
} from "../lib/graphql/queries/__generated__/rooms";

import {} from "../lib/graphql/subscriptions/__generated__/rooms";

export const useGetActiveRooms = () => {
  const { error, data, loading, subscribeToMore } = useQuery<
    GetActiveRoomsQuery,
    GetActiveRoomsQueryVariables
  >(GET_ACTIVE_ROOMS);
  return useMemo(
    () => ({
      loading,
      rooms: data?.rooms,
      error,
      subscribeToMore: () =>
        subscribeToMore({
          document: GET_ACTIVE_LIVE_ROOMS,
          updateQuery: (previousQueryResult, { subscriptionData }) => {
            const newRoom = subscriptionData.data;
            return {
              ...previousQueryResult.rooms,
              rooms: [newRoom, ...previousQueryResult.rooms],
            };
          },
        }),
    }),
    [loading, data?.rooms, error, subscribeToMore]
  );
};

export const useGetRoomMessages = (roomId: string) => {
  const { error, data, loading, subscribeToMore } = useQuery<
    GetRoomMessagesQuery,
    GetRoomMessagesQueryVariables
  >(GET_ROOM_MESSAGES, {
    variables: {
      roomId,
    },
  });
  return useMemo(
    () => ({
      loading,
      messages: data?.rooms_messages,
      error,
      subscribeToMore: () =>
        subscribeToMore({
          document: GET_LIVE_ROOM_MESSAGES,
          variables: {
            roomId,
          },
          onError: (e) => {},
          updateQuery: (previousQueryResult, { subscriptionData }) => {
            const newMessage = subscriptionData.data;
            client.cache.writeQuery({
              query: GET_ROOM_MESSAGES,
              data: {
                ...previousQueryResult,
                rooms_messages: [
                  newMessage,
                  ...previousQueryResult.rooms_messages,
                ],
              },
              variables: {
                roomId,
              },
              overwrite: true,
            });
          },
        }),
    }),
    [loading, data?.rooms_messages, error, subscribeToMore]
  );
};

export const useInsertRoom = () => {
  const [insertRoom, { data, loading, error }] = useMutation<
    InsertRoomMutation,
    InsertRoomMutationVariables
  >(INSERT_ROOM);
  return useMemo(
    () => ({
      loading,
      error,
      room: data?.insert_rooms_one,
      insertRoom: (room: OperationVariables) => {
        return insertRoom({ variables: { room } }).then(({ data }) => {
          return data?.insert_rooms_one;
        });
      },
    }),
    [loading, error, data?.insert_rooms_one, insertRoom]
  );
};

export const useInsertChatMessage = () => {
  const [insertMessage, { data, loading, error }] = useMutation<
    InsertMessageMutation,
    InsertMessageMutationVariables
  >(INSERT_MESSAGE, {
    optimisticResponse: (variables) => {
      const { roomId, senderId, text } = variables.message;
      return {
        insert_rooms_messages_one: {
          text,
          roomId,
          senderId,
        },
      };
    },
  });
  return useMemo(
    () => ({
      loading,
      error,
      message: data?.insert_rooms_messages_one,
      insertMessage: (message: OperationVariables) => {
        return insertMessage({ variables: { message } }).then(
          ({ data }) => data?.insert_rooms_messages_one
        );
      },
    }),
    [loading, error, data?.insert_rooms_messages_one, insertMessage]
  );
};

export const useGetRoomMembers = (roomId: string) => {
  const { error, data, loading, subscribeToMore } = useQuery<
    GetRoomMembersQuery,
    GetRoomMembersQueryVariables
  >(GET_ROOM_MEMEMBERS, {
    variables: { roomId },
  });
  return useMemo(
    () => ({
      loading,
      members: data?.rooms_members,
      error,
      subscribeToMoreMembers: subscribeToMore({
        document: GET_LIVE_ROOM_MEMEMBERS,
        variables: { roomId },
        updateQuery: (previousQueryResult, { subscriptionData }) => {
          console.log(previousQueryResult);
          console.log(subscriptionData.data);
          const newMember = subscriptionData.data.rooms_members;
          console.log(newMember);
          const info = {
            ...previousQueryResult,
            rooms_members: [...previousQueryResult.rooms_members, ...newMember],
          };

          console.log(info);
          client.cache.writeQuery({
            query: GET_ROOM_MEMEMBERS,
            data: {
              ...previousQueryResult,
              rooms_members: [],
            },
            variables: {
              roomId,
            },
            overwrite: true,
          });
        },
      }),
    }),
    [loading, data?.rooms_members, error]
  );
};

export const useInsertRoomMember = () => {
  const [insertRoomMember, { data, loading, error }] = useMutation<
    InsertRoomMemberMutation,
    InsertRoomMemberMutationVariables
  >(INSERT_ROOM_MEMBER);
  return useMemo(
    () => ({
      memberLoading: loading,
      memberError: error,
      member: data?.insert_rooms_members_one,
      insertRoomMember: (member: OperationVariables) => {
        return insertRoomMember({ variables: { member } }).then(
          ({ data }) => data?.insert_rooms_members_one
        );
      },
    }),
    [loading, error, data?.insert_rooms_members_one, insertRoomMember]
  );
};
