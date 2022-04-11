import React, { useState, useEffect } from "react";
import { useGetActiveRooms } from "../../src/hooks/rooms";
import { ListRooms } from "./ListRooms";
import { Flex, Heading, Text } from "@chakra-ui/layout";
import { CustomButton } from "../../src/components/ui/button";
import { Button, Grid, GridItem, Input, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { Skeleton, SkeletonText, Stack } from "@chakra-ui/react";
import { Paper } from "../components/ui/paper";
import { CustomModal } from "../components/ui/modal";
import { RoomOptions } from "../Rooms/RoomOptions";

export const Rooms = () => {
  const { rooms, loading, error, subscribeToMore } = useGetActiveRooms();
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  function closeModal() {
    setModalOpen((currentState) => !currentState);
  }

  function openModal() {
    setModalOpen((currentState) => !currentState);
  }

  useEffect(() => {
    const unsubscribe = subscribeToMore();
    return unsubscribe;
  }, []);

  return (
    <>
      <Grid
        templateColumns="repeat(3, 1fr)"
        gap={2}
        width={[
          '100%',
          '100%',
          '500px',
          '75%',
        ]}
        p="4"
      >
        <GridItem colSpan={[
          3,
          3,
          1,
          1
        ]}
        >
          <VStack gap={1} width="100%">
            <Paper width="100%">
              <Flex gap={2} direction="column">
                <Heading color="brand.primary" as="h3" size="sm">
                  Have an invitation code?
                </Heading>
                <Flex gap={2}>
                  <Input
                    borderRadius="4% 12% 10% 8% / 5% 5% 10% 8%"
                    placeholder="Inviation code"
                    bg="brand.white"
                    boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px"
                  />
                  <Button
                    bg="brand.secondary"
                    borderRadius="4% 12% 10% 8% / 5% 5% 10% 8%"
                    color="brand.white"
                  >Enter</Button>
                </Flex>
                <Flex direction="column" gap={2}>
                  <Heading color="brand.primary" as="h3" size="sm">Create your own room instead</Heading>
                  <CustomButton
                    width="fit-content"
                    size="md"
                    icon={
                      <Image
                        alt="logo"
                        src="/icons/icons8-plus-math.svg"
                        width="30"
                        height="30"
                      />
                    }
                    onClick={openModal}
                  >
                    New Room
                  </CustomButton>
                </Flex>
              </Flex>
            </Paper>
            <Paper width="100%" display={[
              "none",
              "none",
              "none",
              "none",
            ]}>
              <Flex gap={4} direction="column">
                <Heading color="brand.primary" as="h3" size="sm">
                  Friend Activity
                </Heading>
              </Flex>
            </Paper>
          </VStack>
        </GridItem>
        <GridItem colSpan={[
          3,
          3,
          2,
          2
        ]}
        >
          {rooms && rooms.length === 0 ? (
            <Paper width="100%">
              <Text>There are no active rooms at the moment.</Text>
            </Paper>
          ) : null}
          {error ? (
            <Stack
              width="100%"
              p="4"
              bg="brand.grey"
              height="200px"
              border="border.primary"
              borderRadius="4% 12% 10% 8% / 5% 5% 10% 8%"
              boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
            >
              <Heading as="h3" color="brand.primary">
                Error occured
              </Heading>
              <Text color="brand.secondary">
                Unable to fetch rooms... Try refreshing the page.
              </Text>
            </Stack>
          ) : null}
          {loading ? (
            <VStack width="100%">
              <Skeleton
                height="200px"
                width="100%"
                border="border.primary"
                borderRadius="4% 12% 10% 8% / 5% 5% 10% 8%"
                boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
              >
                <Paper width="100%">
                  <SkeletonText />
                </Paper>
              </Skeleton>
              <Skeleton
                height="200px"
                width="100%"
                border="border.primary"
                borderRadius="4% 12% 10% 8% / 5% 5% 10% 8%"
                boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
              >
                <Paper width="100%">
                  <SkeletonText />
                </Paper>
              </Skeleton>
              <Skeleton
                height="200px"
                width="100%"
                border="border.primary"
                borderRadius="4% 12% 10% 8% / 5% 5% 10% 8%"
                boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
              >
                <Paper width="100%">
                  <SkeletonText />
                </Paper>
              </Skeleton>
            </VStack>
          ) : (
            <ListRooms rooms={rooms} />
          )}
        </GridItem>
      </Grid>
      <CustomModal show={isModalOpen} close={closeModal}>
        <RoomOptions closeModal={closeModal} />
      </CustomModal>
    </>
  );
};
