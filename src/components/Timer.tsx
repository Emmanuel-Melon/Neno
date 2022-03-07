import React from 'react';
import { useTimer } from 'react-timer-hook';
import styled from 'styled-components'

const Timer = styled.div`
    font-size: 64px;
    border: solid 0.15rem var(--secondary-color);
    padding: 0.5rem;
    width: 180px;
    border-radius: var(--border-radius);
`

type MyTimerProps = {
    expiryTimestamp: any;
}

export default function MyTimer({ expiryTimestamp }: MyTimerProps) {
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
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called'), autoStart: false });


  return (
    <div style={{textAlign: 'center'}}>
      <Timer>
        <span>{minutes}</span>:<span>{seconds}</span>
      </Timer>
    </div>
  );
}

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