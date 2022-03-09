import { createMachine } from 'xstate'

export type Game = {
    rounds: any
    players: any
    letters: any
    turn: null
    winner: null,
    leaderBoard: any
}

export const gameMachine = () => {
    return function createGameMachine (game: Game) {
        return createMachine({
            id: 'game',
            initial: 'home',
            context: {
                ...game
            },
            states: {
              home: {
                  on: {
                      CLICK_PLAY: 'mode',
                      CLICK_OPTIONS: 'options',
                      CLICK_GUIDE: 'guide'
                  }
              },
              started: {
                  on: {
                      START: {
        
                      }
                  },
                  onDone: {
        
                  }
              },
              options: {},
              guide: {
        
              },
              menu: {},
              mode: {
                  on: {
                      CREATE_ROOM: 'lobby',
                      JOIN_ROOM: 'room'
                  }
              },
              room: {
                  on: {
                      NEW_ROOM: 'mode',
                      EXISTING_ROOM: 'lobby'
                  }
              },
              lobby: {
                  on: {
                    SEND_MESSAGE: '',
                    VIEW_PROFILE: '',
                    CREATE_ROOM: '',
                    START_GAME: ''
                  }
        
              },
              gameplay: {},
              over: {}
            }
          })
    }
}