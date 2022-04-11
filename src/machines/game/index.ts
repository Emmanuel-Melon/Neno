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
        playerImage: "",
        letter: {
          value: "",
          id: "",
          icon: "",
        },
        round: 1,
        game: {
          id: "",
          roomId: "",
          roundDuration: 0,
          roundsRounds: 0,
          winnderId: "",
          startedAt: "",
          roundsTotal: 0,
          rounds: [],
          hostId: "",
          privacy: "",
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
        unauthenticated: {
          on: {
            SIGNIN_AS_GUEST: {
              target: "authenticated",
              actions: [
                assign({
                  playerId: (context: any, event: any) => {
                    return (context.playerId = event?.payload?.playerId);
                  },
                  playerName: (context: any, event: any) => {
                    return (context.playerId = event?.payload?.playerId);
                  },
                }),
              ],
            },
            SIGNIN_AS_USER: {
              target: "authenticated",
            },
          },
        },
        authenticated: {
          on: {
            SIGNOUT: {
              target: "unauthenticated",
            },
          },
        },
        home: {
          on: {
            USER_ACTIVE: {
              actions: [
                assign({
                  playerEmail: (context: any, event: any) =>
                    (context.playerEmail = event?.payload?.playerEmail),
                  playerImage: (context: any, event: any) =>
                    (context.playerName = event?.payload?.playerImage),
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
            SIGNIN_AS_GUEST: {
              actions: [
                assign({
                  playerImage: (context: any, event: any) =>
                    (context.playerName = event?.payload?.playerName),
                  playerName: (context: any, event: any) =>
                    (context.playerName = event?.payload?.playerName),
                  playerId: (context: any, event: any) => {
                    return (context.playerId = event?.payload?.playerId);
                  },
                }),
              ],
            },
            SIGNIN_AS_USER: {
              target: "home",
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
              target: "lobby",
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
                  game: (context: any, event: any) => {
                    console.log(event.payload);
                    return {
                      ...context.game,
                      id: event?.payload?.id,
                      roomId: event?.payload?.roomId,
                      roundDuration: event?.payload?.roundDuration,
                      roundsTotal: event?.payload?.roundsTotal,
                      winnderId: event?.payload?.winnderId,
                      startedAt: event?.payload?.startedAt,
                      rounds: event?.payload?.room?.games_rounds,
                      hostId: event?.payload?.room?.hostId,
                      privacy: event?.payload?.room?.privacy,
                    };
                  },
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
