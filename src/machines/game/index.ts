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
          remaining: 3,
          roundsTotal: 4,
          timeRemaining: null,
          winner: "",
          leaderboard: [],
          letter: "",
        },
        room: {
          roomId: "",
          capacity: null,
          gameId: "",
          wordCategories: [],
          privacy: "",
          host: "",
        },
      },
      states: {
        unauthenticated: {},
        authenticated: {},
        home: {
          on: {
            USER_ACTIVE: {
              actions: [
                assign({
                  playerEmail: (context: any, event: any) =>
                    (context.playerEmail = event?.payload?.playerEmail),
                  playerName: (context: any, event: any) =>
                    (context.playerName = event?.payload?.playerName),
                  playerId: (context: any, event: any) => {
                    return (context.playerId = event?.payload?.playerId);
                  },
                }),
              ],
            },
            CLICK_PLAY: {
              target: "mode",
            },
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
            ANSWERS_SUBMITTED: {},
          },
        },
        menu: {},
        mode: {
          on: {
            CREATE_ROOM: {
              target: "lobby",
              actions: [
                assign({
                  room: (_context: any, event: any) => {
                    const { capacity, hostId, privacy, roomId } = event.payload;
                    return {
                      roomId,
                      capacity,
                      privacy,
                      host: hostId,
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
                    return {
                      roomId: event?.payload?.roomId,
                      capacity: event?.payload?.capacity,
                      privacy: event?.payload?.privacy,
                      role: event?.payload?.role,
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
            CREATE_ROOM: "lobby",
            START_GAME: "",
            EXISTING_ROOM: {
              target: "lobby",
              actions: [
                assign({
                  room: (context: any, event: any) => {
                    const { capacity, hostId, privacy, roomId } = event.payload;
                    return {
                      roomId,
                      capacity,
                      privacy,
                      host: hostId,
                    };
                  },
                }),
              ],
            },
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
                  room: (context: any, event: any) => {
                    return {
                      ...context.room,
                      gameId: event.payload.gameId,
                      wordCategories: event.payload.wordCategories,
                    };
                  },
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
