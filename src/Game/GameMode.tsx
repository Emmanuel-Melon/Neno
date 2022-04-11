import React, { useState, useContext } from "react";
import { RoomOptions } from "../Rooms/RoomOptions";
import { CustomModal } from "../components/ui/modal";
import { Flex, Heading, Avatar, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { CustomButton } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { GameContext } from "../providers/game";
import {
  useInsertRoom,
  useInsertWordCategories,
  useInsertRoomMember,
} from "../hooks/rooms";

export type GameModeProps = {};

export type Room = {
  hostId: string;
  capacity: string;
  categories: any[];
  privacy: string;
  role: string;
};

export const GameMode = (props: GameModeProps) => {
  const { gameService } = useContext(GameContext);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const { insertRoom, error, loading, room } = useInsertRoom();
  const { insertCategories } = useInsertWordCategories();
  const { insertRoomMember, memberLoading, memberError } =
    useInsertRoomMember();
  function closeModal() {
    setModalOpen((currentState) => !currentState);
  }

  function openModal() {
    setModalOpen((currentState) => !currentState);
  }

  const viewLiveRooms = () => {
    gameService.send({ type: "JOIN_ROOM" });
  };

  const createNewRoom = async ({
    capacity,
    categories,
    privacy,
    hostId,
    role,
  }: Room) => {
    if (gameService?.state?.context?.playerId) {
      const newRoom = {
        hostId,
        capacity: parseInt(capacity, 10),
        privacy,
        active: true,
      };
      const res = await insertRoom(newRoom);
      const mappedCategories = categories.map((category) => ({
        roomId: res?.id,
        type: category.type,
      }));
      insertCategories(mappedCategories);
      insertRoomMember({
        userId: newRoom.hostId,
        roomId: res?.id,
        role,
      });
      gameService.send({
        type: "CREATE_ROOM",
        payload: {
          ...newRoom,
          roomId: res?.id,
        },
      });
    }
  };

  return (
    <Card width={["320px", "320px", "320px", "320px"]}>
      <VStack gap={2}>
        <Flex direction="column" alignItems="center">
          <Avatar
            src="/images/letters/icons8-n.svg"
            border="border.primary"
            width="120"
            bg="brand.accent"
            height="120"
          />
          <Heading as="h1" size="lg" color="brand.primary" fontSize="4xl">
            New Game
          </Heading>
          <Text>Create or join an existing room.</Text>
        </Flex>
        <Flex direction="column" justifyContent="space-between" gap={6}>
          <CustomButton
            onClick={() => {
              openModal();
            }}
            icon={
              <Image
                alt="logo"
                src="/icons/icons8-plus-math.svg"
                width="30"
                height="30"
              />
            }
          >
            Create Room
          </CustomButton>
          <CustomButton
            onClick={viewLiveRooms}
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
        <CustomModal show={isModalOpen} close={closeModal}>
          <RoomOptions closeModal={closeModal} createNewRoom={createNewRoom} />
        </CustomModal>
      </VStack>
    </Card>
  );
};
