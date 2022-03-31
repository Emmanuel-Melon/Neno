import React, { useContext, useEffect } from "react";
import { useTimer } from "react-timer-hook";
import { Flex, Tag, Box, Text, Heading, Image } from "@chakra-ui/react";
import { GameContext } from "../providers/game";
import { time } from "console";

type MyTimerProps = {
  expiryTimestamp: any;
  expirationCallback?: () => void;
  pauseTimer: (callback) => void;
  onExpireHandler: any;
};

export const MyTimer = ({
  expiryTimestamp,
  expirationCallback,
  pauseTimer,
  onExpireHandler,
}: MyTimerProps) => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 5);

  console.log("this formats!");
  console.log(expiryTimestamp);
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp: expiryTimestamp,
    autoStart: true,
    onExpire: () => {
      onExpireHandler();
    },
  });

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
