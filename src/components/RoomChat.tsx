import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { CustomButton } from "./ui/button";
import { TextInput } from "./ui/input";
import { useInsertChatMessage, useGetRoomMessages } from "../hooks/rooms";
import { v4 as uuidv4 } from "uuid";
import { Avatar, VStack, Flex, Text } from "@chakra-ui/react";

export default function RoomChat() {
  const [text, setText] = useState("");
  const router = useRouter();
  const { insertMessage } = useInsertChatMessage();
  const { messages } = useGetRoomMessages();

  const handleInputchange = (e: any) => {
    setText(e.target.value);
  };

  const sendChatMessage = () => {
    insertMessage({
      senderId: "78ad3bbf-7d76-4580-824c-e031abdb7da7",
      id: uuidv4(),
      text,
    });
    setText("");
  };

  useEffect(() => {}, [text]);
  return (
    <Flex
      direction="column"
      width="500px"
      style={{
        background: "rgba(25, 41, 101, 0.4)",
        boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
        borderRadius: "1rem",
        overflowY: "scroll",
        padding: "1rem",
      }}
    >
      <VStack
        style={{
          height: "500px",
          overflowY: "scroll",
          padding: "1rem",
        }}
      >
        {messages &&
          messages.map((message: any) => (
            <Flex
              key={message.id}
              width="100%"
              bg="rgba(25, 41, 101, 0.4)"
              p="2"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
                borderRadius: "1rem",
              }}
              alignItems="center"
            >
              <Flex alignItems="center">
                <Avatar src="/images/conifer-trophy-1.svg" />
                <Text marginLeft="2" color="#fff">
                  {message.text}
                </Text>
              </Flex>
            </Flex>
          ))}
      </VStack>
      <Flex
        style={{
          marginBottom: "1rem",
          padding: "0.5rem",
        }}
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex width="80%">
          <TextInput type="text" placeholder="type message" value={text} />
        </Flex>
        <CustomButton onClick={sendChatMessage}>Send</CustomButton>
      </Flex>
    </Flex>
  );
}
