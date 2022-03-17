import React from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";

export const GameInstructions = () => {
  return (
    <Flex direction="column" bg="rgba(25, 41, 101, 0.4)" color="#fff">
      <Flex direction="column" p="4">
        <Heading as="h3" size="md" color="#fff">
          How to play
        </Heading>
        <Text>
          Players are given a letter and are required to come up with words that
          start with that letter.
        </Text>
      </Flex>
      <Flex p="4">
        <Heading as="h3" size="md" color="#fff">
          For example given the letter S
        </Heading>
      </Flex>
      <Flex justifyContent="space-between" p="4">
        <div>
          <Heading as="h5" size="sm" color="#fff">
            Location: (Country/ City)
          </Heading>
          <Text>Singapore</Text>
        </div>
        <div>
          <Heading as="h5" size="sm" color="#fff">
            Name
          </Heading>
          <Text>Samantha</Text>
        </div>
        <div>
          <Heading as="h5" size="sm" color="#fff">
            Nature: (Animal/ Plant)
          </Heading>
          <Text>Shark</Text>
        </div>
        <div>
          <Heading as="h5" size="sm" color="#fff">
            Food
          </Heading>
          <Text>Shrimp</Text>
        </div>
      </Flex>
    </Flex>
  );
};
