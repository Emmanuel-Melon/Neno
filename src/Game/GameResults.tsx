import React from "react";
import { VStack, Avatar, Flex, Text, Tag, Heading } from "@chakra-ui/react";
import { MyTimer } from "../components/Timer";
import { Icon } from "@chakra-ui/react";
import Image from "next/image";

const players = [
  {
    id: 1,
    name: "E-Man",
    avatar: "/images/avatars/icons8-walter-white.svg",
    rounds: [
      {
        id: 1,
        active: false,
        won: false,
      },
      {
        id: 2,
        active: false,
        won: false,
      },
      {
        id: 3,
        active: false,
        won: false,
      },
      {
        id: 4,
        active: false,
        won: false,
      },
    ],
  },
  {
    id: 2,
    name: "Sisco",
    avatar: "/images/avatars/icons8-naruto.svg",
    rounds: [
      {
        id: 21,
        active: false,
        won: false,
      },
      {
        id: 22,
        active: false,
        won: true,
      },
      {
        id: 23,
        active: false,
        won: false,
      },
      {
        id: 24,
        active: false,
        won: false,
      },
    ],
  },
  {
    id: 3,
    name: "Mimi",
    avatar: "/images/avatars/icons8-woody-woodpecker.svg",
    rounds: [
      {
        id: 31,
        active: false,
        won: false,
      },
      {
        id: 32,
        active: false,
        won: false,
      },
      {
        id: 33,
        active: false,
        won: true,
      },
      {
        id: 34,
        active: false,
        won: false,
      },
    ],
  },
  {
    id: 4,
    name: "Shako",
    avatar: "/images/avatars/icons8-grey.svg",
    rounds: [
      {
        id: 41,
        active: false,
        won: false,
      },
      {
        id: 42,
        active: false,
        won: false,
      },
      {
        id: 43,
        active: false,
        won: false,
      },
      {
        id: 44,
        active: false,
        won: false,
      },
    ],
  },
  {
    id: 5,
    name: "Nancy",
    avatar: "/images/avatars/icons8-jason-voorhees.svg",
    rounds: [
      {
        id: 50,
        active: false,
        won: true,
      },
      {
        id: 51,
        active: false,
        won: false,
      },
      {
        id: 52,
        active: false,
        won: false,
      },
      {
        id: 53,
        active: false,
        won: true,
      },
    ],
  },
];

export const GameResults = ({ results }: any) => {
  return (
    <VStack>
      {players.map((player) => {
        return (
          <Flex
            borderRadius="2rem"
            cursor="pointer"
            _hover={{
              bg: "brand.highlight1",
            }}
            gap={2}
          >
            <Flex key={player.id} alignItems="center" p="2" gap={2}>
              <Avatar src={player.avatar} border="border.primary" />
              <Flex direction="column">
                <Heading color="brand.primary" as="h5" size="sm">
                  {player.name}
                </Heading>
                <Tag
                  borderRadius="4% 12% 10% 8% / 5% 5% 10% 8%"
                  color="brand.secondary"
                  border="border.secondary"
                  bg="brand.grey"
                >
                  0:40
                </Tag>
              </Flex>
            </Flex>

            <Flex
              key={player.id}
              alignItems="center"
              justifyContent="space-between"
              p="2"
            >
              {false
                ? player.rounds.map((round) => {
                    return (
                      <Avatar
                        key={round.id}
                        width="35px"
                        height="35px"
                        src={
                          round.active
                            ? "/icons/icons8-filled-circle.svg"
                            : round.won
                            ? "/icons/icons8-filled-circle.svg"
                            : "/icons/icons8-minus.svg"
                        }
                        marginRight="2"
                      />
                    );
                  })
                : player.rounds.map((round) => {
                    return (
                      <Avatar
                        key={round.id}
                        width="35px"
                        height="35px"
                        src="/icons/icons8-circled-thin.svg"
                        marginRight="2"
                      />
                    );
                  })}
            </Flex>
          </Flex>
        );
      })}
    </VStack>
  );
};
