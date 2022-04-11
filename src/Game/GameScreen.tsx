import React, { useEffect, useState, useContext, useCallback } from "react";
import {
  Avatar,
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Tag,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { CustomButton } from "../components/ui/button";
import { Notebook } from "./Notebook";
import Image from "next/image";
import { ActivePlayers } from "./ActivePlayers";
import { Dialog } from "../components/ui/dialog";
import { Paper } from "../components/ui/paper";
import { GameContext } from "../providers/game";
import { useGetGameRounds } from "../hooks/game";
import {
  calculateScore,
  getLetterByValue,
  getRandomLetter,
} from "../utils/rounds";
import { useInsertRoundAnswers } from "../hooks/game";
import { CustomModal } from "../components/ui/modal";
import { CompletedScreen } from "./CompletedScreen";
import { Games_Rounds } from "../lib/graphql/globalTypes";
import data from "../../data.json";
import { useGetRoomById } from "../hooks/rooms";
import { MyTimer } from "../components/Timer";
import { Card } from "../components/ui/card";

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
  rounds: any[];
  currentRound: {
    id: string;
    score: number;
    number: number;
    won: boolean;
    letter: {
      icon: string;
      value: string;
    };
  };
};

const GameScreen = () => {
  const { gameService, playerService } = useContext(GameContext);
  const roomId: string = gameService?.state?.context?.room?.roomId;
  const game = gameService?.state?.context?.game;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [ready, setReady] = useState(false);
  const [_isSubmitted, setSubmit] = useState(false);
  const [roundWonMessage, _setRoundWonMessage] = useState("Round");
  const [gameWonMessage, _setGameWonMessage] = useState("Game");
  const { insertAnswers, loadingAnswers } = useInsertRoundAnswers();
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const { room } = useGetRoomById(roomId);
  const { rounds } = useGetGameRounds(game?.id);
  const [gameRounds, setGameRounds] = useState<GameState>({
    rounds: [],
    currentRound: {
      id: "",
      number: 1,
      score: 0,
      won: false,
      letter: {
        icon: "",
        value: "",
      },
    },
  });
  const [answers, setAnswers] = useState<Answers>({
    animal: {
      value: "",
      category: "",
    },
    food: {
      value: "",
      category: "",
    },
    city: {
      value: "",
      category: "",
    },
  });

  const handleInputchange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setAnswers((currentState) => {
        return {
          ...currentState,
          [name]: {
            value,
            category: name,
          },
        };
      });
    },
    []
  );

  const exitCurrentGame = () => {
    gameService.send({
      type: "EXIT_CURRENT_GAME",
      payload: {
        ...room,
      },
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
      roundId: gameRounds.currentRound.id,
      playerId: gameService.state.context.playerId,
      correct: verifyAnswers(answer),
      score: calculateScore(answer.value),
    }));
    insertAnswers(input);
    setSubmit((currentState) => !currentState);
    moveToNextRound();
  };

  const moveToNextRound = () => {
    setGameRounds((currentState) => {
      const newRounds = currentState?.rounds?.filter(
        (round) => round?.id !== currentState.currentRound.id
      );
      if (newRounds?.length === 0) {
        openModal();
        return {
          ...currentState,
          rounds: newRounds,
          currentRound: {
            ...currentState.currentRound,
            won: true,
          },
        };
      } else {
        const round = getRandomLetter(newRounds, newRounds?.length);
        const { icon, letter } = getLetterByValue(round.letterId);
        return {
          ...currentState,
          rounds: newRounds,
          currentRound: {
            ...currentState.currentRound,
            id: round?.id,
            won: true,
            letter: {
              icon,
              value: letter,
            },
          },
        };
      }
    });
    closeModal();
  };

  useEffect(() => {
    setReady(true);
    setGameRounds((currentState) => {
      return {
        ...currentState,
        rounds: rounds,
        currentRound: {
          ...rounds?.[0],
          letter: getLetterByValue(rounds?.[0]?.letterId),
          score: 0,
        },
      };
    });
  }, [rounds, game]);

  if (ready) {
    return (
      <Flex
        width="100%"
        alignItems="center"
        height={"100%"}
        justifyContent="center"
        gap={2}
        direction="column"
      >
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          <GridItem colSpan={2}>
            <Flex
              gap={2}
              direction="column"
              justifyContent="space-between"
              height="100%"
            >
              <Flex flexGrow={1}>
                <ActivePlayers room={room} />
              </Flex>
              <Flex gap={6} alignItems="flex-end" justifyContent="space-evenly">
                <CustomButton
                  onClick={() => {}}
                  icon={
                    <Image
                      alt="logo"
                      src={"/icons/icons8-circled-thin.svg"}
                      width="30"
                      height="30"
                    />
                  }
                >
                  Report
                </CustomButton>
                <CustomButton
                  bg="brand.danger"
                  color="#fff"
                  icon={
                    <Image
                      alt="logo"
                      src={"/icons/icons8-close (1).svg"}
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
          </GridItem>
          <GridItem colSpan={2}>
            <Card padding="none" width="100%">
              <Flex
                width="100%"
                bg="brand.white"
                direction="column"
                p="2"
                gap={2}
              >
                <Heading color="brand.primary" as="h3" size="sm">
                  Round info
                </Heading>
                <Flex py="1" gap={2}>
                  <Tag
                    borderRadius="4% 12% 10% 8% / 5% 5% 10% 8%"
                    boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                    color="brand.secondary"
                    border="border.secondary"
                    bg="brand.white"
                    width="fit-content"
                  >
                    Score {gameRounds?.currentRound?.score}
                  </Tag>
                  <Tag
                    borderRadius="4% 12% 10% 8% / 5% 5% 10% 8%"
                    color="brand.secondary"
                    boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                    border="border.secondary"
                    bg="brand.white"
                    width="fit-content"
                  >
                    Round {gameRounds?.currentRound?.number}/{room.capacity}
                  </Tag>
                  <Tag
                    borderRadius="4% 12% 10% 8% / 5% 5% 10% 8%"
                    color="brand.secondary"
                    boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                    border="border.secondary"
                    bg="brand.white"
                    width="fit-content"
                  >
                    Letter{" "}
                    {gameRounds?.currentRound?.letter
                      ? gameRounds?.currentRound?.letter?.value
                      : "?"}
                  </Tag>
                </Flex>
              </Flex>
              <Flex justifyContent="center" p="4" gap={6}>
                <Image
                  width="120"
                  height="120"
                  src={
                    gameRounds?.currentRound?.letter
                      ? gameRounds?.currentRound?.letter?.icon
                      : "/icons/icons8-question-mark.svg"
                  }
                />
              </Flex>
              <Flex width="100%" p="2">
                <Heading color="brand.primary" as="h3" size="sm">
                  Answers
                </Heading>
              </Flex>
              <Notebook
                categories={gameService?.state?.context?.room.wordCategories}
                submitAnswers={submitAnswers}
                loadingAnswers={loadingAnswers}
                roundExpiration={new Date(game.round?.expiration)}
                won={game.won}
                handleInputchange={handleInputchange}
                answers={answers}
              />
              <Flex p="2" direction="column" width="100%" gap={2}>
                <Flex
                  width="100%"
                  justifyContent="space-between"
                  alignItems="center"
                  py="2"
                >
                  <Flex>
                    <Flex alignItems="center" py="2" gap={2}>
                      <MyTimer minutes={0} seconds={9} />
                      <Heading color="brand.secondary" as="h3" size="sm">
                        {gameService.state.context.playerName}
                      </Heading>
                    </Flex>
                  </Flex>
                  <CustomButton
                    onClick={() => {
                      submitAnswers(answers);
                    }}
                    disabled={false}
                    size="md"
                    icon={
                      <Image
                        alt="logo"
                        src={"/icons/icons8-ok.svg"}
                        width="25"
                        height="25"
                      />
                    }
                  >
                    Done!
                  </CustomButton>
                </Flex>
              </Flex>
            </Card>
          </GridItem>
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
        <CustomModal
          show={gameRounds.currentRound.won && gameRounds.rounds.length === 0}
          close={closeModal}
        >
          {gameRounds.currentRound.won && gameRounds.rounds.length === 0 ? (
            <CompletedScreen
              message={gameWonMessage}
              type="game"
              primaryAction={() => {}}
              secondaryAction={exitCurrentGame}
            />
          ) : null}
        </CustomModal>
        <CustomModal show={isModalOpen} close={closeModal}>
          {gameRounds.currentRound.won ? (
            <CompletedScreen
              message={roundWonMessage}
              type="round"
              primaryAction={moveToNextRound}
            />
          ) : null}
        </CustomModal>
      </Flex>
    );
  }
  return (
    <div>
      <h3>Game is loading</h3>
    </div>
  );
};

export default GameScreen;
