import React from "react";
import { useTimer } from "react-timer-hook";
import { Flex, Tag } from "@chakra-ui/react";

type MyTimerProps = {
  expiryTimestamp: any;
};

export const MyTimer = ({ expiryTimestamp }: MyTimerProps) => {
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
    onExpire: () => console.warn("onExpire called"),
    autoStart: true,
  });

  return (
    <div style={{ textAlign: "center" }}>
      <Tag width="100%">
        <span>{minutes}</span>:<span>{seconds}</span>
      </Tag>
    </div>
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
