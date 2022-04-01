import React, { useState, useEffect, useContext } from "react";
import { Chat } from "../Rooms/Chat";
import { ActivePlayers } from "./ActivePlayers";
import { Flex, Text, VStack, Heading, useDisclosure } from "@chakra-ui/react";
import Image from "next/image";
import { CustomButton } from "../components/ui/button";
import { Paper } from "../components/ui/paper";
import { Dialog } from "../components/ui/dialog";
import { GameContext } from "../providers/game";
import { generateRoundLetters } from "../utils/rounds";
import {
  useInsertGame,
  useInsertGameRounds,
  useGetCurrentGame,
} from "../hooks/game";
import {
  useGetRoomMembers,
  useGetRoomMemberCount,
  useDeleteRoomMember,
  useDeleteRoomById,
  useGetRoomById,
} from "../hooks/rooms";
import { LoadingScreen } from "./LoadingScreen";

import { useExitPrompt } from "../hooks/useExistPrompt";
import { GET_LIVE_ROOM_MEMEMBERS } from "../lib/graphql/subscriptions/rooms";
import { client } from "../lib/apolloClient";
import { GET_CURRENT_GAME } from "../lib/graphql/queries/game";
import { GET_CURRENT_LIVE_GAME } from "../lib/graphql/subscriptions/game";

export const GameLobby = () => {
  const [gameId, setGameId] = useState<string | undefined>("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { gameService } = useContext(GameContext);
  const roomId = gameService?.state?.context?.room?.roomId;
  const playerId = gameService?.state?.context?.playerId;
  const { members } = useGetRoomMembers(roomId);
  const { insertGame, loading } = useInsertGame();
  const { insertGameRounds } = useInsertGameRounds();
  const { game, subscribeToMoreGames, loadingGame } = useGetCurrentGame(roomId);
  const { memberCount } = useGetRoomMemberCount(roomId);
  const { deleteRoomById } = useDeleteRoomById();
  const { deleteRoomMember, memberDeletionLoading } = useDeleteRoomMember();
  const { room } = useGetRoomById(roomId);
  const exitCurrentLobby = async () => {
    await deleteRoomMember({
      playerId,
      roomId,
    });

    if (room?.hostId === playerId && memberCount === 1) {
      deleteRoomById(roomId);
    }
    gameService.send({ type: "EXIT_CURRENT_LOBBY" });
  };
  const startNewGame = async () => {
    const rounds = generateRoundLetters(memberCount);
    const newGame = await insertGame({
      roomId: gameService.state.context.room.roomId,
      roundsTotal: memberCount - 1,
    });
    const input = rounds.map((round, index: number) => {
      return {
        roomId: gameService.state.context.room.roomId,
        letterId: round.letter,
        gameId: newGame?.id,
        playerId: members?.[index]?.member?.id,
        time: new Date(),
      };
    });

    await insertGameRounds(input);

    setGameId(newGame?.id);
    gameService.send({
      type: "GAME_STARTED",
      payload: {
        gameId: newGame?.id,
      },
    });
  };

  useEffect(() => {
    const unsubscribe = subscribeToMoreGames();
    if (game && game[0]?.roomId === roomId) {
      gameService.send({
        type: "GAME_STARTED",
        payload: {
          gameId,
        },
      });
    }

    return unsubscribe;
  }, []);

  // subscribeToMoreMembers

  useEffect(() => {
    window.addEventListener("beforeunload", alertUser);
    return () => {
      window.removeEventListener("beforeunload", alertUser);
    };
  }, []);
  const alertUser = (e) => {
    e.preventDefault();
    e.returnValue = "";
  };

  if (loadingGame) {
    return <LoadingScreen />;
  }

  return (
    <>
      <Flex height={"100%"} justifyContent="center" gap={6}>
        <Chat />
        <VStack gap={2}>
          <Paper width="100%">
            <Heading as="h3" size="md" color="brand.primary">
              Game Lobby
            </Heading>
            <Flex justifyContent="space-between">
              <Text>Capacity</Text>
              <Text>{room?.capacity}</Text>
            </Flex>
            <Flex justifyContent="space-between">
              <Text>Privacy</Text>
              <Text>{room?.privacy}</Text>
            </Flex>
            <Flex justifyContent="space-between">
              <Text>Round duration</Text>
              <Text>40 seconds</Text>
            </Flex>
          </Paper>
          <ActivePlayers roomId={roomId} />
          <Flex gap={6}>
            {gameService?.state?.context.playerId ===
            gameService?.state?.context.room.host ? (
              <CustomButton
                onClick={startNewGame}
                loadingText="Starting game"
                isLoading={loading}
                icon={
                  <Image
                    alt="logo"
                    src="/icons/icons8-ok.svg"
                    width="30"
                    height="30"
                  />
                }
              >
                Start Game
              </CustomButton>
            ) : null}
            <CustomButton
              onClick={onOpen}
              icon={
                <Image
                  alt="logo"
                  src="/icons/icons8-close (1).svg"
                  width="30"
                  height="30"
                />
              }
            >
              Leave Room
            </CustomButton>
          </Flex>
        </VStack>
      </Flex>
      <Dialog
        heading="Leave Game"
        body="Are you sure?"
        cancelText="Cancel"
        actionText="Leave Game"
        action={exitCurrentLobby}
        isOpen={isOpen}
        onClose={onClose}
        loading={memberDeletionLoading}
        loadingText="Exiting..."
      />
    </>
  );
};
