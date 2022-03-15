import React from "react";
import { gameMachine } from "../machines/game";
import { useInterpret } from "@xstate/react";

export const GameContext = React.createContext<any>(null);
export const GameConsumer = GameContext.Consumer;

type GameProviderProps = {
  children: React.ReactChild | React.ReactChild[];
};

export const GameProvider = ({ children }: GameProviderProps) => {
  const gameService = useInterpret(gameMachine);
  return (
    <GameContext.Provider value={gameService}>{children}</GameContext.Provider>
  );
};
