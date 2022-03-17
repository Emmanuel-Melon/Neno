import React from "react";
import { Avatar, Tag } from "@chakra-ui/react";
import { Flex, VStack, Heading, HStack, Box } from "@chakra-ui/layout";
import { CustomButton } from "../components/ui/button";
import Image from "next/image";
import { RoomsProps } from "./Rooms";

type ListRoomsProps = Pick<RoomsProps, "joinLiveRoom"> & {
  rooms: any;
};

export const ListRooms = ({ joinLiveRoom, rooms }: ListRoomsProps) => {
  return (
    <Flex maxHeight="750px" overflowY="scroll">
      <VStack>
        {rooms &&
          rooms.map((room: any) => {
            return (
              <Flex
                bg="brand.grey"
                p="8"
                border="border.primary"
                borderRadius="4% 12% 10% 8% / 5% 5% 10% 8%"
                boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                width="750px"
                direction="column"
                gap={2}
              >
                <Flex direction="column">
                  <Flex justifyContent="space-between" alignItems="center">
                    <Flex gap={2} alignItems="center">
                      <Avatar
                        src="/images/avatar1.png"
                        border="border.accent"
                      />
                      <Heading as="h3" size="md" color="brand.secondary">
                        Emmanuel's Room -{" "}
                        <Box as="span" color="brand.primary">
                          (
                        </Box>
                        ID - {room.id.slice(26)}
                        <Box as="span" color="brand.primary">
                          )
                        </Box>
                      </Heading>
                    </Flex>
                    <Flex
                      borderRadius="2rem"
                      wrap="wrap"
                      boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px"
                      cursor="pointer"
                      _hover={{
                        bg: "brand.highlight1",
                      }}
                    >
                      <Avatar
                        src="/images/avatar1.png"
                        border="solid 3px #333"
                      />
                      <Avatar
                        src="/images/stripy-face-5.svg"
                        border="solid 3px #333"
                      />
                      <Avatar
                        src="/images/stripy-face-2.svg"
                        border="solid 3px #333"
                      />
                      <Avatar
                        src="/images/welcome-2.svg"
                        border="solid 3px #333"
                      />
                    </Flex>
                  </Flex>
                </Flex>
                <Flex direction="column" gap="2" width="200px">
                  <Tag
                    borderRadius="4% 12% 10% 8% / 5% 5% 10% 8%"
                    color="brand.secondary"
                    border="solid 1px #333"
                    bg="#f0f0f0"
                  >
                    Mode: Classic
                  </Tag>
                  <Tag
                    borderRadius="4% 12% 10% 8% / 5% 5% 10% 8%"
                    color="brand.secondary"
                    border="solid 1px #333"
                    bg="#f0f0f0"
                  >
                    5/8{" "}
                  </Tag>
                  <CustomButton
                    onClick={() => joinLiveRoom(room.id)}
                    icon={
                      <Image
                        alt="logo"
                        src="/icons/icons8-pin-pad.svg"
                        width="30"
                        height="30"
                      />
                    }
                  >
                    Join Room
                  </CustomButton>
                </Flex>
              </Flex>
            );
          })}
      </VStack>
    </Flex>
  );
};
