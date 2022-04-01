import React from "react";
import { Paper } from "../components/ui/paper";
import { Flex, Heading, VStack, Text } from "@chakra-ui/react";
import { Users } from "../lib/graphql/globalTypes";
import { CustomButton } from "../components/ui/button";
import Image from "next/image";

type LoadingScreen = {
  type?: string;
  message?: string;
  user?: Users;
};

export const LoadingScreen = ({ message }: LoadingScreen) => {
  return (
    <Flex
      justifyContent="center"
      height={"100%"}
      minHeight={"100vh"}
      alignItems="center"
    >
      <VStack gap={6}>
        <Heading color="brand.primary" as="h3" size="md">
          Loading
        </Heading>
        <Image
          src="/images/flame-artificial-intelligence-1.svg"
          width="200px"
          height="200px"
        />
      </VStack>
    </Flex>
  );
};
