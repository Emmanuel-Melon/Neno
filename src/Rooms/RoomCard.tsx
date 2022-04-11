import React, { useContext } from "react";
import { Flex, Avatar, Heading, Tag, Button, Divider } from "@chakra-ui/react";
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
              border="border.white"
              onMouseOver={() => showPlayerCard(room.hostId)}
              cursor="pointer"
              boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px"
            />
            <Heading color="brand.primary" as="h3" size="sm">
              {room.host.username}'s room
            </Heading>
          </Flex>
          <Flex
            borderRadius="2rem"
            wrap="wrap"
            cursor="pointer"
            px="2"
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
                      border="solid 3px #fff"
                      marginLeft="-10px"
                      boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px"
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
            bg="brand.white"
            border="border.secondary"
            width="fit-content"
          >
            {`${room.rooms_members.length}/${room.capacity} players`}
          </Tag>
          {room.word_categories.map((category, index) => (
            <Tag
              borderRadius="4% 12% 10% 8% / 5% 5% 10% 8%"
              color="brand.secondary"
              bg="brand.white"
              border="border.secondary"
              width="fit-content"
              key={`${index}-${category.type}`}
              boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px"
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
