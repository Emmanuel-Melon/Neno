import React, { FC } from "react";
import { Flex, Heading, Text, Avatar } from "@chakra-ui/react";
import { CustomButton } from "../components/ui/button";
import Image from "next/image";
import { Card } from "../components/ui/card";

type GameMenuProps = {
  handleClickPlay: () => void;
  viewOptions: () => void;
  viewInstructions: () => void;
  session: any;
  context?: any;
};

export const GameMenu: FC<GameMenuProps> = ({
  viewOptions,
  viewInstructions,
  handleClickPlay,
}) => {
  return (
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
  );
};
