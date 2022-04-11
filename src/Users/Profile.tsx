import React from "react";
import { Paper } from "../components/ui/paper";
import { Heading, VStack } from "@chakra-ui/react";

type ProfileProps = {};

export const Profile = (props: ProfileProps) => {
  return (
    <>
      <Paper width="400px">
        <VStack gap={6}>
          <Heading color="brand.primary" as="h3" size="md">
            Profile
          </Heading>
        </VStack>
      </Paper>
    </>
  );
};
