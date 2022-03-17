import React from "react";
import { gameMachineFactory } from "../machines/game";
import { playerMachineFactory } from "../machines/player";
import { useInterpret } from "@xstate/react";

export const GameContext = React.createContext<any>(null);
export const GameConsumer = GameContext.Consumer;

type GameProviderProps = {
  children: React.ReactChild | React.ReactChild[];
};

export const GameProvider = ({ children }: GameProviderProps) => {
  const gameService = useInterpret(gameMachineFactory());
  const playerService = useInterpret(playerMachineFactory());
  return (
    <GameContext.Provider
      value={{
        gameService,
        playerService,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
