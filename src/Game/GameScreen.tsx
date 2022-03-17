import React, { useEffect, useState } from "react";
import { Flex, Heading, Text, useDisclosure } from "@chakra-ui/react";
import { CustomButton } from "../components/ui/button";
import { Notebook } from "./Notebook";
import Image from "next/image";
import { GameResults } from "./GameResults";
import { Dialog } from "../components/ui/dialog";
import { Paper } from "../components/ui/paper";
import { CustomModal } from "../components/ui/modal";

type GameScreenProps = {
  exitCurrentGame: () => void;
  letter: any;
  submitAnswers: () => void;
  context: any;
};

const GameScreen = ({
  exitCurrentGame,
  submitAnswers,
  context,
}: GameScreenProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSubmitted, setSubmit] = useState(false);

  console.log(context.context);

  useEffect(() => {}, [isSubmitted]);

  return (
    <>
      <Flex justifyContent="center" marginBottom="8">
        <Image
          width="150"
          height="150"
          src={
            context?.context?.letter.icon
              ? context?.context?.letter.icon
              : "/icons/icons8-question-mark.svg"
          }
        />
      </Flex>
      <Flex width="100%" justifyContent="space-between" alignItems="flex-start">
        <Flex direction="column" gap={6}>
          <Flex justifyContent="center"></Flex>
          <Paper width="100%">
            <Heading as="h5" color="brand.primary" size="md">
              Game Info
            </Heading>
            <Text>Round 5</Text>
            <Text>4 letters remain</Text>
            <Text>Game Events!!!</Text>
          </Paper>

          <Paper>
            <Heading as="h5" color="brand.primary" size="md">
              Game Events
            </Heading>
            <Text>Shako has cleared his first round 1</Text>
            <Text>Sisco has left the room</Text>
          </Paper>
        </Flex>

        <Flex direction="column">
          <Notebook
            categories={context.context.room.wordCategories}
            submitAnswers={submitAnswers}
          />
        </Flex>

        <Flex direction="column" justifyContent="space-between" gap={6}>
          <Paper>
            <GameResults />
          </Paper>
          <CustomButton
            bg="brand.danger"
            color="#fff"
            icon={
              <Image
                alt="logo"
                src={"/icons/icons8-ok.svg"}
                width="30"
                height="30"
              />
            }
            onClick={() => onOpen()}
          >
            Leave Game
          </CustomButton>
        </Flex>
      </Flex>
      <Dialog
        heading="Leave Game"
        body="Are you sure you wanna exit this game?"
        cancelText="Cancel"
        actionText="Leave Game"
        action={exitCurrentGame}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
};

export default GameScreen;
