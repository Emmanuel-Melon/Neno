import React, { useState } from "react";
import {
  Flex,
  Heading,
  Tag,
  Box,
  HStack,
  useRadioGroup,
  Text,
} from "@chakra-ui/react";
import { useGetWordCategories } from "../hooks/game";
import { RadioCard } from "../components/ui/radio";
import { CustomButton } from "../components/ui/button";
import Image from "next/image";
import { useInsertRoom } from "../hooks/rooms";
import { Paper } from "../components/ui/paper";
import { ErrorComponent } from "../components/ui/error";
import { GameModeProps } from "../Game/GameMode";

const RoomCapacity = () => {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "roomCapacity",
    defaultValue: 8,
    onChange: console.log,
  });

  const group = getRootProps();
  const numOfPlayers = [2, 4, 6, 8];

  return (
    <Flex direction="column" p="4" gap={6} width="100%">
      <Flex>
        <Heading as="h3" size="md" color="brand.accent">
          Players
        </Heading>
      </Flex>
      <Flex {...group} justifyContent="space-evenly">
        {numOfPlayers.map((value) => {
          const radio = getRadioProps({ value });
          return (
            <RadioCard key={value} {...radio}>
              {value}
            </RadioCard>
          );
        })}
      </Flex>
    </Flex>
  );
};

type WordCategoriesProps = {
  wordCategories: any;
};

const WordCategories = ({ wordCategories }: WordCategoriesProps) => {
  return (
    <Flex direction="column" p="4" gap={6}>
      <Box>
        <Heading as="h3" size="md" color="brand.accent">
          Word categories
        </Heading>
      </Box>
      <Flex justifyContent="space-between" gap={6}>
        {wordCategories &&
          wordCategories.map((category: any, index: number) => {
            return (
              <Tag
                borderRadius="4% 12% 10% 8% / 5% 5% 10% 8%"
                color="brand.secondary"
                border="border.secondary"
                bg="#f0f0f0"
                px={5}
                py={3}
                key={index}
                cursor="pointer"
                _hover={{
                  background: "brand.accent",
                  color: "brand.white",
                  border: "border.secondary",
                }}
              >
                {category.type}
              </Tag>
            );
          })}
      </Flex>
    </Flex>
  );
};

const RoomPrivacy = () => {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "roomType",
    defaultValue: "public",
    onChange: console.log,
  });

  const group = getRootProps();
  const roomVisibilityOptions = ["public", "private"];

  return (
    <Flex direction="column" p="4" gap={6} justifyContent="center">
      <Flex>
        <Heading as="h3" size="md" color="brand.accent">
          Room Type
        </Heading>
      </Flex>
      <HStack {...group}>
        {roomVisibilityOptions.map((value) => {
          const radio = getRadioProps({ value });
          return (
            <RadioCard key={value} {...radio}>
              {value}
            </RadioCard>
          );
        })}
      </HStack>
    </Flex>
  );
};

type RoomOptionsProps = Pick<GameModeProps, "createOwnRoom"> & {
  closeModal: () => void;
};

export const RoomOptions = ({
  closeModal,
  createOwnRoom,
}: RoomOptionsProps) => {
  const [err, setErr] = useState(false);
  const { wordCategories } = useGetWordCategories();
  const { insertRoom, error, loading, room } = useInsertRoom();

  const newRoom = {
    hostId: "d07b4da5-f3d3-45e9-b3c7-162c929b671e",
    capacity: 6,
    privacy: "public",
  };

  const createNewRoom = () => {
    insertRoom(newRoom)
      .then((res) => {
        createOwnRoom({
          ...newRoom,
          wordCategories,
        });
        closeModal();
      })
      .catch((err) => {
        setErr(true);
      });
  };

  if (error) {
    return (
      <Paper>
        <ErrorComponent
          heading="Unable to create room"
          errorMessage="Try checking your network connectivity..."
        />
        <Text>Try joining an existing room instead?</Text>
      </Paper>
    );
  }
  return (
    <Paper>
      <Flex
        direction="column"
        gap={6}
        alignItems="flex-start"
        justifyContent="flex-start"
      >
        <RoomPrivacy />
        <WordCategories wordCategories={wordCategories} />
        <RoomCapacity />
      </Flex>
      <CustomButton
        isLoading={loading}
        loadingText="Creating Room"
        icon={
          <Image
            alt="logo"
            src="/icons/icons8-plus-math.svg"
            width="30"
            height="30"
          />
        }
        onClick={createNewRoom}
      >
        Create Room
      </CustomButton>
    </Paper>
  );
};
