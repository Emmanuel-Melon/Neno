import React from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { Paper } from "../components/ui/paper";

export const GameInstructions = () => {
  return (
    <Paper>
      <Flex direction="column">
        <Flex direction="column" p="4">
          <Heading as="h3" size="md">
            How to play
          </Heading>
          <Text>
            Players are given a letter and are required to come up with words
            that start with that letter.
          </Text>
        </Flex>
        <Flex p="4">
          <Heading as="h3" size="md">
            For example given the letter S
          </Heading>
        </Flex>
        <Flex justifyContent="space-between" p="4">
          <div>
            <Heading as="h5" size="sm">
              Location: (Country/ City)
            </Heading>
            <Text>Singapore</Text>
          </div>
          <div>
            <Heading as="h5" size="sm">
              Name
            </Heading>
            <Text>Samantha</Text>
          </div>
          <div>
            <Heading as="h5" size="sm">
              Nature: (Animal/ Plant)
            </Heading>
            <Text>Shark</Text>
          </div>
          <div>
            <Heading as="h5" size="sm">
              Food
            </Heading>
            <Text>Shrimp</Text>
          </div>
        </Flex>
      </Flex>
    </Paper>
  );
};
