import React, { useEffect, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Chat } from "../Rooms/Chat";
import { ActivePlayers } from "./ActivePlayers";
import {
  Flex,
  VStack,
  Heading,
  useDisclosure,
  Tag,
  Divider,
  Avatar,
  HStack,
  Grid,
  GridItem,
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
  const customId = uuidv4();

  const networks = [
    {
      id: 1,
      src: "/icons/icons8-facebook (4).svg",
    },
    {
      id: 2,
      src: "/icons/icons8-google (3).svg",
    },
    {
      id: 3,
      src: "/icons/icons8-whatsapp.svg",
    },
  ];

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
    const generatedRounds = generateRoundLetters(memberCount);
    const rounds = generatedRounds.map((round, index: number) => {
      return {
        roomId: gameService.state.context.room.roomId,
        letterId: round.letter,
        gameId: customId,
        playerId: members?.[index]?.member?.id,
        time: new Date(),
      };
    });
    const newGame = await insertGame({
      id: customId,
      roomId: gameService.state.context.room.roomId,
      roundsTotal: memberCount - 1,
    });
    await insertGameRounds(rounds);
    gameService.send({
      type: "GAME_STARTED",
      payload: {
        ...newGame,
        wordCategories: room?.word_categories,
      },
    });
  };

  useEffect(() => {
    if (game && game[0]?.roomId === roomId && loadingGame === false) {
      gameService.send({
        type: "GAME_STARTED",
        payload: {
          ...game[0],
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
      <Flex
        height={"100%"}
        justifyContent="center"
        gap={2}
        direction={["column-reverse", "column-reverse", "row", "row"]}
      >
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <GridItem colSpan={1}>
            <Chat />
          </GridItem>
          <GridItem colSpan={1}>
            <VStack gap={1} height="100%">
              <Paper width="100%">
                <VStack gap={1}>
                  <Flex
                    justifyContent="space-between"
                    width="100%"
                    alignItems="center"
                  >
                    <Flex alignItems="center" gap={2} width="100%">
                      <Avatar
                        src={room?.host?.image}
                        border="border.primary"
                        height="30"
                        width="30"
                      />
                      <Heading as="h3" size="sm" color="brand.primary">
                        {room?.host?.username}'s room
                      </Heading>
                    </Flex>
                    {gameService?.state?.context.playerId ===
                    gameService?.state?.context.room.host ? (
                      <Avatar
                        src="/icons/icons8-settings.svg"
                        height="30"
                        width="30"
                      />
                    ) : null}
                  </Flex>
                  <Divider />
                  <Flex gap={4} width="100%">
                    <Tag
                      borderRadius="4% 12% 10% 8% / 5% 5% 10% 8%"
                      color="brand.secondary"
                      border="border.primary"
                      bg="brand.white"
                      width="fit-content"
                    >
                      {`${room.rooms_members.length}/${room.capacity} players`}
                    </Tag>
                    <Tag
                      borderRadius="4% 12% 10% 8% / 5% 5% 10% 8%"
                      color="brand.secondary"
                      border="border.primary"
                      bg="brand.white"
                      width="fit-content"
                    >
                      {room?.privacy}
                    </Tag>
                  </Flex>
                </VStack>
              </Paper>
              <>
                {room?.privacy === "private" ? (
                  <Paper width="100%">
                    <Flex gap={2} direction="column">
                      <Heading as="h3" size="sm" color="brand.primary">
                        Invite your friends
                      </Heading>
                      <Divider />
                      <Flex justifyContent="space-between">
                        <HStack justifyContent="flex-start">
                          {networks.map((network) => (
                            <Avatar
                              src={network.src}
                              key={network.id}
                              width="30"
                              height="30"
                            />
                          ))}
                        </HStack>
                        <CustomButton
                          onClick={() => copyRoomId(room.id)}
                          size="xs"
                          color="brand.primary"
                        >
                          {isCopied ? "Copied!" : "Invitation Code"}
                        </CustomButton>
                      </Flex>
                    </Flex>
                  </Paper>
                ) : null}
              </>
              <Flex direction="column" gap={2} width="100%">
                <ActivePlayers room={room} />
                <Flex gap={6} justifyContent="center">
                  {gameService?.state?.context.playerId ===
                  gameService?.state?.context.room.host ? (
                    <CustomButton
                      onClick={startNewGame}
                      loadingText="Starting game"
                      isLoading={loading}
                      size="md"
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
                    bg="brand.danger"
                    color="brand.white"
                    size="md"
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
              </Flex>
            </VStack>
          </GridItem>
        </Grid>
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
