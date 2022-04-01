import React from "react";
import { Paper } from "../components/ui/paper";
import { Flex, Heading, VStack, Text } from "@chakra-ui/react";
import { Users } from "../lib/graphql/globalTypes";
import { CustomButton } from "../components/ui/button";
import Image from "next/image";

type CompletedScreenProps = {
  type?: string;
  message?: string;
  user?: Users;
  action: () => void;
};

export const CompletedScreen = ({
  action,
  message,
  type,
}: CompletedScreenProps) => {
  return (
    <>
      <Paper width="400px">
        <VStack gap={6}>
          <Heading color="brand.primary" as="h3" size="md">
            {message} Won!!!
          </Heading>
          <Flex justifyContent="center" width="100%" gap={6}>
            {type === "game" ? (
              <CustomButton
                icon={
                  <Image
                    alt="logo"
                    src="/icons/icons8-close (1).svg"
                    width="30"
                    height="30"
                  />
                }
                onClick={() => {}}
              >
                Exit
              </CustomButton>
            ) : null}
            <CustomButton
              icon={
                <Image
                  alt="logo"
                  src="/icons/icons8-plus-math.svg"
                  width="30"
                  height="30"
                />
              }
              onClick={() => {
                action();
              }}
            >
              {type === "game" ? "Play Again!" : "Next Round!"}
            </CustomButton>
          </Flex>
        </VStack>
      </Paper>
    </>
  );
};
