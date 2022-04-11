import React from "react";
import { VStack } from "@chakra-ui/layout";
import { RoomCard } from "./RoomCard";
import { Rooms } from "../lib/graphql/globalTypes";

type ListRoomsProps = {
  rooms?: Rooms[] | undefined;
};

export const ListRooms = ({ rooms }: ListRoomsProps) => {
  return (
    <VStack width="100%">
      {rooms &&
        rooms.map((room) => {
          return <RoomCard key={room.id} room={room} />;
        })}
    </VStack>
  );
};
