import { useEffect } from "react";
import { Paper } from "../components/ui/paper";
import { Flex, Avatar, Heading, Tag, Skeleton, VStack } from "@chakra-ui/react";
import { useGetRoomMembers, useGetLiveMembers } from "../hooks/rooms";

type ActivePlayersProps = {
  roomId: string;
};

export const ActivePlayers = ({ roomId }: ActivePlayersProps) => {
  const { members, loading } = useGetLiveMembers(roomId);

  return (
    <Paper width="100%" height="400px">
      <Flex
        width="100%"
        overflowY="scroll"
        height="400px"
        direction="column"
        gap={2}
      >
        {loading ? (
          <VStack gap={2} width="100%">
            <Skeleton
              height="60px"
              width="100%"
              border="border.primary"
              borderRadius="4% 12% 10% 8% / 5% 5% 10% 8%"
            >
              <Paper width="100%" />
            </Skeleton>
            <Skeleton
              height="60px"
              width="100%"
              border="border.primary"
              borderRadius="4% 12% 10% 8% / 5% 5% 10% 8%"
            >
              <Paper width="100%" />
            </Skeleton>
            <Skeleton
              height="60px"
              width="100%"
              border="border.primary"
              borderRadius="4% 12% 10% 8% / 5% 5% 10% 8%"
            >
              <Paper width="100%" />
            </Skeleton>
            <Skeleton
              height="60px"
              width="100%"
              border="border.primary"
              borderRadius="4% 12% 10% 8% / 5% 5% 10% 8%"
            >
              <Paper width="100%" />
            </Skeleton>
          </VStack>
        ) : (
          members &&
          members.map((player) => {
            return (
              <Flex
                key={player.id}
                borderRadius="4% 12% 10% 8% / 5% 5% 10% 8%"
                cursor="pointer"
                bg="#fff"
                _hover={{
                  bg: "brand.secondary",
                }}
              >
                <Flex alignItems="center" p="2" gap={2}>
                  <Avatar
                    src={
                      player?.avatar ||
                      "/images/avatars/icons8-walter-white.svg"
                    }
                    border="border.primary"
                  />
                  <Flex direction="column" gap={2}>
                    <Heading color="brand.primary" as="h5" size="sm">
                      {player?.member?.email}
                    </Heading>
                    <Tag
                      borderRadius="4% 12% 10% 8% / 5% 5% 10% 8%"
                      color="brand.secondary"
                      border="border.secondary"
                      bg="brand.grey"
                      width="fit-content"
                    >
                      0:40
                    </Tag>
                  </Flex>
                </Flex>
              </Flex>
            );
          })
        )}
      </Flex>
    </Paper>
  );
};

//       <GameResults/>

/**
 *             <Flex
              key={member.id}
              alignItems="center"
              justifyContent="space-between"
              p="2"
            >
              {false
                ? member.rounds.map((round) => {
                    return (
                      <Avatar
                        key={round.id}
                        width="35px"
                        height="35px"
                        src={
                          round.active
                            ? "/icons/icons8-filled-circle.svg"
                            : round.won
                            ? "/icons/icons8-filled-circle.svg"
                            : "/icons/icons8-minus.svg"
                        }
                        marginRight="2"
                      />
                    );
                  })
                : member.rounds.map((round) => {
                    return (
                      <Avatar
                        key={round.id}
                        width="35px"
                        height="35px"
                        src="/icons/icons8-circled-thin.svg"
                        marginRight="2"
                      />
                    );
                  })}
            </Flex>
 */
