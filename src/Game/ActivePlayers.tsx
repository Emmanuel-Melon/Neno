import { Paper } from "../components/ui/paper";
import { Flex, Avatar, Heading, Tag, Skeleton, VStack } from "@chakra-ui/react";
import { useGetLiveMembers } from "../hooks/rooms";
import { Rooms } from "../lib/graphql/globalTypes";

type ActivePlayersProps = {
  room: Rooms;
};

const InviteBox = ({ privacy }: Pick<Rooms, "privacy">) => {
  return (
    <Flex>
      {
        privacy === "private" ? (
          <Heading>Invite Friends!</Heading>
        ) : <Heading>Waiting!</Heading>
      }
    </Flex>
  )
}

export const ActivePlayers = ({ room }: ActivePlayersProps) => {
  const { members, loading } = useGetLiveMembers(room?.id);
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
            console.log(player.role);
            return (
              <>
                {
                  player.role !== "host" ? (
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
                          src={player?.member?.image}
                          border="border.primary"
                        />
                        <Flex direction="column" gap={2}>
                          <Heading color="brand.primary" as="h5" size="sm">
                            {player?.member?.username}
                          </Heading>
                          <Tag
                            borderRadius="4% 12% 10% 8% / 5% 5% 10% 8%"
                            color="brand.white"
                            border="border.secondary"
                            bg="brand.secondary"
                            width="fit-content"
                          >
                            0:40
                          </Tag>
                        </Flex>
                      </Flex>
                    </Flex>
                  ) : members.length <= 1 ? <InviteBox privacy={room.privacy} /> : null
                }</>
            );
          })
        )}
      </Flex>
    </Paper>
  );
};
