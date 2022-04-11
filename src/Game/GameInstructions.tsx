import React from "react";
import { Flex, Heading, Text, Box } from "@chakra-ui/react";
import { Paper } from "../components/ui/paper";

export const GameInstructions = () => {
  return (
    <Flex width={[
      '320px',
      '320px',
      'fit-content',
      'fit-content',
    ]}>
      <Paper>
        <Flex direction="column">
          <Flex direction="column" p="2" gap={2}>
            <Heading as="h3" size="sm" color="brand.primary">
              How to play
            </Heading>
            <Text>
              Players are given a letter and are required to come up with words
              that start with that letter.
            </Text>
          </Flex>
          <Flex p="2">
            <Heading as="h3" size="sm" color="brand.primary">
              For example given the letter S
            </Heading>
          </Flex>
          <Flex
            gap={2}
            justifyContent="space-between"
            p="2"
            direction={[
              'column',
              'column',
              'row',
              'row',
            ]}>
            <Flex alignItems="center" justifyContent="space-between" gap={4}>
              <Heading as="h3" size="sm">
                City
              </Heading>
              <Flex>
                <Text>Singapore</Text>
              </Flex>
            </Flex>
            <Flex alignItems="center" justifyContent="space-between" gap={4}>
              <Heading as="h3" size="sm">
                Animal
              </Heading>
              <Flex>
                <Text>Shark</Text>
              </Flex>
            </Flex>
            <Flex alignItems="center" justifyContent="space-between">
              <Heading as="h3" size="sm">
                Food
              </Heading>
              <Flex justifyContent="flex-start">
                <Text>Shrimp</Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Paper>
    </Flex>
  );
};
