import { useSelector } from "@xstate/react";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { CustomModal } from "../components/ui/modal";
import { useUpdateOnlineStatus } from "../hooks/users";
import { Rooms } from "../Rooms/Rooms";
import {
  generateRoundLetters,
  LETTERS,
  getRandomLetter,
} from "../utils/rounds";
import { GameInstructions } from "./GameInstructions";
import { GameLobby } from "./GameLobby";
import { GameMenu } from "./GameMenu";
import { GameMode } from "./GameMode";
import { GameOptions } from "./GameOptions";
import GameScreen from "./GameScreen";

type GameProps = {
  context: any;
};

export const Game = ({ context }: GameProps) => {
  const { gameService, playerService } = context;
  const [showGuide, setShowGuide] = useState<boolean>(false);
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [_isModalOpen, setModalOpen] = useState<boolean>(false);
  const { data: session } = useSession();
  const [answerSubmitted, setAnswerSubmitted] = useState(false);

  const handleClickPlay = () => {
    const data = {
      playerEmail: session?.user?.email,
      playerName: session?.user?.name,
    };
    gameService.send({
      type: "CLICK_PLAY",
      payload: {
        ...data,
      },
    });
  };

  function viewOptions() {
    setShowOptions((currentState) => !currentState);
  }

  function viewInstructions() {
    setShowGuide((currentState) => !currentState);
  }

  function closeModal() {
    setModalOpen((currentState) => !currentState);
  }

  const { updateOnlineStatus } = useUpdateOnlineStatus();

  const leaveRoom = () => {};

  const leaveGame = () => {};

  const startNewGame = () => {
    const rounds = generateRoundLetters(8, LETTERS);
    const letter = getRandomLetter(rounds);

    console.log(letter);

    gameService.send({ type: "GAME_STARTED", payload: letter });

    console.log(gameService.state);
  };

  const moveToNextRound = () => {};

  const calculateRoundScore = () => {};

  const submitAnswers = (answers: any) => {
    if (gameService.state.context.currentRound.remaining !== 0) {
      const rounds = generateRoundLetters(8, LETTERS);
      const letter = getRandomLetter(rounds);
      const prevLetter = gameService.state.context.letter.value;
      gameService.send({ type: "ANSWERS_SUBMITTED", payload: letter });
      setAnswerSubmitted((prevState) => !prevState);
      console.log(gameService.state.context);
    }
  };

  const exitCurrentGame = () => {
    gameService.send({
      type: "EXIT_CURRENT_GAME",
    });
  };

  const exitCurrentLobby = () => {
    gameService.send({
      type: "EXIT_CURRENT_LOBBY",
    });
  };

  const viewLiveRooms = () => {
    gameService.send({ type: "JOIN_ROOM" });
  };

  const joinLiveRoom = (roomId: string) => {
    gameService.send({ type: "EXISTING_ROOM" });
    console.log("joining now!");
  };

  // same thing should happened when you join a room!
  const createOwnRoom = (room: any) => {
    gameService.send({
      type: "CREATE_ROOM",
      payload: room,
    });

    gameService.assign();
  };

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

  useEffect(() => {}, [answerSubmitted]);
  return (
    <>
      {isMenu ? (
        <GameMenu
          handleClickPlay={handleClickPlay}
          viewOptions={viewOptions}
          viewInstructions={viewInstructions}
          session={session}
        />
      ) : null}

      {isMode ? (
        <GameMode viewLiveRooms={viewLiveRooms} createOwnRoom={createOwnRoom} />
      ) : null}

      {showGuide ? (
        <CustomModal show={showGuide} close={closeModal}>
          <GameInstructions />
        </CustomModal>
      ) : null}

      {showOptions ? (
        <CustomModal show={showOptions} close={closeModal}>
          <GameOptions />
        </CustomModal>
      ) : null}

      {isRooms ? (
        <Rooms joinLiveRoom={joinLiveRoom} createOwnRoom={createOwnRoom} />
      ) : null}

      {isLobby ? (
        <GameLobby
          startNewGame={startNewGame}
          exitCurrentLobby={exitCurrentLobby}
        />
      ) : null}

      {isGameScreen ? (
        <GameScreen
          letter={gameService.state?.context?.letter}
          exitCurrentGame={exitCurrentGame}
          submitAnswers={submitAnswers}
          context={gameService.state}
        />
      ) : null}
    </>
  );
};
