import React from "react";
import { Flex, Text } from "@chakra-ui/react";

type MyTimerProps = {
  minutes: any;
  seconds: any;
};

export const MyTimer = ({ minutes, seconds }: MyTimerProps) => {
  return (
    <Flex
      p="2"
      color="#519259"
      justifyContent="space-between"
      alignItems="center"
      direction="column"
    >
      <Text
        borderRadius="2% 6% 5% 4% / 1% 1% 2% 4%"
        border="3px solid #333333"
        color="brand.primary"
        bg="#fff"
        width="120px"
        textAlign="center"
        fontSize="4xl"
      >
        {minutes}:{seconds}
      </Text>
    </Flex>
  );
};
