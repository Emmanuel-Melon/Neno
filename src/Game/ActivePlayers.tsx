import { useEffect } from "react";
import { Paper } from "../components/ui/paper";
import {
  Flex,
  Avatar,
  Heading,
  Skeleton,
  VStack,
  Divider,
} from "@chakra-ui/react";
import { useGetRoomMembers, useGetLiveMembers } from "../hooks/rooms";
import { Rooms } from "../lib/graphql/globalTypes";

type ActivePlayersProps = {
  room: Rooms;
};

const InviteBox = ({ privacy }: Pick<Rooms, "privacy">) => {
  return (
    <Flex>
      {privacy === "private" ? (
        <Heading as="h3" size="sm">
          Room is empty
        </Heading>
      ) : (
        <Heading as="h3" size="sm">
          Waiting for others to join
        </Heading>
      )}
    </Flex>
  );
};

export const ActivePlayers = ({ room }: ActivePlayersProps) => {
  const { members, loading, subscribeToMore } = useGetRoomMembers(room?.id);

  useEffect(() => {
    const unsubscripe = subscribeToMore;
    return unsubscripe;
  }, [room, subscribeToMore]);

  return (
    <Paper width="100%" height="100%">
      <Flex
        width="100%"
        overflowY="scroll"
        direction="column"
        gap={2}
        height="100%"
      >
        <Heading as="h3" size="sm" color="brand.primary">
          Players
        </Heading>
        <Divider />
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
          <Flex
            width="100%"
            direction={["row", "row", "column", "column"]}
            gap={2}
            height="100%"
          >
            {members &&
              members.map((player) => {
                return (
                  <>
                    {player.role !== "host" ? (
                      <Flex
                        key={player.id}
                        borderRadius="4% 12% 10% 8% / 5% 5% 10% 8%"
                        cursor="pointer"
                        bg="brand.white"
                        width="100%"
                        boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px"
                      >
                        <Flex alignItems="center" p="2" gap={2}>
                          <Avatar
                            src={player?.member?.image}
                            border="border.grey"
                            bg="brand.secondary"
                            boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px"
                          />
                          <Flex direction="column" gap={2}>
                            <Heading color="brand.secondary" as="h3" size="sm">
                              {player?.member?.username}
                            </Heading>
                          </Flex>
                        </Flex>
                      </Flex>
                    ) : members.length <= 1 ? (
                      <InviteBox privacy={room.privacy} />
                    ) : null}
                  </>
                );
              })}
          </Flex>
        )}
      </Flex>
    </Paper>
  );
};
