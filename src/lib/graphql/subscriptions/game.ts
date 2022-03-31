import { gql } from "@apollo/client";

export const GET_CURRENT_LIVE_GAME = gql`
  subscription getCurrentLiveGame($roomId: uuid) {
    rooms_games(where: {roomId: {_eq: $roomId }}) {
      startedAt
      id
      roomId
    }
  }
`;

export const GET_GAME_LIVE_ROUNDS = gql`
  subscription getGameLiveRoundsordCategories($gameId: uuid) {
    games_rounds(where: {gameId: {_eq: $gameId }}) {
      gameId
      id
      roomId
      timeRemaining
      letterId
      playerId
      letters {
        letter
        name
      }
    }
  }
`;