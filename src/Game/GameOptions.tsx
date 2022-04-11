import React from "react";
import { FormControl, FormLabel, Switch, Divider } from "@chakra-ui/react";
import { Heading, Flex } from "@chakra-ui/react";
import { Paper } from "../components/ui/paper";

export const GameOptions = () => {
  return (
    <Paper>
      <Flex
        direction="column"
        p="4"
        width={["320px", "320px", "320px", "400px"]}
      >
        <Flex direction="column" p="2" gap={4}>
          <Heading as="h3" size="sm" color="brand.primary">
            General
          </Heading>
          <FormControl
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <FormLabel htmlFor="email-alerts" mb="0">
              Push Notifications
            </FormLabel>
            <Switch id="email-alerts" />
          </FormControl>
        </Flex>
        <Divider />
        <Flex direction="column" p="2" gap={4}>
          <Heading as="h3" size="sm" color="brand.primary">
            Appearance
          </Heading>
          <FormControl
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <FormLabel htmlFor="email-alerts" mb="0">
              Dark Mode
            </FormLabel>
            <Switch id="email-alerts" />
          </FormControl>
        </Flex>
        <Divider />
        <Flex direction="column" p="2" gap={4}>
          <Heading as="h3" size="sm" color="brand.primary">
            Audio
          </Heading>
          <FormControl
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <FormLabel htmlFor="email-alerts" mb="0">
              Music
            </FormLabel>
            <Switch id="email-alerts" />
          </FormControl>
          <FormControl
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <FormLabel htmlFor="email-alerts" mb="0">
              Sound Effects
            </FormLabel>
            <Switch id="email-alerts" />
          </FormControl>
        </Flex>
      </Flex>
    </Paper>
  );
};
