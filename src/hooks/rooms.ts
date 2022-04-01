import { useMemo } from "react";
import {
  OperationVariables,
  useMutation,
  useQuery,
  useSubscription,
} from "@apollo/client";
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
  DELETE_ROOM_MEMBER,
  DELETE_ROOM,
} from "../lib/graphql/mutations/rooms";
import {
  GET_ROOM_MESSAGES,
  GET_ROOM_MEMEMBERS,
  GET_ACTIVE_ROOMS,
  GET_ROOM_MEMBER_COUNT,
  GET_ROOM_BY_ID,
} from "../lib/graphql/queries/rooms";

import {
  InsertMessageMutation,
  InsertMessageMutationVariables,
  InsertRoomMemberMutation,
  InsertRoomMemberMutationVariables,
  InsertRoomMutation,
  InsertRoomMutationVariables,
  DeleteRoomMemberMutation,
  DeleteRoomMemberMutationVariables,
  DeleteRoomMutation,
  DeleteRoomMutationVariables,
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
  >(GET_ACTIVE_ROOMS, {
    variables: {
      privacy: "public",
    },
  });
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
            client.cache.writeQuery({
              query: GET_ACTIVE_ROOMS,
              variables: {
                privacy: "public",
              },
              data: {
                ...previousQueryResult,
                rooms: [newRoom, ...previousQueryResult.rooms],
              },
              overwrite: true,
            });
            return previousQueryResult;
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
          /**
           * updateQuery: (previousQueryResult, { subscriptionData }) => {
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
            return previousQueryResult;
          },
           */
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

export const useGetLiveMembers = (roomId: string) => {
  const { error, data, loading } = useSubscription(GET_LIVE_ROOM_MEMEMBERS, {
    variables: {
      roomId,
    },
  });
  return useMemo(
    () => ({
      loading,
      error,
      members: data?.rooms_members,
    }),
    [error, data, loading]
  );
};

export const useGetRoomMemberCount = (roomId: string) => {
  const { error, data, loading } = useSubscription(GET_ROOM_MEMBER_COUNT, {
    variables: {
      roomId,
    },
  });
  return useMemo(
    () => ({
      loading,
      error,
      memberCount: data?.rooms_members_aggregate?.aggregate.count,
    }),
    [error, data, loading]
  );
};

export const useDeleteRoomMember = () => {
  const [deleteRoomMember, { data, loading, error }] = useMutation<
    DeleteRoomMemberMutation,
    DeleteRoomMemberMutationVariables
  >(DELETE_ROOM_MEMBER);
  return useMemo(
    () => ({
      memberDeletionLoading: loading,
      memberDeletionError: error,
      deletedMember: data?.delete_rooms_members,
      deleteRoomMember: ({
        playerId,
        roomId,
      }: DeleteRoomMemberMutationVariables) => {
        return deleteRoomMember({
          variables: {
            playerId,
            roomId,
          },
        }).then(({ data }) => data?.delete_rooms_members);
      },
    }),
    [loading, error, data?.delete_rooms_members, deleteRoomMember]
  );
};

export const useDeleteRoomById = () => {
  const [deleteRoomById, { data, loading, error }] = useMutation<
    DeleteRoomMutation,
    DeleteRoomMutationVariables
  >(DELETE_ROOM);
  return useMemo(
    () => ({
      roomLoading: loading,
      roomDeletionError: error,
      deletedRoom: data?.delete_rooms_by_pk,
      deleteRoomById: ({ roomId }: DeleteRoomMutationVariables) => {
        return deleteRoomById({ variables: { roomId } }).then(
          ({ data }) => data?.delete_rooms_by_pk
        );
      },
    }),
    [loading, error, data?.delete_rooms_by_pk, deleteRoomById]
  );
};

export const useGetRoomById = (roomId: string) => {
  const { error, data, loading } = useQuery(GET_ROOM_BY_ID, {
    variables: {
      roomId,
    },
  });
  return useMemo(
    () => ({
      loading,
      error,
      room: data?.rooms_by_pk,
    }),
    [error, data, loading]
  );
};
