import React, { useState, useContext, useEffect } from "react";
import {
  Flex,
  Heading,
  Tag,
  Box,
  HStack,
  useRadioGroup,
  Text,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import { useGetWordCategories } from "../hooks/game";
import { RadioCard } from "../components/ui/radio";
import { CustomButton } from "../components/ui/button";
import Image from "next/image";
import { useInsertRoom, useInsertRoomMember } from "../hooks/rooms";
import { Paper } from "../components/ui/paper";
import { ErrorComponent } from "../components/ui/error";
import { GameContext } from "../providers/game";
import { Rooms_Word_Categories } from "../lib/graphql/globalTypes";

const RoomCapacity = () => {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "roomCapacity",
    defaultValue: 8,
    onChange: () => {},
  });

  const group = getRootProps();
  const numOfPlayers = [2, 4, 6, 8];

  return (
    <Flex direction="column" p="4" gap={6} width="100%" alignItems="center">
      <Flex>
        <Heading as="h3" size="md" color="brand.accent">
          Players
        </Heading>
      </Flex>
      <Flex width="100%" {...group} justifyContent="space-evenly">
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
  wordCategories: Rooms_Word_Categories[];
  loadingCategories: boolean;
};

const WordCategories = ({
  loadingCategories,
  wordCategories,
}: WordCategoriesProps) => {
  return (
    <Flex
      direction="column"
      p="4"
      gap={6}
      alignItems="center"
      justifyContent="center"
    >
      <Heading as="h3" size="md" color="brand.accent">
        Word categories
      </Heading>
      <Flex justifyContent="space-between" gap={2} alignItems="center">
        <Flex justifyContent="center">
          {loadingCategories ? (
            <Skeleton
              height="20px"
              border="border.primary"
              borderRadius="2% 6% 5% 4% / 1% 1% 2% 4%"
              boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
            >
              <Paper width="100%">
                <SkeletonText />
                <SkeletonText />
                <SkeletonText />
                <SkeletonText />
              </Paper>
            </Skeleton>
          ) : null}
        </Flex>
        {wordCategories &&
          wordCategories.map((category, index: number) => {
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
  const [value, setValue] = useState<string>("public");
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "roomType",
    defaultValue: value,
    onChange: (e: React.ChangeEvent) => {},
  });

  const group = getRootProps();
  const roomVisibilityOptions = ["public", "private"];

  return (
    <Flex
      width="100%"
      direction="column"
      p="4"
      gap={6}
      justifyContent="center"
      alignItems="center"
    >
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

type RoomOptionsProps = {
  closeModal: () => void;
};

export const RoomOptions = ({ closeModal }: RoomOptionsProps) => {
  const [err, setErr] = useState(false);
  const { wordCategories, loadingCategories } = useGetWordCategories();
  const { insertRoom, error, loading, room } = useInsertRoom();
  const { insertRoomMember, memberLoading, memberError } =
    useInsertRoomMember();
  const { gameService } = useContext(GameContext);

  const createNewRoom = async () => {
    if (gameService?.state?.context?.playerId) {
      const newRoom = {
        hostId: gameService?.state?.context?.playerId,
        capacity: 8,
        privacy: "public",
      };
      const res = await insertRoom(newRoom);
      insertRoomMember({
        userId: newRoom.hostId,
        roomId: res?.id,
        role: "host",
      });
      gameService.send({
        type: "CREATE_ROOM",
        payload: {
          ...newRoom,
          wordCategories,
          roomId: res?.id,
        },
      });
      closeModal();
    }
  };

  if (error || memberError) {
    return (
      <Paper>
        <ErrorComponent
          heading="Unable to create room"
          errorMessage="Try refreshing the page if this error persists"
        />
        <Flex justifyContent="space-between" p="4">
          <CustomButton onClick={closeModal} loadingText="Creating Room">
            Cancel
          </CustomButton>
          <CustomButton onClick={createNewRoom} loadingText="Creating Room">
            Try again
          </CustomButton>
        </Flex>
      </Paper>
    );
  }

  return (
    <Paper width="400px">
      <Flex direction="column">
        <RoomPrivacy />
        <WordCategories
          wordCategories={wordCategories}
          loadingCategories={loadingCategories}
        />
        <RoomCapacity />
      </Flex>
      <Flex justifyContent="center">
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
      </Flex>
    </Paper>
  );
};
