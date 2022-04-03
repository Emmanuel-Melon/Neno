import React, { useEffect, useState, useContext } from "react";
import { Flex, Grid, Heading, Text, useDisclosure } from "@chakra-ui/react";
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
import data from "../../data.json";
import { useGetRoomById } from "../hooks/rooms";

export type Category = {
  value: string;
  category: string;
};

export type Answers = {
  animal: Category;
  food: Category;
  city: Category;
};

type GameState = {
  won: boolean;
  rounds: Games_Rounds[];
  roundId: string | number;
  round: {
    id: string;
    letter: {
      icon: string;
    };
    expiration: string;
    won: boolean;
  };
};

const GameScreen = () => {
  const { gameService } = useContext(GameContext);
  const roomId: string = gameService?.state?.context?.room?.roomId;
  const gameId: string = gameService?.state?.context?.room?.gameId;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [_isSubmitted, setSubmit] = useState(false);
  const [roundWonMessage, _setRoundWonMessage] = useState("Round");
  const [gameWonMessage, _setGameWonMessage] = useState("Game");
  const { rounds, loadingRounds } = useGetGameRounds(gameId);
  const { insertAnswers, loadingAnswers } = useInsertRoundAnswers();
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const { room } = useGetRoomById(roomId);
  const [game, setGame] = useState<GameState>({
    won: false,
    rounds: [],
    roundId: "",
    round: {
      id: "",
      letter: {
        icon: "/icons/icons8-question-mark.svg",
      },
      expiration: "",
      won: false,
    },
  });

  const exitCurrentGame = () => {
    gameService.send({
      type: "EXIT_CURRENT_GAME",
    });
  };

  function closeModal() {
    setModalOpen((currentState) => !currentState);
  }

  function openModal() {
    setModalOpen((currentState) => !currentState);
  }

  const verifyAnswers = ({ category, value }: Category) => {
    const solutions: Record<string, string[]> = data;
    return value !== "" ? solutions[category]?.includes(value) : false;
  };

  const submitAnswers = (answers: Answers) => {
    const input = Object.values(answers).map((answer) => ({
      value: answer.value,
      roundId: rounds?.[0]?.id,
      playerId: rounds?.[0]?.playerId,
      correct: verifyAnswers(answer),
    }));
    insertAnswers(input);
    setSubmit((currentState) => !currentState);
    setGame((currentState) => {
      const newRounds = currentState?.rounds?.filter(
        (round) => round?.id !== currentState.roundId
      );
      if (newRounds?.length === 0) {
        openModal();
        return {
          ...currentState,
          rounds: newRounds,
          won: true,
          round: {
            ...currentState.round,
            won: true,
          },
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
            won: true,
          },
        };
      }
    });
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

  console.log(game);

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
      <Grid templateColumns="repeat(3, 1fr)" gap={2}>
        <Flex direction="column" gap={6} width="100%">
          <Paper width="100%">
            <Heading as="h5" color="brand.primary" size="md">
              Game Info
            </Heading>
            <Flex justifyContent="space-between">
              <Text>Round</Text>
              <Text>
                {gameService?.state?.context?.currentRound?.roundNumber}
              </Text>
            </Flex>
            <Flex justifyContent="space-between">
              <Text>Remaining</Text>
              <Text>
                {gameService?.state?.context?.currentRound?.remaining}
              </Text>
            </Flex>
            <Flex justifyContent="space-between">
              <Text>Game Rounds</Text>
              <Text>
                {gameService?.state?.context?.currentRound?.roundsTotal}
              </Text>
            </Flex>
          </Paper>

          <Paper width="100%">
            <Heading as="h5" color="brand.primary" size="md">
              Game Events
            </Heading>
          </Paper>
        </Flex>
        <Flex direction="column">
          <Notebook
            categories={gameService?.state?.context?.room.wordCategories}
            submitAnswers={submitAnswers}
            loadingAnswers={loadingAnswers}
            roundExpiration={new Date(game.round?.expiration)}
            won={game.won}
          />
        </Flex>
        <Flex direction="column" justifyContent="space-between" gap={6} p="4">
          <ActivePlayers room={room} />
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
      </Grid>
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
        {game.won ? (
          <CompletedScreen
            message={gameWonMessage}
            type="game"
            primaryAction={() => { }}
            secondaryAction={exitCurrentGame}
          />
        ) : null}
      </CustomModal>
      <CustomModal show={isModalOpen} close={closeModal}>
        {game.round.won ? (
          <CompletedScreen
            message={roundWonMessage}
            type="round"
            primaryAction={moveToNextRound}
          />
        ) : null}
      </CustomModal>
    </>
  );
};

export default GameScreen;
