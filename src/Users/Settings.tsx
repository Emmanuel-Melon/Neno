import React from "react";
import { Paper } from "../components/ui/paper";
import { Heading, VStack } from "@chakra-ui/react";

type SettingsProps = {};

export const Settings = (props: SettingsProps) => {
  return (
    <>
      <Paper width="400px">
        <VStack gap={6}>
          <Heading color="brand.primary" as="h3" size="md">
            Settings
          </Heading>
        </VStack>
      </Paper>
    </>
  );
};
