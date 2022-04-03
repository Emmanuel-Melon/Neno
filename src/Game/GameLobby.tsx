import React, { useEffect, useContext, useState } from "react";
import { Chat } from "../Rooms/Chat";
import { ActivePlayers } from "./ActivePlayers";
import {
  Flex,
  Text,
  VStack,
  Heading,
  useDisclosure,
  IconButton,
  Tag,
  Divider,
  Avatar,
} from "@chakra-ui/react";
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

export const GameLobby = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { gameService } = useContext(GameContext);
  const roomId = gameService?.state?.context?.room?.roomId;
  const playerId = gameService?.state?.context?.playerId;
  const { members } = useGetRoomMembers(roomId);
  const { insertGame, loading } = useInsertGame();
  const { insertGameRounds } = useInsertGameRounds();
  const { game, loadingGame } = useGetCurrentGame(roomId);
  const { memberCount } = useGetRoomMemberCount(roomId);
  const { deleteRoomById } = useDeleteRoomById();
  const { deleteRoomMember, memberDeletionLoading } = useDeleteRoomMember();
  const { room } = useGetRoomById(roomId);
  const [isCopied, setIsCopied] = useState<boolean>(false);

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

    insertGameRounds(input);

    gameService.send({
      type: "GAME_STARTED",
      payload: {
        gameId: newGame?.id,
        wordCategories: room?.word_categories,
      },
    });
  };

  useEffect(() => {
    if (game && game[0]?.roomId === roomId && loadingGame === false) {
      gameService.send({
        type: "GAME_STARTED",
        payload: {
          gameId: game[0]?.id,
          wordCategories: room?.word_categories,
        },
      });
    }
  }, [game]);

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

  const copyRoomId = async (text: string) => {
    if ("clipboard" in navigator) {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
    } else {
      return document.execCommand("copy", true, text);
    }
    setIsCopied(true);
  };

  return (
    <>
      <Flex height={"100%"} justifyContent="center" gap={6}>
        <VStack>
          <Chat />
        </VStack>
        <VStack gap={2}>
          <Paper width="100%">
            <VStack gap={1}>
              <Flex
                justifyContent="space-between"
                width="100%"
                alignItems="center"
              >
                <Flex alignItems="center" gap={2}>
                  <Avatar
                    src={room?.host?.image}
                    border="border.primary"
                    height="30"
                    width="30"
                  />
                  <Heading as="h3" size="md" color="brand.secondary">
                    {room?.host?.username}'s room
                  </Heading>
                </Flex>
                <Text>Settings</Text>
              </Flex>
              <Divider />
              <Flex justifyContent="space-between" width="100%">
                <Text>Capacity</Text>
                <Text>{room?.capacity}</Text>
              </Flex>
              <Flex justifyContent="space-between" width="100%">
                <Text>Privacy</Text>
                <Text>{room?.privacy}</Text>
              </Flex>
            </VStack>
          </Paper>
          {room?.privacy === "private" ? (
            <Flex alignItems="center" gap={2}>
              <Tag
                borderRadius="4% 12% 10% 8% / 5% 5% 10% 8%"
                bg="brand.secondary"
                color="brand.white"
              >
                {room?.id}
              </Tag>
              <CustomButton onClick={() => copyRoomId(room.id)} size="xs">
                {isCopied ? "Copied!" : "Copy"}
              </CustomButton>
            </Flex>
          ) : null}
          <ActivePlayers room={room} />
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
        actionText="Leave Room"
        action={exitCurrentLobby}
        isOpen={isOpen}
        onClose={onClose}
        loading={memberDeletionLoading}
        loadingText="Exiting..."
      />
    </>
  );
};
