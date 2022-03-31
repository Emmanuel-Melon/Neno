import { gql } from "@apollo/client";

export const GET_WORD_CATEGORIES = gql`
  query getWordCategories {
    rooms_word_categories {
      type
    }
  }
`;

export const GET_GAME_ROUNDS = gql`
  query getGameRounds($gameId: uuid) {
    games_rounds(where: {gameId: {_eq: $gameId }}) {
      gameId
      id
      roomId
      time
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

export const GET_CURRENT_GAME = gql`
  query getCurrentGame($roomId: uuid) {
    rooms_games(where: {roomId: {_eq: $roomId }}) {
      startedAt
      id
      roomId
    }
  }
`;

export const GET_ROUND_ANSWERS = gql`
  query getRoundAnswers($playerId: uuid) {
    rounds_answers(where: {playerId: {_eq: $playerId }}) {
      correct
    }
  }
`;
