import { createMachine } from "xstate";
import { playerMachine } from "../player";

import { Game, GameEventType, GameStateType } from "./types";

export const gameMachine = createMachine(
  {
    id: "game",
    initial: "home",
    states: {
      home: {
        on: {
          CLICK_PLAY: "mode",
          CLICK_OPTIONS: "options",
          CLICK_GUIDE: "guide",
        },
      },
      started: {
        invoke: {
          id: "playerActor",
          src: "playerMachine",
        },
        on: {
          ROUND_COMPLETED: {},
        },
        onDone: {},
      },
      options: {},
      guide: {},
      menu: {},
      mode: {
        on: {
          CREATE_ROOM: "room",
          JOIN_ROOM: "rooms",
        },
      },
      room: {
        on: {
          NEW_ROOM: "lobby",
        },
      },
      rooms: {
        on: {
          SEND_MESSAGE: "",
          VIEW_PROFILE: "",
          CREATE_ROOM: "",
          START_GAME: "",
          EXISTING_ROOM: "lobby",
        },
      },
      over: {},
      lobby: {
        on: {
          GAME_STARTED: "started",
        },
      },
    },
  },
  {
    actions: {},
    guards: {},
    services: {
      playerMachine,
    },
  }
);
