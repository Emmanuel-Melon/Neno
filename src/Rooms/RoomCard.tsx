import React, { useContext } from "react";
import { Flex, Avatar, Heading, Tag, Button } from "@chakra-ui/react";
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
  const { insertRoomMember, memberLoading, memberError } =
    useInsertRoomMember();
  const { gameService } = useContext(GameContext);

  const joinRoomById = () => {
    insertRoomMember({
      roomId: room.id,
      role: "player",
      userId: gameService.state.context.playerId,
    });

    if (!memberError) {
      gameService.send({
        type: "EXISTING_ROOM",
        payload: {
          ...room,
          roomId: room.id,
        },
      });
    }
  };

  const hideRoom = (roomId: string) => { };
  const showPlayerCard = (userId: string) => { };

  return (
    <Paper width="100%">
      <Flex direction="column" gap={6} marginBottom={2}>
        <Flex justifyContent="space-between" alignItems="center" gap={6}>
          <Flex gap={2} alignItems="center">
            <Avatar
              src={room.host.image}
              border="border.primary"
              onMouseOver={() => showPlayerCard(room.hostId)}
              cursor="pointer"
            />
            <Heading as="h3" size="md" color="brand.accent">
              {room.host.username}'s room
            </Heading>
          </Flex>
          <Flex
            borderRadius="2rem"
            wrap="wrap"
            cursor="pointer"
            _hover={{
              bg: "brand.highlight1",
            }}
          >
            {room &&
              room.rooms_members.map(({ member, id }) => (
                <>
                  {member.username !== room.host.username ? (
                    <Avatar
                      key={id}
                      src={member?.image}
                      border="border.primary"
                      marginLeft="-10px"
                      boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                      onMouseOver={() => showPlayerCard(member.id)}
                      cursor="pointer"
                    />
                  ) : null}
                </>
              ))}
          </Flex>
        </Flex>
      </Flex>

      <Flex direction="column" gap={4}>
        <Flex gap={2}>
          <Tag
            borderRadius="4% 12% 10% 8% / 5% 5% 10% 8%"
            color="brand.secondary"
            border="border.primary"
            bg="brand.grey"
            width="fit-content"
          >
            {`${room.rooms_members.length}/${room.capacity} players`}
          </Tag>

          {room.word_categories.map((category, index) => (
            <Tag
              borderRadius="4% 12% 10% 8% / 5% 5% 10% 8%"
              color="brand.secondary"
              border="border.primary"
              bg="brand.grey"
              width="fit-content"
              key={`${index}-${category.type}`}
            >
              {category.type}
            </Tag>
          ))}
        </Flex>
        <Flex justifyContent="space-between">
          <CustomButton
            onClick={joinRoomById}
            isLoading={memberLoading}
            size="md"
            width="150px"
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
          <Button
            onClick={() => hideRoom(room.id)}
            isLoading={memberLoading}
            size="sm"
            variant="ghost"
            color="brand.danger"
          >
            Hide
          </Button>
        </Flex>
      </Flex>
    </Paper>
  );
};
