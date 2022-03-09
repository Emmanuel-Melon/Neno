import { Avatar } from "@chakra-ui/react";
import { CustomButton } from "./ui/button";
import { Flex, Heading, VStack } from "@chakra-ui/react";
import { useInsertGame, useGetCurrentGame } from "../hooks/game";
import { useRouter } from "next/router";
import { v4 as uuid4 } from "uuid";
import { useEffect } from "react";
import { PlayerStats } from "./PlayerStats";

type ActivePlayersProps = {
  players?: any;
  gameStarted?: boolean;
};

export const ActivePlayers = ({ players, gameStarted }: ActivePlayersProps) => {
  const { insertGame } = useInsertGame();

  const router = useRouter();

  console.log(router.query.id);

  const startGame = () => {
    insertGame({
      roomId: "5117bd5d-7c22-4ffa-bd34-bd6ec057c463",
      id: uuid4(),
    });
  };

  // show round info

  // how many rounds remaining

  // who won the last rounds

  // how many rounds did a player win

  useEffect(() => {}, [router.query.id]);
  return (
    <Flex
      direction="column"
      marginLeft="2"
      justifyContent="space-between"
      height="100%"
    >
      <Flex>
        <Flex justifyContent="space-between" width="220px">
          {gameStarted &&
            players &&
            players.map((player: any) => {
              return (
                <Flex
                  key={player.id}
                  p="4"
                  direction="column"
                  alignItems="center"
                  style={{
                    background: "rgba(25, 41, 101, 0.4)",
                    boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
                    borderRadius: "1rem",
                    height: "120px",
                  }}
                >
                  <Avatar src={player.avatar} />
                  <Heading as="h3" size="lg" color="#B7E778">
                    {player.name}
                  </Heading>
                </Flex>
              );
            })}
        </Flex>
      </Flex>

      <Flex>
        <PlayerStats />
      </Flex>
      {gameStarted ? (
        <Flex paddingTop="4">
          <CustomButton onClick={startGame}>Start Game</CustomButton>
        </Flex>
      ) : (
        <CustomButton onClick={startGame}>Leave Game</CustomButton>
      )}
    </Flex>
  );
};
