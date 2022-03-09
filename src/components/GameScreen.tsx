import React, { useState } from "react";
import { CustomButton } from "./ui/button";
import { WordCategory } from "./WordCategory";
import { ActivePlayers } from "./ActivePlayers";
import { useSession, signIn, signOut } from "next-auth/react";
import { Button, Flex } from "@chakra-ui/react";

type GameScreenProps = {
  players: any;
};

const categories = [
  {
    id: 1,
    name: "Nature: (Animal, Plant)",
  },
  {
    id: 2,
    name: "Location: (Country, Capital City",
  },
  {
    id: 3,
    name: "Food",
  },
];

// show a list of answers when a users lose a game

export default function GameScreen({ players }: GameScreenProps) {
  const [attempt, setAttempt] = useState({
    category1: "",
    category2: "",
    category3: "",
    category4: "",
    category5: "",
  });

  const { data: session } = useSession();

  const onCategoryInputChange = (e: any) => {
    // attempt[e.target.id] = e.target.value;
  };

  // delete the game from the DB

  // or set active to false

  // show winner isntead!!

  //
  const submitAnswers = (e: any) => {
    e.preventDefault();
  };

  return (
    <Flex>
      <Flex>
        <Flex direction="column">
          <WordCategory
            categories={categories}
            onCategoryInputChange={onCategoryInputChange}
            session={session}
          />
        </Flex>
      </Flex>
      <ActivePlayers players={players} />
    </Flex>
  );
}
