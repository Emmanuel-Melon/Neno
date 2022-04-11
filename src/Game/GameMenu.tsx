import React, { useEffect, useContext, useState } from "react";
import {
  Flex,
  Heading,
  Text,
  Avatar,
  VStack,
  ScaleFade,
} from "@chakra-ui/react";
import { CustomButton } from "../components/ui/button";
import Image from "next/image";
import { Card } from "../components/ui/card";
import { useSession } from "next-auth/react";
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
      gameService.send({
        type: "USER_ACTIVE",
        payload: {
          playerEmail: session?.user?.email,
          playerName: session?.user?.name,
          playerId: currentUser?.[0]?.id,
          playerImage: currentUser?.[0]?.image,
        },
      });
    } else {
    }
  }, [session, users]);

  return (
    <>
      <ScaleFade initialScale={0.1} in={true}>
        <Card width={["320px", "320px", "320px", "320px"]}>
          <VStack gap={2}>
            <VStack gap={4}>
              <Avatar
                src="/images/letters/icons8-n.svg"
                border="border.primary"
                width="120"
                bg="brand.accent"
                height="120"
              />
              <Heading as="h1" size="lg" color="brand.primary" fontSize="4xl">
                Neno
              </Heading>
              <Text color="brand.secondary" style={{ textAlign: "center" }}>
                How fast can you guess? 😉
              </Text>
            </VStack>
            <Flex direction="column" justifyContent="space-between" gap={4}>
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
          </VStack>
        </Card>
      </ScaleFade>
      <CustomModal show={showOptions} close={viewOptions}>
        <GameOptions />
      </CustomModal>
      <CustomModal show={showGuide} close={viewInstructions}>
        <GameInstructions />
      </CustomModal>
    </>
  );
};
