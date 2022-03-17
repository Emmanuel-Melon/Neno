import { createMachine, assign } from "xstate";

export const gameMachineFactory = () => {
  return createMachine(
    {
      id: "game",
      initial: "home",
      context: {
        on: false,
        active: false,
        playerEmail: "",
        playerName: "",
        playerId: "",
        letter: {
          value: "",
          id: "",
          icon: "",
        },
        round: 1,
        currentRound: {
          roundNumber: 1,
          remaining: 3, // decrement remaining until it's zero
          roundsTotal: 4,
        },
        room: {
          roomId: "",
          capacity: null,
          privacy: "",
          wordCategories: [],
        },
      },
      states: {
        home: {
          on: {
            CLICK_PLAY: {
              target: "mode",
              actions: [
                assign({
                  playerEmail: (context: any, event: any) =>
                    (context.playerEmail = event?.payload?.playerEmail),
                  playerName: (context: any, event: any) =>
                    (context.playerName = event?.payload?.playerName),
                }),
              ],
            },
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
            EXIT_CURRENT_GAME: {
              target: "mode",
            },
            ANSWERS_SUBMITTED: {
              actions: [
                assign({
                  currentRound: (context: any, event: any) => {
                    return {
                      remaining:
                        context.currentRound.remaining > 0
                          ? (context.currentRound.remaining =
                              context.currentRound.remaining - 1)
                          : context.currentRound.remaining,

                      roundNumber:
                        context.currentRound.roundNumber <
                        context.currentRound.roundsTotal
                          ? (context.currentRound.roundNumber =
                              context.currentRound.roundNumber + 1)
                          : context.currentRound.roundsTotal,
                      roundsTotal: context.currentRound.roundsTotal,
                    };
                  },
                  letter: (context: any, event: any) =>
                    (context.letter = {
                      value: event?.payload?.value,
                      id: event?.payload?.id,
                      icon: event?.payload?.icon,
                    }),
                }),
              ],
            },
          },
        },
        options: {},
        guide: {},
        menu: {},
        mode: {
          on: {
            CREATE_ROOM: {
              target: "lobby",
              actions: [
                assign({
                  room: (context: any, event: any) => {
                    console.log("lord have mercy");
                    console.log(event.payload);
                    return {
                      ...context.room,
                      capacity: event?.payload?.capacity,
                      privacy: event?.payload?.privacy,
                      wordCategories: event?.payload?.wordCategories,
                    };
                  },
                }),
              ],
            },
            JOIN_ROOM: "rooms",
          },
        },
        room: {
          on: {
            NEW_ROOM: {
              target: "lobby",
              actions: [
                assign({
                  room: (context: any, event: any) => {
                    console.log("what?");
                    console.log(event.payload);
                    return {
                      ...context.room,
                      capacity: event?.payload?.capacity,
                      privacy: event?.payload?.privacy,
                      wordCategories: event?.payload?.wordCategories,
                    };
                  },
                }),
              ],
            },
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
            CREATE_ROOM: "room",
            GAME_STARTED: {
              target: "started",
              actions: [
                assign({
                  letter: (context: any, event: any) =>
                    (context.letter = {
                      value: event?.payload?.value,
                      id: event?.payload?.id,
                      icon: event?.payload?.icon,
                    }),
                }),
              ],
            },
            EXIT_CURRENT_LOBBY: {
              target: "mode",
              actions: [
                assign({
                  on: true,
                  active: true,
                }),
              ],
            },
          },
        },
      },
    },
    {
      actions: {},
      guards: {},
      services: {},
    }
  );
};
