import React, { useState, useContext } from "react";
import { RoomOptions } from "../Rooms/RoomOptions";
import { CustomModal } from "../components/ui/modal";
import { Flex, Heading, Avatar, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { CustomButton } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Paper } from "../components/ui/paper";
import { GameContext } from "../providers/game";

export type GameModeProps = {};

export const GameMode = (props: GameModeProps) => {
  const { gameService } = useContext(GameContext);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  function closeModal() {
    setModalOpen((currentState) => !currentState);
  }

  function openModal() {
    setModalOpen((currentState) => !currentState);
  }

  const viewLiveRooms = () => {
    gameService.send({ type: "JOIN_ROOM" });
  };
  return (
    <Flex width={"100%"} height={"100%"} justifyContent="center">
      <Card>
        <VStack gap={6}>
          <Flex direction="column" alignItems="center">
            <Avatar
              src="/images/letters/icons8-n.svg"
              bg="brand.secondary"
              width="150"
              height="150"
            />
            <Heading as="h1" size="lg" color="brand.primary" fontSize="4xl">
              New Game
            </Heading>
            <Text style={{ textAlign: "center" }}>
              Create a room and invite your friends. Or join an existing room!
            </Text>
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
            <RoomOptions closeModal={closeModal} />
          </CustomModal>
        </VStack>
      </Card>
    </Flex>
  );
};
