import { useSelector } from "@xstate/react";
import { useState, useEffect } from "react";
import { useUpdateOnlineStatus } from "../hooks/users";
import { Rooms } from "../Rooms/Rooms";
import {
  generateRoundLetters,
  LETTERS,
  getRandomLetter,
} from "../utils/rounds";
import { GameLobby } from "./GameLobby";
import { GameMenu } from "./GameMenu";
import { GameMode } from "./GameMode";
import GameScreen from "./GameScreen";

type GameProps = {
  context: any;
};

export const Game = ({ context }: GameProps) => {
  const { gameService, _playerService } = context;
  const [answerSubmitted, setAnswerSubmitted] = useState(false);
  const { updateOnlineStatus } = useUpdateOnlineStatus();

  const submitAnswers = (answers: any) => {
    if (gameService.state.context.currentRound.remaining !== 0) {
      const rounds = generateRoundLetters(8, LETTERS);
      const letter = getRandomLetter(rounds);
      const prevLetter = gameService.state.context.letter.value;
      gameService.send({ type: "ANSWERS_SUBMITTED", payload: letter });
      setAnswerSubmitted((prevState) => !prevState);
    }
  };

  const exitCurrentGame = () => {
    gameService.send({
      type: "EXIT_CURRENT_GAME",
    });
  };

  const pauseTimer = (callback: Function) => {};

  // selectors
  const modeSelector = (state: any) => state.matches("mode");
  const menuSelector = (state: any) => state.matches("home");
  const roomSelector = (state: any) => state.matches("rooms");
  const lobbySelector = (state: any) => state.matches("lobby");
  const gameScreenSelector = (state: any) => state.matches("started");

  const isMode = useSelector(gameService, modeSelector);
  const isMenu = useSelector(gameService, menuSelector);
  const isRooms = useSelector(gameService, roomSelector);
  const isLobby = useSelector(gameService, lobbySelector);
  const isGameScreen = useSelector(gameService, gameScreenSelector);

  useEffect(() => {
    // Every 20s, run a mutation to tell the backend that you're online
    updateOnlineStatus();
    // setOnlineIndicator(setInterval(() => updateOnlineStatus(), 20000));

    /**
         * return () => {
          // Clean up
          clearInterval(onlineIndicator);
        };
         */
  }, []);

  return (
    <>
      {isMenu ? <GameMenu /> : null}

      {isMode ? <GameMode /> : null}

      {isRooms ? <Rooms /> : null}

      {isLobby ? <GameLobby /> : null}

      {isGameScreen ? (
        <GameScreen
          letter={gameService.state?.context?.letter}
          exitCurrentGame={exitCurrentGame}
          submitAnswers={submitAnswers}
          pauseTimer={pauseTimer}
        />
      ) : null}
    </>
  );
};
