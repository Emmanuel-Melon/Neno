import React, { useEffect, useState, useContext } from "react";
import { Flex, Heading, Text, useDisclosure } from "@chakra-ui/react";
import { CustomButton } from "../components/ui/button";
import { Notebook } from "./Notebook";
import Image from "next/image";
import { ActivePlayers } from "./ActivePlayers";
import { Dialog } from "../components/ui/dialog";
import { Paper } from "../components/ui/paper";
import { GameContext } from "../providers/game";
import { useGetGameRounds } from "../hooks/game";
import { getLetterByValue, getRandomLetter } from "../utils/rounds";
import { useInsertRoundAnswers } from "../hooks/game";
import { CustomModal } from "../components/ui/modal";
import { CompletedScreen } from "./CompletedScreen";
import { LoadingScreen } from "./LoadingScreen";
import { Games_Rounds } from "../lib/graphql/globalTypes";

export type GameScreenProps = {
  exitCurrentGame: () => void;
  submitAnswers: (answers: Answers) => void;
  pauseTimer: (callback: Function) => void;
};

export type Answers = {
  animal: string;
  food: string;
  name: string;
  city: string;
};

type GameState = {
  gameWon: boolean;
  rounds: Games_Rounds[];
  roundId: string | number;
  round: {
    id: string;
    letter: {
      icon: string;
    };
    expiration: string;
  };
};

const GameScreen = ({ exitCurrentGame, pauseTimer }: GameScreenProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [_isSubmitted, setSubmit] = useState(false);
  const [roundWonMessage, _setRoundWonMessage] = useState("Round");
  const [gameWonMessage, _setGameWonMessage] = useState("Game");
  const { gameService } = useContext(GameContext);
  const roomId = gameService?.state?.context?.room?.roomId;
  const gameId = gameService?.state?.context?.room?.gameId;

  const { rounds, loadingRounds } = useGetGameRounds(gameId);
  const { insertAnswers, loadingAnswers } = useInsertRoundAnswers();
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [game, setGame] = useState<GameState>({
    gameWon: false,
    rounds: [],
    roundId: "",
    round: {
      id: "",
      letter: {
        icon: "/icons/icons8-question-mark.svg",
      },
      expiration: "",
    },
  });

  function closeModal() {
    setModalOpen((currentState) => !currentState);
  }

  function openModal() {
    setModalOpen((currentState) => !currentState);
  }
  const evaluateAnswers = (value: string, results: string[]) =>
    results.includes(value);

  const verifyAnswers = (
    answers: Array<{
      value: string;
      roundId?: string | null;
      playerId?: string | null;
      correct: boolean;
    }>
  ) => {
    return answers.filter((answer) => !answer.correct);
  };

  const submitAnswers = (answers: Answers) => {
    const input = Object.values(answers).map((answer) => ({
      value: answer,
      roundId: rounds?.[0]?.id,
      playerId: rounds?.[0]?.playerId,
      correct: evaluateAnswers(answer, []),
    }));

    if (verifyAnswers(input).length === 0) {
      insertAnswers(input);
      openModal();
      setSubmit((currentState) => !currentState);
      setGame((currentState) => {
        const newRounds = currentState?.rounds?.filter(
          (round) => round?.id !== currentState.roundId
        );

        if (newRounds?.length === 0) {
          return {
            ...currentState,
            rounds: newRounds,
            gameWon: true,
          };
        } else {
          const round = getRandomLetter(newRounds, newRounds?.length);
          const { icon } = getLetterByValue(round?.letterId);

          return {
            ...currentState,
            roundId: round.id.toString(),
            rounds: newRounds,
            round: {
              ...currentState.round,
              ...round,
              letter: {
                icon,
              },
            },
          };
        }
      });
    }
  };

  useEffect(() => {
    setGame((currentState) => {
      const round = rounds?.find((round) => round.id === rounds?.[0]?.id);
      const icon = getLetterByValue(round?.letterId);
      return {
        ...currentState,
        roundId: rounds?.[0]?.id.toString(),
        rounds: rounds,
        round: {
          ...currentState.round,
          ...round,
          expiration: round?.time,
          letter: {
            icon: icon?.icon || "/icons/icons8-question-mark.svg",
          },
        },
      };
    });
  }, [loadingRounds]);

  if (loadingRounds) {
    return <LoadingScreen />;
  }

  const moveToNextRound = () => {
    closeModal();
  };

  return (
    <>
      <Flex justifyContent="center" marginBottom="8">
        <Image
          width="150"
          height="150"
          src={
            game?.round?.letter?.icon
              ? game.round.letter.icon
              : "/icons/icons8-question-mark.svg"
          }
        />
      </Flex>
      <Flex width="100%" justifyContent="space-between" alignItems="flex-start">
        <Flex direction="column" gap={6}>
          <Paper width="100%">
            <Heading as="h5" color="brand.primary" size="md">
              Game Info
            </Heading>
            <Text>Round 5</Text>
          </Paper>

          <Paper>
            <Heading as="h5" color="brand.primary" size="md">
              Game Events
            </Heading>
            <Text>Nothing yet</Text>
          </Paper>
        </Flex>

        <Flex direction="column">
          <Notebook
            categories={gameService?.state?.context?.room.wordCategories}
            submitAnswers={submitAnswers}
            loadingAnswers={loadingAnswers}
            roundExpiration={new Date(game.round?.expiration)}
          />
        </Flex>

        <Flex direction="column" justifyContent="space-between" gap={6} p="4">
          <ActivePlayers roomId={roomId} />
          <CustomButton
            bg="brand.danger"
            color="#fff"
            icon={
              <Image
                alt="logo"
                src={"/icons/icons8-ok.svg"}
                width="30"
                height="30"
              />
            }
            onClick={() => onOpen()}
          >
            Leave Game
          </CustomButton>
        </Flex>
      </Flex>
      <Dialog
        heading="Leave Game"
        body="Are you sure you wanna exit this game?"
        cancelText="Cancel"
        actionText="Leave Game"
        action={exitCurrentGame}
        isOpen={isOpen}
        onClose={onClose}
      />
      <CustomModal show={isModalOpen} close={closeModal}>
        {game.gameWon ? (
          <CompletedScreen
            message={gameWonMessage}
            type="game"
            action={() => {}}
          />
        ) : (
          <CompletedScreen
            message={roundWonMessage}
            type="round"
            action={moveToNextRound}
          />
        )}
      </CustomModal>
    </>
  );
};

export default GameScreen;
