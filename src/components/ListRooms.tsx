import React from "react";
import { Avatar, Tag } from "@chakra-ui/react";
import { Flex, VStack, Heading } from "@chakra-ui/layout";
import { CustomButton } from "./ui/button";

import Image from "next/image";
type ListRoomsProps = {
  rooms: any;
  joinLiveRoom: any;
};

export const ListRooms = ({ joinLiveRoom, rooms }: ListRoomsProps) => {
  return (
    <Flex>
      <VStack>
        {rooms &&
          rooms.map((room: any) => {
            return (
              <Flex
                key={room.id}
                p="4"
                style={{
                  background: "rgba(39, 35, 67, 0.5)",
                  boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
                  borderRadius: "1rem",
                  cursor: "pointer",
                }}
                alignItems="flex-start"
                justifyContent="space-between"
                _hover={{
                  background: "rgba(72, 70, 109, 0.8)",
                }}
              >
                <Flex direction="column">
                  <div>
                    <Heading as="h3" size="md" color="#B7E778">
                      Room ID: #45645
                    </Heading>
                    <Heading as="h5" size="md" color="#fff">
                      Host: Emmanuel
                    </Heading>
                  </div>
                  <Flex direction="column">
                    <Tag
                      color="#fff"
                      bg="rgba(0, 68, 69, 0.4)"
                      marginBottom="2"
                      marginTop="2"
                    >
                      5/8{" "}
                    </Tag>
                    <Tag
                      color="#fff"
                      bg="rgba(148, 180, 159, 0.4)"
                      marginBottom="2"
                    >
                      Mode: Classic
                    </Tag>
                  </Flex>
                  <CustomButton
                    onClick={() => joinLiveRoom(room.id)}
                    icon={
                      <Image
                        alt="logo"
                        src="/icons/icons8-enter.svg"
                        width="30"
                        height="30"
                      />
                    }
                  >
                    Join
                  </CustomButton>
                </Flex>
                <Flex
                  marginLeft="4"
                  justifyContent="space-between"
                  bg="rgba(25, 41, 101, 0.4)"
                  p="2"
                  style={{
                    boxShadow:
                      "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
                    borderRadius: "1rem",
                    cursor: "pointer",
                  }}
                >
                  <Avatar src="/images/avatar1.png" />
                  <Avatar src="/images/stripy-face-5.svg" />
                  <Avatar src="/images/stripy-face-2.svg" />
                  <Avatar src="/images/welcome-2.svg" />
                </Flex>
              </Flex>
            );
          })}
      </VStack>
    </Flex>
  );
};
