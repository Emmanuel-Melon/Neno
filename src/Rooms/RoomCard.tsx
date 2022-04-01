import React, { useState, useContext } from "react";
import { Flex, Avatar, Heading, Box, Tag } from "@chakra-ui/react";
import { CustomButton } from "../components/ui/button";
import Image from "next/image";
import { useInsertRoomMember } from "../hooks/rooms";
import { GameContext } from "../providers/game";
import { Paper } from "../components/ui/paper";
import { Rooms } from "../lib/graphql/globalTypes";

type RoomCardProps = {
  room: Rooms;
};

export const RoomCard = ({ room }: RoomCardProps) => {
  const { insertRoomMember, memberLoading } = useInsertRoomMember();
  const { gameService } = useContext(GameContext);

  const joinRoomById = async () => {
    gameService.send({
      type: "EXISTING_ROOM",
      payload: {
        ...room,
        roomId: room.id,
      },
    });
    const newMember = await insertRoomMember({
      roomId: room.id,
      role: "player",
      userId: gameService.state.context.playerId,
    });
  };

  return (
    <Paper width="600px">
      <Flex direction="column" gap={6} marginBottom={2}>
        <Flex justifyContent="space-between" alignItems="center" gap={6}>
          <Flex gap={2} alignItems="center">
            <Avatar
              src="/images/avatars/icons8-walter-white.svg"
              border="border.primary"
            />
            <Heading as="h3" size="md" color="brand.secondary">
              {room.host.username}'s room
            </Heading>
          </Flex>
          <Flex
            borderRadius="2rem"
            wrap="wrap"
            boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px"
            cursor="pointer"
            _hover={{
              bg: "brand.highlight1",
            }}
          >
            {room &&
              room.rooms_members.map((member) => (
                <Avatar
                  key={member.id}
                  src="/images/avatars/icons8-walter-white.svg"
                  border="solid 3px #333"
                />
              ))}
          </Flex>
        </Flex>
      </Flex>
      <Flex direction="column" gap={4} width="200px">
        <Tag
          borderRadius="4% 12% 10% 8% / 5% 5% 10% 8%"
          color="brand.secondary"
          border="border.secondary"
          bg="brand.grey"
          width="fit-content"
        >
          {`${room.rooms_members.length}/${room.capacity} players`}
        </Tag>
        <CustomButton
          onClick={joinRoomById}
          isLoading={memberLoading}
          icon={
            <Image
              alt="logo"
              src="/icons/icons8-pin-pad.svg"
              width="30"
              height="30"
            />
          }
        >
          Join Room
        </CustomButton>
      </Flex>
    </Paper>
  );
};
