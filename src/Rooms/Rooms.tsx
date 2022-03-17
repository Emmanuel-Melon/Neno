import React, { useState } from "react";
import { useGetActiveRooms } from "../../src/hooks/rooms";
import { ListRooms } from "./ListRooms";
import { Heading, Text } from "@chakra-ui/layout";
import { CustomButton } from "../../src/components/ui/button";
import { Grid, GridItem, VStack } from "@chakra-ui/react";
import { Card } from "../components/ui/card";
import Image from "next/image";
import {
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
} from "@chakra-ui/react";
import { Paper } from "../components/ui/paper";
import { CustomModal } from "../components/ui/modal";
import { RoomOptions } from "../Rooms/RoomOptions";

export type RoomsProps = {
  joinLiveRoom: (roomId: string) => void;
  createOwnRoom: (room: any) => void;
};

export const Rooms = ({ createOwnRoom, joinLiveRoom }: RoomsProps) => {
  const { rooms, loading, error } = useGetActiveRooms();
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  function closeModal() {
    setModalOpen((currentState) => !currentState);
  }

  function openModal() {
    setModalOpen((currentState) => !currentState);
  }
  return (
    <>
      <Grid templateColumns="repeat(3, 1fr)" gap={4}>
        <GridItem
          style={{
            borderRadius: "1rem",
          }}
          height="fit-content"
        >
          <Card>
            <Heading color="brand.primary" as="h3" size="md">
              Create your own room!
            </Heading>
            <Text>Show Friends and what they're are playing</Text>
            <Text>Add ability to inspect friends</Text>
            <Text>Invite for next game</Text>
            <CustomButton
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
              Create Room
            </CustomButton>
          </Card>
        </GridItem>
        <GridItem>
          {error ? (
            <Stack
              width="750px"
              p="4"
              bg="brand.grey"
              height="200px"
              border="border.primary"
              borderRadius="2% 6% 5% 4% / 1% 1% 2% 4%"
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
            <VStack gap={6}>
              <Skeleton
                height="200px"
                border="border.primary"
                borderRadius="2% 6% 5% 4% / 1% 1% 2% 4%"
                boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
              >
                <Paper width="750px">
                  <SkeletonText />
                </Paper>
              </Skeleton>
              <Skeleton
                height="200px"
                border="border.primary"
                borderRadius="2% 6% 5% 4% / 1% 1% 2% 4%"
                boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
              >
                <Paper width="750px">
                  <SkeletonText />
                </Paper>
              </Skeleton>
              <Skeleton
                height="200px"
                border="border.primary"
                borderRadius="2% 6% 5% 4% / 1% 1% 2% 4%"
                boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
              >
                <Paper width="750px">
                  <SkeletonText />
                </Paper>
              </Skeleton>
            </VStack>
          ) : (
            <ListRooms rooms={rooms} joinLiveRoom={joinLiveRoom} />
          )}
        </GridItem>
      </Grid>
      <CustomModal show={isModalOpen} close={closeModal}>
        <RoomOptions closeModal={closeModal} createOwnRoom={createOwnRoom} />
      </CustomModal>
    </>
  );
};
