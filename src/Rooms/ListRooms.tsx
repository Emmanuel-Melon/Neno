import React from "react";
import { Flex, VStack } from "@chakra-ui/layout";
import { RoomCard } from "./RoomCard";
import { Rooms } from "../lib/graphql/globalTypes";

type ListRoomsProps = {
  rooms?: Rooms[];
};

export const ListRooms = ({ rooms }: ListRoomsProps) => {
  return (
    <Flex>
      <VStack>
        {rooms &&
          rooms.map((room) => {
            return <RoomCard key={room.id} room={room} />;
          })}
      </VStack>
    </Flex>
  );
};
