import React from "react";
import { gameMachineFactory } from "../machines/game";
import { playerMachineFactory } from "../machines/player";
import { useInterpret } from "@xstate/react";

export const GuestContext = React.createContext<any>(null);
export const GuestConsumer = GuestContext.Consumer;

type GuestProviderProps = {
  children: React.ReactChild | React.ReactChild[];
  guest: any;
};

export const GuestProvider = ({ children, guest }: GuestProviderProps) => {
  return (
    <GuestContext.Provider value={{ guest }}>{children}</GuestContext.Provider>
  );
};
