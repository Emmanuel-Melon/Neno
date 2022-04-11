import React from "react";
import { Text } from "@chakra-ui/react";

type MyTimerProps = {
  minutes: number;
  seconds: number;
};

export const MyTimer = ({ minutes, seconds }: MyTimerProps) => {
  return (
    <Text
      borderRadius="50%"
      border="border.primary"
      color="brand.secondary"
      bg="brand.white"
      textAlign="center"
      boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
      fontSize="4xl"
      p="2"
    >
      {minutes}:{seconds}
    </Text>
  );
};
