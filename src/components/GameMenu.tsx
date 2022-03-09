import React, { FC } from "react";
import { Flex, Heading, VStack } from "@chakra-ui/react";
import { CustomButton } from "../components/ui/button";
import Image from "next/image";

type GameMenuProps = {
  startGame: () => void;
  viewOptions: () => void;
  viewInstructions: () => void;
  session: any;
};

export const GameMenu: FC<GameMenuProps> = ({
  startGame,
  viewOptions,
  viewInstructions,
  session,
}) => {
  return (
    <Flex justifyContent="center" height={"100%"} minHeight={"100vh"}>
      <Flex
        direction="column"
        p="16"
        style={{
          background: "rgba(25, 41, 101, 0.4)",
          boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
          borderRadius: "1rem",
        }}
        height="fit-content"
      >
        <Heading as="h1" size="lg" color="#B7E778" textAlign="center">
          Welcome, {session?.user?.name}
        </Heading>
        <Flex
          direction="column"
          height="160px"
          justifyContent="space-between"
          width="350px"
          m="1"
        >
          <CustomButton
            onClick={startGame}
            icon={
              <Image
                alt="logo"
                src={"/icons/icons8-play.svg"}
                width="30"
                height="30"
              />
            }
          >
            Play
          </CustomButton>
          <CustomButton
            onClick={viewOptions}
            icon={
              <Image
                alt="logo"
                src={"/icons/icons8-wrench.svg"}
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
                src={"/icons/icons8-information.svg"}
                width="30"
                height="30"
              />
            }
          >
            How to play
          </CustomButton>
        </Flex>
      </Flex>
    </Flex>
  );
};
