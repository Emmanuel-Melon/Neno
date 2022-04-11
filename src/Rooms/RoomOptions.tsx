import React, { useState, useContext } from "react";
import {
  Flex,
  Heading,
  Tag,
  HStack,
  useRadioGroup,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import { useGetWordCategories } from "../hooks/game";
import { RadioCard } from "../components/ui/radio";
import { CustomButton } from "../components/ui/button";
import Image from "next/image";
import {
  useInsertRoom,
  useInsertRoomMember,
  useInsertWordCategories,
} from "../hooks/rooms";
import { Paper } from "../components/ui/paper";
import { ErrorComponent } from "../components/ui/error";
import { GameContext } from "../providers/game";
import { Rooms_Word_Categories } from "../lib/graphql/globalTypes";
import { Room } from "../Game/GameMode";

type RoomCapacityProps = {
  updateRoomCapacity: (capacity: string) => void;
  capacity: string;
};

const RoomCapacity = ({ capacity, updateRoomCapacity }: RoomCapacityProps) => {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "roomCapacity",
    defaultValue: capacity,
    onChange: (nextValue) => updateRoomCapacity(nextValue),
  });

  const group = getRootProps();
  const numOfPlayers = ["2", "4", "6", "8"];

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
  wordCategories?: Rooms_Word_Categories[];
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

type RoomPrivacyProps = {
  privacy: string;
  updatePrivacy: (privacy: string) => void;
};

const RoomPrivacy = ({ privacy, updatePrivacy }: RoomPrivacyProps) => {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "roomType",
    defaultValue: privacy,
    onChange: (nextValue) => updatePrivacy(nextValue),
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
  createNewRoom: (room: Room) => void;
};

export const RoomOptions = ({
  closeModal,
  createNewRoom,
}: RoomOptionsProps) => {
  const { wordCategories, loadingCategories } = useGetWordCategories();
  const { insertRoom, error, loading, room } = useInsertRoom();
  const [privacy, setPrivacy] = useState<string>("public");
  const [capacity, setCapacity] = useState<string>("8");
  const [role, _setRole] = useState<string>("host");
  const { insertRoomMember, memberLoading, memberError } =
    useInsertRoomMember();
  const { gameService } = useContext(GameContext);
  const { insertCategories } = useInsertWordCategories();
  const hostId = gameService?.state?.context?.playerId;

  const updatePrivacy = (privacy: string) => setPrivacy(privacy);
  const updateRoomCapacity = (capacity: string) => setCapacity(capacity);

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
          <CustomButton
            onClick={() => {
              createNewRoom({
                categories: wordCategories,
                capacity,
                privacy,
                hostId: hostId,
                role,
              });
            }}
            loadingText="Creating Room"
          >
            Try again
          </CustomButton>
        </Flex>
      </Paper>
    );
  }

  return (
    <Paper width="320px">
      <Flex direction="column" gap={2}>
        <RoomPrivacy updatePrivacy={updatePrivacy} privacy={privacy} />
        <WordCategories
          wordCategories={wordCategories}
          loadingCategories={loadingCategories}
        />
        <RoomCapacity
          updateRoomCapacity={updateRoomCapacity}
          capacity={capacity}
        />
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
          onClick={() => {
            createNewRoom({
              categories: wordCategories,
              capacity,
              privacy,
              hostId: hostId,
              role,
            });
            closeModal();
          }}
        >
          Create Room
        </CustomButton>
      </Flex>
    </Paper>
  );
};
