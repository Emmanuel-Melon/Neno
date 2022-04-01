import React, { FC, useEffect, useContext, useState } from "react";
import { Flex, Heading, Text, Avatar } from "@chakra-ui/react";
import { CustomButton } from "../components/ui/button";
import Image from "next/image";
import { Card } from "../components/ui/card";
import { useSession, signIn, signOut } from "next-auth/react";
import { GameContext } from "../providers/game";
import { useGetUser } from "../hooks/users";
import { CustomModal } from "../components/ui/modal";
import { GameInstructions } from "./GameInstructions";
import { GameOptions } from "./GameOptions";

export const GameMenu = () => {
  const [showGuide, setShowGuide] = useState<boolean>(false);
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const { gameService } = useContext(GameContext);
  const { data: session } = useSession();
  const { users, loading } = useGetUser(session?.user?.email);
  const handleClickPlay = () => {
    gameService.send({ type: "CLICK_PLAY" });
  };

  function viewOptions() {
    setShowOptions((currentState) => !currentState);
  }

  function viewInstructions() {
    setShowGuide((currentState) => !currentState);
  }

  useEffect(() => {
    if (session) {
      const currentUser = users?.filter(
        (user) => user.email === session?.user?.email
      );
      const items = {
        playerEmail: session?.user?.email,
        playerName: session?.user?.name,
        playerId: currentUser?.[0]?.id,
      };
      gameService.send({
        type: "USER_ACTIVE",
        payload: {
          ...items,
        },
      });
    }
  }, [session, users]);
  return (
    <>
      <Flex justifyContent="center" height={"100%"} minHeight={"100vh"}>
        <Card>
          <Avatar
            src="/images/letters/icons8-n.svg"
            bg="brand.secondary"
            width="150"
            height="150"
          />
          <Heading as="h1" size="lg" color="brand.primary" fontSize="4xl">
            Neno
          </Heading>
          <Text color="brand.secondary" style={{ textAlign: "center" }}>
            How fast can you guess? 😉
          </Text>
          <Flex direction="column" justifyContent="space-between" gap={6}>
            <CustomButton
              onClick={handleClickPlay}
              disabled={loading}
              isLoading={loading}
              loadingText="Loading Game"
              icon={
                <Image
                  alt="logo"
                  src={"/icons/icons8-play (1).svg"}
                  width="30"
                  height="30"
                />
              }
            >
              New Game
            </CustomButton>
            <CustomButton
              onClick={viewOptions}
              icon={
                <Image
                  alt="logo"
                  src={"/icons/icons8-settings.svg"}
                  width="30"
                  height="30"
                />
              }
            >
              Options
            </CustomButton>
            <CustomButton
              onClick={viewInstructions}
              icon={
                <Image
                  alt="logo"
                  src={"/icons/icons8-info.svg"}
                  width="30"
                  height="30"
                />
              }
            >
              How to play
            </CustomButton>
          </Flex>
        </Card>
      </Flex>
      <CustomModal show={showOptions} close={viewOptions}>
        <GameOptions />
      </CustomModal>
      <CustomModal show={showGuide} close={viewInstructions}>
        <GameInstructions />
      </CustomModal>
    </>
  );
};
