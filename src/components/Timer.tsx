import React, { useContext } from "react";
import { useTimer } from "react-timer-hook";
import { Flex, Tag, Box, Text, Heading, Image } from "@chakra-ui/react";
import { GameContext } from "../providers/game";

type MyTimerProps = {
  expiryTimestamp: any;
  expirationCallback: () => void;
};

export const MyTimer = ({
  expiryTimestamp,
  expirationCallback,
}: MyTimerProps) => {
  const context = useContext(GameContext);

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
    expiryTimestamp,
    onExpire: context.onExpire,
    autoStart: true,
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

/**
 * 
 *       <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button>
      <button onClick={() => {
        // Restarts to 5 minutes timer
        const time = new Date();
        time.setSeconds(time.getSeconds() + 300);
        restart(time)
      }}>Restart</button>
 */
