import React, { useState } from "react";
import { Chat } from "../Rooms/Chat";
import { ActivePlayers } from "./ActivePlayers";
import { Flex, Text, VStack, Heading, useDisclosure } from "@chakra-ui/react";
import Image from "next/image";
import { CustomButton } from "../components/ui/button";
import { Paper } from "../components/ui/paper";
import { Dialog } from "../components/ui/dialog";

type GameLobbyProps = {
  startNewGame: () => void;
  exitCurrentLobby: () => void;
};

export const GameLobby = ({
  exitCurrentLobby,
  startNewGame,
}: GameLobbyProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex height={"100%"} justifyContent="center" gap={6}>
        <Chat />
        <VStack gap={2}>
          <Paper width="100%">
            <Heading as="h3" size="md" color="brand.primary">
              Game Lobby
            </Heading>
            <Flex justifyContent="space-between">
              <Text>Game rounds</Text>
              <Text>4</Text>
            </Flex>
            <Flex justifyContent="space-between">
              <Text>Game mode</Text>
              <Text>Classic</Text>
            </Flex>
            <Flex justifyContent="space-between">
              <Text>Round duration</Text>
              <Text>40 seconds</Text>
            </Flex>
          </Paper>
          <ActivePlayers />
          <Flex gap={6}>
            <CustomButton
              onClick={startNewGame}
              icon={
                <Image
                  alt="logo"
                  src="/icons/icons8-ok.svg"
                  width="30"
                  height="30"
                />
              }
            >
              Start Game
            </CustomButton>
            <CustomButton onClick={onOpen}>Leave Game</CustomButton>
          </Flex>
        </VStack>
      </Flex>
      <Dialog
        heading="Leave Game"
        body="Are you sure you wanna exit this game?"
        cancelText="Cancel"
        actionText="Leave Game"
        action={exitCurrentLobby}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
};
