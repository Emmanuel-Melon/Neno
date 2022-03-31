import { gql } from "@apollo/client";

export const INSERT_NEW_GAME = gql`
  mutation insertNewGame($game: rooms_games_insert_input!) {
    insert_rooms_games_one(object: $game) {
      id
      room {
        id
        privacy
      }
    }
  }
`;

export const INSERT_GAME_ROUNDS = gql`
  mutation insertGameRounds($rounds: [games_rounds_insert_input!]!) {
    insert_games_rounds(objects: $rounds) {
      returning {
        gameId
        id
      }
    }
  }
`;

export const INSERT_ROUND_ANSWERS = gql`
  mutation insertRoundAnswers($answers: [rounds_answers_insert_input!]!) {
    insert_rounds_answers(objects: $answers) {
      returning {
        score
        value
      }
    }
  }
`;
