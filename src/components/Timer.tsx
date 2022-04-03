import React from "react";
import { Flex, Text } from "@chakra-ui/react";

type MyTimerProps = {
  minutes: number;
  seconds: number;
};

export const MyTimer = ({ minutes, seconds }: MyTimerProps) => {
  return (
    <Flex
      p="2"
      justifyContent="space-between"
      alignItems="center"
      direction="column"
    >
      <Text
        borderRadius="4% 12% 10% 8% / 5% 5% 10% 8%"
        border="border.primary"
        color="brand.white"
        bg="brand.secondary"
        width="120px"
        textAlign="center"
        boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
        fontSize="2xl"
      >
        {minutes}:{seconds}
      </Text>
    </Flex>
  );
};
