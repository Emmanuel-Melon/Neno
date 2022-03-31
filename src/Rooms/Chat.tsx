import React, { useContext, useEffect, useState } from "react";
import { CustomButton } from "../components/ui/button";
import { useInsertChatMessage, useGetRoomMessages } from "../hooks/rooms";
import { Avatar, Flex, Text, Input } from "@chakra-ui/react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { GameContext } from "../providers/game";
import { Card } from "../components/ui/card";
import { Users, Rooms_Messages } from '../lib/graphql/globalTypes';

type ChatBubbleProps = {
  text: string;
  id: string;
  user: Users;
};
const ChatBubble = ({ text, id, user }: ChatBubbleProps) => {
  const { data: session } = useSession();
  return (
    <Flex
      key={id}
      width="fit-content"
      bg={
        session?.user?.email !== user?.email ? "brand.grey" : "brand.secondary"
      }
      border="border.primary"
      px={2}
      py={1}
      borderRadius="4% 12% 10% 8% / 5% 5% 10% 8%"
      boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
      alignItems={"center"}
      cursor="pointer"
      alignSelf={
        session?.user?.email !== user?.email ? "flex-start" : "flex-end"
      }
      gap={4}
    >
      <Avatar
        width="10"
        height="10"
        src={
          session?.user?.email !== user?.email
            ? "/images/avatars/icons8-walter-white.svg"
            : "/images/avatars/icons8-naruto.svg"
        }
        border={
          session?.user?.email !== user?.email
            ? "solid 3px #333"
            : "solid 3px #fff"
        }
      />
      <Text
        color={
          session?.user?.email !== user?.email
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
}

const ChatMessages = ({ messages, sender }: ChatMessagesProps) => {
  const { data: session } = useSession();
  return (
    <Flex
      bg="brand.grey"
      borderRadius="2% 6% 5% 4% / 1% 1% 2% 4%"
      p="4"
      height="500px"
      overflowY="scroll"
      direction="column"
      gap={4}
    >
      {messages &&
        messages.map((message) => {
          return <ChatBubble {...message} />;
        })}
    </Flex>
  );
};

export const Chat = () => {
  const [text, setText] = useState("");
  const [disableSend, setDisableSend] = useState<boolean>(true);
  const { insertMessage, loading } = useInsertChatMessage();
  const { gameService } = useContext(GameContext);
  const { messages, subscribeToMore } = useGetRoomMessages(
    gameService.state.context.room.roomId
  );
  const { data: session } = useSession();
  const handleInputchange = (e: any) => {
    setText(e.target.value);
    if (text !== "") {
      setDisableSend(false);
    }
  };
  const sendChatMessage = () => {
    if (text !== "") {
      insertMessage({
        senderId: gameService.state.context.playerId,
        text,
        roomId: gameService.state.context.room.roomId,
      });
      setText("");
    }
  };

  useEffect(() => {}, [text]);

  useEffect(() => {
    const unsubscribe = subscribeToMore();

    return unsubscribe;
  }, [messages]);

  useEffect(() => {}, [messages]);

  return (
    <Card>
      <Flex direction="column">
        <ChatMessages
          messages={messages}
          sender={gameService.state.context.playerEmail}
        />
        <Flex alignItems="center" gap={2} width="100%" p="4">
          <Flex width="75%">
            <Input
              type="text"
              placeholder="type message"
              bg="#f0f0f0"
              borderRadius="4% 12% 10% 8% / 5% 5% 10% 8%"
              border="solid 3px #000"
              size="lg"
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
    </Card>
  );
};
