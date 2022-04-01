import React from "react";
import { Paper } from "../components/ui/paper";
import { Flex, Heading, VStack, Text } from "@chakra-ui/react";
import { Users } from "../lib/graphql/globalTypes";
import { CustomButton } from "../components/ui/button";
import Image from "next/image";

type TimeUpProps = {
  type?: string;
  message?: string;
  user?: Users;
};

export const TimeUp = ({ message }: TimeUpProps) => {
  return (
    <>
      <Paper width="400px">
        <VStack gap={6}>
          <Heading color="brand.primary" as="h3" size="md">
            Your time is up
          </Heading>
          <Text>Your answers will be submitted in 3</Text>
        </VStack>
      </Paper>
    </>
  );
};
