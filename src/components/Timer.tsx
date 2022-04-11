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
      border="border.white"
      color="brand.white"
      bg="brand.secondary"
      textAlign="center"
      boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
      width="fit-content"
      p="2"
      height="fit-content"
    >
      {minutes}:{seconds}
    </Text>
  );
};
