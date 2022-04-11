import { createMachine } from "xstate";
import { Player } from "./types";

export const playerMachineFactory = () => {
  return createMachine(
    {
      id: "player",
      initial: "started",
      context: {},
      states: {
        started: {
          initial: "typing",
          on: {
            SUBMIT_ANSWERS: "evaluating",
          },
          states: {
            typing: {
              on: {},
            },
          },
        },
        evaluating: {},
        result: {},
      },
    },
    {
      actions: {},
      guards: {},
    }
  );
};
