import React, { useContext, useEffect, useRef, useState } from "react";
import { CustomButton } from "../components/ui/button";
import { useInsertChatMessage, useGetRoomMessages } from "../hooks/rooms";
import {
  Fade,
  ScaleFade,
  Slide,
  SlideFade,
  Avatar,
  Flex,
  Text,
  Input,
  Heading,
  Divider,
  Box,
} from "@chakra-ui/react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { GameContext } from "../providers/game";
import { Card } from "../components/ui/card";
import { Users, Rooms_Messages } from "../lib/graphql/globalTypes";
import { Paper } from "../components/ui/paper";

type ChatBubbleProps = {
  text: string;
  id: string;
  user: Users;
};
const ChatBubble = ({ text, id, user }: ChatBubbleProps) => {
  const { data: session } = useSession();
  const { gameService } = useContext(GameContext);

  console.log(user.id);
  console.log(gameService?.state?.context?.playerId);
  return (
    <Flex
      key={id}
      width="fit-content"
      bg={
        gameService?.state?.context?.playerId !== user?.id
          ? "brand.grey"
          : "brand.secondary"
      }
      border="border.primary"
      px={1}
      py={1}
      borderRadius="4% 12% 10% 8% / 5% 5% 10% 8%"
      boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
      alignItems={"center"}
      cursor="pointer"
      alignSelf={
        gameService?.state?.context?.playerId !== user?.id
          ? "flex-start"
          : "flex-end"
      }
      gap={2}
    >
      <Avatar
        width="10"
        height="10"
        bg={
          gameService?.state?.context?.playerId !== user?.id
            ? "brand.secondary"
            : "brand.white"
        }
        src={user?.image}
        border={
          gameService?.state?.context?.playerId !== user?.id
            ? "brand.primary"
            : "brand.white"
        }
      />
      <Text
        color={
          gameService?.state?.context?.playerId !== user?.id
            ? "brand.secondary"
            : "brand.white"
        }
      >
        {text}
      </Text>
    </Flex>
  );
};

type ChatMessagesProps = {
  messages?: Rooms_Messages[];
  sender: Users;
};

const ChatMessages = ({ messages, sender }: ChatMessagesProps) => {
  const scrollViewRef = useRef<HTMLElement | null>(null);
  const scrollToBottom = () => {
    scrollViewRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <Flex overflowY="scroll" direction="column" gap={1} height="400px">
      {messages &&
        messages.map((message) => {
          return (
            <ScaleFade initialScale={0.1} in={true} key={message.id}>
              <ChatBubble {...message} />
              <Box ref={scrollViewRef}></Box>
            </ScaleFade>
          );
        })}
    </Flex>
  );
};

export const Chat = () => {
  const [text, setText] = useState<string>("");
  const [messageId, setMessageId] = useState<string>("");
  const [disableSend, setDisableSend] = useState<boolean>(true);
  const { insertMessage } = useInsertChatMessage();
  const { gameService } = useContext(GameContext);
  const { messages, subscribeToMore } = useGetRoomMessages(
    gameService.state.context.room.roomId
  );
  const handleInputchange = (e: any) => {
    setText(e.target.value);
    if (text !== "") {
      setDisableSend(false);
    }
  };
  const sendChatMessage = async () => {
    if (text !== "") {
      setText("");
      const sent = await insertMessage({
        senderId: gameService.state.context.playerId,
        text,
        roomId: gameService.state.context.room.roomId,
      });
      setMessageId(sent.id);
    }
  };

  useEffect(() => {
    const unsubscribe = subscribeToMore(messageId);
    return unsubscribe;
  }, [messageId, messages]);

  return (
    <Flex height="100%">
      <Paper height="100%">
        <Flex direction="column" gap={2} height="100%">
          <Flex justifyContent="space-between" alignItems="center">
            <Heading as="h3" size="sm" color="brand.primary">
              Messages
            </Heading>
            {gameService?.state?.context.playerId ===
            gameService?.state?.context.room.host ? (
              <Avatar src="/icons/icons8-settings.svg" height="30" width="30" />
            ) : null}
          </Flex>
          <Divider />
          <ChatMessages
            messages={messages}
            sender={gameService.state.context.playerEmail}
          />
          <Flex alignItems="center" gap={2} width="100%" py="2">
            <Flex width="75%">
              <Input
                type="text"
                placeholder="type message"
                bg="brand.white"
                boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px"
                borderRadius="4% 12% 10% 8% / 5% 5% 10% 8%"
                size="md"
                value={text}
                variant="outline"
                focusBorderColor="brand.accent"
                _placeholder={{ opacity: 0.4, color: "brand.secondary" }}
                onChange={handleInputchange}
              />
            </Flex>
            <CustomButton
              onClick={sendChatMessage}
              disabled={disableSend}
              size="md"
              bg="brand.secondary"
              color="brand.white"
              icon={
                <Image
                  alt="logo"
                  src="/icons/icons8-sent.svg"
                  width="30"
                  height="30"
                />
              }
            >
              Send
            </CustomButton>
          </Flex>
        </Flex>
      </Paper>
    </Flex>
  );
};
