import React, { useEffect, useState } from "react";
import { CustomButton } from "../components/ui/button";
import { useInsertChatMessage, useGetRoomMessages } from "../hooks/rooms";
import { Avatar, VStack, Flex, Text, Input } from "@chakra-ui/react";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";

type ChatProps = {};

type ChatBubbleProps = {
  text: string;
  id: string;
  user: any;
};
const ChatBubble = ({ text, id, user }: ChatBubbleProps) => {
  const { data: session } = useSession();
  return (
    <Flex
      key={id}
      width="100%"
      bg={session?.user?.email !== user?.email ? "brand.grey" : "brand.accent"}
      border="border.primary"
      p="2"
      borderRadius="4% 12% 10% 8% / 5% 5% 10% 8%"
      boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
      alignItems="center"
      cursor="pointer"
    >
      <Flex alignItems="center">
        <Avatar
          src={
            session?.user?.email !== user?.email
              ? "/images/avatars/icons8-walter-white.svg"
              : "/images/avatars/icons8-naruto.svg"
          }
          border="solid 3px #333"
        />
        <Text marginLeft="2" color="brand.secondary">
          {text}
        </Text>
      </Flex>
    </Flex>
  );
};

export const Chat = (props: ChatProps) => {
  const [text, setText] = useState("");
  const { insertMessage } = useInsertChatMessage();
  const { messages, subscribeToMore } = useGetRoomMessages();

  const handleInputchange = (e: any) => {
    setText(e.target.value);
  };

  const sendChatMessage = () => {
    insertMessage({
      senderId: "d07b4da5-f3d3-45e9-b3c7-162c929b671e",
      text,
      roomId: "6dbc6eba-1e16-4a7d-9f51-801d0cdcc5c4",
    })
      .then((res) => {
        console.log(res);
      })
      .catch((Err) => {
        console.log(Err);
      });
    setText("");
  };

  useEffect(() => {}, [text]);

  useEffect(() => {
    const unsubscribe = subscribeToMore();

    return unsubscribe;
  }, []);

  return (
    <Flex
      direction="column"
      width="500px"
      bg="#f0f0f0"
      borderRadius="2% 6% 5% 4% / 1% 1% 2% 4%"
      gap={6}
      boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px"
      borderTop="border.top"
      p="4"
      height="fit-content"
    >
      <VStack
        bg="#f0f0f0"
        borderRadius="2% 6% 5% 4% / 1% 1% 2% 4%"
        p="4"
        height="500px"
        overflowY="scroll"
      >
        {messages &&
          messages.map((message: any) => {
            return <ChatBubble {...message} />;
          })}
      </VStack>
      <Flex alignItems="center" gap={2} width="500px" p="4">
        <Flex width="65%">
          <Input
            type="text"
            placeholder="type message"
            bg="#f0f0f0"
            borderRadius="4% 12% 10% 8% / 5% 5% 10% 8%"
            border="solid 3px #000"
            size="lg"
            value={text}
            variant="outline"
            focusBorderColor="brand.primary"
            _placeholder={{ opacity: 0.4, color: "brand.secondary" }}
            onChange={handleInputchange}
          />
        </Flex>
        <CustomButton
          onClick={sendChatMessage}
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
  );
};
